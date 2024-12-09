import React, { useEffect, useState } from "react";
import Sidebar from "../../components/SideBar/Sidebar";
import NavIntern from "../../components/NavIntern/NavIntern";
import CardOrder from "../../components/CardOrder/CardOrder";
import CardCart from "../../components/CardOrder/CardCart";
import styles from "./OrderPage.module.css";
import { getProductImage, getProducts } from "../../services/produto/ProdutoService";
import { createOrder } from "../../services/pedido/PedidoService";

const OrderPage = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [loading, setLoading] = useState(true);
  const [isFullHeight, setIsFullHeight] = useState(false);
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getProducts(token);

        const productsWithImages = await Promise.all(
          fetchedProducts.map(async (product) => {
            const imageUrl = product.image
              ? await getProductImage(token, product.image)
              : "/path/to/default/image.png";

            return {
              ...product,
              image: imageUrl,
            };
          })
        );

        setProducts(productsWithImages);
        setLoading(false);
        setIsFullHeight(productsWithImages.length > 6);
      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [token]);

  const updateCart = (id, quantity, name, price) => {
    setCartItems((prevItems) => {
      if (quantity > 0) {
        return {
          ...prevItems,
          [id]: { name, quantity, price },
        };
      } else {
        const updatedItems = { ...prevItems };
        delete updatedItems[id];
        return updatedItems;
      }
    });
  };

  const calculateTotal = () =>
    Object.values(cartItems).reduce((total, item) => total + item.quantity * item.price, 0);

  const handleCreateOrder = async () => {
    const orderData = {
      paymentMethod: "PIX",
      amountOfMoneyGiven: 0,
      orderProduct: Object.entries(cartItems).map(([id, { quantity }]) => ({
        productId: parseInt(id, 10),
        quantity,
      })),
    };

    try {
      await createOrder(token, orderData);
      setCartItems({});
    } catch (error) {
      console.error("Erro ao criar pedido:", error);
    }
  };

  return (
    <div className={styles.body}>
      <div className={styles.sidebar_container}>
        <Sidebar />
      </div>
      <div
        className={`${styles.conteudo} ${
          isFullHeight ? styles.autoHeight : styles.fullHeight
        }`}
      >
        <div className={styles.title_page}>
          <h1>Pedidos</h1>
        </div>
        <div className={styles.navIntern_top}>
          <NavIntern />
        </div>
        <div className={styles.containerDad}>
          <div className={styles.container}>
            {loading ? (
              <p>Carregando produtos...</p>
            ) : products.length === 0 ? (
              <p>Nenhum produto encontrado.</p>
            ) : (
              products.map((product) => (
                <CardOrder
                  key={product.productId}
                  id={product.productId}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  description={product.description}
                  onUpdateCart={updateCart}
                />
              ))
            )}
          </div>
          <CardCart cartItems={cartItems} onCreateOrder={handleCreateOrder} total={calculateTotal()} />
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
