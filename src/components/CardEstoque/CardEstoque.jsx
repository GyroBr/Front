import React from "react";
import styles from "./CardEstoque.module.css";
import { BsPlusLg } from "react-icons/bs";

const Card = () => {
    return (
        <div className={styles.card_estoque}>
            <div className={styles.container}>
                <div className={styles.img}>
                    <div className={styles.upload_img}>

                    </div>
                </div>
                <div className={styles.container_info}>
                    <div className={styles.line}>
                        <span className={styles.text}>Quantidade em estoque: {}</span>
                    </div>
                    <select name="" id="" className={styles.line}>
                        <option value="">
                            <span className={styles.text}>Selecionar Lote</span>
                        </option>
                    </select>
                    <div className={styles.line}>
                        <span className={styles.text}>Quantidade lote {}:    </span>
                    </div>
                    <div className={styles.line}>
                        <span className={styles.text}>Adicionar Produtos <BsPlusLg className={styles.icon}/></span>
                    </div>
                </div>
            </div>
            <div className={styles.container}></div>
        </div>
    );
};

export default Card;