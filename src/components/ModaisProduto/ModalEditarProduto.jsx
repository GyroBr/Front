/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styles from "./ModalEditarProduto.module.css";
import { FaUpload } from "react-icons/fa"; // Ícone de upload

export default function ModalEditar({
  isOpen,
  setModalOpen,
  onEditSuccess,
  productId,
  name: initialName,
  description: initialDescription,
  price: initialPrice,
  image: initialImage,
}) {
  // Estados locais para controlar os valores dos campos
  const [name, setName] = useState(initialName || "");
  const [description, setDescription] = useState(initialDescription || "");
  const [price, setPrice] = useState(initialPrice || "");
  const [image, setImage] = useState(initialImage || "");

  // Função para confirmar a edição
  const handleConfirm = async () => {
    try {
      const response = await fetch(
        `https://674cbf5754e1fca9290d7565.mockapi.io/products/product/${productId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, description, price, image }),
        }
      );

      if (response.ok) {
        alert("Produto editado com sucesso!");
        // onEditSuccess(); // Notifica o componente pai para atualizar a lista
      } else {
        throw new Error("Erro ao editar o produto.");
      }
    } catch (error) {
      console.error("Erro ao tentar editar o produto:", error);
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
          <div className={styles.row}>
            <div className={styles.inputWrapper}>
              <h6>Nome</h6>
              <input
                className={styles.inputs_square}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.inputWrapper}>
              <h6>Preço</h6>
              <input
                className={styles.inputs_square}
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.inputWrapper}>
              <h6>Categoria</h6>
              <select className={styles.inputs_square}>
                <option value="" disabled>
                  Selecione uma categoria
                </option>
                <option value="eletronicos">Sucos</option>
                <option value="vestuario">Refrigerantes</option>
                <option value="alimentos">Cervejas</option>
                <option value="outros">Vinhos</option>
                <option value="outros">Gelos</option>
                <option value="outros">Gin</option>
                <option value="outros">Whiskey</option>
              </select>
            </div>
            <div className={styles.inputWrapper}>
              <h6>Adicionar imagem</h6>
              <label htmlFor="imageUpload" className={styles.uploadLabel}>
                <input
                  id="imageUpload"
                  type="file"
                  accept="image/*"
                  className={styles.fileInput}
                  onChange={(e) => setImage(e.target.files[0]?.name || "")}
                />
                <span className={styles.uploadText}>Clique para enviar</span>
              </label>
            </div>
          </div>
          <div className={styles.div_input} id="productDescription">
            <h6>Descrição</h6>
            <textarea
              className={styles.textarea_description}
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className={styles.buttons}>
            <button
              className={styles.btn_cancel}
              onClick={() => setModalOpen(false)}
            >
              Cancelar
            </button>
            <button className={styles.btn_confirm} onClick={handleConfirm}>
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
