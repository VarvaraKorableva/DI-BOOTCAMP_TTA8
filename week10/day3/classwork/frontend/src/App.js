import logo from './logo.svg';
import './App.css';
import React from 'react'
import {getHello} from './api.js'

function App() {
 
  const [message, setMessage] = React.useState('')
  
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getHello()
        const data = await response.json()
        setMessage(data)
        console.log(data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    };

    fetchData(); // Вызываем функцию fetchData
  }, []);


  return (
    <div className="App">
      <p>{message}</p>
    </div>
  );
}

export default App;
