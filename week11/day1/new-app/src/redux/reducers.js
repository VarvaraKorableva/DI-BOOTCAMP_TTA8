const initialState = {
    count: 0,
    text: 'Hello'
}

export const INCREMENT = 'increment'
export const DECREMENT = 'decrement'

export const counterReducer = (state=initialState, action) => {
    if(action.type === INCREMENT) {
        return { ...state, count: state.count + action.payload }
    }else if(action.type === DECREMENT) {
        return { ...state, count: state.count - action.payload }
    }
    return { ...state }
}
