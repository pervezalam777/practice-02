// spread is an operator (...)
const array = [1,3,7,2];
console.log('array ', array);
console.log('array spread ', ...array);
const firstValue = array[0]
console.log('how console works', firstValue, array[1], array[2], array[3])

const arrayTwo = array;
console.log('arrayTwo is not a clone', arrayTwo === array);

const arrayThree = [...array];
console.log('arrayThree is a clone of array', arrayThree !== array);

const obj = { a: 30, b: 40 };
const objTwo = obj;
console.log('objTwo is not a clone', objTwo === obj);

const objThree = {...obj}; // shallow clone
console.log('objThree is a clone of obj', objThree !== obj, objThree);

//TODO: Deep clone with spread