// Define variable

// Variable - To Store a Data.
// var, Let and Const

var name = 'jone';
let age = 25;
const pi = 3.14;

// DataType
// undefined :- A variable that has not been assigned a value is of type 'undefined'.
// null :- no value
// string :- "a", 'a', `a`
// number :- 12, -1, 0.3
// boolean :- true, false
// object :- A collection of properties.
// symbol :- Represent a unique identifier.

let num = 5;
num++; // num is 6

let numr = 5
numr--; // numr is 4

// Operator
// == :- Equal to
// != :- Not Equal to
// === :- Strictly Equal to
// !== :- Strictly not equal to 
// > :- Greater Than
// < :- Less Than
// >= :- Greater than equal to 
// <= :- Less than equal to 

let x = 10;
x /= 5; // x is now 2

let y = 5;
y += 10;  // y is now 15

let z = 5;
z **= 2; // x is now 25

// Control Flow
let a = 10;
if (a>5){
    console.log('a is greater than 5')
}

let b = 10;
if (b>5){
    console.log('a is greater than 5')
}else if(b == 5){
    console.log('a is equal to 5')
}else{
    console.log('a is less than 5')
}


let nums = 10;
let result = nums > 5 ? 'nums is greater than 5':'nums is not greater than 5';
console.log(result)


// Loop 

// While 
let i = 0;
while(i < 5){
    console.log(i);
    i++;
}

// For
for(ii = 0; ii < 10; ii++){
    if(ii === 5){
        break;
    }
    console.log(ii)
}
        
// Functions
function greet(){
    console.log("Hello, World!")
}
greet();

function greet(){
    for(val=0; val<=5; val++){
        console.log("Hello, World!")
    }
}
greet();