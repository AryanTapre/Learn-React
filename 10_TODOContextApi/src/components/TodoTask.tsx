import { useState } from "react";
import useTodo from "../contexts/TodoContext";



function TodoTask({todo}) {

   const [todoEditiable, setTodoEditiable] = useState(false);
   const [message, setMessage] = useState("");
   const {editTodo,removeTodo} = useTodo();


    return (
        <div className="flex  gap-1 justify-start items-center border border-gray-300 rounded-md mb-3">
          <input
            value={todo.message}
            onChange={(e) => setMessage(e.target.value)}
            className='w-full px-3 py-2 outline-none shadow-sm'
            type="text" name="" id=""
            readOnly={!todoEditiable}
          />
          <div className="py-1 px-1 flex justify-center items-center gap-1">
           
              <div id="edit-button"
                onClick={() => {
                    if(todoEditiable) {
                        editTodo({id:todo.id, message:message});
                    }
                    const val:boolean = !todoEditiable;
                    setTodoEditiable(val) 
                }}
                className={` ${todoEditiable? "bg-green-400 hover:bg-green-600" : "bg-blue-400 hover:bg-blue-600 "}  rounded-md cursor-pointer  text-white px-1 shadow-md`}>
                {todoEditiable ? "save" : "edit"}
              </div>  
         
            
            <div
                onClick={() => removeTodo(todo.id)}
                className=" bg-red-400 rounded-md cursor-pointer hover:bg-red-600 text-white px-1 shadow-md ">
                remove
            </div>
          </div>
              
        </div>
    );

}

export default TodoTask;