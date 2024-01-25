import logo from './logo.svg';
import React from 'react'
import './App.css';
import HeaderProject from './components/HeaderProject.js'
import Search from './components/Search.js'
import Field from './components/Field.js'
import {getBooks} from './Api.js'

function App() {
  const [data, setData] = React.useState([])

  function sortOldest() {
    let newData = [...data];

    newData.sort((a, b) => {
    const dateA = new Date(a.volumeInfo.publishedDate);
    const dateB = new Date(b.volumeInfo.publishedDate);

    return dateA - dateB;
  });
  setData(newData);
  }

  function sortNewest() {
    let newData = [...data];

    newData.sort((a, b) => {
    const dateA = new Date(a.volumeInfo.publishedDate);
    const dateB = new Date(b.volumeInfo.publishedDate);

    return dateA - dateB;
  });
  setData(newData.reverse());
  }

  async function getdata(word) {
    try {
      const res = await getBooks(word);
      setData(res.items);
    } catch (error) {
      console.error(error);
    }
  }

  function extractYearFromDate(dateString) {
    const date = new Date(dateString);
    return date.getFullYear();
  }

  return (
    <div className="App">
      <HeaderProject/>
      <Search getdata={getdata} sortOldest={sortOldest} sortNewest={sortNewest}/>
      <Field data={data} extractYearFromDate={extractYearFromDate}></Field>
    </div>
  );
}

export default App;
