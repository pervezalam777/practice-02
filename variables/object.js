const person = {
  name:'Pawan',
  age:30,
  gender: 'male',
  height: {
    value:175,
    unit:'centimeter',
    abUnit:'cm'
  },
  address: {
    permanent: {
      houseNo:'37A',
      state: 'Delhi',
      country: 'India',
      pincode: 110062,
      nearBy:'saket'
    },
    office: {}
  },
  children:[
    {name:'tinku', age: 5, gender:'male'},
    {name:'twinkal', age: 2, gender:'female'}
  ]
}

console.log('name is', person.name)
console.log('height is', person.height.value)
console.log('address is', person.address.permanent);
console.log('Number of children', person.children.length)
console.log('First children name', person.children[0].name)
console.log('First children age', person.children[0].age)

console.log('-------------------------------------')

const keyName = 'gender'
console.log(keyName +' is', person[keyName])
console.log('height is', person['height']['value'])
console.log('address is', person['address']['permanent']);
console.log('Number of children', person['children']['length'])
console.log('First children name', person['children'][0]['name'])
console.log('First children age', person['children'][0]['age'])

console.log('-------------------------------------')

const blankObject = {};
console.log('blankObject ', blankObject);

blankObject.name = 'Nakul'; // I already know key name
console.log('blankObject after adding "name" key - value', blankObject);

const blankObjectKeyName = 'marks';
blankObject[blankObjectKeyName] = 25; // when key name is dynamic
console.log(`blankObject after adding "${blankObjectKeyName}" key - value`, blankObject);

//---------------------------------------------
console.log('---------------------------------------')
const colorMap = {
  red:'#ff0000',
  green: '#00ff00',
  blue: '#0000ff',
  white: '#ffffff',
  black: '#000000'
}

// values
const colorValuesInHex = Object.values(colorMap);
console.log('colorValuesInHex', colorValuesInHex);

// keys
const colorKeys = Object.keys(colorMap);
console.log('color keys ', colorKeys);

// entries
const colorEntries = Object.entries(colorMap);
console.log('color entries', colorEntries);
console.log('key',colorEntries[0][0])
console.log('color',colorEntries[0][1])

// for in
for(let colorKey in colorMap) {
  console.log('key ', colorKey);
  console.log('value', colorMap[colorKey])
}