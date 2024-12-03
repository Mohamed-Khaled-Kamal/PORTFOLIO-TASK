

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'

import MasterLayout from './Components/MasterLayout/MasterLayout'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Experience from './Components/Experience/Experience'
import Work from './Components/Work/Work'
import Notfound from './Components/NotFound/Notfound'


function App() {
  
  const routes = createBrowserRouter ([{
    path: '/',
    element: <MasterLayout />,
    errorElement: <Notfound/>,
    children: [
      { index: "true", element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "skills", element: <Skills /> },
      { path: "experience", element: <Experience /> },
      { path: "work", element: <Work /> }
    ]
}])
 
  return (
  
    <>
      

      <RouterProvider  router={routes}></RouterProvider>
      
      
    
    </>
  )
  
}

export default App
