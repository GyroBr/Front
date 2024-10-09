import React, {useState} from 'react';

import{ Link, NavLink } from "react-router-dom"

import logo from '../../assets/images/logo.svg'
import styles from './NavBar.module.css';

export const NavBar = ({logoInicio}) => {

    const[menuOpen, setMenuOpen] = useState(false)

    return(
        <nav className={styles.navbar1}>
            <Link to={"/"}>
            <img src={logo} alt="logo" className={styles.logo}/>
            </Link>
            <div className={styles.menu} onClick={() => {setMenuOpen(!menuOpen)}}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "Open" : ""}>
                {/* <li>
                    <NavLink to={"/"} className={styles.logo}>Home</NavLink>
                </li> */}
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
                    <NavLink to={"Login"} className={styles.buttonLogin}>Acessar Conta</NavLink>
                </li>
                <li>
                    <NavLink to={"/Cadastro"} className={styles.buttonCadastro}>Cadastrar</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;