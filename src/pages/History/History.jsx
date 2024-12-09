import React, { Component, useState } from 'react'
import styles from './History.module.css'

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

                </div>
            </div>
        </div>
    )

};

export default HistoryPage
