import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/slices/todoSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer
  },
});
