import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const ActiveUsersChart = () => {
  const data = {
    labels: ['Active', 'Never Logged In'],
    datasets: [
      {
        data: [1400, 600],
        backgroundColor: ['#6366F1', '#D1D5DB'],
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow w-full h-full">
      <h2 className="text-lg font-semibold">Users</h2>
      <p className="text-2xl font-bold">2000</p>
      <div className='px-2'>
      <Pie data={data} />
      </div>
    </div>
  );
};

export default ActiveUsersChart;
