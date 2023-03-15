import { useRef } from "react";

//TODO:
// [x] 1: pick up value from input and send it to parent component function
// [ ] 2: add button should be disabled when there is not text
// [ ] 3: focus should be shown on text field on application load

function AddTodoComponent(props) {
  const { onTodoAdd } = props;

  const inputTextRef = useRef();

  function handleAddClick() {
    // inputTextRef = { current: <input type="text" ref={inputTextRef} /> };
    const inputElement = inputTextRef.current;
    onTodoAdd(inputElement.value);

    // clean up
    inputElement.value = "";
  }

  return (
    <div>
      <input type="text" ref={inputTextRef} />
      <button onClick={handleAddClick}>Add</button>
    </div>
  )
}

export default AddTodoComponent;