//
const person = {
  fullName: 'pervez alam',
  age: 37,
  color: 'dark'
};

console.log('person full name', person.fullName);
console.log('person full name', person['fullName']);

// destructuring
const { fullName, age } = person; // const fullName = person.fullName
console.log('person full name', fullName);
console.log('person age ', age);
console.log('person ', person)

const personArray = ['pervez alam', 37, 'dark'];
console.log('name in personArray', personArray[0]);

// destructuring
const [ nameOfPerson, ageOfPerson ] = personArray;
console.log('nameOfPerson is', nameOfPerson);
console.log('ageOfPerson is', ageOfPerson);

//TODO: deep destructuring and rest with array