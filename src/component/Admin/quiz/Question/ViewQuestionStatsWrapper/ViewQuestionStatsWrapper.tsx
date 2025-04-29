import QuestionStatCard from "../QuestionStats/QuestionStatsCard";

const ViewQuestionStatWrapper = () => {
  return (
    <div className="max-w-7xl flex gap-4 px-5 justify-between">
      <QuestionStatCard bgColor="bg-[#E1DEFB]" level="Total Number of Questions" numOfQues={10} />
      <QuestionStatCard bgColor="bg-[#EDF4FA]" level="Quiz Response" numOfQues={4} />
      <QuestionStatCard bgColor="bg-[#FEEFD9]" level="Attempt Taken" numOfQues={4} />
      <QuestionStatCard bgColor="bg-[#FEE3E6]" level="Average Duration" numOfQues={"50 mins"} />
    </div>
  );
};

export default ViewQuestionStatWrapper;