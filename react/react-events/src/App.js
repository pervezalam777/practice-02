import { useState } from 'react';
import ButtonComponent from './components/buttonComponent';
import './App.css';

function App() {
  
  function handleEvent(event) {
   console.log(event)
  }

  function handleSpanClick(event) {
    console.log(event)
  }

  return (
    <div className="App">
     <ButtonComponent onEvent={handleEvent} onChildClick={handleSpanClick} />
    </div>
  );
}

export default App;
