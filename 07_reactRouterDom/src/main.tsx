import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom';

import {About,Contact,Home,Root,Github,User} from './components';
import { githubFetchData } from './components/Github/Github';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
        <Route path='' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='github' element={<Github/>}
          loader={githubFetchData}  // Optimizing the data...
        />
        <Route path='user/:data' element={<User/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

