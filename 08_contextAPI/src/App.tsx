import { useState } from 'react';
import './App.css'
import { Login } from './components/Login.tsx'
import { Profile } from './components/Profile.tsx'
import { UserContext } from './context/userContext';
//import { UserContextProvider } from './context/UserContextProvider.tsx'

function App() {
  const [data, setData] = useState();
  return (
    //@ts-expect-error user
    <UserContext.Provider value={{data, setData}}>
      <Login/>
      <Profile/>
    </UserContext.Provider>    
  )
}

export default App
