# Operators

## Assignment operator (=)
```javascript
const a = 30;
console.log('a assigned with value', a)
// a assigned with value 30
```

## Arithmetic Operators (+, -, *, /, %, **)
```javascript
const a = 50;
const b = 20;
console.log(a + b); // 70
console.log(a - b); // 30
console.log(a * b); // 1000
console.log(a / b); // 2.5
console.log(a % b); // 10
console.log(a ** b) // 9.5367431640625e+33
console.log(2 ** 3) // 8

// Language implementation choice
console.log('10' + '10') // 1010 (since + is use to join string)
console.log('10' * '10') // 100
console.log('10' / '10') // 1
console.log('15' %  '10') // 5
console.log('2' **  '3') // 8
console.log('10' * 'a') // NaN
```

## Addition assignment (+=)
```javascript
let a = 10;
a += 20;
console.log(a); // 30
```

## Subtraction assignment (-=)
```javascript
let a = 50;
a -= 10;
console.log(a); // 40
```

## Multiplication assignment (*=)
```javascript
let a = 5;
a *= 10;
console.log(a); // 50
```
## Division assignment (/=)
```javascript
let a = 50;
a /= 10;
console.log(a); // 5
```

## Remainder assignment (%=)
```javascript
let a = 56;
a %= 10;
console.log(a); // 6
```

## References
- [Operators mdn](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)