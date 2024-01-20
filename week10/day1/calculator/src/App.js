import './App.css';
import React from 'react'

function App() {
  const [result, setResult] = React.useState('')
  const [firstValue, setFirstValue] = React.useState('')
  const [secondValue, setSecondValue] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [isValid, setIsValid] = React.useState(false)


  function handleAdd(a,b) {
    return a + b
  } 

  function handleClick() {
    const data = handleAdd(parseInt(firstValue), parseInt(secondValue))
    if(isNaN(data)) {
      setIsValid(false)
      setMessage("You must to enter numbers")
    } else {
      setResult(data)
      setIsValid(true)
      setMessage("")
    }
  }

  function handleFirstInputChange(event) {
    if(isNaN(event.target.value)){
      return setMessage('You must to enter only numbers')
    } else {
      setFirstValue(event.target.value)
      setMessage('')
    }
  }

  function handleSecondChange(event) {
    if (isNaN(event.target.value)) {
      return setMessage('You must to enter only numbers')
    } else {
      setSecondValue(event.target.value)
      setMessage('')
    }
  }

  return (
      <div className="container">
        <h1 className='title'>Adding Two Numbers</h1>
        <div>
          <input className='input' value={firstValue} onChange={handleFirstInputChange}></input>
          <input className='input' value={secondValue} onChange={handleSecondChange}></input>
        </div>
        <button className='btn' onClick={handleClick} disabled={isValid}>Add Them!</button>
        <p>{message}</p>
        <p className='result'>{result}</p>
      </div>
  );
}

export default App;
