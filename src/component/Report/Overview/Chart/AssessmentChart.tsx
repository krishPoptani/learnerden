import { Pie } from 'react-chartjs-2';

const AssessmentsChart = () => {
  const data = {
    labels: ['Pre-Survey', 'Post-Survey', 'Quiz', 'Poll'],
    datasets: [
      {
        data: [40, 30, 20, 10],
        backgroundColor: ['#3B82F6', '#6366F1', '#F59E0B', '#10B981'],
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow w-full h-full">
      <h2 className="text-lg font-semibold">Assessments</h2>
      <div className='px-2'>
      <Pie data={data} />
      </div>
    </div>
  );
};

export default AssessmentsChart;
