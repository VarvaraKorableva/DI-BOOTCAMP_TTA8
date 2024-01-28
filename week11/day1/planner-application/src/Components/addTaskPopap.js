import React, { useState } from 'react';
import './styles.css'
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/actions';

function AddTaskPopap({  isOpen, closeAllPopups }) {
    const [text, setText] = useState('')
    const [date, setDate] = useState('')

    const tasks = useSelector((state) => state.tasks.tasks);
    
    const dispatch = useDispatch();

    const handleAddTask = () => {
        dispatch(addTask({ date: date, task: { id: Date.now(), text: text, completed: false } }));
      };

    function handleSubmit(e) {
        e.preventDefault()
        handleAddTask()
        closeAllPopups()
        console.log(tasks)
        console.log(text)
        console.log(date)
    }

    function handleEventChange(e) {
        setText(e.target.value)
    }

    function onClose() {
        closeAllPopups()
    }

    function handleDateOfEventChange(e) {
        setDate(e.target.value) 
    }

    return (
      
      <div className={`add-new-date-popup ${isOpen && 'add-new-date-popup__opened'}`}>
  
      <div className="add-new-date-popup__container">
      <button 
        className="add-new-date-popup__close-button" 
        type="button" 
        onClick={onClose}>
      </button>
        <form 
          className='add-new-date-popup__form'
          onSubmit={handleSubmit}>
          <textarea
            className='add-new-date-popup__input'
            name='taskText'
            type='text'
            value={text}
            placeholder='Add new task here'
            onChange={handleEventChange}
          ></textarea>

          <input
            className='add-new-date-popup__input-date'
            name='date'
            type='date'
            lang="en"
            
            placeholder="Date of event"
            onChange={handleDateOfEventChange}
          ></input>


          <button 
            type='submit'
            className='add-new-event-popup__btn_active'
          >
            Add new task
          </button>
        </form>  
      </div>
      </div>
    )
  }
  
export default AddTaskPopap;