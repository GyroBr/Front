import React from "react";
import styles from "./CardEstoque.module.css";
import ModalExcluirLote from '../ModaisLote/ModalExcluirLote';
import { BsPlusLg, BsCalendar4Event, BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { useState } from "react";

const Card = () => {
    // Estado para controlar a visibilidade do modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Funções para abrir e fechar o modal
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleBack = () => {
        setIsModalOpen(true);
    }
    const handleNext = () => {
        setIsModalOpen(false);
    }
    return (
        <div className={styles.card_estoque}>
            <div className={styles.container}>
                <div className={styles.img}>
                    <div className={styles.upload_img}>

                    </div>
                </div>
                <div className={styles.container_info}>
                    <div className={styles.line}>
                        <span className={styles.text}>Nome Produto { }</span>
                    </div>
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
                    {/* <div className={styles.line}>
                        <span className={styles.text}>Excluir Produtos <BsPlusLg className={styles.icon} /></span>
                    </div> */}

                </div>
            </div>
            <div className={styles.container}>

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
                            <BsFillPencilFill />
                            <span className={styles.text}>Editar</span>
                        </button>

                        <button onClick={() => console.log("clicou")} className={styles.btn_edit_delete}>
                            <BsFillTrashFill />Excluir
                            
                        </button>
                    </div>
                </div>
            </div>
            {
                isModalOpen && <ModalExcluirLote handleBack={handleBack} />
            }
        </div>
    );
};

export default Card;