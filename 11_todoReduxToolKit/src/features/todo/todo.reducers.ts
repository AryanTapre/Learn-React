import { PayloadAction } from "@reduxjs/toolkit";
import { TodoItem } from "./todo.slice";

import { produce } from "immer";

//@ts-expect-error state
const addTodo = (state,action:PayloadAction<TodoItem>) => {  
    if(action.payload) {
        state.todo.push()
    }
}

//@ts-expect-error state
const editTodo = (state, action:PayloadAction<TodoItem>) => {
    state.map((item:TodoItem) => {
        return item.id === action.payload.id ? item.message = action.payload.message : item;
    })
}

//@ts-expect-error state
const removeTodo = (state, action:PayloadAction<TodoItem>) => {
    
    return produce(state, (draft: TodoItem[]) => {
        const indexToRemove = draft.findIndex(
          (item: TodoItem) => item.id === action.payload.id
        );
    
        if (indexToRemove !== -1) {
          draft.splice(indexToRemove, 1); // Remove the item using splice
        }
      });
}
export {
    addTodo,
    editTodo,
    removeTodo
}