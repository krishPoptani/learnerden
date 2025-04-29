import QuestionStatCard from "../QuestionStats/QuestionStatsCard";

const QuestionStatWrapper = () => {
  return (
    <div className="max-w-7xl flex gap-4 px-5 justify-between">
      <QuestionStatCard bgColor="bg-[#E1DEFB]" level="Total Number of Questions" numOfQues={10} />
      <QuestionStatCard bgColor="bg-[#EDF4FA]" level="Beginner Questions" numOfQues={4} score={1} />
      <QuestionStatCard bgColor="bg-[#FEEFD9]" level="Intermediate Questions" numOfQues={4} score={2} />
      <QuestionStatCard bgColor="bg-[#FEE3E6]" level="Expert Questions" numOfQues={2} score={3} />
    </div>
  );
};

export default QuestionStatWrapper;
