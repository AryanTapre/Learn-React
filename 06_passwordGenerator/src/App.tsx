

function App() {
  return (
    <>
        <div className="main bg-black h-screen w-screen justify-center flex relative">
            <div className="password bg-gray-500 mt-48  absolute rounded-xl px-3 py-3 ">
              <div id="control">
                <div id="input" className="inline-flex px-2 py-1 gap-1 ">
                  <input type="text" name="" id="" className="rounded-md px-2 shadow-xl" />
                  <button className="bg-blue-700 text-white shadow-xl px-2 rounded-md py-1">copy</button>
                </div>

                <div id="control-input" className="px-2 py-1 text-white">
                      range, 
                </div>

              </div>
                
            </div>
        </div>
    </>
  )
}

export default App
