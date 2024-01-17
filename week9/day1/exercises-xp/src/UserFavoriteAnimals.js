function UserFavoriteAnimals({favAnimals}) {

console.log(favAnimals)
  return (
    <ul>
        {favAnimals.map((item, index) => (
            <li key={index}>{item}</li>
        ))}
    </ul>
  );
}

export default UserFavoriteAnimals;