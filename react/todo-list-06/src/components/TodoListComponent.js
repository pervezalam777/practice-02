import TodoItemComponent from "./TodoItemComponent";

function TodoListComponent(props) {
  const { todoList } = props;

  return (
    <ul>
      {
        todoList.map((todoItem) => {
          const { id, text } = todoItem;
          return (
            <TodoItemComponent key={id} id={id} text={text}/>
          )
        })
      }
    </ul>
  )
}

export default TodoListComponent;