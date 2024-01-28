import {ADD_TASK, TOGGLE_TASK, REMOVE_TASK} from './reducers.js'

export const addTask = (payload) => ({
    type: ADD_TASK,
    payload
});

export const toggleTask = (id) => ({
    type: TOGGLE_TASK,
    payload: id
});

export const removeTask = (id) => ({
    type: REMOVE_TASK,
    payload: id
});