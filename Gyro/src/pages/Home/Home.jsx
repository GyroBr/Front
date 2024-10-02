import React from 'react';
import './Home.module.css';
import logo from "../pages/Home/Home";
import NavBar from "../../components/NavBar/NavBar";


export default function Home () {
    return (
        <div className="home">
            <NavBar logoHeader={logo} />
            <section className="banner">
                <div className="banner-shadow">
                    <div className="banner-content">
                        <h1>O dia a dia do seu COMÉRCIO nunca foi tão SIMPLES .</h1>
                        <p>Seja nosso parceiro e simplifique a gestão do seu comércio.</p>
                    </div>
                    <button>Saiba Mais</button>
                </div>
            </section>
            <section className="second-banner">
                    <div className="banner-content">
                        <h1>Gestão na Palma da Sua Mão.</h1>
                        <p>Leve a gestão do seu negócio para onde você estiver com o nosso aplicativo.</p>
                </div>
                <button>Conhecer</button>
            </section>
        </div>
    );
}
