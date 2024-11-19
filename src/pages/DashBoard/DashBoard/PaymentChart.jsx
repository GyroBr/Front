import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './PaymentChart.css';

const PaymentChart = () => {
  const data = [
    { value: 34, color: '#FFA726', label: 'Pix', pedidos: 17 },
    { value: 70, color: '#FFD54F', label: 'Cartão crédito', pedidos: 35 },
    { value: 30, color: '#FFB300', label: 'Cartão débito', pedidos: 15 },
  ];

  return (
    <div className="chart-container">
      <h3>Forma de Pagamento</h3>
      <div className="circle-wrapper">
        {data.map((item, index) => (
          <div
            key={index}
            className="circle"
            style={{
              width: `${100 - index * 20}px`,
              height: `${100 - index * 20}px`,
            }}
          >
            <CircularProgressbar
              value={item.value}
              maxValue={100}
              styles={buildStyles({
                pathColor: item.color,
                trailColor: '#333',
                rotation: 0.75, // rotaciona os círculos para alinhar como no exemplo
              })}
            />
          </div>
        ))}
      </div>
      <div className="legend">
        {data.map((item, index) => (
          <div key={index} className="legend-item">
            <span className="legend-color" style={{ backgroundColor: item.color }}></span>
            <span>{item.label}</span> - <span>{item.pedidos} Pedidos</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentChart;
