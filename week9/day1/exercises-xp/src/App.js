import logo from './logo.svg';
import './App.css';
import UserFavoriteAnimals from './UserFavoriteAnimals.js'
import Exercise from './Exercise3.js'

function App() {

  const myelement = <h1>I Love JSX!</h1>
  const sum = 5 + 5

  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };

  const favAnimals = user.favAnimals
  return (
    <div className="App">
      <p>Hello World!</p>
      {myelement}
      <p>React is {sum} times better with JSX</p>
      <h3>firs name: {user.firstName}, last name: {user.lastName}</h3>
      <UserFavoriteAnimals 
        favAnimals = {favAnimals}
      />
      <Exercise></Exercise>
    </div>
  );
}

export default App;
