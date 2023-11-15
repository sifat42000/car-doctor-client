import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main';
import Home from './Routes/Home/Home';
import Loging from './pages/Singin/Loging';
import Register from './pages/Singup/Register';
import Authprovider from './Authprovider/Authprovider';
import CheakOut from './pages/CheakOut/CheakOut';
import Bookings from './pages/Bookings/Bookings';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/loging',
        element:<Loging></Loging>
      },
      {
       path: '/register',
       element: <Register></Register>
      },
      {
        path:'cheakout/:id',
        element:<CheakOut></CheakOut>,
        loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path:'/bookings',
        element:<Bookings></Bookings>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  
 
   <div className='max-w-6xl mx-auto'>
    <React.StrictMode>
   <Authprovider>
       <RouterProvider router={router}></RouterProvider>
   </Authprovider>
</React.StrictMode>,
   </div>

)
 


