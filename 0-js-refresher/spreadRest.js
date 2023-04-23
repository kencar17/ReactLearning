// Spread Example
const oldArray = [1, 2, 3]

const newArray = [...oldArray, 4, 5]

console.log(oldArray);
console.log(newArray);

// Rest Example

function sortArgs(...args) {
    return args.sort()
}

console.log(sortArgs(2,9,8,2,3,6,1,3));


const filters = (...args) => {
    return args.filter(el => el === 1);
}

console.log(filters(2,9,8,2,3,6,1,3));