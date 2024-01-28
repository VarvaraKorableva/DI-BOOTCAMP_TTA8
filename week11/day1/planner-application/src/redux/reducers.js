const initialState = {
    tasks: [
      {
        id: 1,
        date: '2024-01-30',
        text: 'Example Task',
        completed: false,
        
      },
    ],
  };
  
  export const ADD_TASK = 'add';
  export const TOGGLE_TASK = 'toggle';
  export const REMOVE_TASK = 'remove';

  export const taskReducer = (state = initialState, action) => {
    if (action.type === ADD_TASK) {
      const { date, task } = action.payload;
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: Date.now(),
            date: date,
            text: task.text,
            completed: false
          }
        ]
      };
    } else if (action.type === TOGGLE_TASK) {
        return {
            tasks: state.tasks.map(task =>
                task.id === action.payload ? { ...task, completed: !task.completed } : task
            )
        };
    } else if (action.type === REMOVE_TASK) {
        return {
            tasks: state.tasks.filter(task => task.id !== action.payload)
        };
    }
  
    return state;
  };

  export default taskReducer;