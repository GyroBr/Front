import React, { useEffect, useState } from "react";
import Sidebar from "../../components/SideBar/Sidebar";
import NavIntern from "../../components/NavIntern/NavIntern";
import BtnAddProduct from "../../components/Button/BtnAddProduct";
import BtnAddBatch from "../../components/Button/BtnAddBatch";
import BtnConfig from "../../components/Button/BtnConfig";
import CardEstoque from "../../components/CardEstoque/CardEstoque";
import styles from "./EstoquePage.module.css";
import {
  getProductImage,
  getProducts,
} from "../../services/produto/ProdutoService";

const token = sessionStorage.getItem("token");

const EstoquePage = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFullHeight, setIsFullHeight] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null); // Novo estado
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts(token);

        if (!Array.isArray(products)) {
          setLoading(false);
          return;
        }

        const productsWithImages = await Promise.all(
          products.map(async (product) => {
            if (!product.productId) {
              return null;
            }

            const imageUrl = product.image
              ? await getProductImage(token, product.image)
              : "/path/to/default/image.png";

            return {
              ...product,
              image: imageUrl,
            };
          })
        );

        const validProducts = productsWithImages.filter(
          (product) => product !== null
        );
        setRepositories(validProducts);
        setLoading(false);
        setIsFullHeight(validProducts.length > 8);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [token]);

  // Função para atualizar a categoria selecionada
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  // Filtra os produtos pela categoria selecionada
  const filteredRepositories = selectedCategory
    ? repositories.filter((product) => product.category === selectedCategory)
    : repositories;

  return (
    <div className={styles.body}>
      <div className={styles.sidebar_container}>
        <Sidebar />
      </div>
      <div className={`${styles.conteudo} ${
        isFullHeight ? styles.autoHeight : styles.fullHeight
      }`}>
        <div className={styles.title_page}>
          <h1>Gestão de Estoque</h1>
        </div>
        <div className={styles.navIntern_top}>
          <NavIntern onCategorySelect={handleCategorySelect} /> {/* Passa a função */}
        </div>
        <div className={styles.container_btn}>
          <BtnAddProduct />
        </div>
        <div className={styles.container}>
          {loading ? (
            <p>Carregando produtos...</p>
          ) : filteredRepositories.length === 0 ? (
            <p>Nenhum produto encontrado.</p>
          ) : (
            <div className={styles.container}>
              {filteredRepositories.map((repo) => (
                <CardEstoque
                  key={`${repo.id}-${repo.name}`}
                  id={repo.productId}
                  name={repo.name}
                  description={repo.description}
                  price={repo.price}
                  image={repo.image}
                  category={repo.category}
                  quantity={repo.quantity}
                  expirationDate={repo.expirationDate}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EstoquePage;
