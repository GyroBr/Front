import styles from "./card2.module.css"
import addicon from "../../assets/Produtos/addicon.png"
import CardProduto from "./CardProduto"

export default function Card2(){
    return (
        <>
            <section className={styles.main_section}>
                <div className={styles.addbuttons}>
                    <button className={styles.addButton}>
                        Adicionar produto
                        <img src={addicon} alt="" />
                    </button>
                    <button className={styles.addButton}>
                        Adicionar Combo
                        <img src={addicon} alt="" />
                    </button>
                </div>
                
            </section>
        </>
    )
}