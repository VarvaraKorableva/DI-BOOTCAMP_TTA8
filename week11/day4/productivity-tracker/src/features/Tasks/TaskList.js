import React from 'react';
import { useSelector } from 'react-redux';
//import { selectTasksByCategory } from './createSelector';
import TaskItem from './TaskItem';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task}/>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;