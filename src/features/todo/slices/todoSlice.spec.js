import todoReducer, {
    setTodoList,
    updateTodo,
    deleteTodo,
} from "./todoSlice";

const mockedTodoList = [
    { id: 1, text: "foo" },
    { id: 2, text: "bar" },
    { id: 3, text: "baz" },
];

const mockedDeleteTodoList = [
    { id: 1, text: "foo" },
    { id: 2, text: "bar" },
];

describe('todo reducer', () => {
    it('should handle initial state', () => {
        expect(todoReducer(undefined, { type: 'unknown' })).toEqual({
            todoList: [],
        });
    });

    it('should handle set todo list', () => {
        const actual = todoReducer({ todoList: mockedTodoList }, setTodoList(mockedTodoList));

        expect(JSON.stringify(actual.todoList)).toEqual(JSON.stringify(mockedTodoList));
    });

    it('should handle update todo list', () => {
        const actual = todoReducer({ todoList: mockedTodoList }, updateTodo({ id: 1, text: "updated" }));
        expect(actual.todoList[0].text).toEqual("updated");
    });

    it('should handle delete todo list', () => {
        const actual = todoReducer({ todoList: mockedTodoList }, deleteTodo(3));
        expect(JSON.stringify(actual.todoList)).toEqual(JSON.stringify(mockedDeleteTodoList));
    });
});
