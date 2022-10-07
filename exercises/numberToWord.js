/**
 input : 10 // 10
 output : ten

 input : 102 // 10, 100
 output : one hundred two

 input : 1336 // 10, 100, 1000
 output : one thousand three hundred thirty six
 */

const OnceMap = [
  'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
]
const twoPlaces = [
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen',
  'nineteen'
]
const tensMap = [
  'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
]
//OnceMap[2] // three
function covertToWord(input){
  let numberToWord = '';
  let currentValue = input;
  //console.log('currentValue --- ', currentValue)
  if(currentValue > 99 && currentValue < 1000) {
    const hundredPlaceValue = parseInt(currentValue / 100)
    //console.log('hundredPlaceValue --- ', hundredPlaceValue);
    const index = hundredPlaceValue - 1;
    //console.log(index,' value from map ', OnceMap[index])
    numberToWord += OnceMap[index] + ' hundred';
    currentValue -= hundredPlaceValue * 100;
    //console.log('what is the value', hundredPlaceValue * 100)
    //console.log('after subtract from current value', currentValue)
  }

  if(currentValue > 9 && currentValue < 100) {
    const tenPlaceValue = parseInt(currentValue / 10);
    const index = tenPlaceValue - 1;
    numberToWord += ' ' + tensMap[index]
    currentValue -= tenPlaceValue * 10;
  }

  if(currentValue < 10){
    const index = currentValue - 1;
    numberToWord += ' ' + OnceMap[index]
  }
  
  return numberToWord.trim();
}

let numberInWord = covertToWord(928);
console.log(numberInWord)

// numberInWord = covertToWord(103);
// console.log(numberInWord)

// numberInWord = covertToWord(1657);
// console.log(numberInWord)