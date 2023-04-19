import { useState } from 'react';

const todoListArray = []

// UI Business logic
export function useTodosHook() {
  const [list, updateList] = useState(todoListArray)

  //TODO: add local-storage code here

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
    const cloneList = [todo, ...list];
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