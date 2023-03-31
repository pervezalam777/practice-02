import { useEffect, useState } from 'react';

const localStorageKey = 'localStoreKey';

function RandomComponent() {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const storeValue = window.localStorage.getItem(localStorageKey);
    if(storeValue == null) {
      console.log('no value in store.....', storeValue)
      const newValue = Date.now().toString();
      setValue(newValue);
      window.localStorage.setItem(localStorageKey, newValue);
    } else {
      console.log('fetched from store......', storeValue)
      setValue(storeValue);
    }
  }, [])

  return (
    <div>Value is : {value}</div>
  )
}

export default RandomComponent