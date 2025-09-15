import HeroSection from "@/components/HeroSection";
import LoveSection from "@/components/LoveSection";
import FloatingHearts from "@/components/FloatingHearts";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <FloatingHearts />
      <HeroSection />
      <LoveSection />
    </main>
  );
};

export default Index;
