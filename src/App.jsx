import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import React from "react";
import { ThemeProvider } from "./components/SideBarComponent/ThemeContext";
import {Home} from "./pages/Home/Home";
import Cadastro from "./pages/Cadastro/Cadastro";
import Login from "./pages/Login/Login";
import {UserPages} from './pages/UserPages/UserPages';
// import Estoque from "./pages/Estoque/Estoque";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Teste from "./pages/Teste/Teste";
import TestPage from './pages/TestPage/TestPage';
import Cardapio from "./pages/Teste2/Cardapio";
import BarChart from "./pages/Dashboard/DashBoardBottom/BarChart"
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
            <Route path="/Estoque" element={<Teste/>} />
            <Route path="/Cardapio" element={<Cardapio/>} />
            <Route path="/Dashboard" element={<BarChart/>} />
            <Route path="/TestPage" element={<TestPage/>} />
            
 feature/tela-cadastro  
            <Route path="/Home" element={<Home/>} />
            {/* <Route path="/perfil" element={<Perfil/>}/> */}
            <Route path="/UserPages" element={<UserPages/>}/>
        </Routes>
        <ToastContainer />
    </div>
    )
}