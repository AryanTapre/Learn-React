import { useCallback, useEffect, useRef, useState } from "react"

function App() {

  const [range, setRange] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password ,setPassword] = useState();

  const passwordReference = useRef(null);

  const generatePassword = useCallback(() => {
    let generatedPassword:string = "";
    let data:string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed)  data += "0123456789";
    if(characterAllowed) data += "!@#$%^&*(){}";

    for (let index:number = 1; index <= range; index++) {
        const rand = Math.floor(Math.random() * range + 1);
        generatedPassword += data.charAt(rand);
    }
    //@ts-expect-error hekl
    setPassword(generatedPassword);

  },[range,numberAllowed, characterAllowed,setPassword ]);
  
  const copyToClipboard = useCallback(() => {
    //@ts-expect-error selec
    passwordReference.current?.select();
    //@ts-expect-error selec
    passwordReference.current?.setSelectionRange(0,range);
    //@ts-expect-error selec
    window.navigator.clipboard.writeText(password);
      
  },[password,range]);


  useEffect(() => {
    generatePassword();
  }, [range,characterAllowed,numberAllowed,generatePassword])

  return (
    <>
        <div className="main bg-black h-screen w-screen justify-center flex relative">
            <div className="password bg-gray-500 mt-48  absolute rounded-xl px-3 py-3 ">
              <div id="control">
                <div id="input" className=" flex px-2 py-1 gap-1  ">
                  <input type="text" name="" id="" className="rounded-md px-2 shadow-xl w-full" value={password}
                    ref={passwordReference} // adding reference to password field.
                  />
                  <button className="bg-blue-700 text-white shadow-xl px-2 rounded-md py-1 justify-end"
                    onClick={copyToClipboard}
                  >copy</button>
                </div>

                <div id="control-input" className="px-2 py-1 text-black font-medium flex justify-start gap-2">
                    <input type="range" name="character-range" id="range" min={8} max={100} value={range} onChange={(e) =>{setRange(Number(e.target.value))}}/>
                    <p id="rangeValue">Length:{range}</p>
                                                                                                      
                    <input type="checkbox" name="number" id="number" onChange={() => {setNumberAllowed((prev) => !prev)}} />
                    <label>number</label>

                    <input type="checkbox" name="characters" id="characters" onChange={() => {setCharacterAllowed((prev) => !prev)}} />
                    <label>characters</label>
                </div>

              </div>useRef()
                
            </div>
        </div>
    </>
  )
}

export default App
