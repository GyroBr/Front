import React from 'react';
import './StyleGeral.css';

const RevenueAverage = () => {
    return (
        <div className="revenue-average">
            <h3>Média de Faturamento</h3>
            <div className="revenue-values">
                <div className="revenue-item">
                    <p>Mensal</p>
                    <span>R$75.000,00</span>
                </div>
                <div className="revenue-item">
                    <p>Diária</p>
                    <span>R$2.500,00</span>
                </div>
            </div>
        </div>
    );
};

export default RevenueAverage;
