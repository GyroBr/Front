import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Tabela/Tabela.module.css';

function Tabela({ order }) {
    
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
                    {order.map((o, index) => (
                        <tr key={o.orderId || index}>
                            <td>{o.orderId}</td>
                            <td>{o.employee.name}</td>
                            <td className={styles.descricao} title={o.productName}>{o.productName}</td>
                            <td>{new Date(o.createdAt).toLocaleString()}</td>
                            <td>{o.paymentMethod}</td>
                            <td>{o.total}</td>
                            <td>{o.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default Tabela;
