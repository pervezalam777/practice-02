import { useState } from 'react';
function ToggleButtonComponent() {
  const [toggleState, setToggleState] = useState(false)
 
  function changeState(){
    const nextState = !toggleState;
    console.log('-------------------------------')
    console.log('current state is', toggleState)
    console.log('next state is', nextState)
    setToggleState(nextState);
  }

  return (
    <button onClick={changeState}>{toggleState ? 'On' : 'Off'}</button>
  )
}

export default ToggleButtonComponent;


// const stateArr = useState(false)
// stateArr[0],
// stateArr[1]()