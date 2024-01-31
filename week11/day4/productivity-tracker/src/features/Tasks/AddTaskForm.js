import {useState} from 'react'
import { useDispatch } from 'react-redux'
import {addTask} from './tasksSlice'

function AddTaskForm() {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')

    function handleInputValue(e) {
        setTitle(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(addTask(title))
        setTitle('')
    }

    
    
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input name="title" type="text" value={title} onChange={handleInputValue}></input>
            <button type="submit">Create</button>
        </form>
    )
}

export default AddTaskForm;