// named import
import { cutString, getStrLength }  from '../utils/stringUtil';

function Card(props) {
  const { imgURL, text } = props;
  return (
    <section>
      <img src={imgURL} alt={text}/>
      <p>{cutString(text, 4)}</p>
      <p>Length is {getStrLength(text)}</p>
      <button>Notify</button>
    </section>
  )
}

// default export
export default Card;