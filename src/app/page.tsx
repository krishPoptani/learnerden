import Herobanner from "@/component/Herobanner";
import HomeTestimonialSection from "@/component/HomeTestimonialSection";
import MainSection from "@/component/MainSection";
import TeachersDetailsSection from "@/component/TeachersDetailsSection";
import UserDashboard from "@/routes/userside/page";

export default function HomePage() {
  return (
    <UserDashboard>
    <div>
      <Herobanner />
      <MainSection />
      <TeachersDetailsSection />
      <HomeTestimonialSection />
    </div>
    </UserDashboard>
  );
}
