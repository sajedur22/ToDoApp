import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { AddTodo } from '../../redux/state/ToDo/ToDoSlice';


const CreateToDo = () => {
    const dispatch=useDispatch()
const inputtask=useRef()

    const Addtodo=()=>{
        dispatch(AddTodo((inputtask.current.value)));
        inputtask.current.value=''
    }
    return (
        <div className='container-fluid'>
            <div className='row g-2'>
                <div className='col-10 col-md-10 col-sm-10'>
                    <input ref={inputtask}  placeholder='task name' type='text' className='form-control'/>
                </div>
                <div className='col-12 col-md-2 col-sm-2'>
                    <button className="btn btn-sm btn-custom-navy"  onClick={Addtodo}>Add To Do</button>
                </div>
            </div>
        </div>
    );
};

export default CreateToDo;