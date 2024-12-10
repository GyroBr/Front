import React, { useState } from 'react'
import styles from '../Tabela/Tabela.module.css'
import { getOrders } from '../../services/history/history'

function Tabela({ order }) {
    const [orders, setOrders] = useState([]);

    return (
        <div className={styles.tableContainer}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Id Pedido</th>
                        <th>Funcionário</th>
                        <th>Descrição</th>
                        <th>Data e hora</th>
                        <th>Pagamento</th>
                        <th>Total</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={order.orderId || index}>
                            <td>{order.orderId}</td>
                            <td>{order.employeeName}</td>
                            <td className={styles.descricao} title={order.productName}>{order.productName}</td>
                            <td>{new Date(order.createdAt).toLocaleString()}</td>
                            <td>{order.paymentMethod}</td>
                            <td>{order.total}</td>
                            <td>{order.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Tabela