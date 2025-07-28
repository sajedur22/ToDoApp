// src/redux/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../state/counter/counterslice';
import todoSlice from '../state/ToDo/ToDoSlice';

// ✅ LocalStorage থেকে লোড
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('todoState');
    if (!serializedState) return undefined;

    const parsedState = JSON.parse(serializedState);

    if (!parsedState.value) {
      parsedState.value = [];
    }

    return parsedState;
  } catch {
    return undefined;
  }
};


// ✅ LocalStorage তে Save
const saveState = (todoState) => {
  try {
    const serializedState = JSON.stringify(todoState);
    localStorage.setItem('todoState', serializedState);
  } catch {
    // ignore write errors
  }
};


const preloadedState = {
  todo: loadState() || { value: [] },  // <-- এখানে 'value'
};

const store = configureStore({
  reducer: {
    counter: counterSlice,
    todo: todoSlice,
  },
  preloadedState,
});

store.subscribe(() => {
  saveState(store.getState().todo);
});

export default store;
