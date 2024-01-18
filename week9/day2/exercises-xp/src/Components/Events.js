import React from "react"


function Events() {
    const [isToggleOn, setIsToggleOn] = React.useState(true)
    const [textOfBtn, setTextOfBtn] = React.useState('ON')

    const clickMe = () => {
        alert('I was clicked')
    }

    const handleKeyDown = () => {
        alert('React')
    }  
    
    const handleClick = () => {
        setIsToggleOn(false)
        setTextOfBtn('OFF')
    }

  return (
    <>
        <button onClick={clickMe}>clickMe</button>
        <input onKeyDown={handleKeyDown}></input>
        <button onClick={handleClick}></button>
    </>
  );
}

export default Events;