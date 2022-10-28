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
  100000: 'lakh',
  10000000: 'crore'
}
const tenPlacesMap = [10000000, 100000, 1000, 100]

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
  const splittedWord = input.split(' ')
  const wordToNumberMap = splittedWord.map(wordToNumber);
  // console.log(' -splittedWord -');
  // console.log(splittedWord);
  // console.log('convert to number but in array')
  // console.log(wordToNumberMap)
  const outerArray = []
  tenPlacesMap.forEach((place) => {
    const index = wordToNumberMap.indexOf(place);
    if(index != -1){
      const innerArray = wordToNumberMap.splice(0, index + 1);
      outerArray.push(innerArray);
    }
  })
  if(wordToNumberMap.length > 0){
      outerArray.push(wordToNumberMap);
  }
  //console.log(newMap);
  let value = 0;
  for (let index = 0; index < outerArray.length; index++) {
    const innerArray = outerArray[index];
    let innerValue = innerArray[0];
    for(let innerIndex = 1; innerIndex < innerArray.length; innerIndex++){
      const nextNumber = innerArray[innerIndex];
      if(tenPlacesMap.indexOf(nextNumber) !== -1) {
          innerValue *= nextNumber;
      } else {
          innerValue += nextNumber;
      }
    }
    value += innerValue;
  }
  return value;
}

function wordToNumber(word){
  return wordToNumberMap[word]
}


let amountInWord = 'twenty one thousand nine hundred ten';
let value = convertToNumber(amountInWord)
console.log(amountInWord, ' : in number is ', value);

amountInWord = 'twenty thousand nine hundred twenty five'
value = convertToNumber(amountInWord)
console.log(amountInWord, ' : in number is ', value);

amountInWord = 'nineteen';
value = convertToNumber(amountInWord)
console.log(amountInWord, ' : in number is ', value);

amountInWord = 'two hundred nineteen'
value = convertToNumber(amountInWord)
console.log(amountInWord, ' : in number is ', value);

amountInWord = 'fifteen lakh two hundred nineteen';
value = convertToNumber(amountInWord)
console.log(amountInWord, ' : in number is ', value);

amountInWord = 'ninety nine crore ninety nine lakh ninety nine thousand nine hundred ninety nine';
value = convertToNumber(amountInWord)
console.log(amountInWord, ' : in number is ', value);