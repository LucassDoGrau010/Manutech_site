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
import Login from './Login.jsx'
import Sobre from './Sobre.jsx'
import Cliente from './Cliente.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
  },
    {
    path: "/servicos",
    element:  <Servicos />,
  },
   {
    path: "/manutencao",
    element:  <Manutencao />,
  },
   {
    path: "/chamado",
    element:  <Chamado />,
  },
  {
    path: "/solucoes",
    element:  <Solucoes />,
  },
   {
    path: "/sobre",
    element:  <Sobre />,
  },
   {
    path: "/login",
    element:  <Login />,
  },
  {
    path: "/cliente",
    element:  <Cliente />,
  },
  
  


  
]);

createRoot(document.getElementById('root')).render(
   <RouterProvider router={router} />,
)
