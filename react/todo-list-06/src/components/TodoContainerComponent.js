import { useState } from 'react';
import AddTodoComponent from './AddTodoComponent';
import TodoListComponent from './TodoListComponent';

function TodoContainerComponent() {
  const [todoList, updateTodoList] = useState([]);

  function addTodoItem(text) {
    //todoList.push({text});// bad practice;
    const cloneTodoList = [...todoList]; 
    const newTodoItem = { 
      text, 
      id: Date.now().toString() 
    }
    cloneTodoList.push(newTodoItem)
    updateTodoList(cloneTodoList)
  }

  return (
    <div>
      <h2>TODO length: {todoList.length}</h2>
      <AddTodoComponent onTodoAdd={addTodoItem}/>
      <TodoListComponent todoList={todoList}/>
    </div>
  )
}

export default TodoContainerComponent;