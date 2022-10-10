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

function convertToNumber(input){
  // NOTE: string split method return array based on separator provided
  const splittedValues = input.split(' ')
  console.log(' -splittedValues -');
  console.log(splittedValues);
}

const numberValue = convertToNumber('one hundred ten') // 110