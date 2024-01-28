import logo from './logo.svg';
import './App.css';
//import TaskForm from './Components/TaskForm'
//<TaskForm></TaskForm>
import DatePicker from './Components/DatePicker'
import AddTaskPopap from './Components/addTaskPopap.js'
import React from 'react'

function App() {

  const [isAddTaskPopap, setIsAddTaskPopap] = React.useState(false)

  function handleAddTaskPopapClick(){
    setIsAddTaskPopap(true)
  }

  function closeAllPopups() {
    setIsAddTaskPopap(false)
  }

  return (
    <div className="App">
      <DatePicker
        handleAddTaskPopapClick={handleAddTaskPopapClick}/>
      <AddTaskPopap 
        closeAllPopups={closeAllPopups}
        isOpen={isAddTaskPopap}
      />
    </div>
  );
}

export default App;
