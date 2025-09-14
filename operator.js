/*
Mathematical operator
*/
let x = 5 ;

let y = 3 ;

console.log(x + y);

console.log(x-y);

console.log(x/y);

console.log(x*y);

console.log(x%y);

console.log(x**y);

/*
Assignment operator
*/

let a = 10 ;

console.log(a);

a = a+5 ;
console.log(a);

/*
Comparison Operator
*/
let p = 10 ;
let q = 20;

console.log(p==q);

let r = 20 ;
let s = 20;

console.log(r==s);

let h = 25;

let j ='25';

console.log(h===j);

/*
Logical operator
*/

let e =true;
let f = false;
console.log(e && f);


//Ternary operator

let age = 10;
let israkesh = (age >=18) ? "Yes,rakesh !": "No, stil a kid" ;

console.log(israkesh);


//Bitwise Operator

let m = 5;
let n = 3;
console.log(m & n);
console.log(m | n);
console.log(m ^ n);

//Left shift and right shift
console.log(5 << 1);

console.log(5 >> 1);

//incerment and decrement
//i++  ,  ++i    i--, --i

let o = 50 ;
o = ++o;
console.log(o);
