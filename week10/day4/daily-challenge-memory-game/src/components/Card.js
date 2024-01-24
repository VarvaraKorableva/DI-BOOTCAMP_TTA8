import './cardsField.css'
//import superheroes from '../data.js'

function Card({card, shuffleArray, changeIsClicked}) {

    const handleClick = () => {
        //shuffleArray()
        changeIsClicked(card.id)
    };


    return (
      <div className='card' onClick={handleClick}>
        <img src={card.image} alt={card.name} className='card__img'></img>
        <div className='card__text__container'>
            <p className='card__text-title'>Name: </p>
            <p className='card__text'>{card.name}</p>
        </div>
        <div className='card__text__container'>
            <p className='card__text-title'>Occupation: </p>
            <p className='card__text'>{card.occupation}</p>
        </div>
      </div>
    );
  }
  
  export default Card;