import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Servicos from './Serviços.jsx'
import Manutencao from './Manutencao.jsx'
import Chamado from './Chamado.jsx'


import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Solucoes from './Solucoes.jsx'
import Sobre from './Sobre.jsx'
import Login from './Login.jsx'
import Cliente from './Cliente.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
  },
    {
    path: "/Servicos",
    element:  <Servicos />,
  },
   {
    path: "/Manutencao",
    element:  <Manutencao />,
  },
   {
    path: "/Chamado",
    element:  <Chamado />,
  },
  {
    path: "/Solucoes",
    element:  <Solucoes />,
  },
   {
    path: "/Sobre",
    element:  <Sobre />,
  },

   {
    path: "/Login",
    element:  <Login />,
  },

   {
    path: "/Cliente",
    element:  <Cliente />,
  },



  
]);

createRoot(document.getElementById('root')).render(
   <RouterProvider router={router} />,
)
