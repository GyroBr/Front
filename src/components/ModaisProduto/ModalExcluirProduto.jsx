/* eslint-disable react/prop-types */
import React from "react";
import styles from "./ModalExcluirProduto.module.css";
import { deleteProduct } from "../../services/produto/ProdutoService";

export default function ModalExcluir({ isOpen, setModalOpen, productId, onDeleteSuccess }) {
  const token = sessionStorage.getItem("token");

  // Função para confirmar a exclusão
  const handleConfirm = async () => {
    try {
      // Chama a função deleteProduct do ProdutoService.js
      const response = await deleteProduct(token, productId);

      // Verifica se a resposta foi bem-sucedida
      if (response) {
        alert("Produto excluído com sucesso!");
        onDeleteSuccess(); // Notifica o componente pai para atualizar a lista
      }
    } catch (error) {
      console.error("Erro ao tentar excluir o produto:", error);
      alert("Erro ao excluir o produto. Tente novamente.");
    } finally {
      setModalOpen(false); // Fecha o modal independentemente do sucesso ou falha
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
