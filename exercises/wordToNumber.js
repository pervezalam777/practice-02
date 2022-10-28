const numberToWordMap = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11:'eleven',
  12:'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
  100: 'hundred',
  1000: 'thousand',
  100000: 'lakh'
}

function swipeKeyValue(key, value, resultObject) {
  resultObject[value] = parseInt(key)
}

const wordToNumberMap = {};
// NOTE: for in loop used for object
for(let key in numberToWordMap) {
  // console.log('what is in key ', key)
  // console.log('get value with key ', numberToWordMap[key])
  //console.log('--------------')
  const value = numberToWordMap[key]
  swipeKeyValue(key, value, wordToNumberMap);
}
// console.log('converted')
// console.log(wordToNumberMap)

function wordToNumber(word){
  return wordToNumberMap[word]
}

function convertToNumber(input){
  // NOTE: string split method return array based on separator provided
  const splittedValues = input.split(' ')
  const numberMap = splittedValues.map(wordToNumber);

  console.log(' -splittedValues -');
  console.log(splittedValues);
  console.log('convert to number but in array')
  console.log(numberMap)
  const twentyToNinetyMap = [20, 30, 40, 50, 60, 70, 80, 90];
  const tenPlacesMap = [100, 1000, 100000]
  let value = 0;
  let previous = null;
  for (let index = 0; index < numberMap.length; index++) {
    // const number = numberMap[index];
    // if(twentyToNinetyMap.indexOf(number) !== -1){
    //   previous = number;
    //   continue;
    // }
    // if(twentyToNinetyMap.indexOf(previous) !== -1) {
    //   value += previous + number
    // }
    // if(tenPlacesMap.indexOf(number)) {
    //   value *= number;
    //   continue;
    // }
    // value += number
  }

  return value;
}

const numberValue = convertToNumber('one hundred ten') // 110
console.log('number is ', numberValue);
