import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import React from "react";
import {Home} from "./pages/Home/Home";
import Cadastro from "./pages/Cadastro/Cadastro";
import Login from "./pages/Login/Login";
import {UserPages} from './pages/UserPages/UserPages';
// import Estoque from "./pages/Estoque/Estoque";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Teste from "./pages/Teste/Teste";
// import TestPage from './pages/TestPage/TestPage';
import Cardapio from "./pages/Teste2/Cardapio";
import CardapioPage from "./pages/Cardapio/CardapioPage";
import BarChart from "./pages/Dashboard/DashBoardBottom/BarChart"
import EstoquePage from "./pages/Estoque/EstoquePage";
import EstoquePage2 from "./pages/Estoque/EstoquePage";
import Employee from "./pages/Employee/Employee";
import History from "./pages/History/History";
import Order from "./pages/Order/OrderPage";
// import { Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

export default function App() {
    return (
    <div className="App">
        
        <Routes>
            <Route path="/" element={<Home/>}/>
            {/* <Route path="/Servicos" element={<Servicos/>}/>
            <Route path="/Sobre" element={<Sobre/>}/>
            <Route path="/Dúvidas" element={<Dúvidas/>}/> */}
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/Order" element={<Order/>}/>
            <Route path="/Estoque" element={<Teste/>} />
            <Route path="/Cardapio" element={<Cardapio/>} />
            <Route path="/CardapioPage" element={<CardapioPage/>} />
            <Route path="/Dashboard" element={<BarChart/>} />
            <Route path="/EstoquePage" element={<EstoquePage2/>} />
            <Route path="/Employee" element={<Employee/>} />
            <Route path="/Home" element={<Home/>} />
            {/* <Route path="/perfil" element={<Perfil/>}/> */}
            <Route path="/UserPages" element={<UserPages/>}/>
            <Route path="/History" element={<History/>}/>
        </Routes>
        <ToastContainer />
    </div>
    )
}