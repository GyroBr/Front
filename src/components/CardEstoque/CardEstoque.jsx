import React from "react";
import styles from "./CardEstoque.module.css";
import { BsPlusLg, BsCalendar4Event, BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";

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
                        <span className={styles.text}>Quantidade em estoque: { }</span>
                    </div>
                    <select name="" id="" className={styles.line}>
                        <option value="">
                            <span className={styles.text}>Selecionar Lote</span>
                        </option>
                    </select>
                    <div className={styles.line}>
                        <span className={styles.text}>Quantidade lote { }:    </span>
                    </div>
                    <div className={styles.line}>
                        <span className={styles.text}>Adicionar Produtos <BsPlusLg className={styles.icon} /></span>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.line}>
                    <span className={styles.text}>Nome Produto { }</span>
                </div>
                <div className={styles.box}>
                    <div className={styles.box_status}>
                        <span className={styles.text}>Status</span>
                        <div className={styles.line_color}></div>
                    </div>

                    <div className={styles.box_rep_val}>
                        <span className={styles.text}>Última reposição</span>
                        <div className={styles.box_intern}>
                            <BsCalendar4Event />
                        </div>
                    </div>

                    <div className={styles.box_rep_val}>
                        <span className={styles.text}>Validade</span>
                        <div className={styles.box_intern}>
                            <BsCalendar4Event />
                        </div>
                    </div>

                    <div className={styles.box_btn}>
                        <button className={styles.btn_edit_delete}>
                            <BsFillPencilFill/>
                            <span className={styles.text}>Editar</span>
                        </button>

                        <button className={styles.btn_edit_delete}>
                            <BsFillTrashFill/>
                            <span className={styles.text}>Excluir</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;