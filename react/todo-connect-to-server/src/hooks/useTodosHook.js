import { useState, useEffect } from 'react';

const STATUS = {
  ACTIVE: "TO DO",
  IN_PROGRESS: "IN PROGRESS",
  DONE: "DONE"
}
//const todoListArray = []

// UI Business logic
export function useTodosHook() {
  const [list, updateList] = useState(null)

  //TODO: add local-storage code here
  useEffect(() => {
    // - check local storage if there is any todo item
    // - if there are some items then assign it to list
    // - through updateList method
    //const storeList = window.localStorage.getItem('todos');
    //if(storeList){
      //updateList(JSON.parse(storeList));
    //}
    async function loadTodoList() {
      const response = await fetch('http://localhost:3000/todos');
      const todoList = await response.json();
      console.log('json', todoList);
      updateList(todoList)
    }

    loadTodoList()
  }, [])

  useEffect(() => {
    if(list != null){
      window.localStorage.setItem('todos', JSON.stringify(list))
    }
  }, [list])


  function markDone(event) {
    const id = event.target.id.split('-')[0];
    const index = list.findIndex((item) => item.id === id);
    const cloneList = [...list];
    cloneList[index] = {...cloneList[index], status:STATUS.DONE};
    updateList(cloneList)
  }

  function updateText(id, updatedText) {
    const index = list.findIndex((item) => item.id === id);
    const cloneList = [...list];
    cloneList[index] = {...cloneList[index], text:updatedText};
    updateList(cloneList)
  }

  async function addItem(text) {
    const todo = {
      id: ''+Date.now(), 
      todo: text, 
      status: STATUS.ACTIVE,
      
      category: "LEARNING",
      dueDate: "2021-04-04",
      priority: "HIGH"
    }
    const todosList = list == null ? [] : list;
    const cloneList = [todo, ...todosList];
    updateList(cloneList);
    
    const response = await fetch('http://localhost:3000/todos', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo)
    })
    console.log(response);
  } 

  async function deleteItem(id) {
    await fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE"
    })
    const cloneList = list.filter((item) => item.id !== +id);
    updateList(cloneList)
  }

 

  return {
    list,
    markDone,
    addItem,
    deleteItem,
    updateText
  }
}