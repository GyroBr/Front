import styles from "./Teste.module.css"
import hamburguer_icon from "../../assets/icons/hamburguer_icon.png"
import user_icon from "../../assets/icons/user_icon.png"
import estoque_iocon from "../../assets/icons/estoque_icon.png"
import dash_icon from "../../assets/icons/dash_icon.png"
import cardapio_icon from "../../assets/icons/cardapio_icon.png"
import logout from "../../assets/icons/logout.svg"
import perfil from "../../assets/icons/perfil_icon.png"
import Card from "./Card"
import NavTop from "./NavTop"

export default function Teste() {

    return (
        <>
            <div className={styles.all}>

                <section className={styles.main_section}>

                    <div className={styles.nav_left}>

                        <div className={styles.hamburguer_div}>
                            <img src={hamburguer_icon} alt="nav_left" className={styles.hamburguer_icon} />
                        </div>

                        <div className={styles.perfil_div}>
                            <img src={perfil} alt="nav_left" className={styles.perfil_icon} />
                        </div>

                        <section className={styles.section_center}>

                            <div className={styles.navigation_left}>
                                <img src={user_icon} alt="" className={styles.icon_nav_left} />
                                <p>Perfil</p>
                            </div>

                            <div className={styles.navigation_left}>
                                <img src={estoque_iocon} alt="" className={styles.icon_nav_left} />
                                <p>Estoque</p>
                            </div>

                            <div className={styles.navigation_left}>
                                <img src={dash_icon} alt="" className={styles.icon_nav_left} />
                                <p>DashBoard</p>
                            </div>

                            <div className={styles.navigation_left}>
                                <img src={cardapio_icon} alt="" className={styles.icon_nav_left} />
                                <p>Cárdapio</p>
                            </div>

                        </section>

                        <div className={styles.navigation_left_logout}>

                            <div className={styles.navigation_out}>
                                <img src={logout} alt="" className={styles.icon_nav_left} />
                                <p>Sair</p>
                            </div>

                        </div>

                    </div>

                </section>
                
               <NavTop/>
            </div>

        </>
    )
}
