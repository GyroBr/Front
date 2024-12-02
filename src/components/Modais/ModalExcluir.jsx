/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Children } from "react";
import styles from "./ModalExcluir.module.css";

export default function ModalExcluir({ isOpen }) {
  if (isOpen) {
    return (
      <div className={styles.background}>
        <div className={styles.modalContentStyle}>
          <div className={styles.contents}>
            <h4>Tem certeza que deseja excluir este produto?</h4>

            <div className={styles.buttons}>
              <button className={styles.btn_cancel}>cancelar</button>
              <button className={styles.btn_confirm}>confirmar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
