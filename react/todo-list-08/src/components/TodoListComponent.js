import TodoItemComponent from "./TodoItemsComponent";

function TodoListComponent(props) {
  const { list, onMarkDone } = props
  return (
    <ul className="todo-list">
      {
        list.map((item) => {
          return <TodoItemComponent 
            id={item.id} 
            text={item.text} 
            status={item.status}
            
            onMarkDone={onMarkDone}
            key={item.id}/>
        })
      }
    </ul>
  )
}

export default TodoListComponent;