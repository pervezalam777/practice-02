import { useEffect, useRef } from 'react';

function TodoAddComponent(props) {
  const {onAdd} = props;
  const inputRef = useRef();
  const addButtonRef = useRef();

  useEffect(() => {
    addButtonRef.current.disabled = true;
  }, [])

  function handleAdd() {
    const text = inputRef.current.value;
    onAdd(text);

    // clean up
    inputRef.current.value = '';
    addButtonRef.current.disabled = true;
  }
  
  function handleTextChange(event) {
    const value = event.target.value;
    if(value.trim().length > 0) {
      addButtonRef.current.disabled = false;
    } else {
      addButtonRef.current.disabled = true;
    }
  }

  return (
    <div className="todo-add">
      <input type="text" ref={inputRef} onChange={handleTextChange} />
      <button onClick={handleAdd} ref={addButtonRef}>Add</button>
    </div>
  )
}

export default TodoAddComponent;