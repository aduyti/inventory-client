import React from 'react';
import StockBarChart from '../StockCharts/StockBarChart';
import StockPIEChart from '../StockCharts/StockPIEChart';

const ChartSection = () => {
    return (
        <>
            <h2 className="text-3xl font-bold text-cyan-600 py-8">Warehouse Data</h2>
            <div className="grid gap-5 grid-cols-1 lg:grid-cols-2 mx-5">
                <div className="border-2 rounded-lg border-gray-400 h-[500px] min-w-[350px] mx-auto ">
                    <h3 className="text-xl font-bold text-cyan-600 py-8">Stock In <span className="text-lime-600">vs</span> Delivery</h3>
                    <StockBarChart />
                </div>
                <div className="border-2 rounded-lg border-gray-400 h-[500px] min-w-[350px] mx-auto">
                    <h3 className="text-xl font-bold text-cyan-600 pt-8 pb-2">Total Stock Quantity</h3>
                    <StockPIEChart />
                </div>
            </div>

        </>
    );
};

export default ChartSection;