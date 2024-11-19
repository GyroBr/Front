import styles from "./CardAdd.module.css"
import addicon from "../../assets/Produtos/addicon.png"

export default function CardAdd() {
    return (
        <>
            <div className={styles.addProduto}>
                <div>
                    <div className={styles.imagem}>

                        <img src={addicon} alt="" />
                    </div>
                    <p>Adicionar novo Produto</p>
                </div>
            </div>
        </>
    )
}