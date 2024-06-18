/* eslint-disable @typescript-eslint/no-unused-vars */

import {useContext, createContext} from 'react';

export interface TodoItem {
    id:string;
    message:string;
}

interface Todo {
    todos:Array<TodoItem>, 

    editTodo(todo:TodoItem):void,
    savetodo(todo:TodoItem):void,
    removeTodo(id:string):void
}

const TodoContext = createContext<Todo>({
    todos: [{
        id:"1",
        message:"todo",
    }],
    editTodo(todo) {},
    savetodo(todo) {},
    removeTodo(id) {},
});

export const TodoContextProvider = TodoContext.Provider;

export default function useTodo() {
    return useContext(TodoContext);
}