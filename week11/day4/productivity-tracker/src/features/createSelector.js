import { createSelector } from '@reduxjs/toolkit';

export const selectTasksByCategory = (state, categoryId) =>
  state.tasks.filter(task => task.categoryId === categoryId);

export const selectCompletedTasks = createSelector(
  state => state.tasks,
  tasks => tasks.filter(task => task.completed).length
);

export const selectCategoryById = (state, categoryId) =>
  state.categories.find(category => category.id === categoryId);