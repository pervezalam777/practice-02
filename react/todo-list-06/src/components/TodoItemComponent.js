
function TodoItemComponent(props) {
  const { text, id } = props;
  return (
    <li id={id}>
      <p>{text}</p>
    </li>
  )
}

export default TodoItemComponent;