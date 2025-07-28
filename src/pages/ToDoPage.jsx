import React from 'react';
import CreateToDo from '../components/Todo/CreateTodo'
import ToDoList from '../components/Todo/ToDoList';


const ToDoPage = () => {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-12'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4>My Todo</h4>
                        </div>
                        <div className='card-body'>
                             <CreateToDo/>
                            
                        </div>
                    </div>
                  <ToDoList/>
                </div>
            </div>
            
        </div>
    );
};

export default ToDoPage;