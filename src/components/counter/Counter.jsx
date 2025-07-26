import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../redux/state/counter/counterslice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  console.log(count) //  Works because reducer name is 'counter'
  const dispatch = useDispatch();

  return (
    <div className="card">
        <div className='card-header bg-secondary'>
            <h4>Counter App</h4>
        </div>
        <div className='card-body'>
            <h2>Count: {count}</h2>

            <div className='my-4'>
                <button className="btn btn-success m-2" onClick={() => dispatch(increment())}>
        ➕ Increment
      </button>
      <button className="btn btn-danger m-2" onClick={() => dispatch(decrement())}>
        ➖ Decrement
      </button>
            </div>
        </div>
      
        
      
    </div>
  );
};

export default Counter;
