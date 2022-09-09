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
