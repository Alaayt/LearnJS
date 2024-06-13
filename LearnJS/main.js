
// ----------------------------------------------------------------
 // Data Types And Typeof Operator
// console.log("Alaa YT");
// console.log(typeof "Alaa YT"); //string
// console.log(typeof 30); //number
// console.log(typeof 5000.10); //number
// console.log(typeof [10,13,16]); //object => array
// console.log(typeof ["Alaa",'yt',"ali"]); //object 
// console.log(typeof {name:"Alaa",age:20}); //object
// console.log(typeof true); //boolean
// console.log(typeof null); //object
// console.log(typeof undefined); //undefined
// console.log(typeof NaN); //number
//----------------------------------------------------------------
/*
Variables 
-What is a variable?
-Why We use Variable?
-How to declare a variable?
-Syntax ( )
-Variable Without Var
-Multiple Variables in the Same Line
-Id And Global Variable
-Loosely Typing vs Strongly Typed
*/

/*
Identifiers
    -Name Conventions And Rules
    -Reserved Keywords
*/

/*
Compare
var 
    -Redeclare (Yes)
    -Access Before Declare (Undefined)
    -Variable Scope Drama [Added To Window]
    -Block or Function Scope

Let
    -Redeclare (No => error)
    -Access Before Declare (Error)
    -Variable Scope Drama [don't added to window]
    -Block or Function Scope

Const
    -Redeclare (No => error)
    -Access Before Declare (Error)
    -Variable Scope Drama [don't added to window]
    -Block or Function Scope
*/

// let a = "Alaa";
// let b = 'YT';

// document.write(a +
// "\n"+b);
// console.log(`"${a}"
// ${b}`);

/*
Template Literals
*/

// JavaScript


// Variable Challenge
// const Title = "Alaa"
// const Description = "Alaa junior js"
// const Data = '25/10'

// let card=`<div <h3> Hello ${Title} </h3>
//     <p> ${Description} </p>
//     <span> ${Data} </span> </div>`;

// document.write(card.repeat(4));

// let a = 10;
// let b = "20";
// let c = 80;

// console.log(++a + +b++ + +c++ - +a++);
// console.log(++a + -b + +c++ - -a++ + +a);
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

// let d ='-100';
// let e = "20";
// let f = 30;
// let g = true;

// console.log(-d * +e);
// console.log(++e * ++g + -d + ++f);

//  

let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

console.log(Math.min(a, b, c, d,), Math.trunc(d));

console.log(a ** parseInt(d));


console.log(Math.trunc(d));
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(parseInt(d));

console.log((parseInt(b) / Math.ceil(d)).toFixed(2));
console.log(Math.round(parseInt(b) / Math.ceil(d)));

