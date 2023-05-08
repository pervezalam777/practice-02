import { useState } from 'react';

const actions = [
  {text:'1', type:'number'},
  {text:'2', type:'number'},
  {text:'3', type:'number'},
  {text:'+', type:'symbol'},
  {text:'4', type:'number'},
  {text:'5', type:'number'},
  {text:'6', type:'number'},
  {text:'-', type:'symbol'},
  {text:'7', type:'number'},
  {text:'8', type:'number'},
  {text:'9', type:'number'},
  {text:'*', type:'symbol'},
  {text:'/', type:'symbol'},
  {text:'0', type:'number'},
  {text:'=', type:'symbol'},
]
function CalculatorComponent() {
  const [result, setResult] = useState('');
  const [lastAction, setLastAction] = useState('');
  const [oldResult, setOldResult] = useState('');
  const [replaceFlag, setReplaceFlag] = useState(false);

  function handleClick(event) {
    const { id } = event.target;
    const [text, type] = id.split('|');
    if(type === 'number'){
      if(replaceFlag){
        setResult(text);
        setReplaceFlag(false)
      } else {
        setResult(result+text);
      }
    } else {
      if(text === '='){
        console.log('perform last action', lastAction)
        const calculatedValue = calculate(oldResult, result, lastAction);
        setResult(calculatedValue);
        setOldResult('');
        setReplaceFlag(false);
        setLastAction('');
      } else {
        console.log('last action was ', lastAction, '>>', text)
        if(lastAction === ''){
          setOldResult(result);
          setLastAction(text);
          setReplaceFlag(true);
        } else {
          const calculatedValue = calculate(oldResult, result, lastAction);
          setResult(calculatedValue);
          setOldResult(calculatedValue);
          setReplaceFlag(true);
          setLastAction(text);
        }
      }
    }
  }

  function calculate(val1, val2, action){
    if(action === '+') {
      return ''+(Number(val1) + Number(val2));
    }
    if(action === '-') {
      return ''+(Number(val1) - Number(val2));
    }
    if(action === '*') {
      return ''+(Number(val1) * Number(val2));
    }
    if(action === '/') {
      return ''+(Number(val1) / Number(val2));
    }
  }

  return (
    <div>
      <div>
        <p>result: {result}</p>
        <p>old--{oldResult} {lastAction}</p>
      </div>
      <div>
        {
          actions.map(item => {
            const {text, type} = item;
            return( 
              <button 
                id={`${text}|${type}`} 
                key={text}
                onClick={handleClick}
              >{text}</button>
            )
          })
        }
      </div>
    </div>
  )
}

export default CalculatorComponent;