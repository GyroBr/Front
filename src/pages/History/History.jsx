
import Sidebar from "../../components/SideBar/Sidebar";
import styles from "../History/History.module.css";
import React, { useEffect, useState } from "react";

function History() {

import React, { Component, useState } from 'react'


const HistoryPage = () => {

    return (
        <div className={styles.body}>
            <div className={styles.sidebar_container}>
                <Sidebar />
            </div>
            <div className={styles.conteudo}>
                <div className={styles.title_page}>
                    <h1>Histórico de pedidos</h1>
                </div>

                <div className={styles.card_conteudo}>

                    <div className={styles.container_history}>
                        <div className={styles.container_graph}>
                            <div className={styles.box_card}>
                                <div className={styles.card}></div>
                                <div className={styles.card}></div>
                            </div>
                            <div className={styles.box}>
                                aqui grafico pizza
                            </div>
                            <div className={styles.box}>
                                aqui grafico barra
                            </div>
                        </div>
                        <div className={styles.container}>
                            aqui, tabela
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}

};

export default HistoryPage
