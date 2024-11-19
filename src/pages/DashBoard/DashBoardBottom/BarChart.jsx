import React from 'react';
import style from './BarChart.module.css';
import PaymentChart from '../DashBoard/PaymentChart';
import TopProducts from './TopProducts';
import CardTop from '../CadsTop/CardTop';
import ProdutosMaisVendidos from '../ProdutosMaisVendidos';

const BarChart = () => {
    const data = [
        { day: 'Segunda', value: 60 },
        { day: 'Terça', value: 70 },
        { day: 'Quarta', value: 65 },
        { day: 'Quinta', value: 80 },
        { day: 'Sexta', value: 90 },
        { day: 'Sábado', value: 100 },
        { day: 'Domingo', value: 50 }
    ];

    return (
        <>
            <div style={{
                width:'100%',
                height:'100vh'
            }}>
                <CardTop />
                <div className={style.bouth_dash}>

                    <div className={style.barChartContainer}>
                        <div className={style.yAxisLabels}>
                            {[100, 80, 60, 40, 20, 0].map((label, index) => (
                                <span key={index}>{label}</span>
                            ))}
                        </div>
                        <div className={style.barChart}>
                            {data.map((item, index) => (
                                <div key={index} className={style.barContainer}>
                                    <div
                                        className={style.bar}
                                        style={{ height: `${item.value}px` }}
                                    ></div>
                                    <p>{item.day}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <PaymentChart />
                </div>
                <ProdutosMaisVendidos />
            </div>
        </>
    );
};

export default BarChart;
