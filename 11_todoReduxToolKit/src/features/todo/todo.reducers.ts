import { PayloadAction } from "@reduxjs/toolkit";
import { TodoItem } from "./todo.slice";

//@ts-expect-error state
const addTodo = (state,action:PayloadAction<TodoItem>) => {
    if(action.payload) {
        state.todo.push(action.payload);
    }
}

//@ts-expect-error state
const editTodo = (state, action:PayloadAction<TodoItem>) => {
    state.todo.map((item:TodoItem) => {
        return item.id === action.payload.id ? item.message = action.payload.message : item;
    })
}

//@ts-expect-error state
const removeTodo = (state, action:PayloadAction<TodoItem>) => {
    state.todo = state.todo.filter((item:TodoItem) => {
        return item.id != action.payload.id;
    })
}
export {
    addTodo,
    editTodo,
    removeTodo
}