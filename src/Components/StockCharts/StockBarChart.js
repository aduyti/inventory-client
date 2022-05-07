import React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import useChartData from '../../Utilities/Hooks/useChartData';

const StockBarChart = () => {
    const [data] = useChartData('https://obscure-eyrie-55678.herokuapp.com/data/monthly');

    return (
        <ResponsiveContainer width="95%" height="80%" >
            <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <Bar dataKey="newStock" fill="#8884d8" />
                <Bar dataKey="delivered" fill="#82ca9d" />
                <CartesianGrid strokeDasharray="5 5" />
                <XAxis dataKey="month" />
                <YAxis />
                <Legend />
                <Tooltip />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default StockBarChart;