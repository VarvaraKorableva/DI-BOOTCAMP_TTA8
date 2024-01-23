import React from 'react';
import './InfoTable.css';

function InfoTable({inputs}) {

  return (
    <div className='body'>
      <h2 className='title'>Entered information:</h2>
      <p>Your name: {inputs.firstname}</p>
      <p>Your Last Name: {inputs.lastname}</p>
      <p>Your age: {inputs.age}</p>
      <p>Your gender: {inputs.gender}</p>
      <p>Your destination: {inputs.destination}</p>
      <p>Your dietary restrictions: </p>
      <p>Nuts free: {inputs.nutsFree ? 'Yes' : 'No'}</p>
      <p>Lactose free: {inputs.lactoseFree ? 'Yes' : 'No'}</p>
      <p>Vegan free: {inputs.isVegan ? 'Yes' : 'No'}</p>
    </div>
  );
}

export default InfoTable;