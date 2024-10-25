
import styles from './Home.module.css';
// import logo from "../../assets/images/logo.svg";
import NavBar from "../../components/NavBar/NavBar";
import stylesNavBar from '../../components/NavBar/NavBar.module.css';
import{NavLink } from "react-router-dom"


export function Home() {
    return (
        <>
            <div className={styles.home}>
                <section className={styles.banner1}>
                    <div className={styles.banner_shadow}>
                        <NavBar />
                        <div className={styles.banner_content}>
                            <h1>O dia a dia do seu <b>COMÉRCIO</b> nunca foi tão <b>SIMPLES</b><b className={styles.point}> .</b></h1>
                            <p>Seja nosso parceiro e simplifique a gestão do seu comércio.</p>
                            <button>Saiba Mais</button>
                        </div>
                    </div>
                </section>
                <section className={styles.banner2}>
                    <div className={styles.banner_shadow}>
                        <div className={styles.banner_content}>
                            <h1>Gestão na Palma da  <b>Sua Mão</b><b className={styles.point}> .</b></h1>
                            <p>Leve a gestão do seu negócio para onde você estiver com o nosso aplicativo. </p>
                            <button>Conhecer</button>
                        </div>
                    </div>
                </section>
                <section className={styles.banner3}>
                    <div className={styles.banner_shadow}>
                        <div className={styles.banner_content}>
                            <h1>Você <b>simplifica</b> processos e maximiza a eficiência do seu <b>negócio</b><b className={styles.point}> .</b></h1>
                            <p>Seja nosso parceiro e simplifique a gestão do seu comércio.</p>
                            <button>Junte-se a nós</button>
                        </div>
                    </div>
                </section>
                <section className={styles.banner4}>
                    <div className={styles.banner_content}>
                        <div className={styles.img360}></div>
                        <div className={styles.teste}>
                        <h1><b>Suporte Total</b><b className={styles.point}> 360°</b></h1>
                        <p>Desde a gestão diária até análises avançadas.</p>
                        <button>Conhecer</button>
                        <NavLink to={"/Cadastro"} className={stylesNavBar.buttonCadastro}>Cadastrar</NavLink>
                        </div>
                    </div>
                </section>
                <section className={styles.banner5}>
                    <div className={styles.banner_shadow}>
                        <div className={styles.banner_content}>
                            <h1>Controle Total do <b>Faturamento</b><b className={styles.point}> .</b></h1>
                            <p>Monitore receitas e otimize a saúde financeira do seu negócio com nossas ferramentas avançadas.</p>
                            <button>Junte-se a nós</button>
                        </div>
                    </div>
                </section>
                <section className={styles.banner6}>
                    <div className={styles.banner_shadow}>
                        <div className={styles.banner_content}>
                            <h1>Visão completa das operações, <b>facilitando</b> o acompanhamento e a gestão eficiente do <b>seu negócio</b><b className={styles.point}> .</b></h1>
                            <button>Conhecer</button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}