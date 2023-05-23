import { useState } from 'react';
import CellComponent from "./CellComponent";

const boardArray = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
]

const mapForWin = [
  ['0,0', '1,0', '2,0'],
  ['0,1', '1,1', '2,1'],
  ['0,2', '1,2', '2,2'],
  ['0,0', '1,1', '2,2'],
  ['0,2', '1,1', '2,0']
]

function GameBoardComponent() {
  const [boardMap, updateBoardMap] = useState(boardArray);
  const [playerText, togglePlayerText] = useState('x')
  function handleCellClick(event) {
    const { id } = event.target;
    const [outerIndex, innerIndex] = id.split('-')
    console.log('---', outerIndex, '----', innerIndex);

    // already filled should be rejected
    if (boardMap[+outerIndex][+innerIndex] !== '') {
      return;
    }

    // board update
    const cloneBoardMap = [...boardMap];
    cloneBoardMap[+outerIndex] = [...cloneBoardMap[+outerIndex]]
    cloneBoardMap[+outerIndex][+innerIndex] = playerText;
    updateBoardMap(cloneBoardMap);

    // check winner
    const didWin = doesPlayerWonWithSymbol(playerText, cloneBoardMap);
    if(didWin){
      togglePlayerText(playerText + ' has won')
      return;
    }

    // player toggle
    const nextPlayerText = playerText === 'x' ? 'o' : 'x'
    togglePlayerText(nextPlayerText)
  }

  function doesPlayerWonWithSymbol(symbol, ticTacGame) {
    //winner o code
    for(let row of ticTacGame) {
      const result = row.every((text) => text === symbol);
      if(result){
        return true
      }
    }
    // if (ticTacGame[0][0] == symbol && ticTacGame[0][1] == symbol && ticTacGame[0][2] == symbol) {
    //   return true
    // }
    // if (ticTacGame[1][0] == symbol && ticTacGame[1][1] == symbol && ticTacGame[1][2] == symbol) {
    //   return true
    // }
    // if (ticTacGame[2][0] == symbol && ticTacGame[2][1] == symbol && ticTacGame[2][2] == symbol) {
    //   return true
    // }

    for(let arrCoordinates of mapForWin) {
      const result = arrCoordinates.every(coo => {
        const [outerIndex, innerIndex] = coo.split(',');
        return ticTacGame[+outerIndex][+innerIndex] === symbol
      })
      if(result){
        return true
      }
    }
    return false;
    
    // if (ticTacGame[0][0] == symbol && ticTacGame[1][0] == symbol && ticTacGame[2][0] == symbol) {
    //   return true
    // }
    // if (ticTacGame[0][1] == symbol && ticTacGame[1][1] == symbol && ticTacGame[2][1] == symbol) {
    //   return true
    // }
    // if (ticTacGame[0][2] == symbol && ticTacGame[1][2] == symbol && ticTacGame[2][2] == symbol) {
    //   return true
    // }

    // if (ticTacGame[0][0] == symbol && ticTacGame[1][1] == symbol && ticTacGame[2][2] == symbol) {
    //   return true
    // }
    // if (ticTacGame[0][2] == symbol && ticTacGame[1][1] == symbol && ticTacGame[2][0] == symbol) {
    //   return true
    // }
    // return false;

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