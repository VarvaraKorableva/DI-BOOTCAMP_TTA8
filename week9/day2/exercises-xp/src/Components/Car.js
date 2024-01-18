import React from "react"
import Garage from './Garage.js'

function Car({carinfo}) {
  const [color, setColor] = React.useState('red')
  const size = 'small'
  return (
    <header>
        <h3>This car is {color} {carinfo.model}</h3>
        <Garage size={size}/>
    </header>
  );
}

export default Car;