let age = 30;
console.log(age);

console.log(typeof age);

age = 40;
console.log(age);

// Decimal (0,1,2,3,4,5,6,7,8,9)
const decNumber = Number(500);
console.log('Decimal Number 500', decNumber);

// Hex (0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f)
const hexNumber = Number('0x11');
console.log('Hexadecimal Number 0x11', hexNumber); // 17

// Binary (0,1)
const binaryNumber = Number('0b11');
console.log('binary Number 0b11', binaryNumber); // 3

// Oct (0,1,2,3,4,5,6,7)
const octNumber = Number('0o11');  
console.log('octal Number 0b11', binaryNumber); // 9

// 1.7976931348623157e+308 == 1.7976931348623157 * 10^308
console.log('Number max value',Number.MAX_VALUE);
console.log('Number max value',Number.MIN_VALUE);

console.log('parse as integer', Number.parseInt(10.1))
console.log('parse as integer', Number.parseInt('10.1'))


console.log('parse as float', Number.parseFloat(10.1))
console.log('parse as float', Number.parseFloat('10.1'))

const value = 10.234546;
console.log(value.toFixed(2))