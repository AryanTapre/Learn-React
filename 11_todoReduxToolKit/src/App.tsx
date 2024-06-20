import {TodoForm} from './components';
import './App.css'

function App() {

  return (
    <>
            <div className="  min-h-screen py-8 ">
                <div className="w-full max-w-2xl mx-auto  rounded-lg px-4 py-3 text-black">
                    <h1 className="text-xl  text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className='m-2' >
                        {/*Loop and Add TodoItem here */}
                        
                    </div>
                </div>
            </div>
    </>
  )
}

export default App
