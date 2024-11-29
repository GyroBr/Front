/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from "../ModaisCardapio/ModalCardapioExcluir.module.css";

export default function ModalCardapioExcluir({ isOpen }) {
  if (isOpen) {
    return (
      <div className={styles.background}>
        <div className={styles.modalContentStyle}>
          <h4>Tem certeza que deseja excluir o produto produto?</h4>

          <div className={styles.buttons}>
            <button>cancelar</button>
            <button>confirmar</button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
