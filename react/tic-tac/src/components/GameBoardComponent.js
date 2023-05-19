import { useState } from 'react';
import CellComponent from "./CellComponent";

const boardArray = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
]


function GameBoardComponent() {
  const [boardMap, updateBoardMap] = useState(boardArray);
  const [playerText, togglePlayerText] = useState('x')
  function handleCellClick(event) {
    const { id } = event.target;
    const [outerIndex, innerIndex] = id.split('-')
    console.log('---', outerIndex, '----',innerIndex);

    // already filled should be rejected
    if(boardMap[+outerIndex][+innerIndex] !== '') {
      return;
    }

    // board update
    const cloneBoardMap = [...boardMap];
    cloneBoardMap[+outerIndex] = [...cloneBoardMap[+outerIndex]]
    cloneBoardMap[+outerIndex][+innerIndex] = playerText;
    updateBoardMap(cloneBoardMap);

    // check winner

    // player toggle
    const nextPlayerText = playerText === 'x'? 'o' : 'x'
    togglePlayerText(nextPlayerText)
  }

  return (
    <section>
      <section>Player turn: {playerText}</section>
      <section className="tic-tac-table">
        {
          boardMap.map((rowArray, index) => {
            return rowArray.map((text, innerIndex) => {
              const key = `${index}-${innerIndex}`;
              return <CellComponent 
                text={text} 
                id={key} 
                key={key}
                onClickMe={handleCellClick}
              />
            })
          })
        }
      </section>
    </section>
  )
}

export default GameBoardComponent;