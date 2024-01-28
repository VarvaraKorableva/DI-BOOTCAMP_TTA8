import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../redux/actions.js';

const ToDoContainer = () => {
    const [textFromInput, setTextFromInput] = useState('');
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();

    return (
        <>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => dispatch(toggleTodo(todo.id))}
                        />
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                            {todo.text}
                        </span>
                        <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
                    </li>
                ))}
            </ul>

            <div>
                <input
                    type="text"
                    value={textFromInput}
                    onChange={(e) => setTextFromInput(e.target.value)}
                />
                <button onClick={() => dispatch(addTodo(textFromInput))}>Add Todo</button>
            </div>
        </>
    );
};

export default ToDoContainer;