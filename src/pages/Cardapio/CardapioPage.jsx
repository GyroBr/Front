import React, { useEffect, useState } from "react";
import Sidebar from "../../components/SideBar/Sidebar";
import NavIntern from "../../components/NavIntern/NavIntern";
import BtnAddProduct from "../../components/Button/BtnAddProduct";
import CardCardapio from "../../components/CardCardapio/CardCardapio";
import { getProducts } from "../../services/produto/ProdutoService"; // Atualize o caminho correto para a service
import styles from "./CardapioPage.module.css";

const CardapioPage = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = sessionStorage.getItem("token");
  console.log(token);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts(token);
        setRepositories(products);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [token]);

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
        </div>
        {loading ? (
          <p>Carregando produtos...</p>
        ) : (
          <div className={styles.container}>
            {repositories.map((repo) => (
              <CardCardapio
                key={repo.id}
                id={repo.id} 
                name={repo.name}
                description={repo.description}
                price={repo.price}
                image={repo.image ? repo.image : "/path/to/default/image.png"} // Caminho para imagem padrão
                // Passando a função de exclusão
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardapioPage;
