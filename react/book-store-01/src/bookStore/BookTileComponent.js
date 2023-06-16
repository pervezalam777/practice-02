
function BookTileComponent(props) {
  
  const { bookData: {
    id,
    title,
    cover
  }} = props;

  return (
    <div>
      <h1>{title}</h1>
      <img src={cover} width="100px" />
      <button id={`bookDetail-${id}`}>Details</button>
    </div>
  )
}

export default BookTileComponent;