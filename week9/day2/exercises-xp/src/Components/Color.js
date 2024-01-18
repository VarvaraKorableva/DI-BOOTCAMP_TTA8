import React from "react"


function Color() {
  const [favoriteColor, setFavoriteColor] = React.useState('red')
  

  React.useEffect(() => {
    alert('useEffect reached')
    setFavoriteColor('yellow')
  }, [])

  const changeColor = () => {
    setFavoriteColor('blue')
  }

  return (
    <>
        <h1>My favorite Color is {favoriteColor}</h1>
        <button onClick={changeColor} >change color</button>
    </>
  );
}

export default Color;