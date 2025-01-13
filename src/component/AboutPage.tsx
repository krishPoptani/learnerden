import AboutCard from "./AboutCard";
import AboutHeroSection from "./AboutHeroSection";
import AboutMainSection from "./AboutMainSection";
import AboutWhyChoose from "./AboutWhyChoose";

const acheivementIcon = "/icons/acheivementIcon.svg";
const bookIcon3 = "icons/bookIcon3.svg";

const aboutPageData = [
  {
    icon: acheivementIcon,
    title: "Learn from Certified Tutors Only",
    description: "Some subjects and concepts are best understood through the guidance and expertise of certified tutors. That’s where Edmate makes the difference."
  },
  {
    icon: bookIcon3,
    title: "Learn Anytime, Anywhere – Your Choice, Your Convenience",
    description: "Online learning has no limits. So why wait? Sign up today and start your learning journey with Edmate. Learn from the comfort of your own space, anytime, anywhere!"
  },
];

export default function AboutPage() {
  return (
    <div className="">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 mt-6">
        <h2 className="mx-auto font-sen text-secondary text-center font-bold text-xl lg:text-4xl">About</h2>
        <p className="max-auto text-center mt-2 text-[#717171]">Connecting Minds, Empowering Futures.</p>
        <div>
          <AboutHeroSection />
          <AboutMainSection />
          <div className="my-5 lg:my-8 flex items-stretch gap-4 px-5">
          {aboutPageData?.map((card, ind) => (
            <AboutCard
              key={ind}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
          </div>
        </div>
      </div>
      <AboutWhyChoose />
    </div>
  );
}
