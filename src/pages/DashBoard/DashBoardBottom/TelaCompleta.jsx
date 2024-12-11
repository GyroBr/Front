import React from 'react';
import TopProducts from './TopProducts';
import RevenueAverage from './RevenueAverage';
import PieChart from './PieChart';
import BarChart from './BarChart';
import './StyleGeral.css';

const TelaCompleta = () => {
    return (
        <div className="dashboard">
            {/* <PieChart />   */}
            <BarChart/>
            <RevenueAverage />
            <TopProducts />
        </div>
    );
};

export default TelaCompleta;
