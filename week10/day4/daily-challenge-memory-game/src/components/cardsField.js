import Card from './Card.js';
import './cardsField.css';

function CardsField({ data, shuffleArray, changeIsClicked }) {


  return (
    <ul className='cards__field'>
      {data.map((item) => (
        <Card card={item} key={item.id} shuffleArray={shuffleArray} changeIsClicked={changeIsClicked}/>
      ))}
    </ul>
  );
}

export default CardsField;