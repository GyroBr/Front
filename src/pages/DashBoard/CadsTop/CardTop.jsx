import React from 'react';
import './CardTop.css';
import { BsBasket, BsCartDash } from "react-icons/bs";
import {getTotalSales} from "../../../services/pedido/PedidoService";
// import {getAllOrders} from "../../../services/pedido/PedidoService";
import { useEffect, useState } from 'react';
import { getBestSeller } from '../../../services/history/history';

const CardTop = () => {

  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const token = sessionStorage.getItem('token');

  useEffect(() => {

      const fetchOrders = async () => {
          try {
              const response = await getTotalSales(token); 
              const data = response.data;
              setOrders(data);
              
          } catch (error) {
              console.error('Erro ao buscar orders:', error);
          }
      };

      fetchOrders();
  }, []);

      useEffect(() => {

        const fetchOrders = async () => {
            try {
                const response = await getBestSeller(token); 
                const data = response.data;
                setProducts(data);
                
            } catch (error) {
                console.error('Erro ao buscar orders:', error);
            }
        };

        fetchOrders();
    }, []);

  console.log('tela dash 224 => ', products);

  // console.log('tela dash 22 => ', orders);

  const total = orders.reduce((acc, i) => acc + i.total, 0);
  

  const cards = [
    {
      icon: '💰', // Coloque ícones SVG ou de biblioteca de ícones aqui
      // percentage: '+32.40%',
      label: 'Total em vendas',
      value: `R$ ${total}`,
    },
    {
      icon: '🛒',
      // percentage: '+20.67%',
      label: 'Total de vendas',
      value: orders.length,
    },
    {
      icon: '⭐',
      label: 'Produto mais vendido',
      value: products.length > 0 ? products[0].productName : 'N/A',
    },
    {
      icon: '📉',
      label: 'Produto menos vendido',
      value: products.length > 0 ? products[products.length - 1].productName : 'N/A',
    },
  ];

  return (
    <div className="dashboard">
      {cards.map((card, index) => (
        <div key={index} className="card">
          <div className="card-header">
            <span className="card-icon">{card.icon}</span>
            {card.percentage && <span className="card-percentage">{card.percentage}</span>}
          </div>
          <div className="card-content">
            <p className="card-value">{card.value}</p>
            <p className="card-label">{card.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardTop;
