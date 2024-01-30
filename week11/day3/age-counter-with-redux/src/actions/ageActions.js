import { createAsyncThunk } from '@reduxjs/toolkit';

export const ageUpAsync = createAsyncThunk('age/ageUpAsync', async (_, { dispatch }) => {
  dispatch(loading());
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return 1;
});

export const ageDownAsync = createAsyncThunk('age/ageDownAsync', async (_, { dispatch }) => {
  dispatch(loading()); 
  await new Promise((resolve) => setTimeout(resolve, 1000)); 
  return -1;
});

export const loading = () => ({
  type: 'age/loading',
});