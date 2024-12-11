import React from 'react';
import { Pie } from 'react-chartjs-2';
import './StyleGeral.css';


const PieChart = ({ data }) => {
    const chartData = {
        labels: data.map(item => item.productName),
        datasets: [
            {
                data: data.map(item => item.totalQuantity),
                // backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
                // hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            },
        ],
    };

    return (
        <div className="pie-chart">
            <Pie data={chartData} />
        </div>
    );
};

export default PieChart;
