import React from "react";
import StatCard from "./DashboardCard";

const DashboardCardWrapper = () => {
  const stats = [
    { label: "Total Students", value: 150 },
    { label: "Total Tutors", value: 250 },
    { label: "Total Quizzes", value: 100 },
  ];

  return (
    <div className="flex flex-wrap gap-6 justify-center md:justify-start">
      {stats.map((stat, index) => (
        <StatCard key={index} label={stat.label} value={stat.value} />
      ))}
    </div>
  );
};

export default DashboardCardWrapper;
