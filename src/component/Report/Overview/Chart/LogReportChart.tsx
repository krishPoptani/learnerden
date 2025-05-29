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

const LogReportChart = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu'],
    datasets: [
      { label: 'New User', backgroundColor: '#FACC15', data: [30, 50, 70, 40] },
      { label: 'Enrolled', backgroundColor: '#F472B6', data: [60, 30, 50, 100] },
      { label: 'Nugget Created', backgroundColor: '#3B82F6', data: [20, 40, 60, 20] },
      { label: 'Content Created', backgroundColor: '#10B981', data: [80, 90, 60, 10] },
    ],
  };

const options: ChartOptions<'bar'> = {
  indexAxis: 'y',
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
  },
  scales: {
    x: {
      beginAtZero: true,
    },
  },
};


  return (
    <div className="bg-white p-4 rounded-xl shadow w-full h-full">
      <h2 className="text-lg font-semibold mb-2">Log Report</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default LogReportChart;
