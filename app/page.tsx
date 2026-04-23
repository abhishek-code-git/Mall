import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import WhyPropertySection from "@/sections/WhyPropertySection";
import RetailSection from "@/sections/RetailSection";
import LuxurySection from "@/sections/LuxurySection";
import DiningSection from "@/sections/DiningSection";
import EntertainmentSection from "@/sections/EntertainmentSection";
import EventsSection from "@/sections/EventsSection";
import BookingSection from "@/sections/BookingSection";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <HeroSection />
      <WhyPropertySection />
      <RetailSection />
      <LuxurySection />
      <DiningSection />
      <EntertainmentSection />
      <EventsSection />
      <BookingSection />
    </main>
  );
}
