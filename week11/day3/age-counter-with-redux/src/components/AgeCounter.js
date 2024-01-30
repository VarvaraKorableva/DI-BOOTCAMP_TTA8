import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ageUpAsync, ageDownAsync } from '../actions/ageActions';
import logo from '../logo.svg';

const AgeCounter = () => {
  const dispatch = useDispatch();
  const age = useSelector((state) => state.age.age);
  const loading = useSelector((state) => state.age.loading);

  return (
    <div>
      <h2>Age: {age}</h2>
      {loading && <img src={logo} alt="loading" />}
      <button onClick={() => dispatch(ageUpAsync())}>Increment</button>
      <button onClick={() => dispatch(ageDownAsync())}>Decrement</button>
    </div>
  );
};

export default AgeCounter;