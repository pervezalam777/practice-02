function TodoItemComponent(props) {
  const { text, id, onMarkDone, status } = props;
  function renderActions() {
    if(status === 'active'){
      return (
        <>
          <button id={`${id}-edit`}>Edit</button>
          <button id={`${id}-done`} onClick={onMarkDone}>Done</button>
        </>
      )
    } else {
      return null;
    }
  }


  return (
    <li className="todo-item">
      <p>{text}</p>
      <div className="todo-item-actions">
        {renderActions()}     
        <button id={`${id}-delete`}>Delete</button>
      </div>
    </li>
  )
}

export default TodoItemComponent