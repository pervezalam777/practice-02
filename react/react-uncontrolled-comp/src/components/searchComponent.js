import { useRef } from 'react';
function SearchComponent() {
  const inputRef = useRef();

  function handleClick() {
    console.log('search :', inputRef.current.value)
  }
  return (
    <section>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Search</button>
    </section>
  )
}

export default SearchComponent;