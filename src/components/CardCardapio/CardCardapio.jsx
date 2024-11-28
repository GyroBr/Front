import React from "react";
import styles from "./CardCardapio.module.css";
import ModalCardapioExcluir from '../ModaisCardapio/ModalCardapioExcluir';
import { MdEdit, MdDelete  } from "react-icons/md";
import { useState } from "react";

const Card = () => {
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

                    </div>
                </div>
                <div className={styles.container_info}>
                    <div className={styles.tittle}>
                        <span className={styles.text}>Coca-Cola {}</span>
                    </div>
                    <div className={styles.description}>
                        <span className={styles.text}>
                        A clássica e refrescante Coca-Cola, perfeita para acompanhar qualquer refeição. Com seu sabor inconfundível e equilíbrio perfeito entre doçura e gás, é a escolha ideal para quem busca matar a sede e apreciar um momento de prazer. Sirva bem gelada!</span>
                    </div>
                </div>
                    <div className={styles.price}>
                        <span className={styles.text}>R$6,50</span>
                    </div>

                <div className={styles.buttons}>
                    <button className={styles.buttonCard}>
                    <MdEdit /> Editar
                    </button>
                    <button onClick={() => console.log("clicou")} className={styles.buttonCard}>
                    <MdDelete /> Excluir
                    </button>
                </div>
            </div>
            {
                isModalOpen && <ModalCardapioExcluir handleBack={handleBack}/>
            }
        </div>
    );
};

export default Card;