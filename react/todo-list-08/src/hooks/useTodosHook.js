import { useState, useEffect } from 'react';

//const todoListArray = []

// UI Business logic
export function useTodosHook() {
  const [list, updateList] = useState(null)

  //TODO: add local-storage code here
  useEffect(() => {
    // - check local storage if there is any todo item
    // - if there are some items then assign it to list
    // - through updateList method
    const storeList = window.localStorage.getItem('todos');
    if(storeList){
      updateList(JSON.parse(storeList));
    }
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
    cloneList[index] = {...cloneList[index], status:'done'};
    updateList(cloneList)
  }

  function updateText(id, updatedText) {
    const index = list.findIndex((item) => item.id === id);
    const cloneList = [...list];
    cloneList[index] = {...cloneList[index], text:updatedText};
    updateList(cloneList)
  }

  function addItem(text) {
    const todo = {
      id: ''+Date.now(), 
      text, 
      status:'active'
    }
    const todosList = list == null ? [] : list;
    const cloneList = [todo, ...todosList];
    updateList(cloneList);
  } 

  function deleteItem(id) {
    const cloneList = list.filter((item) => item.id !== id);
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