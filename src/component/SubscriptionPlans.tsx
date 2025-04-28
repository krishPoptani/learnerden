'use client';

import { useState } from "react";

type PlanType = {
  title: string;
  subtitle: string;
  price: number;
  features: string[];
  buttonColor: string;
};

const plans: PlanType[] = [
  {
    title: "Basic Plan",
    subtitle: "(PDF Subscription)",
    price: 30,
    features: [
      "Access to<b> curated study material PDFs</b>",
      "Downloadable <b>notes, formulas, and key concepts</b>",
      "Weekly updates with new topics & revisions",
      "No access to quizzes & mock tests",
    ],
    buttonColor: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Standard Plan",
    subtitle: "(Online Quiz Learning)",
    price: 50,
    features: [
      "<b>Unlimited topic-wise quizzes </b>(MCQs, True/False, Fill in the Blanks)",
      "Instant results & performance tracking",
      "Detailed explanations for answers",
      "Leaderboards & badges for motivation",
    ],
    buttonColor: "bg-indigo-600 text-white",
  },
  {
    title: "Premium Plan",
    subtitle: "(Mock Tests + Full Access)",
    price: 60,
    features: [
      "<b>Full-length mock</b> tests (Exam simulation)",
      "Time-based practice tests (Improve speed & accuracy)",
      "AI-driven weakness analysis & personalized recommendations",
      "Doubt-solving support via discussion forums",
    ],
    buttonColor: "bg-indigo-100 text-indigo-600",
  },
];

export default function SubscriptionPlans() {
  const [activeTab, setActiveTab] = useState<"Monthly" | "Yearly">("Monthly");

  return (
    <section className="py-10 px-4 text-center">
      <h2 className="text-[#170F49] text-3xl font-bold mb-2">Subscription Packages</h2>

      <div className="inline-flex bg-[#EBEFF0] rounded-full p-3 mb-8">
        <button
          onClick={() => setActiveTab("Monthly")}
          className={`px-5 py-2 text-base font-medium rounded-full transition ${activeTab === "Monthly" ? "bg-f4a text-white font-bold  shadow" : "text-f4a"
            }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setActiveTab("Yearly")}
          className={`px-5 py-2 text-base font-medium rounded-full transition ${activeTab === "Yearly" ? "bg-f4a text-white font-bold  shadow" : "text-f4a"
            }`}
        >
          Yearly <span className={` text-xs ${activeTab === "Yearly" ? "bg-f4a text-white" : "text-f4a"
            }`}>-20% off</span>
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className="border border-gray-200 p-6 rounded-xl text-left flex flex-col justify-between shadow-sm"
          >
            <div>
              <h3 className="text-[#1D2127] text-base font-semibold">{plan.title}</h3>
              <p className="text-[#1D2127] text-base font-semibold mb-4">{plan.subtitle}</p>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl font-semibold text-[#1D2127]" >${plan.price}</span>
                <div className="text-[#B9BEC1] text-xs ">
                  <p>per editor/month </p>
                  <p>billed {activeTab.toLowerCase()}</p>

                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-[#1D2127]">
                    <span className="bg-[#EBEFF0] px-2 py-1 rounded-full text-[#B9BEC1] mt-1"> ✔</span>
                    <span  className='py-1' dangerouslySetInnerHTML={{ __html: feature }} />
                  </li>
                ))}
              </ul>
            </div>

            <button
              className={`mt-6 w-full py-2 rounded-lg font-medium ${plan.buttonColor}`}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
