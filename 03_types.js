var a;
a = 10;
a = 11; // error
var b;
b = 10;
b = 'Hello';
// any (default type when no assignment)
var c;
var d;
d = true;
// unknown
var e;
e = true;
// any vs unknown
var f;
f = d; // any can be assigned into any other variable
f = e; // unknown variables cannot be assigned to other variables DIRECTLY
e = 'Hello';
f = e; // still error: unknown cannot be assigned to other variables DIRECTLY
// check type
if (typeof e === 'string') {
    // only when being encapsulated in the type check, 
    // the unknown variable can be assigned to other variables 
    f = e;
}
f = e;
f = e;
// function return types
function fn(num) {
    if (num > 0) {
        return true;
    }
    else {
        return 1;
    }
}
function fn2() {
    return true; // if void is defined, we cannot return values in other types
} // no return value
// you can use undefined to represent void or just "return"
function fn3() {
    return undefined;
}
// cannot use null to represent void
function fn4() {
    return null;
}
// never
function fn5() {
    throw new Error('Error!');
}
