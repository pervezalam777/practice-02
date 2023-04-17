import { useState } from 'react';

const todoListArray = [
  {id: '001', text: 'Todo item one', status:'active'},
  {id: '002', text: 'Todo item two 666', status:'active'},
  {id: '003', text: 'Todo item three is the latest one 777', status: 'active'}
]

// UI Business logic
export function useTodosHook() {
  const [list, updateList] = useState(todoListArray)

  function markDone(event) {
    const id = event.target.id.split('-')[0];

    const index = list.findIndex((item) => item.id === id);
    
    const cloneList = [...list];
    cloneList[index] = {...cloneList[index], status:'done'};

    updateList(cloneList)
  }

  function addItem(text) {

  } 

  return {
    list,
    markDone,
    addItem
  }
}