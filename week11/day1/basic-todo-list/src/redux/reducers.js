const initialState = {
    todos: []
}

export const ADD_TODO = 'add'
export const TOGGLE_TODO = 'toggle'
export const REMOVE_TODO = 'remove'

export const todoReducer = (state=initialState, action) => {
    if(action.type === ADD_TODO) {
        return {
            todos: [...state.todos, { id: Date.now(), text: action.payload, completed: false }]
        }
    }else if(action.type === TOGGLE_TODO) {
        return {
            todos: state.todos.map(todo =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            )
        };
    }else if(action.type === REMOVE_TODO) {
        return {
            todos: state.todos.filter(todo => todo.id !== action.payload)
        };
    }
    return { ...state }
}
export default todoReducer;
