import logo from './logo.svg';
import './App.css';
import React from 'react'


function App() {
  const [languages, setLanguages] = React.useState([
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "JavaSript", votes: 0},
    {name: "Java", votes: 0}
  ])

  function handleClick (index) {
    let newArr = [...languages]
    newArr[index].votes += 1
    setLanguages(newArr)
  }

  return (
    <div className="App">
      <ul>
      {languages.map((item, index) => (
        <li key={item.name} style={{display:'flex', margin:'10px', maxWidth: '400px', border: "1px,solid,black", backgroundColor:'beige', padding: '20px', justifyContent:'space-between', alignItems:'center'}}>
          <p>{item.votes}</p>
          <p>{item.name}</p>
          <button onClick={() => handleClick(index)} style={{color:'green', cursor:'pointer',backgroundColor: 'transparent',border:'none', fontSize:'16px' }}>Click Here</button>
        </li>
      ))
      }
      </ul>
    </div>
  );
}

export default App;
