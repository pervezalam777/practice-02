const todoListObject = {
  '01': { title: 'first todo item'},
  '02': { title: 'second todo item'}
}

console.log(todoListObject['01'].title)

const idToDeleteFromObj = '02'

const newTodoListObject = { ...todoListObject };

delete newTodoListObject[idToDeleteFromObj];

console.log('newTodoListObject', newTodoListObject);

//------------------------------------------------------
  
const todoListArray = [
  {id: '01', title: 'first todo item'},
  {id: '02', title: 'second todo item'},
  {id: '03', title: 'third todo item'},
]  

console.log(todoListArray[1]['title'])
console.log(todoListArray[1].title)

const idToDelete = '02';

const newTodoList = todoListArray.filter((item) => {
  return item.id != idToDelete
})

console.log('newTodoList', newTodoList)

