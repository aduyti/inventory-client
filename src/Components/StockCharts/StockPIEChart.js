import React from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import useChartData from '../../Utilities/Hooks/useChartData';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const StockPIEChart = () => {
    const [data] = useChartData('https://obscure-eyrie-55678.herokuapp.com/data/supplier');

    return (
        <ResponsiveContainer width="95%" height="80%" >
            <PieChart margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                <Pie data={data} dataKey="quantity" cx={200} cy={200} outerRadius={100} fill="#8884d8" label>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}

                </Pie>
                <Legend />
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default StockPIEChart;