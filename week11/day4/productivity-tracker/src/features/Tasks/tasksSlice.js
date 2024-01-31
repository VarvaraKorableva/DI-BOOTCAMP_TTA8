import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.tasks.unshift(action.payload);
      },
      prepare(title, body) {
        return {
          payload: {
            id: nanoid(),
            title,
            completed: false,
          },
        };
      },
    },
    editTask: (state, action) => {
      const { title } = action.payload;
      const task = state.tasks.find(task => task.id === action.payload.id);
      if (task) {
        task.title = title;
      } 
    },
    deleteTask: (state, action) => {
      const { id } = action.payload;
      state.tasks = state.tasks.filter(task => task.id !== id);
    },
    updateTaskProgress: (state, action) => {
      const taskId = action.payload;
      const task = state.tasks.find(task => task.id === taskId);
      if (task) {
        task.completed = !task.completed;
      } 
    },
  },
});

export const { addTask, editTask, deleteTask, updateTaskProgress } = tasksSlice.actions;
export default tasksSlice.reducer;