/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Sidebar from "../../components/SideBar/Sidebar";
import NavIntern from "../../components/NavIntern/NavIntern";
import BtnAddProduct from "../../components/Button/BtnAddProduct";
import BtnAddCombo from "../../components/Button/BtnAddCombo";
import CardCardapio from "../../components/CardCardapio/CardCardapio";
import styles from "./CardapioPage.module.css";

const CardapioPage = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      const response = await fetch(
        "https://674cbf5754e1fca9290d7565.mockapi.io/products/product"
      );
      const data = await response.json();
      setRepositories(data);
    };

    fetchRepositories();
  }, []);


  // Função para excluir um produto
  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://674cbf5754e1fca9290d7565.mockapi.io/products/product/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        // Atualize a lista localmente removendo o item excluído
        setRepositories((prev) => prev.filter((repo) => repo.id !== id));
        alert("Produto excluído com sucesso!");
      } 
    } catch (error) {
      console.error("Erro ao excluir o produto:", error);
      alert("Erro ao tentar excluir o produto.");
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.sidebar_container}>
        <Sidebar />
      </div>
      <div className={styles.conteudo}>
        <div className={styles.title_page}>
          <h1>Cardápio</h1>
        </div>
        <div className={styles.navIntern_top}>
          <NavIntern />
        </div>
        <div className={styles.container_btn}>
          <BtnAddProduct /> 
          {/* <BtnAddCombo /> */}
        </div>
        {repositories.length > 0 ? (
          <div className={styles.container}>
            {repositories.map((repo) => (
              <CardCardapio
                key={repo.id}
                id={repo.id} // Passando o ID do produto
                name={repo.name}
                description={repo.description}
                price={repo.price}
                image={repo.image}
                onDelete={handleDelete} // Passando a função de exclusão
              />
            ))}
          </div>
        ) : (
          <p>Carregando produtos...</p>
        )}
      </div>
    </div>
  );
};

export default CardapioPage;
