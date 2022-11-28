/**
 * A function inside a function called closure function
 * - outer function not a closure function
 * - inner function function is a closure function
 */

const moduleLevelVariable = 'I am module level variable';

function outerFunction(outerParameter) {
  const outerVariable = 'I am outer variable';
  function innerFunction(innerParameter) {
    const innerVariable = 'I am inner variable';
    console.log('called from innerFunction: ', moduleLevelVariable);
    console.log('called from innerFunction:', outerParameter);
    console.log('called from innerFunction:', outerVariable);
    console.log('called from innerFunction:', innerParameter);
    console.log('called from innerFunction:', innerVariable);
  }
  innerFunction('I am inner parameter');
}

outerFunction('I am outer parameter');