
function ButtonComponent(props) {
  const { 
    onEvent: handleEvent,
    onChildClick: handleChildClick
  } = props;
  return (
    <button onClick={handleEvent} onKeyUp={handleEvent}>
      <span onClick={handleChildClick}>icon</span>
      <span>submit</span>
    </button>
  )
}

export default ButtonComponent;