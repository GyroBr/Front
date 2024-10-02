import React, {useState} from 'react';

import{Link, link} from "react-router-dom"
import logo from './assets/images/logo.svg'

import './NavBar.module.css';

export const NavBar = () => {

    const[menuOpen, setMenuOpen] = useState(false)

    return(
        <nav>
            <Link to={"/"}>
            <img src={logo} alt="logo"/>
            </Link>
            <div className='menu' onClick={() => {setMenuOpen(!menuOpen)}}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "Open" : ""}>
                <li>
                    <NavLink to={"/"} className='logo'>Home</NavLink>
                </li>
                <li>
                    <NavLink to={"/Servicos"}>Serviços</NavLink>
                </li>
                <li>
                    <NavLink to={"/Sobre"}>Sobre Nós</NavLink>
                </li>
                <li>
                    <NavLink to={"/Duvidas"}>Dúvidas</NavLink>
                </li>
                <li>
                    <NavLink to={"Login"}>Acessar Conta</NavLink>
                </li>
                <li>
                    <NavLink to={"/Cadastro"} className='buttonCadastro'>Cadastrar</NavLink>
                </li>
            </ul>
        </nav>
    )
}