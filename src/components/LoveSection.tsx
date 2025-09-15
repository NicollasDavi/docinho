import { Card } from "@/components/ui/card";
import { Heart, Star, Sun, Moon } from "lucide-react";

const LoveSection = () => {
  const loveReasons = [
    {
      icon: <Sun className="text-gold-deep" size={32} />,
      title: "Seu Sorriso",
      description: "Seu sorriso é como o sol da manhã, aquece meu coração e ilumina meu dia inteiro. É impossível não sorrir quando vejo você feliz."
    },
    {
      icon: <Heart className="text-rose-deep" size={32} fill="currentColor" />,
      title: "Seu Carinho",
      description: "Cada gesto de carinho seu é como um abraço na alma. Sua gentileza e amor me fazem ser uma pessoa melhor a cada dia."
    },
    {
      icon: <Star className="text-gold-medium" size={32} fill="currentColor" />,
      title: "Seus Sonhos",
      description: "Admiro sua determinação e a forma como você sonha. Quero estar ao seu lado realizando cada um dos nossos sonhos juntos."
    },
    {
      icon: <Moon className="text-rose-medium" size={32} fill="currentColor" />,
      title: "Nossa Paz",
      description: "Nos seus braços encontro a paz que procurava. Você é meu porto seguro, meu lugar de descanso em meio ao mundo."
    }
  ];

  return (
    <section className="py-20 bg-gradient-romantic">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Por Que Te Amo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            São infinitos os motivos, mas aqui estão alguns que fazem meu coração disparar
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {loveReasons.map((reason, index) => (
            <Card 
              key={index}
              className="p-8 bg-card/80 backdrop-blur-sm shadow-romantic hover:shadow-glow transition-smooth hover:scale-105 border-rose-light/50"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-4">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center text-foreground">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                {reason.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveSection;