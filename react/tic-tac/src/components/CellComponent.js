
function CellComponent(props) {
  const { text, onClickMe, id} = props;
  return (
    <button id={id} onClick={onClickMe} className="tic-tac-cell">{text}</button>
  )
}

export default CellComponent;