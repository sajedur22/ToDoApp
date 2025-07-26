import React from 'react';

const Counter = () => {
    return (
        <div className='card '>
            <div className='card-header bg-secondary text-white'>
                <h5>Counter App</h5>
            </div>
            <div className='card-body '>
                <h5>00</h5>
            </div>
            <div className='m-4'>
               <button className='btn btn-success'>Increase</button>
               <button className='m-2 btn btn-success'>Decrease</button>
            </div>

            
        </div>
    );
};

export default Counter;