import React from "react";
import Sidebar from "../../components/SideBar/Sidebar";
import NavIntern from "../../components/NavIntern/NavIntern";
import BtnAddProduct from "../../components/Button/BtnAddProduct";
import BtnConfig from "../../components/Button/BtnConfig";
import CardEstoque from "../../components/CardEstoque/CardEstoque";
import styles from "./EstoquePage.module.css";

const EstoquePage = () => {
    return (
        <div className={styles.body}>
            <div className={styles.sidebar_container}>
                <Sidebar />
            </div>
            <div className={styles.conteudo}>
                <div className={styles.title_page}>
                    <h1>Gestão de Estoque</h1>
                </div>
                <div className={styles.navIntern_top}>
                    <NavIntern />
                </div>
                <div className={styles.container_btn}>
                    <BtnAddProduct /> <BtnConfig />
                </div>
                <div className={styles.container}>
                    <CardEstoque/> <CardEstoque/> <CardEstoque/>
                </div>
            </div>
        </div>
    );
};

export default EstoquePage;