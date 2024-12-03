/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import styles from "./ModalAdicionarProduto.module.css";
import { FaUpload } from 'react-icons/fa'; // Ícone de upload

export default function ModalExcluir({
  isOpen,
  setModalOpen,
  onDeleteSuccess,
}) {
  // Função para confirmar a exclusão
  const handleConfirm = async () => {
    try {
      const response = await fetch(
        `https://674cbf5754e1fca9290d7565.mockapi.io/products/product/`,
        {
          method: "POST",
        }
      );

      if (response.ok) {
        // Exclusão bem-sucedida
        alert("Produto adicionado com sucesso!");
        onDeleteSuccess(); // Notifica o componente pai para atualizar a lista
      } else {
        // Erro de servidor ou resposta inesperada
        throw new Error("Erro ao adicionar o produto."); // Gera uma exceção para cair no `catch`
      }
    } catch (error) {
      // Captura qualquer erro durante o processo
      console.error("Erro ao tentar adicionar o produto:", error);
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
          <div className={styles.row}>
            <div className={styles.inputWrapper}>
              <h6>Nome</h6>
              <input
                className={styles.inputs_square}
                type="text"
                placeholder="Digite o nome"
              />
            </div>
            <div className={styles.inputWrapper}>
              <h6>Preço</h6>
              <input
                className={styles.inputs_square}
                type="number"
                placeholder="Digite o preço"
              />
            </div>
          </div>
          <div className={styles.div_input} id="productDescription">
            <h6>Descrição</h6>
            <textarea
              className={styles.textarea_description}
              rows="4"
              placeholder="Digite a descrição do produto..."
            />
          </div>
          <div id="productimage">
            <h6>Adicione uma imagem</h6>
            <div id="imageInput" className={styles.add_image}></div>
          </div>
          <div className={styles.buttons}>
            <button
              className={styles.btn_cancel}
              onClick={() => setModalOpen(false)}
            >
              Cancelar
            </button>
            <button className={styles.btn_confirm} onClick={handleConfirm}>
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
