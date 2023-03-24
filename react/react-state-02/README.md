# React States
React provides hooks API to maintain the states (e.g. useState, useReducer)

```javascript
// Sudo like implementation 
function useState(state) {
  let innerState = state;
  function changeState(newState) {
    innerState = newState;
  }
  return [innerState, changeState]
}

const [toggle, setToggle] = useState(false)
```

## Type of states
- Local with component (like toggle button on/off state)
- Application level (global state like home screen, about screen)
- Group level state (one or more component sharing the same state in hierarchy)

## Problems
- Prop drilling : passing down the props to more than 2 levels

## Functional component
- Every example would be based on functional component
- Will cover class based component later..........