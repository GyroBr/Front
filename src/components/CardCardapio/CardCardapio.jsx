/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./CardCardapio.module.css";
import ModalExcluir from '../Modais/ModalExcluir';
import { MdEdit, MdDelete  } from "react-icons/md";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Card = ( { name, description, price, image} ) => {
      // Estado para controlar a visibilidade do modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Funções para abrir e fechar o modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleBack = () => {
    if (isModalOpen) {
        setIsModalOpen(false)
    }
  }
  const handleNext = () => {
    if (isModalOpen) {
        setIsModalOpen(false)
    }
  }
    return (
        <div className={styles.card_cardapio}>
            <div className={styles.container}>
                <div className={styles.img}>
                    <div className={styles.upload_img}>
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className={styles.container_info}>
                    <div className={styles.tittle}>
                        <span className={styles.text}>{name}</span>
                    </div>
                    <div className={styles.description}>
                        <span className={styles.text}>
                            {description}
                        </span>
                    </div>
                </div>
                    <div className={styles.price}>
                        <span className={styles.text}>R${price}</span>
                    </div>

                <div className={styles.buttons}>
                    <button className={styles.buttonCard}>
                    <MdEdit /> Editar
                    </button>
                    <button onClick={() => setIsModalOpen(true)} className={styles.buttonCard}>
                    <MdDelete /> Excluir
                    </button>
                </div>
            </div>
            {
                isModalOpen && <ModalExcluir handleBack={handleBack}/>
            }
            <ModalExcluir isOpen={isModalOpen}/>
        </div>
    );
};

export default Card;