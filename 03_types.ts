let a: 10;
a = 10;
a = 11;     // error

let b: string | number;
b = 10;
b = 'Hello';

// any (default type when no assignment)
let c: any;
let d;
d = true;

// unknown
let e: unknown;
e = true;

// any vs unknown
let f: string;
f = d;          // any can be assigned into any other variable
f = e;          // unknown variables cannot be assigned to other variables DIRECTLY
e = 'Hello';
f = e;          // still error: unknown cannot be assigned to other variables DIRECTLY

// check type
if (typeof e === 'string') {
    // only when being encapsulated in the type check, 
    // the unknown variable can be assigned to other variables 
    f = e;
}
f = e as string;
f = <string>e;

// function return types
function fn(num: number): boolean | number {
    if (num > 0) {
        return true;
    } else {
        return 1;
    }
}

function fn2(): void {
    return true;     // if void is defined, we cannot return values in other types
}  // no return value
// you can use undefined to represent void or just "return"
function fn3(): void {
    return undefined;
}
// cannot use null to represent void
function fn4(): void {
    return null;
}
// never
function fn5(): never {
    throw new Error('Error!');
}