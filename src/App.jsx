import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import {Home} from "./pages/Home/Home";
import Cadastro from "./pages/Cadastro/Cadastro";
import Login from "./pages/Login/Login";
import {UserPages} from './pages/UserPages/UserPages'

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
 feature/tela-cadastro
            <Route path="/Home" element={<Home/>} />

            {/* <Route path="/perfil" element={<Perfil/>}/> */}
            <Route path="/UserPages" element={<UserPages/>}/>


        </Routes>
    </div>
    )

}