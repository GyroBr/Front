import React from "react";
import Sidebar from "../../components/SideBar/Sidebar";
import NavIntern from "../../components/NavIntern/NavIntern";
import BtnAddProduct from "../../components/Button/BtnAddProduct";
import BtnAddCombo from "../../components/Button/BtnAddCombo";
import CardCardapio from "../../components/CardCardapio/CardCardapio";
import styles from "./CardapioPage.module.css";

const CardapioPage = () => {
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
                    <BtnAddProduct /> <BtnAddCombo />
                </div>
                <div className={styles.container}>
                    <CardCardapio/> 
                </div>
            </div>
        </div>
    );
};

export default CardapioPage;