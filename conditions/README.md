# Statements and Conditions
Javascript provide server types of statements to control the logic of a program

## if...else
`if(condition) {//true} else {//false}`
```javascript
let age = 10;
if(age <= 13) {
  console.log('age is greater than or equal to 13')
} else {
  console.log('when it does not go inside the if block')
}
```

## switch

```javascript
let age = 2;
switch(age){
  case 1:
    console.log('one');
    break;
  case 2: 
    console.log('two');
    break;
  default:
    console.log('not match found')
}
```

## ternary
`condition ? true : false`
