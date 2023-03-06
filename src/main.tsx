import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HomeTela } from './Routes/HomeTela'
import { PessoaUsuariaTela } from './Routes/PessoaUsuariaTela'
import { ProfissionalTela } from './Routes/ProfissionalTela'
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom"



const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children: [{path: "/", element: <HomeTela/>},
              {path: "/PessoaUsuaria", element: <PessoaUsuariaTela/>},
              {path: "/Profissional", element: <ProfissionalTela/>}]
}
])


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
