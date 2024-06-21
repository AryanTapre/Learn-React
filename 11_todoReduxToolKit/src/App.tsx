
import {TodoForm, TodoTask} from './components';
import './App.css'
import { useAppDispatch, useAppSelector } from './app/hooks';
import { useEffect } from 'react';
import { addTodoStore } from './features/todo/todo.slice';

function App() {
  const data = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchTodosFromLocalStorage = async () => {
      try {
        const todosString = localStorage.getItem('todos');


        if (todosString && todosString) {
          const parsedTodos = JSON.parse(todosString);
          parsedTodos.map((e) => {
            console.log(e.id + " " + e.message);
            
            dispatch(addTodoStore({id:e.id, message:e.message})); // Dispatch action to add all todos
            
          })


          
        }
      } catch (error) {
        console.error('Error fetching todos from localStorage:', error);
      }
    };

    fetchTodosFromLocalStorage(); 
  }, []); 


  useEffect(() => {
    const addTodosInLocalStorage = async () => {
      try {
        const stringifyString = JSON.stringify(data);
        window.localStorage.setItem("todos",stringifyString);

      } catch (error) {
        console.error("Error while adding todos onto localStorage:"+error);
      }
    }

    addTodosInLocalStorage();
  },[data]);


  return (
    <>
            <div className="  min-h-screen py-8 ">
                <div className="w-full max-w-2xl mx-auto  rounded-lg px-4 py-3 text-black">
                    <h1 className="text-xl  text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className='m-2' >
                        {data.map((todo) => {
                          return <TodoTask todo={todo}  />
                        })}
                        
                    </div>
                </div>
            </div>
    </>
  )
}

export default App
