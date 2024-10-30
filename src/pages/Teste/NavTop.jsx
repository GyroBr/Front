import styles from "./NavTop.module.css"
import configuration_icon from "../../assets/Produtos/configuration.png"
import Card from "./Card"
import refri1 from "../../assets/Produtos/refri1.png"
import refri2 from "../../assets/Produtos/refri2.png"
import refri3 from "../../assets/Produtos/refri3.png"
import refri4 from "../../assets/Produtos/refri4.png"
import cardAdd from "./CardAdd"
import CardAdd from "./CardAdd"

export default function NavTop() {
    return (
        <>
            <div className={styles.all}>
                <section className={styles.section_navtop}>
                    <div className={styles.NavTop}>
                        <span>Gestão de Estoque</span>
                        <div className={styles.NavTopOptions}>
                            <p>Sucos</p>
                            <p>Refrigerantes</p>
                            <p>Cervejas</p>
                            <p>Vinhos</p>
                            <p>Gelos</p>
                            <p>Gin</p>
                            <p>Uisque</p>
                        </div>
                    </div>
                    <div className={styles.configurar}>
                        <img src={configuration_icon} alt="" />
                        <p>Configurar Cartegoria</p>
                    </div>
                </section>

                <div className={styles.border}>
                    <div className={styles.cards}>
                        <CardAdd/>
                        <Card imagem={refri2} desc={"Sprit 350ml"} statusColor="#60C670"/>
                        <Card imagem={refri3} desc={"Guaraná 350ml"} statusColor="#FFF95F"/>
                    </div>
                    <div className={styles.cards}>
                        <Card imagem={refri1} desc={"Fanta Laranja 350ml"} />
                        <Card imagem={refri2} desc={"Sprit 350ml"} statusColor="#60C670"/>
                        <Card imagem={refri3} desc={"Guaraná 350ml"} statusColor="#FFF95F"/>
                    </div>
                    <div className={styles.cards}>
                        <Card imagem={refri1} desc={"Fanta Laranja 350ml"} />
                        <Card imagem={refri2} desc={"Sprit 350ml"} statusColor="#60C670"/>
                        <Card imagem={refri3} desc={"Guaraná 350ml"} statusColor="#FFF95F"/>
                    </div>
                    <div className={styles.cards}>
                        <Card imagem={refri1} desc={"Fanta Laranja 350ml"} />
                        <Card imagem={refri2} desc={"Sprit 350ml"} statusColor="#60C670"/>
                        <Card imagem={refri3} desc={"Guaraná 350ml"} statusColor="#FFF95F"/>
                    </div>
                    
                </div>
            </div>

        </>
    )
}