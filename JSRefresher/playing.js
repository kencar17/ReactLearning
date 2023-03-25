
// Primative
const numberOne = 1;
// Copy above
const numberTwp = numberOne;

console.log(numberTwp);

// Reference Types
const person = {
    name: "Ken"
}
// Pointer will be copied
const personTwo = person;

console.log(personTwo);

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

// Arrays Methods Refresh

const numbers = [1, 2, 3];
console.log(numbers);

const numbersDouble = numbers.map((num) => {
    return num*2
});
console.log(numbersDouble);

// Convert to object

function transformToObjects(numberArray) {
    // Todo: Add your logic
    // should return an array of objects
    const numberObjects = numberArray.map( (num) => {
        return {val: num}
    })

    return numberObjects;
}

console.log(transformToObjects(numbers));
