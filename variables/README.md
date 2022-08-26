# Variables

- [ ] What is variable
- [ ] Declaring a variable
- [ ] Types of variable
- [ ] Basic functionality or properties of variables

## What is variable
- A variable is a named reference to a value. That way an unpredictable value can be accessed through a predetermined name. (`From MDN site`)
- a situation, number or quantity that can vary or be varied. (`Definition by Google translate`)
- Variables are the names you give to computer memory locations which are used to store values in a computer program. (`tutorials point`)

## Declaring a variable
`Variable` can be `declare` using `three reserve keyword of javascript`
1) `var`: non-block scoped, new value can be assigned later. (*older way of declaring variable*) 
2) `let`: block scoped, new value can be assigned later
3) `const`: block scoped, new value can not be assigned later


## Types of variable
There are following types of variables
- Number
- String
- Boolean
- Array
- Object
- Symbol
- BigInt

## Number
Any numeric value can be declare with number

### Number system 
```javascript
// Number system
// Binary (0,1)
// Decimal number (0,1,2,3,4,5,6,7,8,9)
// Octal (0,1,2,3,4,5,6,7)
// Hexadecimal (0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f)
const decimalNumber = Number(500);
const binaryNumber = Number('0b11')    // 3
const octNumber = Number('0o11')    // 9
const hexNumber = Number('0x11')    // 17
```

## String
Any value inside double quote("") or single quote('') consider as string.

### Most common used function/properties of string
- `length`
- trim
- toLowerCase
- toUpperCase
- charAt
- endsWith
- includes
- indexOf
- replace
- substring

## References
- [Variable By MDN](https://developer.mozilla.org/en-US/docs/Glossary/Variable)
- [Variable By tutorials point](https://www.tutorialspoint.com/computer_programming/computer_programming_variables.htm)
- [Variable declaration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations)
- [Number System](https://byjus.com/maths/number-system/#:~:text=A%20number%20system%20is%20defined,algebraic%20structure%20of%20the%20figures.)
- [String by MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)