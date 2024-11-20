import React from "react";
import Sidebar from "../../components/SideBar/Sidebar";
import styles from "./EstoquePage.module.css"

const EstoquePage = () => {
    return (
        <div className={styles.body}>
            <div className={styles.sidebar_container}>
                <Sidebar />
            </div>
            <div className={styles.conteudo}>
                <h1>ESTOQUE ESTOQUE ESTOQUE ESTOQUE ESTOQUE ESTOQUE ESTOQUE ESTOQUE</h1>
            </div>
        </div>
    );
};

export default EstoquePage;