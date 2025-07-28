import React from 'react';
import Counter from '../components/counter/Counter';

const CounetrPage = () => {
    return (
        <div className='container mt-5'>
            <div className='row d-flex justify-content-center'>
                <div className='col-md-5'>
                    <Counter/>
                </div>
            </div>
            
        </div>
    );
};

export default CounetrPage;