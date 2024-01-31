import './App.css';
import TaskList from './features/Tasks/TaskList'
import AddTaskForm from './features/Tasks/AddTaskForm'
import AddCategoryForm from './features/Category/AddCategoryForm'
import CategorySelector from './features/Category/CategorySelector'
import { Route, Routes, useNavigate } from 'react-router-dom'

function App() {
  return (
    <div className="App">


      <Routes>
        <Route
        path="/task-list"
        element={
          <>
          <AddTaskForm/>
          <TaskList/>
          </>
        }>
        </Route>
        <Route
        path="/"
        element={
          <>
          <AddCategoryForm/>
          <CategorySelector/>
          </>
          
        }>
        </Route>

      </Routes>  
    </div>
  );
}

export default App;
