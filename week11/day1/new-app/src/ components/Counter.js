import {connect, useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from '../redux/actions.js'

const Counter = (props) => {
    //const countA = useSelector((state) => state.counter.count)
    //const textA = useSelector((state)=> state.counter.text)

    const {count, text} = useSelector((state) => state.counter)

    const dispatch = useDispatch()

    return (
        <>
        <div>Count: {count}  <p>{text}</p></div>   
        
        
        <button onClick={()=> dispatch({type:'increment', payload:1})}>+</button>
        <button onClick={()=> dispatch({type:'decrement', payload:1})}>-</button>
        </>
    )
}
/*
const mapStateToProps = (state) => {
    console.log('storeState=>', state)
    return {
        myCount: state.counter.count,

    }
}
const mapDispatchToProch = (dispatch) => {
    return {
        setCount: (val) => dispatch(increment(val)),
        dec: (val) => dispatch(decrement(val, 'Decrement by' + val))
    }
}*/
export default Counter;