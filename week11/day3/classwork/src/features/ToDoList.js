import {useSelector, useDispatch} from 'react-redux'
import {addTask,  taggleTask, removeTask} from './ToDoSloce'
import {useState} from 'react'

const ToDoList = (props) => {
    const [text, setText] = useState('')
    const tasks = useSelector(state => state.todos)
    const dispatch = useDispatch()

    return ( 
        <div>
            <h2>Todo List:</h2>
            <div>
                <input 
                    placeholder="Add task" 
                    onChange={(e)=> setText(e.target.value)}/>
                <button onClick={() => dispatch(addTask({ text }))}>Add Task</button>
            </div>
            <div>
                {tasks.map(task => {
                    return(
                        <div key={task.id}>
                            <input type="checkbox" checked={task.compteted} onChange={()=> dispatch( taggleTask(task.id))}></input>
                            <span style={{textDecoration: task.completed ? 'line-through':''}}>
                                {task.text}
                            </span>
                            <button onClick={()=> dispatch(removeTask(task.id))}> - </button>
                        </div>
                    )
                })}
            </div>
        </div>   

    )

}

export default ToDoList;