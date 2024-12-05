import React, { useState } from "react";
import styles from "./ModalAdicionarProduto.module.css";
import { registerProduct } from "../../services/produto/ProdutoService";

export default function ModalAdicionar({ isOpen, setModalOpen, onAddSuccess }) {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    expirationDate: "",
    category: "",
    image: null,
  });

  const token = sessionStorage.getItem("token");

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image" && files.length > 0) {
      setProduct((prev) => ({ ...prev, image: files[0] }));
    } else {
      let newValue = value;

      if (name === "price" && value !== "") {
        newValue = parseFloat(value);
      } else if (name === "quantity" && value !== "") {
        newValue = parseInt(value, 10);
      }

      setProduct((prev) => ({ ...prev, [name]: newValue }));
    }
  };

  const handleConfirm = async () => {
    try {
      const formData = new FormData();
      formData.append("name", product.name);
      formData.append("price", product.price);
      formData.append("category", product.category);
      formData.append("quantity", product.quantity);
      formData.append("expirationDate", product.expirationDate);
      formData.append("description", product.description);
      if (product.image) {
        formData.append("file", product.image);
      }

      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);

      // Log dos dados para verificação
      for (let pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }

      const response = await registerProduct(token, formData, headers);
      console.log("response from high level", response);

      if (response.status === 200) {
        alert("cadastrado com sucesso");
        window.location.reload();
      }
    } catch (error) {
      console.error(
        "Erro ao tentar adicionar o produto:",
        error.response?.data || error.message || error.field
      );
      // Evita mostrar um alerta em caso de sucesso e exibe apenas para erros
      alert(
        "Não foi possível adicionar o produto. Verifique os dados e tente novamente."
      );
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
          <div className={styles.row}>
            <div className={styles.inputWrapper}>
              <h6>Descrição</h6>
              <textarea
                name="description"
                className={styles.textarea_description}
                value={product.description}
                onChange={handleInputChange}
              ></textarea>
            </div>
          </div>
          <button onClick={handleConfirm} className={styles.confirmButton}>
            Adicionar Produto
          </button>
        </div>
      </div>
    </div>
  );
}
