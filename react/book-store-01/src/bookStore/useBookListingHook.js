import { useState, useEffect } from 'react';

export function useBookListingHook() {
  const [books, updateBooks] = useState([]);

  useEffect(() => {
    async function loadBookList() {
      //console.log('load before')
      const response = await fetch('./data/bookStore.json');
      const jsonResponse = await response.json();
      console.log('load after--> ',jsonResponse.books)
      updateBooks(jsonResponse.books)
    }
    //console.log('before.....')
    loadBookList();
    //console.log('after.....')
  }, [])

  return {
    books
  }
}