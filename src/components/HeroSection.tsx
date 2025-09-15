import { Heart } from "lucide-react";
import romanticBg from "@/assets/romantic-bg.jpg";

const HeroSection = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ 
        backgroundImage: `url(${romanticBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-romantic opacity-60"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-6">
            <Heart className="text-rose-deep animate-pulse-glow" size={60} fill="currentColor" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
            Oi,{" "}
            <span className="bg-gradient-sunset bg-clip-text text-transparent">
              meu docinho
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Fiz esse site só pra você saber o quanto você é importante pra mim
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;