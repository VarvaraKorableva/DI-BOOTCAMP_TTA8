import React from 'react'
import './Search.css'

function Search({getdata, sortOldest, sortNewest}) {
    const [inputs, setInputs] = React.useState({
        bookname: '',
        sort: 'Sort',
      });
    
      const handleInputs = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        const name = e.target.name;
    
        setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
      };

    function handleGetdata() {
        getdata(inputs.bookname)
    }

    const handleSortChange = () => {
        if (inputs.sort === 'Newest') {
          sortOldest()
        }
        if (inputs.sort === 'Oldest') {
          sortNewest()
        }
      };

  return (
    <>
    <input
        className='header__input'
        name='bookname'
        type="text"
        onChange={(e) => handleInputs(e)}></input>
    <button className='header__btn' onClick={handleGetdata}>Search</button>

    <select className='header__select' 
            name="sort" 
            value={inputs.sort}        
            onChange={(e) => {handleInputs(e);handleSortChange();}}>
        
        <option value="Newest">Newest</option>
        <option value="Oldest">Oldest</option>
    </select>
    </>

  );
}

export default Search;