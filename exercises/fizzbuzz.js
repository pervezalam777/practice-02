function fizzBuzzOne(num){
  console.log('input', num)
  if(num % 3 === 0 && num % 5 === 0){
    console.log('FizzBuzz')
  } else if(num % 3 === 0){
    console.log('Fizz')
  } else if(num % 5 === 0){
    console.log('Buzz')
  } else {
    console.log('nothing')
  }
}

console.log('-----------------')
fizzBuzzOne(15);
fizzBuzzOne(21);
fizzBuzzOne(25);
fizzBuzzOne(11);
console.log('------------------')

function fizzBuzzTwo(num) {
  console.log('input', num);
  let result = num % 3 === 0 ? 'Fizz': '';
  result += num % 5 === 0 ? 'Buzz': '';
  console.log('result is -', result);
}

console.log('#-----------------')
fizzBuzzTwo(15);
fizzBuzzTwo(21);
fizzBuzzTwo(25);
fizzBuzzTwo(11);
console.log('#------------------')

function fizzBuzzThree(num) {
  console.log('input', num);
  let result = '';
  if(num % 3 === 0) {
    result = 'Fizz'
  }
  if(num % 5 === 0) {
    result += 'Buzz';
  }
  console.log('result is --', result);
}

console.log('$-----------------')
fizzBuzzThree(15);
fizzBuzzThree(21);
fizzBuzzThree(25);
fizzBuzzThree(11);
console.log('$------------------')

const checkDivisibility = (d, n, v) => (n % d === 0 ? v : '');

const fizzBuzzFour = (num) => {
  console.log('input', num);
  let result = checkDivisibility(3, num, 'Fizz');
  result += checkDivisibility(5, num, 'Buzz');
  console.log('result is --', result);
}

console.log('&-----------------')
fizzBuzzFour(15);
fizzBuzzFour(21);
fizzBuzzFour(25);
fizzBuzzFour(11);
console.log('&------------------')
