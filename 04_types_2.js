// object type
var a;
a = {};
a = function () { }; // not useful
// defining attribute types in the object can be more usefule
var b;
b = {}; // error since no name in the {}
// optional attributes
var c;
c = { name: 'TypeScript' };
// any attribute with any types
var d;
d = { name: 'TypeScript' };
d = { name: 'TypeScript', x: 1, y: true };
d = { x: 1, y: true }; // error. name must be specified
// any attribute with fixed types
var e;
e = { name: 'TypeScript', x: 'Nodejs', y: 1 }; // y throws an error since it should be a string
// arrow function
var f;
f = function (n1, n2) {
    return n1 + n2;
};
// arrays
var g;
g = ['a', 'c', 'd', 'b'];
g = [1]; // error, cannot add numbers
var h;
h = [1, 2, 3];
h = [1, 2, 3, 'a']; // error, cannot add strings
// tuples: fixed length arrays
var i;
i = ['a', 'b', 1];
i = ['a', 'b']; // error, needs 3 elements
i = ['a', 'b', 'c']; // error, the third element must be string
// Enum
// We can use integer to replace string in categorical variables --> reduce memory consumption
var j;
j = {
    name: 'Joseph',
    gender: 0 // 0 is defined as male
};
console.log(j.gender === 0); // check if the gender is male (defined as 0)
// However, this definition can vary across different groups, so we need to use ENUM
var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
    Gender[Gender["trans"] = 2] = "trans";
    Gender[Gender["other"] = 3] = "other";
})(Gender || (Gender = {}));
var k;
k = {
    name: 'Joseph',
    gender: Gender.male
};
console.log(k.gender === Gender.male);
