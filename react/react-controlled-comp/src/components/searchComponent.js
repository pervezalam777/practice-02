import { useState } from 'react';
function SearchComponent() {
  const [query, setQuery] = useState();

  function handleChange(event) {
    const value = event.target.value;
    setQuery(value);
  }

  function handleClick() {
    console.log('search :', query)
  }
  return (
    <section>
      <input type="text" value={query} onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
    </section>
  )
}

export default SearchComponent;