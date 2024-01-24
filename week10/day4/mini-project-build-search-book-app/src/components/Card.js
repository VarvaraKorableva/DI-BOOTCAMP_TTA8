//import Card from './Card.js'

function Card({item}) {
  return (
  <li>
    <img src={item.volumeInfo.imageLinks} alt={item.printType}></img>
    <p>Author: {item.volumeInfo.authors}</p>
    <p>Published: {item.volumeInfo.publishedDate}</p>
  </li>

  );
}

export default Card;