import './App.css';
import Car from './Components/Car.js'
import Phone from './Components/Phone.js'
import Color from './Components/Color.js';

function App() {
  const carinfo = {name: "Ford", model: "Mustang"}
  return (
    <div className="App">
      <Car carinfo={carinfo}/>
      <Phone></Phone>
      <Color></Color>
    </div>
  );
}

export default App;
