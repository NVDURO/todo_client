import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoList: [],
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setTodoList: (state, { payload }) => {
            state.todoList = [...payload];
        },
        deleteTodo: (state, { payload }) => {
            const deleted = state.todoList.find(t => t.id === payload);
            const index = state.todoList.indexOf(deleted);
            state.todoList.splice(index, 1);
        },
        updateTodo: (state, { payload }) => {
            const { id, text } = payload;
            const newState = [...state.todoList];
            const index = state.todoList.findIndex(todo => todo.id === id);
            newState[index] = { ...newState[index], text };
            state.todoList = [...newState];
        },
        addTodo: (state, { payload }) => {
            state.todoList = [...state.todoList, payload];
        }
    },
});

export const { setTodoList, deleteTodo, updateTodo, addTodo } = todoSlice.actions;

export const selectTodoList = (state) => state.todo.todoList;

export default todoSlice.reducer;
