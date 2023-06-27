import TodoItemComponent from "./TodoItemsComponent";

function TodoListComponent(props) {
  const { list, onMarkDone, onDelete, onUpdateText } = props
  if(list == null){
    return null;
  }

  return (
    <ul className="todo-list">
      {
        list.map((item) => {
          return <TodoItemComponent 
            id={item.id} 
            text={item.todo} 
            status={item.status}

            onMarkDone={onMarkDone}
            onDelete={onDelete}
            onUpdateText={onUpdateText}
            key={item.id}/>
        })
      }
    </ul>
  )
}

export default TodoListComponent;