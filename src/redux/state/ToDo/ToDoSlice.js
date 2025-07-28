import { createSlice } from '@reduxjs/toolkit';

export const ToDoSlice=createSlice({
    name:"todo",
    initialState:{
        value:[],
    },
    reducers:{
     AddTodo: (state, action) => {
  state.value.push({
    name: action.payload,
    completed: false,
    });
   },


        RemoveTodo:(state,action)=>{
            state.value.splice(action.payload,1)
        },
        EditTodo:(state,action)=>{
          state.value.splice(action.payload['index'],1,action.payload['task']
          )
        },
        toggleComplete: (state, action) => {
  const index = action.payload;
  const todo = state.value[index];
  if (todo) {
    todo.completed = !todo.completed;
  }
}

    }
})

export const { AddTodo, RemoveTodo, EditTodo,toggleComplete } = ToDoSlice.actions;
export default ToDoSlice.reducer;