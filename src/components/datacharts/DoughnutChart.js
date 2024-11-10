// components/DoughnutChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  // Data for the doughnut chart
  const data = {
    labels: ['Positive', 'Negative', 'Neutral'],
    datasets: [
      {
        label: 'Data display test',
        data: [100, 20, 28],
        backgroundColor: ['rgb(41, 163, 41)', 'rgb(37, 99, 235)', 'rgb(255, 205, 86)'],
        hoverOffset: 4,
      },
    ],
  };

  // Options for the doughnut chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw} days`;
          },
        },
      },
    },
  };

  

  return (
    <div className='justify-center'>
    <div style={{ width: '300px', height: '300px', }}>
      <Doughnut data={data} options={options} />
    </div>
    <div className='flex-row justify-center items-center text-center'>
    </div>
    </div>
  );
};

export default DoughnutChart;


/*
    <button type="button" className="text-white text-xs bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:scale-110 duration-500  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg px-4 py-2 text-center me-2 mb-2">Positive</button>
    <button type="button" className="text-white text-xs bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:scale-110 duration-500  focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg px-4 py-2 text-center me-2 mb-2">Negative</button>
    <button type="button" className="text-white text-xs bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:scale-110 duration-500  focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg px-4 py-2 text-center mb-2">Neutral</button>
    
    */