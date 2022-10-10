/**
 input : 10 // 10
 output : ten

 input : 102 // 10, 100
 output : one hundred two

 input : 1336 // 10, 100, 1000
 output : one thousand three hundred thirty six
 */

const map = {
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

//console.log(map[11])
// 75,0,23
//OnceMap[2] // three
function convertToWord(input){
  let numberToWord = '';
  let currentValue = input;
  if(currentValue > 99 && currentValue < 1000) {
    const hundredNumber = 100;
    const hundredPlaceValue = parseInt(currentValue / hundredNumber)
    numberToWord += map[hundredPlaceValue] + ' ' + map[hundredNumber]
    currentValue -= hundredPlaceValue * hundredNumber;
  }
  const tenPlaceWord = map[currentValue];
  if(tenPlaceWord) {
    numberToWord += ' ' + tenPlaceWord
  } else {
    const tensNumber = 10;
    const tensPlaceValue = parseInt(currentValue / tensNumber) * tensNumber;
    numberToWord += ' '+ map[tensPlaceValue]
    currentValue -= tensPlaceValue;
    numberToWord += ' '+ map[currentValue]
  }

  return numberToWord 
}

let numberInWord = convertToWord(999);
console.log(numberInWord)

// numberInWord = convertToWord(103);
// console.log(numberInWord)

// numberInWord = convertToWord(1657);
// console.log(numberInWord)