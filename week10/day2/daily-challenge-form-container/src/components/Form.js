import React from 'react';
import './Form.css';
import InfoTable from './InfoTable'

function Form() {
  const [inputs, setInputs] = React.useState({
    firstname: '',
    lastname: '',
    age: '',
    gender: '',
    destination: '',
    nutsFree: false,
    lactoseFree: false,
    isVegan: false,
  });

  const handleInputs = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    const name = e.target.name;

    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form values:', inputs);
  };

  return (
    <>
      <h2 className='title'>Sample form</h2>
      <form className='form' onSubmit={handleSubmit}>
        <input
          className='input'
          type="text"
          name="firstname"
          placeholder="First Name"
          onChange={(e) => handleInputs(e)}
        />
        <input
          className='input'
          type="text"
          name="lastname"
          placeholder="Last Name"
          onChange={(e) => handleInputs(e)}
        />
        <input
          className='input'
          type="text"
          name="age"
          placeholder="Age"
          onChange={(e) => handleInputs(e)}
        />
        <label>
          <input type="radio" name="gender" value="male" onChange={(e) => handleInputs(e)} />
          Male
        </label>
        <label>
          <input type="radio" name="gender" value="female" onChange={(e) => handleInputs(e)} />
          Female
        </label>
        <label htmlFor="destination">Select your destination</label>
        <select name="destination" id="destination" onChange={(e) => handleInputs(e)}>
          <option>--Please Choose a destination--</option>
          <option value="Thailand">Thailand</option>
          <option value="Japan">Japan</option>
          <option value="Brazil">Brazil</option>
        </select>
        <label className='dietary__subtitle'>Dietary restrictions</label>
        <div>
          <input type="checkbox" id="nutsFree" name="nutsFree" onChange={(e) => handleInputs(e)} />
          <span htmlFor="nutsFree">Nuts Free</span>
          <br />
          <input type="checkbox" id="lactoseFree" name="lactoseFree" onChange={(e) => handleInputs(e)} />
          <span htmlFor="lactoseFree">Lactose free</span>
          <br />
          <input type="checkbox" id="isVegan" name="isVegan" onChange={(e) => handleInputs(e)} />
          <span htmlFor="isVegan">Vegan</span>
          <br />
        </div>
        <button type="submit" className='btn'>
          Submit
        </button>
      </form>
      <InfoTable inputs={inputs}/>
    </>
  );
}

export default Form;