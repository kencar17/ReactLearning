
// Let refresher - mutable
let myName = "Ken let";
console.log(myName);

myName = "Menu";
console.log(myName);

// Const refresher - unmutable
const myNameTwo = "Ken Const";
console.log(myNameTwo);

// Will error below
// myNameTwo = "Menu";
// console.log(myNameTwo);

// Arrow Functions

function printMyName(name){
    console.log(name)
}

printMyName('Ken Funciton');

// Arrow versiona of above function
const printMyNameTwo = (name) => {
    console.log(name);
}

printMyNameTwo('Ken Arrow');

// Multi args
const multiply = (numberOne, NumberTwo) => {
    return numberOne * NumberTwo
}

console.log(multiply(2, 2));


// Multi args - one line
const multiplyTwo = (numberOne, NumberTwo) => numberOne * NumberTwo

console.log(multiplyTwo(4, 4));