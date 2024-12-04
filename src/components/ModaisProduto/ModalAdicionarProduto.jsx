import React, { useState } from "react";
import styles from "./ModalAdicionarProduto.module.css";
import { FaUpload } from "react-icons/fa"; // Ícone de upload
import { registerProduct } from "../../services/produto/ProdutoService"; // Importe a função de requisição

export default function ModalAdicionar({ isOpen, setModalOpen, onAddSuccess }) {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    expirationDate: "",
    category: "",
    image: null, // Armazena o arquivo da imagem
  });

  const token = sessionStorage.getItem("token");

  // Atualiza o estado ao modificar os inputs
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image" && files.length > 0) {
      setProduct((prev) => ({ ...prev, image: files[0] })); // Armazena o arquivo da imagem
    } else {
      let newValue = value;

      // Converte price e quantity para tipos numéricos apropriados
      if (name === "price" && value !== "") {
        newValue = parseFloat(value);
      } else if (name === "quantity" && value !== "") {
        newValue = parseInt(value, 10);
      }

      setProduct((prev) => ({ ...prev, [name]: newValue }));
    }
  };

  // Função para adicionar o produto
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
        formData.append("file", product.image); // Adiciona o arquivo da imagem
      }

      // Adiciona o cabeçalho de autorização
      const headers = new Headers();
      headers.append("Authorization", `Bearer ${token}`);

      // Log para debugar o conteúdo do FormData
      for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }

      // Chama a função de serviço para fazer a requisição
      const response = await registerProduct(token, formData, headers);

      if (response?.status === 201 || response?.status === 200) {
        alert("Produto adicionado com sucesso!");
        onAddSuccess(); // Notifica o componente pai para atualizar a lista
        setModalOpen(false);
      } else {
        throw new Error("Erro ao adicionar o produto.");
      }
    } catch (error) {
      console.error("Erro ao tentar adicionar o produto:", error.response?.data || error.message);
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
          <div className={styles.row}>
            <div className={styles.inputWrapper}>
              <h6>Descrição</h6>
              <textarea
                name="description"
                className={styles.inputs_square}
                value={product.description}
                onChange={handleInputChange}
              ></textarea>
            </div>
          </div>
          <button onClick={handleConfirm} className={styles.confirmButton}>Adicionar Produto</button>
        </div>
      </div>
    </div>
  );
}
