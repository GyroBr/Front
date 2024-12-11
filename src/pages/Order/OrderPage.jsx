import React, { useEffect, useState } from "react";
import Sidebar from "../../components/SideBar/Sidebar";
import NavIntern from "../../components/NavIntern/NavIntern";
import CardOrder from "../../components/CardOrder/CardOrder";
import CardCart from "../../components/CardOrder/CardCart";
import styles from "./OrderPage.module.css";
import {
  getProductImage,
  getProducts,
} from "../../services/produto/ProdutoService";
import { createOrder } from "../../services/pedido/PedidoService";
import { toast } from "react-toastify";

const OrderPage = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [loading, setLoading] = useState(true);
  const [isFullHeight, setIsFullHeight] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const token = sessionStorage.getItem("token");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cashGiven, setCashGiven] = useState(0);

  const handlePaymentMethodChange = (method) => setPaymentMethod(method);
  const handleCashGivenChange = (amount) => setCashGiven(amount);

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

  const handleCategorySelect = (category) => {
    console.log("Categoria selecionada:", category);
    setSelectedCategory(category);
  };

  // Filtro por categoria
  const filteredProducts = selectedCategory
    ? products.filter((product) => {
        console.log(
          "Verificando produto:",
          product.category,
          "com categoria selecionada:",
          selectedCategory
        );
        return product.category === selectedCategory;
      })
    : products;

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
    Object.values(cartItems).reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );

  const handleCreateOrder = async () => {
    const orderData = {
      paymentMethod: paymentMethod, // Exemplo de valor padrão
      amountOfMoneyGiven: paymentMethod === "MONEY" ? cashGiven : null,
      orderProduct: Object.entries(cartItems).map(([id, { quantity }]) => ({
        productId: parseInt(id, 10),
        quantity,
      })),
    };
    console.log("order data: ", orderData.amountOfMoneyGiven);

    try {
      const response = await createOrder(token, orderData);
      console.log(response);
      setCartItems({});
      if (response.status === 200) {
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        toast.success("Pedido criado com sucesso!", {
          autoClose: 700,
        });
      }
    } catch (error) {
      const errorMessage = error.response?.data || error.message;
      toast.error(`Erro ao tentar criar o pedido: ${errorMessage}`, {
        autoClose: 1500,
      });
      console.error("Erro ao criar pedido:", errorMessage);
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
          <NavIntern onCategorySelect={handleCategorySelect} />
        </div>
        <div className={styles.containerDad}>
          <div className={styles.container}>
            {loading ? (
              <p>Carregando produtos...</p>
            ) : filteredProducts.length === 0 ? (
              <p>Nenhum produto encontrado.</p>
            ) : (
              filteredProducts.map((product) => (
                <CardOrder
                  key={product.productId}
                  id={product.productId}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  productQuantity={product.quantity}
                  onUpdateCart={updateCart}
                />
              ))
            )}
          </div>
          <CardCart
            cartItems={cartItems}
            onCreateOrder={handleCreateOrder}
            total={calculateTotal()}
            onPaymentMethodChange={handlePaymentMethodChange}
            onCashGivenChange={handleCashGivenChange}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
