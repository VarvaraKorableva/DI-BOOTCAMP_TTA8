import React from 'react'
import './Search.css'

function Search({getdata}) {
    const [inputs, setInputs] = React.useState({
        bookname: '',
        /*lastname: '',
        age: '',
        gender: '',
        destination: '',
        nutsFree: false,
        lactoseFree: false,
        isVegan: false,*/
      });
    
      const handleInputs = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const name = e.target.name;
    
        setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
      };

    function handleGetdata() {
        getdata(inputs.bookname)
    }

  return (
    <>
    <input
        className='header__input'
        name='bookname'
        type="text"
        onChange={(e) => handleInputs(e)}></input>
    <button className='header__btn' onClick={handleGetdata}>Search</button>

    <select className='header__select' name="sort" onChange={(e) => handleInputs(e)}>
        <option value="Sort">Sort</option>
        <option value="Newest">Newest</option>
        <option value="Oldest">Oldest</option>
    </select>
    </>

  );
}

export default Search;