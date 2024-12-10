import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const GraficoBar = () => {
    const data = {
        labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
        datasets: [
            {
                label: 'Vendas durante o dia',
                data: [12, 19, 6, 11, 5, 9],
                backgroundColor: '#FFA34E',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWith: 0,
                borderColor: 'transparent',
                borderRadius: 5,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default GraficoBar;