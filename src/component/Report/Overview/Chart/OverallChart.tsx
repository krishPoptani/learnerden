import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Legend, Tooltip);

const OverallChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Logins',
        data: [0.2, 0.1, 0.3, 0.6, 0.8, 0.5, 0.7],
        borderColor: '#EF4444',
        fill: false,
      },
      {
        label: 'Content Completion',
        data: [0.3, 0.5, 0.4, 0.7, 0.6, 0.7, 0.9],
        borderColor: '#3B82F6',
        borderDash: [5, 5],
        fill: false,
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow w-full h-full">
      <h2 className="text-lg font-semibold mb-2">Overall</h2>
      <Line data={data} />
    </div>
  );
};

export default OverallChart;
