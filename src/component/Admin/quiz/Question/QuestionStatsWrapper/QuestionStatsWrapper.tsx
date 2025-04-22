import QuestionStatCard from "../QuestionStats/QuestionStatsCard";

const QuestionStatWrapper = () => {
  return (
    <div className="max-w-7xl flex gap-4 px-5 justify-between">
      <QuestionStatCard bgColor="bg-[#E1DEFB]" level="Total Number of" numOfQues={10} />
      <QuestionStatCard bgColor="bg-[#EDF4FA]" level="Beginner" numOfQues={4} score={1} />
      <QuestionStatCard bgColor="bg-[#FEEFD9]" level="Intermediate" numOfQues={4} score={2} />
      <QuestionStatCard bgColor="bg-[#FEE3E6]" level="Expert" numOfQues={2} score={3} />
    </div>
  );
};

export default QuestionStatWrapper;
