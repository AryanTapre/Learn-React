import {createSlice} from '@reduxjs/toolkit';
import {addTodo, editTodo, removeTodo} from './todo.reducers.ts';

export interface TodoItem {
    id:string,
    message:string;
}

export const todoSlice = createSlice({
    name:"todo",
    initialState:[{
        id:"001",
        message:"aryan-tapre"
    }],
    reducers : {
        addTodoStore: addTodo,
        editTodoStore: editTodo,
        removeTodoStore: removeTodo
    }
})

export default todoSlice.reducer;
export const {addTodoStore, editTodoStore, removeTodoStore} = todoSlice.actions;