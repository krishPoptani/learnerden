import Herobanner from "@/component/Herobanner";
import HomeTestimonialSection from "@/component/HomeTestimonialSection";
import MainSection from "@/component/MainSection";
import TeachersDetailsSection from "@/component/TeachersDetailsSection";

export default function HomePage() {
  return (
    <div>
      <Herobanner />
      <MainSection />
      <TeachersDetailsSection />
      <HomeTestimonialSection />
    </div>
  );
}
