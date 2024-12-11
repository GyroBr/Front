import React from 'react';
import './StyleGeral.css';
import PieChart from "./PieChart";

const TopProducts = () => {
    return (
        <div className="top-products">
            <div className='div_lista_top_products'>
                <h3>Produtos mais vendidos</h3>
                <ul>
                    <li>Produto tal</li>
                    <li>Produto taltal</li>
                    <li>Produto taldetal</li>
                    <li>Produto taltaltal</li>
                    <li>Produto taltal</li>
                </ul>
            </div>
            <div className='div_pie_chart'></div>
            <PieChart />
        </div>
    );
};

export default TopProducts;
