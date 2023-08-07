// object type
let a: object;
a = {};
a = function () { };  // not useful
// defining attribute types in the object can be more usefule
let b: { name: string };
b = {};     // error since no name in the {}
// optional attributes
let c: { name: string, age?: number };
c = { name: 'TypeScript' };
// any attribute with any types
let d: { name: string, [propName: string]: any };
d = { name: 'TypeScript' };
d = { name: 'TypeScript', x: 1, y: true };
d = { x: 1, y: true };      // error. name must be specified
// any attribute with fixed types
let e: { name: string, [attrName: string]: string };
e = { name: 'TypeScript', x: 'Nodejs', y: 1 };        // y throws an error since it should be a string
// arrow function
let f: (a: number, b: number) => number;
f = function (n1, n2) {             // the new assigned function matches the definition
    return n1 + n2;
};

// arrays
let g: string[];
g = ['a', 'c', 'd', 'b'];
g = [1];                // error, cannot add numbers
let h: Array<number>;
h = [1, 2, 3];
h = [1, 2, 3, 'a'];     // error, cannot add strings

// tuples: fixed length arrays
let i: [string, string, number];
i = ['a', 'b', 1];
i = ['a', 'b'];          // error, needs 3 elements
i = ['a', 'b', 'c'];     // error, the third element must be string

// Enum
// We can use integer to replace string in categorical variables --> reduce memory consumption
let j: { name: string, gender: 0 | 1 | 2 | 3 }
j = {
    name: 'Joseph',
    gender: 0       // 0 is defined as male
}
console.log(j.gender === 0);        // check if the gender is male (defined as 0)
// However, this definition can vary across different groups, so we need to use ENUM
enum Gender {
    male, female, trans, other
}
let k: { name: string, gender: Gender }
k = {
    name: 'Joseph',
    gender: Gender.male;
}
console.log(k.gender === Gender.male);

// & / | operator - used to define necessary attributes in an object variable
// AND &
let l: { name: string } & { age: number };
l = { name: "Joseph", age: 20 }
m = { name: 'Joseph' };     // error: must have both attributes
// OR |
let m: { name: string } | { age: number };
m = { name: 'Joseph', age: 20 };
m = { name: 'Joseph' };

// alias of types
// If there is a very lengthy, self-defined variable type
// it can be waste of time to repeatedly type all of them
// Then, we can give this type an alias
let n: 1 | 2 | 3 | 4 | 5 | 6;
let o: 1 | 2 | 3 | 4 | 5 | 6;
type myType = 1 | 2 | 3 | 4 | 5 | 6;
let p: myType;
p = 1;
p = 7;      // error, 7 not in myType