import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DefaultButton from "../../components/DefaultButton";
import DefaultConfirmModal from "../../components/DefaultConfirmModal";
import DefaultModal from "../../components/DefaultModal";
import DefaultUpdateModal from "../../components/DefaultUpdateModal";
import TodoTable from "../../components/TodoTable";
import useTodo from "./hooks/useTodo";
import { selectTodoList } from "./slices/todoSlice";

export default function MainTodoComponent() {
    const todoList = useSelector(selectTodoList);
    const { fetchTodoList, createTodo, deleteTodoItem, updateTodoItem } = useTodo();
    const [showCreateTodoModal, setShowCreateTodoModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [onDeleteId, setOnDeleteId] = useState();
    const [onUpdateTodo, setOnUpdateTodo] = useState({});

    const handleSubmit = async (text) => {
        await createTodo(text);
        setShowCreateTodoModal(false);
    };

    const handleDelete = async () => {
        await deleteTodoItem(onDeleteId);
        setShowDeleteModal(false);
    };
    const handleUpdate = async (text) => {
        await updateTodoItem(onUpdateTodo.id, text);
        setShowUpdateModal(false);
    };

    useEffect(() => {
        fetchTodoList();
    }, []);

    return (
        <>
            <DefaultModal showModal={showCreateTodoModal} setShowModal={setShowCreateTodoModal} handleSubmit={handleSubmit} />
            <DefaultConfirmModal setShowModal={setShowDeleteModal}  showModal={showDeleteModal} handleConfirm={handleDelete} />
            <DefaultUpdateModal setShowModal={setShowUpdateModal} showModal={showUpdateModal} handleSubmit={handleUpdate} defaultText={onUpdateTodo?.text} />
            <div className="min-h-screen bg-gray-100 text-gray-900">
                <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
                    <div>
                        <h1 className="text-xl font-semibold">Todo App</h1>
                    </div>
                    <div className="mt-2">
                        <DefaultButton
                            text="Create todo"
                            onClick={() => { setShowCreateTodoModal(true) }}
                        />
                    </div>
                    <div className="mt-4">
                        {
                            (todoList.length > 0) && <TodoTable 
                                list={todoList}
                                onDelete={ (id) => { setOnDeleteId(id); setShowDeleteModal(true) }}
                                onUpdate={ (todo) => { setOnUpdateTodo(todo); setShowUpdateModal(true) }}
                            />
                        }
                        {
                            (!todoList.length) && <h2 className="text-md">There are no items</h2>
                        }
                    </div>
                </section>
            </div>
        </>
    );
}