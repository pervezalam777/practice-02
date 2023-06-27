import TodoAddComponent from "./TodoAddComponent";
import TodoListComponent from "./TodoListComponent";
import { useTodosHook } from '../hooks/useTodosHook';
import "../styles/todo.css"


function TodoComponent() {
  const { 
    list, 
    markDone, 
    addItem, 
    deleteItem,
    updateText
  } = useTodosHook();
  return (
    <div className="todo-container">
      <TodoAddComponent onAdd={addItem}/>
      <TodoListComponent 
        list={list} 
        onMarkDone={markDone} 
        onDelete={deleteItem}
        onUpdateText={updateText} />
    </div>
  )
}

export default TodoComponent;