
import styles from './Home.module.css';
// import logo from "../../assets/images/logo.svg";
import NavBar from "../../components/NavBar/NavBar";
import visionIcon from "../../assets/images/vision.svg"
import missionIcon from "../../assets/images/mission.svg"
import valueIcon from "../../assets/images/value.svg"

export function Home() {
    return (
        <>
            <div className={styles.home}>
                <NavBar />
                <section className={styles.banner1}>
                    <div className={styles.banner_shadow}>
                        <div className={styles.banner_content}>
                            <h1>O dia a dia do seu <b>COMÉRCIO</b> nunca foi tão <b>SIMPLES</b><b className={styles.point}> .</b></h1>
                            <p>Seja nosso parceiro e simplifique a gestão do seu comércio.</p>
                            <button>Saiba Mais</button>
                        </div>
                    </div>
                </section>
                <section className={styles.banner2}>
                    <div className={styles.banner_content}>
                        <h1>Gestão na Palma da  <b>Sua Mão</b><b className={styles.point}> .</b></h1>
                        <p>Leve a gestão do seu negócio para onde você estiver com o nosso aplicativo. </p>
                        <button>Conhecer</button>
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
                        <div className={styles.banner_content_text}>
                            <h1><b>Suporte Total</b><b className={styles.point}> 360°</b></h1>
                            <p>Desde a gestão diária até análises avançadas.</p>
                            <button>Conhecer</button>
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
                    <div className={styles.banner_content}>
                        <h1><b>Garantindo</b> o acompanhamento e gestão eficiente do <b>seu negócio</b><b className={styles.point}> .</b></h1>
                        <p>Seja nosso parceiro e simplifique seu comércio.</p>
                        <button>Conhecer</button>
                    </div>
                </section>
                <section className={styles.banner7}>
                    <div className={styles.banner_content}>
                        <div className={styles.div_Title}>
                            <h1>Nossa Filosofia <b className={styles.point}> .</b></h1>
                            <p>Descubra os pilares que sustentam nossa empresa, que orientam nossas ações e nosso compromisso com o sucesso dos nossos clientes.</p>
                        </div>
                        <div className={styles.div_SubText}>
                            <div className={styles.card}>
                                <img className={styles.icons} src={missionIcon} alt="Mission" />
                                <h1>Missão</h1>
                                <p>Criar um sistema inteligente que simplifique a gestão de comércios, possibilitando nossos clientes a focarem no que fazem de melhor: criar experiências excepcionais para seus consumidores.</p>
                            </div>
                            <div className={styles.card}>
                                <img className={styles.icons} src={visionIcon} alt="Vision" />
                                <h1>Visão</h1>
                                <p>Ser referência nacional em solução tecnológica para o setor de Alimentos e Bebidas, revolucionando a gestão e promovendo o sucesso dos nossos clientes.</p>
                            </div>
                            <div className={styles.card}>
                                <img className={styles.icons} src={valueIcon} alt="Value" />
                                <h1>Valor</h1>
                                <p>Facilitar a gestão e crescimento das adegas através de soluções inteligentes e integradas, oferecendo controle completo e eficiente sobre pedidos, estoque, funcionários e faturamento.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.banner8}>
                    <div className={styles.banner_content_text}>
                        <h1>Ainda tem dúvidas sobre a GYRO na sua empresa ?</h1>
                        <p>Você ainda pode falar com um dos nossos atendentes especializados, vamos tirar todas as suas dúvidas e mostrar o por que podemos transformar o seu comércio com a Gyro.</p>
                    </div>
                    <div className={styles.card}></div>
                    <div></div>
                </section>
                <footer>
                    <div className={styles.banner_content}></div>
                    <div className={styles.banner_content_text}>
                    ABOUT US - CONTACT US - HELP - PRIVACY POLICY
                    Gyro © 2024 • All Rights Reserved
                    </div>
                </footer>
            </div>
        </>
    );
}