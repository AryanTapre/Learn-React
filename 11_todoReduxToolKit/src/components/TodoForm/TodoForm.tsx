
import { useAppDispatch } from "../../app/hooks";
import {nanoid} from '@reduxjs/toolkit';
import { TodoItem,addTodoStore } from "../../features/todo/todo.slice.ts";
import { useState } from "react";

function TodoForm() {
    const [todoMessage, setTodoMessage] = useState("");
    const dispatch = useAppDispatch();
    
    function constructObject(msg:string):TodoItem {
        return {
            id:nanoid(),
            message:msg
        }
    }
    //@ts-expect-error event
    function handleSubmit(e) {
        e.preventDefault();
        const data = constructObject(todoMessage);
        dispatch(addTodoStore(data));
        setTodoMessage("");
    }


    return (
        
        <form  className="flex">
            <input
                onChange={
                    (e) => {
                        setTodoMessage(e.target.value);
                    }
                }
                value={todoMessage}
                type="text"
                placeholder="Write a todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button  onClick={handleSubmit} className="rounded-r-lg px-3 py-1 bg-green-400 hover:bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;


