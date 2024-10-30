import styles from "./Card.module.css"
import fanta_uva from "../../assets/Produtos/fanta_uva.png"
import calendar_icon from "../../assets/Produtos/calendar_icon.png"
import delete_icon from "../../assets/Produtos/delete_icon.png"
import edit_icon from "../../assets/Produtos/edit_icon.png"
import seta_baixo from "../../assets/Produtos/seta_baixo.png"
import add from "../../assets/Produtos/add.png"
import addicon from "../../assets/Produtos/addicon.png"


export default function Card({ imagem, desc, statusColor }) {
    return (
        <>
            <section className={styles.main_section}>

                <div className={styles.main_div}>

                    <div className={styles.first_div}>

                        <div className={styles.div_centralizar}>

                            <div className={styles.div_image}>
                                <img src={imagem} alt="" />
                            </div>

                        </div>

                        <div>

                            <p>Quantidade em estoque:  17</p>
                            <p>Selecionar lote <img src={seta_baixo} alt="" /></p>
                            <p>Quantidade lote 3446: 10</p>
                            <p>Adicionar produto <img src={add} alt="" /></p>

                        </div>

                    </div>

                    <div className={styles.first_div}>

                        <h3>{desc}</h3>
                        <p className={styles.paragrafo_p}>Status: <div className={styles.status} style={{background: statusColor}}></div></p>
                        <p>Ultima reposição:</p>
                        <p><img src={calendar_icon} alt="" /> 10/08/2024</p>
                        <p>Validade:</p>
                        <p><img src={calendar_icon} alt="" /> 23/04/2025</p>
                        <div className={styles.editar_excluir}>
                            <p><img  src={edit_icon} alt="" />Editar</p>
                            <p><img  src={delete_icon} alt="" />Excluir</p>
                        </div>

                    </div>

                </div>

            </section>

        </>
    )
}

