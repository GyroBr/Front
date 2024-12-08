import React from "react";
import styles from "../ModaisEmployee/ModalExcluirEmployee.module.css";
import { useState } from "react";
import { deleteEmployee } from "../../services/Employee/employe";

export default function ModalExcluir({ isOpen, setModalOpen, employeeId, onDeleteSuccess }) {
  // Função para confirmar a exclusão
  const handleConfirm = async () => {
    try {
      const response = await deleteEmployee(employeeId); // Chama a função de exclusão do serviço

      if (response.ok) {
        alert("Funcionário excluído com sucesso!");
        onDeleteSuccess(); 
      } else {
        throw new Error("Erro ao excluir o Funcionário."); 
      }
    } catch (error) {
      console.error("Erro ao tentar excluir o Funcionário:", error);
      alert(error.message); 
    } finally {
      setModalOpen(false);
    }
  };

  if (!isOpen) {
    return null; 
  }

  return (
    <div className={styles.background}>
      <div className={styles.modalContentStyle}>
        <div className={styles.contents}>
          <h4>Tem certeza que deseja excluir este Funcionário?</h4>
          <div className={styles.buttons}>
            <button className={styles.btn_cancel} onClick={() => setModalOpen(false)}>
              Cancelar
            </button>
            <button className={styles.btn_confirm} onClick={handleConfirm}>
              Confirmar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
