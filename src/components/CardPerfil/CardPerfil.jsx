import React, { Component } from 'react'
import styles from './CardPerfil.module.css'
import { BsPlusLg, BsTrash3, BsPencil } from "react-icons/bs";

const CardPerfil = ({nome, email}) => {

    return (
        <div className={styles.card}>
            <div className={styles.card_func}>
                <div className={styles.line}>
                    <div className={styles.box}>
                        <span>Nome</span>
                        <input
                            type="text"
                            name="name"
                            value={nome}
                            placeholder="Digite a cidade"
                            className={styles.input_a}
                            readOnly={true}
                            onFocus={(e) => e.target.blur()}
                        />
                    </div>

                    <div className={styles.box}>
                        <span>Email</span>
                        <input
                            type="text"
                            name="email"
                            value={email}
                            placeholder="Digite a cidade"
                            className={styles.input_a}
                            readOnly={true}
                            onFocus={(e) => e.target.blur()}
                        />
                    </div>
                </div>
                <div className={styles.box}>
                    <span>Senha</span>
                    <input
                        type="text"
                        name="nome" 
                        value={"*********"}
                        placeholder="Digite a cidade"
                        className={styles.input_a}
                        readOnly={true}
                        onFocus={(e) => e.target.blur()}
                    />
                </div>


            </div>
            <div className={styles.card_edit}>
                <BsPencil className={styles.icon_card} />
                <BsTrash3 className={styles.icon_card} />
            </div>
        </div>
    )
}


export default CardPerfil