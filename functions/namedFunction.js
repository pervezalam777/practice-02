let defaultAge = 5;

// call the function
printAge(10); // call function with one argument
printAge(12);
printAge();

// declare a function
function printAge(age) { // declare function with one parameter
  greetings();
  if(age) {
    console.log('your age is', age);
  } else {
    console.log('your default age is', defaultAge);
  }
}

function greetings() {
  console.log('hello');
}

