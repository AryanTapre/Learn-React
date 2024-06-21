import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { editTodo, removeTodo} from './todo.reducers.ts';

export interface TodoItem {
    id:string,
    message:string;
}

export const todoSlice = createSlice({
    name:"todo",
    initialState:Array<TodoItem>,
    reducers : {
        addTodoStore:  (state,action:PayloadAction<TodoItem>) => {  
            if(action.payload) {
                state.push(action.payload);
            }
        },
        editTodoStore: editTodo,
        //@ts-expect-error removeTodoStore
        removeTodoStore: removeTodo
    }
})

export default todoSlice.reducer;
export const {addTodoStore, editTodoStore, removeTodoStore} = todoSlice.actions;