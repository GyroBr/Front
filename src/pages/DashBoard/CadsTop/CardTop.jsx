import React from 'react';
import './CardTop.css';

const CardTop = () => {
  const cards = [
    {
      icon: '💰', // Coloque ícones SVG ou de biblioteca de ícones aqui
      percentage: '+32.40%',
      label: 'Total em vendas',
      value: 'R$2.988,43',
    },
    {
      icon: '🛒',
      percentage: '+20.67%',
      label: 'Total de vendas',
      value: '67',
    },
    {
      icon: '⭐',
      label: 'Produto mais vendido',
      value: 'Heineken 600ml',
    },
    {
      icon: '📉',
      label: 'Produto menos vendido',
      value: 'Sprite 350ml',
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
