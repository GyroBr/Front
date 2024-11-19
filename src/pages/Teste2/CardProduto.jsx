import styles from "./CardProduto.module.css"
import refri from "../../assets/Produtos/refri1.png"
import delete_icon from "../../assets/Produtos/delete_icon.png"
import edit_icon from "../../assets/Produtos/edit_icon.png"


export default function CardProduto({tiltle, description, price}) {
    return (
        <>
            <section className={styles.main_section_card}>
                <div className={styles.div_imagem_CardProduto}>
                    <img src={refri} alt="" />
                </div>
                <h3 className={styles.CardProduto_title}>{tiltle}</h3>
                <div className={styles.CardProduto_DivDescription}>
                    <p className={styles.CardProduto_description}>
                        {description}
                    </p>
                </div>

                <p className={styles.CardProduto_price}>
                    R$ {price}
                </p>
                <div className={styles.editar_excluir}>
                    <p><img src={edit_icon} alt="" />Editar</p>
                    <p><img src={delete_icon} alt="" />Excluir</p>
                </div>
            </section>
        </>
    )
}