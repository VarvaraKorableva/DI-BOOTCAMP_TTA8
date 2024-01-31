import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: {
      reducer(state, action) {
        state.categories.push(action.payload);
      },
      prepare(name) {
        return {
          payload: {
            id: nanoid(),
            name,
          },
        };
      },
    },
    editCategory: (state, action) => {
      const { id, name } = action.payload;
      const category = state.categories.find(category => category.id === id);
      if (category) {
        category.name = name;
      }
    },
    deleteCategory: (state, action) => {
      const { id } = action.payload;
      state.categories = state.categories.filter(category => category.id !== id);
    },
  },
});

export const { addCategory, editCategory, deleteCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;