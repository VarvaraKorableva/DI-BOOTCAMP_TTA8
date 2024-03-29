import data from '../../data.js'
import React from 'react'
import './tablet'

function Tablet() {
  const [quote, setQuote] = React.useState('')
  const [author, setAuthor] = React.useState('')
  const [color, setColor] = React.useState('blue')

  function getRandomIndex(max) {
    return Math.floor(Math.random() * max)
  }

  function getRandomColor() {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
  }

  React.useEffect(() => {
    handleClick()
  },[])

  function handleClick() {
    const newArr = []
    const randomIndex = getRandomIndex(data.length)
    const color = getRandomColor()

    if (!(newArr.includes(data[randomIndex]))) {
        newArr.push(data[randomIndex])
        setQuote(data[randomIndex].quote)
        setColor(color)

        if(data[randomIndex].author === "") {
            setAuthor('Unknown')
        }else {
            setAuthor(data[randomIndex].author)
        }
    } else {
        return
    }
  }

  return (
    <div className='container-wrapper' style={{ backgroundColor: color, minHeight: '100vh', display: 'flex', justifyContent: 'center' }}>
        <div style={{ backgroundColor: '#fff', maxWidth: '520px', height: 'fit-content', borderRadius: '10px', border: '1px solid #917e7e', display: 'flex', flexDirection: 'column', marginTop: '100px' }}>
            <h1 className='quote' style={{ color: color, margin: '20px' }}>"{quote}"</h1>
            <p style={{ alignSelf: 'flex-end', paddingRight: '20px', fontStyle: 'italic', color: color}}>-{author}-</p>
            <button className='btn' onClick={handleClick} style={{ alignSelf: 'flex-end',backgroundColor: color, margin: '20px', borderRadius: '5px', width: '100px', height: '35px', cursor: 'pointer' }}>New quote</button>
        </div>
    </div>

  );
}

export default Tablet;
