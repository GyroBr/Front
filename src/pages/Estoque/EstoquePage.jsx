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
console.log(token);

const EstoquePage = () => {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFullHeight, setIsFullHeight] = useState(false);
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
          <NavIntern />
        </div>
        <div className={styles.container_btn}>
          <BtnAddProduct />
        </div>
        <div className={styles.container}>
          {loading ? (
          <p>Carregando produtos...</p>
        ) : repositories.length === 0 ? (
          <p>Nenhum produto encontrado.</p>
        ) : (
          <div className={styles.container}>
            {repositories.map((repo) => (
              <CardEstoque
                key={`${repo.id}-${repo.name}`}
                id={repo.productId}
                name={repo.name}
                description={repo.description}
                price={repo.price}
                image={repo.image}
                warningQuantity={repo.warningQuantity}
                category={repo.category}
                quantity={repo.quantity}
                expireDate={repo.expireDate}
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
