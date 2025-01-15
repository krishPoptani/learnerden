import AboutCard from "./AboutCard";
import AboutHeroSection from "./AboutHeroSection";
import AboutMainSection from "./AboutMainSection";
import AboutWhyChoose from "./AboutWhyChoose";
import Location from "./Location";



export default function AboutPage() {
  return (
    <div className="pt-8">
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 mt-6">
        <h2 className="mx-auto font-sen text-secondary text-center font-bold text-3xl lg:text-4xl">About</h2>
        <p className="max-auto text-center mt-2 text-[#717171]">Connecting Minds, Empowering Futures.</p>
        <div>
          <AboutHeroSection />
          <AboutMainSection />
        </div>
      </div>
      <AboutWhyChoose />
      <Location />
    </div>
  );
}
