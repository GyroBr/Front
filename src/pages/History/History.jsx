
import Sidebar from "../../components/SideBar/Sidebar";
import styles from "../History/History.module.css";
import React, { useEffect, useState } from "react";
import Grafico from "../../components/graficos/grafico";
import GraficoBar from "../../components/graficos/graficoBar";
import Tabela from "../../components/Tabela/Tabela";
import getOrders from "../../services/history/history"

const HistoryPage = () => {

    const [orders, setOrders] = useState([]);
    const [salesByEmployee, setSalesByEmployee] = useState({});
    const token = sessionStorage.getItem('token');

    useEffect(() => {

        const fetchOrders = async () => {
            try {
                const response = await getOrders(token); 
                const data = response.data;
                setOrders(data);
            } catch (error) {
                console.error('Erro ao buscar orders:', error);
            }
        };

        fetchOrders();
    }, []);

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
                                <div className={styles.card}>
                                    <span className={styles.title_card}>Total de pedidos no dia</span>
                                    <span className={styles.text_value}>119</span>
                                </div>
                                <div className={styles.card}>
                                    <span className={styles.title_card}>Total de pedidos cancelados</span>
                                    <span className={styles.text_value}>03</span>
                                </div>
                            </div>
                            <div className={styles.box_pie}>
                                <div className={styles.txt_pie}>
                                    <span>Funcionários</span>
                                    <ul>
                                        {orders.length > 0 && orders.map((order, index) => (
                                            <li key={`${order.employee.employeeId}-${index}`}>{order.employee.name}</li>
                                        ))}
                                    </ul>
                                </div>
                                <Grafico />
                            </div>
                            <div className={styles.box_bar}>
                                <GraficoBar />
                            </div>
                        </div>
                        <div className={styles.container}>
                           <Tabela order={orders}/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default HistoryPage