import React from 'react';
import './StyleGeral.css';

const RevenueAverage = ({data}) => {
    const total = data.reduce((acc, i) => acc + i.total, 0);

    var dataAtual = new Date();
    console.log(dataAtual.getDate());
    var dia = total / dataAtual.getDate();

    return (
        <div className="revenue-average">
            <h3>Média de Faturamento</h3>
            <div className="revenue-values">
                <div className="revenue-item">
                    <p>Mensal</p>
                    <span>R$ {total.toFixed(2)}</span>
                </div>
                <div className="revenue-item">
                    <p>Diária</p>
                    <span>R$ {dia.toFixed(2)}</span>
                </div>
            </div>
        </div>
    );
};

export default RevenueAverage;
