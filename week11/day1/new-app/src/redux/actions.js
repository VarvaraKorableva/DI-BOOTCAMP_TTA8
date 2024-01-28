import {INCREMENT, DECREMENT} from './reducers.js'

export const increment = (value) => {
    return {
        type:INCREMENT,
        payload: value,
      
    }
}

export const decrement = (value, text) => {
    return {
        type:DECREMENT,
        payload: value,
        text: text,
      
    }
}