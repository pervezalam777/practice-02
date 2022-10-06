// map
const mapArray = [2, 44, 50, 60];
function predicateOne(value) {
  return value + value;
}

function predicateTwo(value) {
  return '<li>'+value+'</li>'
}

function pollyFillMap(arr, callbackFunction){
  const newArray = [];
  const len = arr.length;
  let index = 0;
  while(index < len) {
    const value = arr[index];
    const changedValue = callbackFunction(value);
    newArray.push(changedValue);
    index += 1;
  }

  return newArray;
}

const resultMapArrayOne = pollyFillMap(mapArray, predicateOne);
console.log('result map array one ', resultMapArrayOne);
console.log('original array', mapArray)

const resultMapArrayTwo = pollyFillMap(mapArray, predicateTwo);
console.log('result map array two ', resultMapArrayTwo);
console.log('original array', mapArray)