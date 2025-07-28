
import Swal from 'sweetalert2';
import store from '../../redux/store/store';
import { EditTodo } from '../../redux/state/ToDo/ToDoSlice';

export function TodoEditAlrt(i,item){
    Swal.fire({
  title: "Edit Task",
  input:"text",
  inputValue:item,
  inputValidator:(value)=>{
    if(value){
        store.dispatch(EditTodo({index:i,task:value}))
    }
  }
  
})

  }

