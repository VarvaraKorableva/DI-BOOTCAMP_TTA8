import React from "react"


function Phone() {
  const [brand, setBrand] = React.useState('Samsung')
  const [model, setModel] = React.useState('Galaxy S20')
  const [color, setColor] = React.useState("black")
  const [year, setYear] = React.useState(2020)

  const changeColor = () => {
    setColor('blue')
  } 

  return (
    <>
        <h2>My phone is a {brand}</h2>
        <p>It is a {color} {model} from {year}</p>
        <button onClick={changeColor}>Change color</button>
    </>
  );
}

export default Phone;