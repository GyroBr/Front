import React from "react";
import styles from "./ModalCardapioExcluir.module.css";

const Modal = ({ handleBack }) => {
    return (
        <div style={styles.modalStyle}>
          <div style={styles.modalContentStyle}>
            <h2>Confirmar Exclusão</h2>
            <p>Tem certeza que deseja excluir este item?</p>
            <button onClick={handleBack}>Cancelar</button>
            <button onClick={() => {
              handleBack();
            }}>
              Confirmar
            </button>
          </div>
        </div>
      );
}
  
  export default Modal;