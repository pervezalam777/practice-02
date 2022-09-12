
function oddEven(num){
  if ( num <= 0){
    console.log('This is value less than one')
  } else if(num < 1000) {
    if (num % 2 == 0){ 
      console.log('even')
    } else {
      console.log('odd')
    }
  } else {
    console.log('number is bigger')
  }
}

oddEven(1)
oddEven(4)
oddEven(5)
oddEven(0)
oddEven(1000)


console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@')

function oddEvenTwo(num){
  let result = num < 1 ? 'this value not less than one' :  num % 2 == 0 ? 'Even' : 'Odd' ;
  console.log(result)
}

oddEvenTwo(2)
oddEvenTwo(4)
oddEvenTwo(5)
oddEvenTwo(0)