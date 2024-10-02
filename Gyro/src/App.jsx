import { Router } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar";
import Home from "./pages/Home/Home";
import Cadastro from "./pages/Cadastro/Cadastro";
import Login from "./pages/Login/Login";


export default function App() {
    return (
    <div className="App">
        <NavBar />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Servicos" element={<Servicos/>}/>
            <Route path="/Sobre" element={<Sobre/>}/>
            <Route path="/Dúvidas" element={<Dúvidas/>}/>
            <Route path="/Home" element={<Cadastro/>}/>
            <Route path="/Home" element={<Login/>}/>
        </Routes>
    </div>)

}