import { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import { TodoContextProvider, TodoItem } from './contexts/TodoContext';
import TodoTask from './components/TodoTask';



function App() {
  const [todos, setTodos] = useState([]);

  function editTodo(todo:TodoItem) {
    //@ts-expect-error prev
    setTodos((prev) => {
      return prev.map((item:TodoItem) => {
        return item.id === todo.id ? todo : item
      })
    })    
  }

  function removeTodo(id:string) {
    setTodos((prev) => {
      return prev.filter((item:TodoItem) => {
        return item.id != id;
      })
    })
  }

  function savetodo(newTodo:TodoItem) {
    console.log("data:"+newTodo.id);
    
    //@ts-expect-error newTodo....
      setTodos((prev) => [...prev, newTodo]);
  }

  // Loading data from Local Storage..
  useEffect(() => {
    //@ts-expect-error todos
    const todos = JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length > 0) {
      setTodos(todos)
    }

  },[]);

  //Storing data onto Local Storage...
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])


  return (
    <TodoContextProvider value={{todos,editTodo,removeTodo,savetodo}} >
      <div className="  min-h-screen py-8 ">
                <div className="w-full max-w-2xl mx-auto  rounded-lg px-4 py-3 text-black">
                    <h1 className="text-xl  text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className='m-2' >
                        {/*Loop and Add TodoItem here */}
                        {todos.map((item) => {
                          return <TodoTask todo={item} />
                        })}
                    </div>
                </div>
            </div>
    </TodoContextProvider>
  )
}

export default App
