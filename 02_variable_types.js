// pure js
var a;
a = 10;
a = 'Hello'; // totally fine
// ts: with number type
var b;
b = 10;
b = 20;
// b = 'Hello';
// ts: with string type
var c;
c = 'Hello';
// c = 10;
// ts: with boolean type and assignment
var d = false;
d = true;
// d = 100;  // error because TS will detect variable type when declaring and assigning happen at the SAME time
// js: random types in function arguments
var add_JS = function (a, b) { return (a + b); }; // could have wrong results if a or b is not a number
// ts: define types in function arguments
var add_TS = function (a, b) { return (a + b); }; // cannot enter non-numeric arguments
console.log(add_JS('1', '3')); // => 13
console.log(add_TS(1, 3)); // 4
console.log(add_TS('1', '3')); // => 13
console.log(add_TS(1, 3, 5)); // => 4
// result will be automatically defined as number type (assigning and declaring at the same time)
var result = add_TS(1, 3);
var add_TS_2 = function (a, b) { return (a + b + 'Hello'); }; // error because return value should be a number
