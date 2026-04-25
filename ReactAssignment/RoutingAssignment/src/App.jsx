import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import User from './pages/User'

const App = () => {
  let router = createBrowserRouter([
   
    {
      path:'/',
      element:<Home />,
      children:[
        {
          path:'about',
          element:<About />
        },{
          path:'contact',
          element:<Contact />
        }
      ]
    },
    {
      path:'user/:id',
      element:<User />,
    }
  ])
  
  return (
    
    <RouterProvider router={router}>App
    </RouterProvider>
    
  )
}

export default App