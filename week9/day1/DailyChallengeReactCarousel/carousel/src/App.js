import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import DemoCarousel from './DemoCarousel.js';


function App() {
  return (
    <div className="App">
      <DemoCarousel></DemoCarousel>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
