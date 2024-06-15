
function BarColor({setColor}) {
  return (
    <>
      <div id="main" className='fixed  mx-12 mb-5 inset-x-0 px-2 py-2   flex justify-center'>
            <div className="flex justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                <button onClick={() => setColor("green")}  className="bg-green-500 rounded-2xl px-2 py-1 shadow-xl text-white">Green</button>
                <button onClick={() => setColor("orange")} className="bg-orange-500 rounded-2xl px-2 shadow-xl text-white">Orange</button>
                <button onClick={() => setColor("pink")} className="bg-pink-500 rounded-2xl px-2 shadow-xl text-white">Pink</button>
                <button onClick={() => setColor("yellow")} className="bg-yellow-500 rounded-2xl px-2 shadow-xl text-white">Yellow</button>
                <button onClick={() => setColor("purple")} className="bg-purple-500 rounded-2xl px-2 shadow-xl text-white">Purple</button>
                <button onClick={() => setColor("blue")} className="bg-blue-500 rounded-2xl px-2 shadow-xl text-white">Blue</button>
                <button onClick={() => setColor("gray")} className="bg-gray-500 rounded-2xl px-2 shadow-xl text-white">Gray</button>
                <button onClick={() => setColor("black")} className="bg-black rounded-2xl px-2 shadow-xl text-white">Black</button>
            </div>
      </div>
    </>
  )
}

export default BarColor;
