import { useState } from "react";
import useTodo, { TodoItem } from "../contexts/TodoContext";


function TodoForm() {
   const {savetodo} = useTodo();
   const [todoMessage, setTodoMessage] = useState("");

    //@ts-expect-error event
   const AddTodo = (e) => {
        e.preventDefault;
        if(!todoMessage) return;
        

        const data:TodoItem = {
            id:Date.now().toString(),
            message:todoMessage
        }
        savetodo(data);
   }

    return (
        
        <form  className="flex">
            <input
                onChange={(e) => (setTodoMessage(e.target.value))}
                type="text"
                placeholder="Write a todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button onClick={AddTodo}  className="rounded-r-lg px-3 py-1 bg-green-400 hover:bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

