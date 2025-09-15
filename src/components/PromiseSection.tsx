import { Card } from "@/components/ui/card";
import { Heart, Infinity, Shield, Smile } from "lucide-react";

const PromiseSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Heart className="text-rose-deep mx-auto mb-6 animate-pulse-glow" size={48} fill="currentColor" />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Minhas Promessas Para Você
          </h2>
        </div>
        
        <Card className="max-w-4xl mx-auto p-12 bg-gradient-sunset shadow-romantic">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Infinity className="text-white mb-4" size={40} />
              <h3 className="text-xl font-semibold text-white mb-2">Amor Eterno</h3>
              <p className="text-white/90">
                Prometo te amar hoje, amanhã e por toda a eternidade
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <Shield className="text-white mb-4" size={40} />
              <h3 className="text-xl font-semibold text-white mb-2">Proteção</h3>
              <p className="text-white/90">
                Serei seu porto seguro em todos os momentos da vida
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <Smile className="text-white mb-4" size={40} />
              <h3 className="text-xl font-semibold text-white mb-2">Felicidade</h3>
              <p className="text-white/90">
                Farei de tudo para ver seu sorriso todos os dias
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-2xl md:text-3xl text-white font-light italic">
              "Você é minha pessoa favorita, meu maior amor, minha alma gêmea.
              Obrigado por existir e fazer parte da minha vida."
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PromiseSection;