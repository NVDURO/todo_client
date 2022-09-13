import { useDispatch } from "react-redux";
import { setTodoList, updateTodo, deleteTodo, addTodo } from "../slices/todoSlice";
import { getStandardConfig } from "../../../utils/get-standard-config";
import fetch from "isomorphic-fetch";

export default function useTodo() {
    const dispatch = useDispatch();
    const fetchTodoList = async () => {
        const { data } = await (await fetch("http://localhost:3001/todo")).json();
        dispatch(setTodoList(data));
        return data;
    }

    const updateTodoItem = async (id, text) => {
        const config = getStandardConfig({ method: "PUT", body: { text } });
        await (await fetch(`http://localhost:3001/todo/${id}`, config)).json();
        dispatch(updateTodo({ id, text }));
    }

    const deleteTodoItem = async (id) => {
        const config = getStandardConfig({ method: 'DELETE' });
        await (await fetch(`http://localhost:3001/todo/${id}`, config)).json();
        dispatch(deleteTodo(id));
    }

    const createTodo = async (todo) => {
        const config = getStandardConfig({ method: "POST", body: { text: todo } });
        const { data } = await (await fetch("http://localhost:3001/todo", config)).json();
        dispatch(addTodo(data));
    }

    return { fetchTodoList, updateTodoItem, deleteTodoItem, createTodo }
}
