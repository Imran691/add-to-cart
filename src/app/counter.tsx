"use client"

import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from './store/slice/counterSlice';
import { RootState } from './store/store';

const CounterView = () => {

    const despatch = useDispatch()

    const counterValue = useSelector( (state: RootState) => state.cart.);

    const increment = () => {
        despatch(counterActions.increment())
    };
  
    const decrement = () => {
        despatch(counterActions.decrement())
    };
  
  return (
    <div className="flex space-x-3 py-4 items-center">
    <button
      className="p-2 rounded-md bg-green-300"
      onClick={increment}
    >
      Increment
    </button>
    <div>Counter Value {counterValue}</div>
    <button className="p-2 rounded-md bg-red-300" onClick={decrement}>
      Decrement
    </button>
  </div>
  )
}

export default CounterView