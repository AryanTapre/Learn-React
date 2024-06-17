import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import ThemeBtn from './components/ThemeButton'
import { ThemeContextProvider } from './context/ThemeContext'

function App() {

  const [themeMode, setThemeMode] = useState("light");

  const setLightMode = () => {
    setThemeMode("light");
  }

  const setDarkMode = () => {
    setThemeMode("dark");
  }

  // making actual theme change using JavaScript.
    useEffect(() => {
      const html = document.querySelector("html");
      html?.classList.remove("light","dark");

      html?.classList.add(themeMode);
      
    },[themeMode])

  return (
 
    <ThemeContextProvider value={{setDarkMode, setLightMode, themeMode}}>    
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                {/* theme toggle button displays here*/}
                <ThemeBtn />             
              </div>

              <div className="w-full max-w-sm mx-auto">
                 {/** actual card displays here */}      
                 <Card />
              </div>
          </div>
       </div>
   
    </ThemeContextProvider>
  )
}

export default App
