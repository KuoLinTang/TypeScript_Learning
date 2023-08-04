// pure js
let a;
a = 10;
a = 'Hello';  // totally fine


// ts: with number type
let b: number;
b = 10;
b = 20;
// b = 'Hello';

// ts: with string type
let c: string;
c = 'Hello';
// c = 10;

// ts: with boolean type and assignment
let d = false;
d = true;
// d = 100;  // error because TS will detect variable type when declaring and assigning happen at the SAME time

// js: random types in function arguments
let add_JS = (a, b) => (a + b);  // could have wrong results if a or b is not a number

// ts: define types in function arguments
let add_TS = (a: number, b: number): number => (a + b);  // cannot enter non-numeric arguments

console.log(add_JS('1', '3'));  // => 13
console.log(add_TS(1, 3));      // 4
console.log(add_TS('1', '3'));  // => 13
console.log(add_TS(1, 3, 5));  // => 4

// result will be automatically defined as number type (assigning and declaring at the same time)
let result = add_TS(1, 3);

let add_TS_2 = (a: number, b: number): number => (a + b + 'Hello');  // error because return value should be a number