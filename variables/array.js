const numberArray = [1, 3, 6, 7]; // Number array
console.log('number array', numberArray);

const stringArray = ['Pawan', 'Pervez', 'Pradeep', 'Nakul', 'Pawan']
console.log('string based array', stringArray)

const booleanArray = [false, false, true, true, false, true];
console.log('boolean based array', booleanArray);

const arrayOfArray = [[2,4,6], [3,6,9]];
console.log('Array of array', arrayOfArray);

const arrayOfObject = [{name:'pawan'}, {name:'nakul'}];
console.log('array of object', arrayOfObject);

const mixedArray = ['Pawan', 30, true, ['music', 'cricket']];
console.log('mixed array', mixedArray);

//------------------Array elements traverse--------------------------------
//
console.log('$$--------------------------------------------')
console.log('numberArray value at position 3 but index 2 and value is-', numberArray[2]);
console.log('stringArray value at position 3 but index 2 and value is-', stringArray[2]);
console.log('booleanArray value at position 3 but index 2 and value is-', booleanArray[2]);
console.log('arrayOfArray value at position 2 but index 1 and value is-', arrayOfArray[1]);

// ---------------Array add and remove elements
numberArray.push(9);
console.log('number Array', numberArray);

const poppedName = stringArray.pop();
console.log('string Array', stringArray);
console.log('popped name is', poppedName);

const poppedBoolean = booleanArray.shift();
console.log('boolean Array', booleanArray);
console.log('popped name is', poppedBoolean);

arrayOfArray.unshift([5,10,15]);
console.log('array Of Array', arrayOfArray);


console.log('-------------------splice--------------------')
// splice - *********modify actual array
// splice(startIndex, deleteCount, ...array)
const spliceArray = [1, 2, 5, 7, 8, 10, 12, 24];

// -- add 9 between 8, 10
console.log('------------- add 9 between 8, 10 --------------------');
const indexOf10 = spliceArray.indexOf(10);
console.log('index of 10 is', indexOf10);
spliceArray.splice(indexOf10, 0, 9);
console.log(spliceArray)

// remove last two elements
console.log('------------- remove last two element --------------------');
console.log('length is', spliceArray.length);
const startIndex = spliceArray.length - 2;
console.log('start index ', startIndex)
const removedElements = spliceArray.splice(startIndex)
console.log('removed elements ', removedElements);
console.log('actual array ', spliceArray)

//TODO: remove two element from the middle

console.log('---------------------slice-------------------------------')
// slice - ****do not modify actual array
// extract middle array 6, 4
const sliceArray = [7, 3, 6, 4, 2, 10];
const slicedArray = sliceArray.slice(2, 4);
console.log('actual array', sliceArray);
console.log('sliced array', slicedArray);

//TODO: extract first 3 element


// indexOf  vs findIndex
// map
// forEach Vs for loop Vs While