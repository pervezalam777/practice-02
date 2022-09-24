console.log('---- while ----');
let counter = 0; // initialization
while(counter < 5) { // condition
  console.log('counter without break', counter);
  counter += 1; // increment
}

counter = 0;
while(true) {
  console.log('counter with break', counter);
  counter += 1;
  if(counter > 5){
    break;
  }
}

const passportList = [
  {name:'seeta', gender:'female', adharId: '3937239432', children:[{name:'tina', age: 5}, {name:'meena', age: 2}]},
  {name:'Ram', gender:'male', adharId: '545646346345', children:[{name:'sweety', age: 6}]},
  {name:'Ramesh', gender:'male', adharId: '56767345464', children:[{name:'sonu', age: 3}]},
  {name:'geeta', gender:'female', adharId: '646346456346', children:[{name:'lovely', age: 5}]},
  {name:'Vijay', gender:'male', adharId: '12445654363', children:[{name:'tina', age: 7}]},
];

//console.log(passportList[4])

const matchedList = [];
let index = 0;
while(index < passportList.length) {
  const person = passportList[index];
  //console.log(index, '--person ', person);
  const children = person.children;
  //console.log('children ', children);
  let childIndex = 0;
  while(childIndex < children.length) {
    const child = children[childIndex];
    //console.log(childIndex, ' ---child---', child);
    if(child.name === 'tina'){
      matchedList.push(person);
    }
    childIndex += 1;
  }
  index += 1;
}

console.log('matched List', matchedList);


const femaleList = [];
index = 0;
while(index < passportList.length) {
  const person = passportList[index];
  if(person.gender === 'female') {
    femaleList.push(person)
  }
  index += 1;
}

console.log('female list ', femaleList)

