// components/NuggetReportChart.tsx
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const NuggetReportChart = () => {
  const data = {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [
      {
        label: 'Created Nugget',
        backgroundColor: '#1E3A8A', // navy blue
        data: [480, 410, 380, 430, 140, 370, 340],
      },
      {
        label: 'Shared Nugget',
        backgroundColor: '#EC4899', // pink
        data: [300, 360, 90, 300, 300, 150, 390],
      },
      {
        label: 'Viewed Nugget',
        backgroundColor: '#F9A8D4', // light pink
        data: [250, 330, 45, 240, 250, 250, 430],
      },
    ],
  };

  const options: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow w-full">
      <div className="flex items-center gap-6 border-b pb-2">
        <h2 className="font-semibold border-b-2 border-black cursor-pointer">Nugget Report</h2>
        <span className="text-gray-400 cursor-pointer">Medium Based Report</span>
      </div>
      <div className='px-24 py-3'>
      <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default NuggetReportChart;
