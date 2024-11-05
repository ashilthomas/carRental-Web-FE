// BarChart.tsx
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components for Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Define the data type for the chart data
interface BarChartProps {
  labels: string[];
  data: number[];
}

const BarChart: React.FC<BarChartProps> = ({ labels, data }) => {
  // Data for the chart
  const chartData = {
    labels: labels, // X-axis labels
    datasets: [
      {
        label: 'Sales', // Legend label
        data: data, // Y-axis data
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Bar color
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true, // Make the chart responsive
    plugins: {
      legend: {
        position: 'top', // Position of the legend
      },
      title: {
        display: true,
        text: 'Monthly Sales Data', // Chart title
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
