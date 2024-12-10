import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Grafico = ({ dataOrders }) => {

    var orders = dataOrders.length;
    console.log(orders);

    const data = {
        labels: ['Pedidos Completos', 'Pedidos Cancelados'],
        datasets: [
            {
                label: 'Pedidos',
                data: [orders, 0],
                backgroundColor: ['#FFA858', '#FFC36A'],
                hoverBackgroundColor: ['#FFA34E', '#FFA34E'],
                borderWith: 0,
                borderColor: 'transparent',
                borderRadius: 6,
            },
        ],
    };

    return <Pie data={data} />;
};

export default Grafico;