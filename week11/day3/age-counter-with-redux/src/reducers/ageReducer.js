const initialState = {
    age: 20,
    loading: false,
  };
  
  const ageReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'age/increment':
        return { ...state, age: state.age + action.payload, loading: false };
      case 'age/decrement':
        return { ...state, age: state.age - action.payload, loading: false };
      case 'age/loading':
        return { ...state, loading: true };
      default:
        return state;
    }
  };
  
  export default ageReducer;