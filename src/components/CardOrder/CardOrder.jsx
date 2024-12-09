/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styles from "./CardOrder.module.css";

const CardOrder = ({ id, name, price, image, onUpdateCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onUpdateCart(id, newQuantity, name, price);
  };

  const handleRemoveFromCart = () => {
    const newQuantity = Math.max(0, quantity - 1);
    setQuantity(newQuantity);
    onUpdateCart(id, newQuantity, name, price);
  };

  return (
    <div className={styles.card_estoque}>
      <div className={styles.upload_img}>
        <img src={image} alt={name} className={styles.img} />
      </div>
      <div className={styles.container_info}>
        <h3 className={styles.textName}>{name}</h3>
        <p className={styles.textPrice}>R$ {price},00</p>
        <div className={styles.box_btn}>
          <button
            className={styles.btn_edit_delete}
            onClick={handleRemoveFromCart}
            disabled={quantity === 0}
          >
            -
          </button>
          <span className={styles.textQuantity}>{quantity}</span>
          <button
            className={styles.btn_edit_delete}
            onClick={handleAddToCart}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardOrder;
