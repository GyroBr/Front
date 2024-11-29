import React, { useEffect, useRef } from "react";
import styles from "../Button/BtnAddCombo.module.css";
import { BsPlusLg } from "react-icons/bs";


const BtnAdd = () => {
    return (
        <button className={styles.btn_add}>
            Adicionar Combo <BsPlusLg className={styles.icon} />
        </button>
    );
};

export default BtnAdd;