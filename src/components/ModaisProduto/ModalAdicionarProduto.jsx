/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styles from "./ModalAdicionarProduto.module.css";
import { FaUpload } from "react-icons/fa"; // Ícone de upload
import { registerProduct } from "../../services/produto/ProdutoService"; // Importe a função de requisição
import { brazilianDate } from "../../utils/globals";

export default function ModalAdicionar({ isOpen, setModalOpen, onAddSuccess }) {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    image: "", 
    expirationDate: "",
    category: "",
  });

  const token = sessionStorage.getItem("token")
  

  // Atualiza o estado ao modificar os inputs
  // Atualiza o estado ao modificar os inputs
const handleInputChange = (e) => {
  const { name, value, files } = e.target;

  if (name === "image" && files.length > 0) {
    setProduct((prev) => ({ ...prev, image: URL.createObjectURL(files[0]) }));
  } else {
    let newValue = value;

    // Converte price para double com duas casas decimais
     if (name === "quantity" && value !== "") {
      newValue = parseInt(value, 10); // Converte para inteiro
    }

    setProduct((prev) => ({ ...prev, [name]: newValue }));
  }
};


  // Função para adicionar o produto
  const handleConfirm = async () => {
    try {
      product.price = Number(product.price); 
      console.log(product, product.price)
      const response = await registerProduct(token, product);
      if (response?.status === 201 || response?.status === 200) {
        alert("Produto adicionado com sucesso!");
        onAddSuccess(); // Notifica o componente pai para atualizar a lista
        setModalOpen(false);
      } else {
        throw new Error("Erro ao adicionar o produto.");
      }
    } catch (error) {
      console.error("Erro ao tentar adicionar o produto:", error.response?.data || error.field || error.message);
      alert("Não foi possível adicionar o produto. Verifique os dados e tente novamente.");
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
                name="name"
                value={product.name}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.inputWrapper}>
              <h6>Preço</h6>
              <input
                className={styles.inputs_square}
                type="number"
                placeholder="Digite o preço"
                name="price"
                value={product.price}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.inputWrapper}>
              <h6>Categoria</h6>
              <input
                className={styles.inputs_square}
                type="text"
                placeholder="Digite a categoria"
                name="category"
                value={product.category}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.inputWrapper}>
              <h6>Adicionar imagem</h6>
              <label htmlFor="imageUpload" className={styles.uploadLabel}>
                <input
                  id="imageUpload"
                  type="file"
                  accept="image/*"
                  className={styles.fileInput}
                  name="image"
                  onChange={handleInputChange}
                />
                <span className={styles.uploadText}>Clique para enviar</span>
              </label>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.inputWrapper}>
              <h6>Quantidade</h6>
              <input
                type="number"
                name="quantity"
                value={product.quantity}
                className={styles.inputs_square}
                placeholder="Quantidade"
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.inputWrapper}>
              <h6>Data de Validade</h6>
              <input
                type="date"
                name="expirationDate"
                value={product.expirationDate}
                className={styles.inputs_square}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className={styles.div_input} id="productDescription">
            <h6>Descrição</h6>
            <textarea
              className={styles.textarea_description}
              rows="4"
              name="description"
              value={product.description}
              placeholder="Digite a descrição do produto..."
              onChange={handleInputChange}
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
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
