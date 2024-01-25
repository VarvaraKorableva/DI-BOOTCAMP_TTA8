import Card from './Card.js'
import './Cards.css'

function Field({ data, extractYearFromDate }) {

  return (
    <ul className='cards__field'>
      {data.map((item) => (
        <Card key={item.id} item={item} extractYearFromDate={extractYearFromDate}></Card>
      ))}
    </ul>
  );
}

export default Field;