import Card from './Card.js';

function Field({ data }) {

    console.log(data)
  return (
    <ul>
      {data.map((item) => (
        <Card key={item.id} item={item}></Card>
      ))}
    </ul>
  );
}

export default Field;