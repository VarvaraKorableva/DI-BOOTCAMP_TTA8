import './Cards.css'

function Card({item, extractYearFromDate}) {
      
      const publishedDate = item.volumeInfo.publishedDate;
      const publishedYear = extractYearFromDate(publishedDate);

  return (
  <li className="card">
    <img src={item.volumeInfo.imageLinks.thumbnail} alt={item.printType}></img>
    <p className='card__text__name'>{item.volumeInfo.title}</p>
    <p className='card__text'>Author: {item.volumeInfo.authors}</p>
    <p className='card__text'>Published: {publishedYear}</p>
  </li>

  );
}

export default Card;