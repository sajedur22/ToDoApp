import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NoData from '../Notfound/NotFound';
import { TodoRemoveAlrt } from '../Todo/Removetodo';
import { TodoEditAlrt } from '../Todo/EditTodo';
import { toggleComplete } from '../../redux/state/ToDo/ToDoSlice'; 
import {FilterIconDropdown} from '../Todo/FilterIcone'

const ToDoList = () => {
  const dispatch = useDispatch();
  const todoitem = useSelector((state) => state.todo?.value ?? []);
  const [filter, setFilter] = useState("all");

  const filteredTodos = todoitem.filter((item) => {
    if (filter === "completed") return item.completed;
    if (filter === "incomplete") return !item.completed;
    return true;
  });



 
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-12'>

            {/* Filter Buttons */}
             
              <div className="m-3 d-flex flex-wrap gap-2">
                <FilterIconDropdown filter={filter} setFilter={setFilter} />
              
              </div>


            <div className="table-responsive">
              <table className='table'>
                <thead className="text-dark">
                  <tr>
                    <th>No</th>
                    <th>Task</th>
                    <th>Status</th>
                    <th>Edit</th>
                    <th>Remove</th>
                  </tr>
                </thead>
           
                <tbody>
  {
    filteredTodos.length === 0 ? (
      <tr>
        <td colSpan="5" className="text-center text-muted">No matching tasks found.</td>
      </tr>
    ) : (
      filteredTodos.map((item, i) => (

        
        <tr key={i.toString()}>
          <td>{i + 1}</td>
          <td className={item.completed ? "text-decoration-line-through text-muted" : ""}>
            {typeof item === 'object' ? item.name ?? "No Name" : item}
          </td>
          <td>
            <button
              onClick={() => dispatch(toggleComplete(i))}
              className={`btn btn-sm ${item.completed ? 'btn-success' : 'btn-secondary'}`}>
              {item.completed ? "Completed" : "Incomplete"}
            </button>
          </td>
          <td>
            <button onClick={() => TodoEditAlrt(i, item)} className='btn btn-sm btn-dark'>
              Edit
            </button>
          </td>
          <td>
            <button className='btn btn-sm btn-danger' onClick={() => TodoRemoveAlrt(i)}>
              Remove
            </button>
          </td>
        </tr>
      ))
    )
  }
</tbody>

              </table>
            </div>

          </div>
        </div>
      </div>
    );
  
};

export default ToDoList;
