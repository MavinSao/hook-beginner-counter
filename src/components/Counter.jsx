import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { asynceInc, decrement, increment } from '../redux/actions/action'
function Counter() {

  //Hook only work in function component  
  const dispatch = useDispatch()
  const counter = useSelector(state => state.count)

  return (
    <div>
        <h1>Count: {counter}</h1>
        <button onClick={()=>dispatch(increment())}>+</button>
        <button onClick={()=>dispatch(decrement())}>-</button>
        <button onClick={()=>dispatch(asynceInc())}>Async Increase</button>
    </div>
  )
}

export default Counter
