//import logo from './logo.svg';
import './App.css';
//import {useState} from 'react'
import Counter from './ components/Counter.js'

function App() {
  //const[count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Redux</h1>
        <Counter></Counter>
      </header>
    </div>
  );
}

export default App;
