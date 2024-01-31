//import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {useState} from 'react'
import { editTask, updateTaskProgress, deleteTask } from './tasksSlice';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();

  const [isEditBtnClicked, setIsEditBtnClicked] = useState(false)
  const [newTitle, setNewTitle] = useState('')

  
  function handleEditProgressTask() {
    dispatch(updateTaskProgress({id: task.id}))
  }

  function handleDeleteTask() {
    dispatch(deleteTask({ id: task.id }));
  }

  function handleEditTaskClick() {
    setIsEditBtnClicked(true)
  }

  function handleInput(e) {
    setNewTitle(e.target.value)
  }

  function handleEditTask(e) {
    e.preventDefault()
    dispatch(editTask({id: task.id, title: newTitle}))
    setNewTitle('')
  }

  return (
    <li>
      <p>{task.title}</p>
      <input type="checkbox" checked={task.compteted} onChange={handleEditProgressTask}></input>
      <button onClick={handleDeleteTask}>Delete Task</button>

      {isEditBtnClicked?
      <form onSubmit={handleEditTask}>
        <input type='text' name='newTitle' onChange={handleInput} value={newTitle}></input>
        <button type='submit'>Edit</button>
      </form>
      :
      <button onClick={handleEditTaskClick}>Edit Task</button>
      }
    </li>
  );
};

export default TaskItem;