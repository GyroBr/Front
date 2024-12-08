/* eslint-disable react/prop-types */
import React from "react";
import styles from "./CardOrder.module.css";
import {
  BsCalendar4Event,
  BsFillPencilFill,
  BsFillTrashFill,
} from "react-icons/bs";
import { useState } from "react";

const Card = ({
  id,
  name,
  price,
  image,
  quantity,
}) => {
  return (
    <div className={styles.card_estoque}>
      <div className={styles.container}>
        <div className={styles.img}>
          <div className={styles.upload_img}>
            <img src={image} alt={name} />
          </div>
        </div>
        <div className={styles.container_info}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.line}>
            <span className={styles.text}>Produto: {name}</span>
          </div>
          <div className={styles.line}>
            <span className={styles.text}>Preço: R${price},00</span>
          </div>

          <div className={styles.box_btn}>
            {/* Botão para diminuir quantidade */}
            <button
              className={styles.btn_edit_delete}
              onClick={() => onEdit(id, quantity - 1)}
            >
              -
            </button>

            <span className={styles.text}>Quantidade: {quantity}</span>

            <button
              className={styles.btn_edit_delete}
              onClick={() => onEdit(id, quantity + 1)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
