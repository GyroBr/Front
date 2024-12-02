/* eslint-disable react/prop-types */
import React from "react";
import styles from "./ModalExcluir.module.css";

export default function ModalExcluir({ isOpen, setModalOpen, productId, onDeleteSuccess }) {
  // Função para confirmar a exclusão
  const handleConfirm = async () => {
    try {
      const response = await fetch(
        `https://674cbf5754e1fca9290d7565.mockapi.io/products/product/${productId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // Exclusão bem-sucedida
        alert("Produto excluído com sucesso!");
        onDeleteSuccess(); // Notifica o componente pai para atualizar a lista
      } else {
        // Erro de servidor ou resposta inesperada
        throw new Error("Erro ao excluir o produto."); // Gera uma exceção para cair no `catch`
      }
    } catch (error) {
      // Captura qualquer erro durante o processo
      console.error("Erro ao tentar excluir o produto:", error);
      alert(error.message); // Exibe o erro específico capturado
    } finally {
      // Fecha o modal independentemente do sucesso ou falha
      setModalOpen(false);
    }
  };

  if (!isOpen) {
    return null; // Retorna nulo se o modal não estiver aberto
  }

  return (
    <div className={styles.background}>
      <div className={styles.modalContentStyle}>
        <div className={styles.contents}>
          <h4>Tem certeza que deseja excluir este produto?</h4>
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
