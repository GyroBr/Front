/* eslint-disable react/prop-types */
import React from "react";
import styles from "./CardCart.module.css";

const CardCart = ({ cartItems, onCreateOrder, total }) => {
  return (
    <div className={styles.box_order}>
      <h3 className={styles.cart_tittle}>Carrinho</h3>
      <div className={styles.cart_content}>
        {Object.keys(cartItems).length > 0 ? (
          Object.entries(cartItems).map(([productId, { name, quantity, price }]) => (
            <div key={productId} className={styles.cart_item}>
              <span className={styles.item_name}>{name}</span>
              <span className={styles.item_quantity}>Qtd: {quantity}</span>
              <span className={styles.item_price}>R$ {price * quantity},00</span>
              <select name="selectMethodOfPayment" id=""></select>
            </div>
          ))
        ) : (
          <span className={styles.empty_cart}>Carrinho vazio</span>
        )}
      </div>
      <div className={styles.cart_footer}>
        <span className={styles.total}>Total: R$ {total},00</span>
        <button className={styles.btn_finalize} onClick={onCreateOrder}>
          Finalizar Pedido
        </button>
      </div>
    </div>
  );
};

export default CardCart;
