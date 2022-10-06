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

// entries
// keys
// values
