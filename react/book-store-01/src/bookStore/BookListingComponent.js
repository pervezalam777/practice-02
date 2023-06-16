import { useBookListingHook } from './useBookListingHook';
import BookTileComponent from './BookTileComponent';

function BookListingComponent() {
  const { books } = useBookListingHook()

  return (
    <div>
      {
        books.map((bookData) => {
          const { id } = bookData;
          return (
            <BookTileComponent key={id} bookData={bookData} />
          )
        })
      }
      
    </div>
  )
}

export default BookListingComponent;