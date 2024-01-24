import logo from './logo.svg';
import React from 'react'
import './App.css';
import HeaderProject from './components/HeaderProject.js'
import Search from './components/Search.js'
import Field from './components/Field.js'
import {getBooks} from './Api.js'

function App() {
  const [data, setData] = React.useState([])

/*function getdata(word) {
    getBooks(word)
      .then((res) => {
        setData(res.items);
      })
      .catch((error) => {
        console.error(error);
      });
  }*/

  async function getdata(word) {
    try {
      const res = await getBooks(word);
      setData(res.items);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="App">
      <HeaderProject/>
      <Search getdata={getdata}/>
      <Field data={data}></Field>
    </div>
  );
}

export default App;
