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
console.log('-----------------------findIndex-----------------------------------')
const arrayVotersName = ['Pawan', 'Pervez', 'Pradeep', 'Nakul', 'Pavan'];
function match(value) {
  console.log('value----', value)
  if(value === 'Pervez'){
    return true;
  }
  return false;
}

const index = arrayVotersName.findIndex(match);
console.log('Pervez is at index with findIndex', index);
const indexWithIndexOf = arrayVotersName.indexOf('Pervez');
console.log('Pervez is at index with indexOf', indexWithIndexOf);

const votersList = [
  { name: 'Pervez', voterId: '2eddi33e3', email:'pervez@example.com'},
  { name: 'Prdeep', voterId: 'ddd98898d', email:'prdeep@example.com'},
  { name: 'Pawan', voterId: 'eeee44545', email:'pawan@example.com'},
  { name: 'Pavan', voterId: 'gggg34554', email:'pavan@example.com'},
  { name: 'Arif', voterId: '345htryrt', email:'arif@example.com'},
]

console.log('voter list length', votersList.length)
let indexOfVoter = votersList.indexOf('pawan@example.com');
console.log('index of voter', indexOfVoter);

function matchEmail(voter) {
  if(voter.email === 'arif@example.com'){
    return true;
  }
  return false;
}

function matchName(voter) {
  if(voter.name === 'Arif'){
    return true;
  }
  return false;
}

indexOfVoter = votersList.findIndex(matchEmail);
console.log('voter index with findIndex with email', indexOfVoter);

indexOfVoter = votersList.findIndex(matchName);
console.log('voter index with findIndex with name', indexOfVoter);

// TODO: use findIndex with arrayOfArray
// TODO: students list with name, and hobbies, then find index based on hobby

/**
votersList.findIndex(function(voter){
  // logic
})

or

votersList.findIndex((voter) => {
  // logic
})

 */
console.log('---------------------------------------')
// indexOf 
// - All primitive types : string, number, boolean
const arrString = ['ram', 'rahim', 'john', 'baljeet'];
const arrNumber = [24, 66, 33, 245, 87];
const arrBoolean = [true, false]

console.log('search baljeet in string array valid index', arrString.indexOf('baljeet'));
console.log('search arif in string array not found', arrString.indexOf('arif'));

console.log('search 33 in number array valid index', arrNumber.indexOf(33));
console.log('search 700 in number array not found', arrNumber.indexOf(700));

console.log('search false in boolean array valid index', arrBoolean.indexOf(false));
console.log('search 33 in boolean array not found', arrBoolean.indexOf(33));

console.log('-----------------splice---------------------------')
const namesArray = ['ram', 'rahim', 'john', 'baljeet'];
namesArray.splice(2, 1, 'johnty');
console.log('updated array - ', namesArray);

namesArray.splice(1, 0, 'bruseli');
console.log('updated array -', namesArray);
console.log('bruseli index is', namesArray.indexOf('bruseli'));

namesArray.splice(3, 2, 'Sita', 'Geeta');
console.log('updated array -', namesArray);

namesArray.splice(3, 2, 'Sita', 'Geeta');

const middleIndex = parseInt(namesArray.length / 2);
console.log('middle index is ', middleIndex);

console.log('-------------------filter--------------------------')
// filter
const genderList = ['male', 'female', 'male', 'male', 'male', 'female'];
function isFemale(value) {
  if(value == 'female') {
    return true;
  }
  return false;
}

const femaleList = genderList.filter(isFemale);
console.log('female list', femaleList);

//TODO: male list
const adharList = [
  {name:'seeta', gender:'female', adharId: '3937239432'},
  {name:'Ram', gender:'male', adharId: '545646346345'},
  {name:'Ramesh', gender:'male', adharId: '56767345464'},
  {name:'geeta', gender:'female', adharId: '646346456346'},
  {name:'Vijay', gender:'male', adharId: '12445654363'},
];

function hasFemaleGender(adharUser) {
  if(adharUser.gender == 'female'){
    return true;
  }
  return false;
}
const adharFemaleUsers = adharList.filter(hasFemaleGender);
console.log('adhar Female Users', adharFemaleUsers);

// map

// forEach Vs for loop Vs While