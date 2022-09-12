# Function
- A JavaScript function is a code wrapped in a block to perform specific task
- Function takes input (optional), process, and then produce some output

### Declare a function
When declare a function input for the function are called `parameter`. 
e.g. `name` is a parameter of the `greetings` function
```javascript
function greetings(name) {
  console.log(`Hello!!! ${name}`);
}
```

### Call a function
When call a function input provided to it are called `argument`. 
e.g. 'Pervez alam' is the `argument` for the `greetings` function
```javascript
greetings('Pervez alam')
// output: Hello!!! Pervez alam
```

## Named Function
```javascript
// Name of the function is greetings
function greetings(name) {
  console.log(`Hello!!! ${name}`);
}
```

## Anonymous Function
```javascript
// Anonymous function stored on greetings variable
const greetings = function(name) {
  console.log(`Hello!!! ${name}`);
}
```

## Fat arrow Function
```javascript
// Fat arrow function stored on greetings variable
const greetings = (name) =>  {
  console.log(`Hello!!! ${name}`);
}
```

## function without parameter
```javascript
// greetings function without parameter
function greetings() {
  console.log(`Hello!!! there`);
}
```

## function with parameter
```javascript
// greetings function with parameter one
function greetings(name) {
  console.log(`Hello!!! ${name}`);
}
```

## Best Practice with functions
### Named function
- Function name should be descriptive
- Function name should start with `verb` (e.g. doLoad, greetings, initialize, etc.)
- Function should do what its names says (e.g. doLoad should load something)
- Function should not have more than two parameter
  - If more parameters required use object as parameter 
  e.g.
```javascript
 function initialize(config) {
  console.log(config.height);
  console.log(config.width);
  console.log(config.color)
 }

 const config = {
  height: 300;
  width: 200,
  color: 'red'
 } 
 initialize(config)
 ```

## References
- [Function - w3schools](https://www.w3schools.com/js/js_functions.asp)
- [Function - tutorials point](https://www.tutorialspoint.com/javascript/javascript_functions.htm)
- [Function - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)