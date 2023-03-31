import {useState, useRef, useEffect} from 'react';

const initialList = []

const todoLSKey = 'list';

function TodoComponent() {
  const [todos, updateTodos] = useState([]);
  //const [addButtonDisable, updateAddButtonDisable] = useState(true);
  const inputRef = useRef();
  const addBtnRef = useRef();

  useEffect(() => {
    const storeData = window.localStorage.getItem(todoLSKey);
    if(storeData === null) {
      updateTodos(initialList);
      window.localStorage.setItem(todoLSKey, JSON.stringify(initialList));
    } else {
      const parsedList = JSON.parse(storeData);
      updateTodos(parsedList);
    }
  }, [])

  useEffect(() => {
    if(todos.length > 0) {
      window.localStorage.setItem(todoLSKey, JSON.stringify(todos));
    }
  }, [todos])

  //NOTE: if second argument is not provided
  // then useEffect calls on every re-render
  // useEffect(() => {
  //   console.log('call on every re-render....')
  // })

  //NOTE: if second argument passed as blank array ([])
  // the useEffect only calls once when component render
  useEffect(() => {
    //console.log('calls on once or first time when component render')
    //console.log('addBtnRef', addBtnRef)
    addBtnRef.current.disabled = true;
    inputRef.current.focus();
  }, [])

  function addTodo() {
    const item = {
      id: ''+Date.now(),
      text: inputRef.current.value,
      status: 'active',
      editing: false
    }
    const newTodos = [...todos];
    newTodos.push(item);
    updateTodos(newTodos);
    inputRef.current.value = '';
    //updateAddButtonDisable(true);
    addBtnRef.current.disabled = true;
  }
  function renderTodoAdder() {
    return (
      <div>
        <input ref={inputRef} placeholder='add todo text' onChange={handleInputTextChange} />
        <button 
          onClick={addTodo}
          ref={addBtnRef}
          // disabled={addButtonDisable}
        >Add</button>
      </div>
    )
  }

  function handleInputTextChange(event) {
    let inputText = event.target.value;
    //console.log('input text has----', inputText, ' and length is', inputText.length);
    if(inputText.trim().length > 0) {
      //updateAddButtonDisable(false);
      addBtnRef.current.disabled = false;
    } else {
      //updateAddButtonDisable(true);
      addBtnRef.current.disabled = true;
    }
  }

  function renderList() {
    return (
      <ul>
        {
          todos.map((todo) => {
            const {id, text, status, editing} = todo;
            return (
              <li key={id} id={'li--'+id} className={getTodoStatusClass(status)}>
                {editing ? (<input defaultValue={text}  id={'input-todo--'+id} />) :(<span>{text}</span>)}
                {editing !== true  && (
                  <button
                    id={'btn-done--'+id}
                    onClick={handleMarkDone} 
                    disabled={status === 'done'}>
                      Mark done
                  </button>
                )}
                
                <button
                  id={'btn-edit--'+id}
                  onClick={handleEdit} 
                  disabled={status === 'done'}>
                    {editing ? 'Edit done' : 'Edit'}
                </button>
              </li>
            )
          })
        }
      </ul>
    )
  }

  function handleMarkDone(event) {
    let id = event.target.id;
    id = id.split('--')[1];
    const index = todos.findIndex((todo) => id === todo.id);
    const todo = {...todos[index], status:'done'}
    const newTodos = [...todos];
    newTodos[index] = todo;
    updateTodos(newTodos);
  }

  function handleEdit(event) {
    //console.log(event.target);
    //console.log(event.target.id)
    let id = event.target.id;
    id = id.split('--')[1];
    const index = todos.findIndex((todo) => id === todo.id);

    const todo = {...todos[index]};
    if(todo.editing) {
      const inputTodoEle = document.getElementById('input-todo--'+id)
      // console.log('inputTodoEle ', inputTodoEle);
      // console.log('inputTodoEle value', inputTodoEle.value);
      todo.text = inputTodoEle.value;
    }

    todo.editing = !todo.editing;
    
    // if(todo.editing) {
    //   todo.editing = false;
    // } else {
    //   todo.editing = true;
    // }

    const newTodos = [...todos];
    newTodos[index] = todo;
    updateTodos(newTodos);
  }

  function getTodoStatusClass(status) {
    if(status === 'active') {
      return 'active'
    } else if(status === 'done') {
      return 'done'
    } else {
      return ''
    }
  }

  return(
    <div>
      {renderTodoAdder()}
      {renderList()}
    </div>
  )
}

export default TodoComponent;