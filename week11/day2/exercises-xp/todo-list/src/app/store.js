import {configureStore} from '@reduxjs/toolkit'

import todoReducer from '../features/ToDoSloce'

const store = configureStore({
    reducer: {
        todos: todoReducer,
    }
})

export default store;