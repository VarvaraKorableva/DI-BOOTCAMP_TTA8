import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/actions';

const TaskForm = () => {

  const tasks = useSelector((state) => state.tasks.task || []); 
  const dispatch = useDispatch();
  const [task, setTask] = useState('');
  const [selectedDay, setSelectedDay] = useState('Monday')
  const handleAddTask = () => {
    dispatch(addTask({type: 'add', day: selectedDay, task: { id: Date.now(), text: task, completed: false } }));
    setTask('');
  };

  return (
    <div>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text} </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskForm;