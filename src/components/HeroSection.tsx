import { Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
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
          
          <Button 
            size="lg" 
            className="bg-rose-medium hover:bg-rose-deep text-white shadow-romantic transition-bounce text-lg px-8 py-4 rounded-full"
          >
            <Sparkles className="mr-2" size={20} />
            Continue Lendo
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <Heart className="text-rose-medium opacity-50" size={24} fill="currentColor" />
      </div>
    </section>
  );
};

export default HeroSection;