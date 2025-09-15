import { Card } from "@/components/ui/card";
import { Heart, Star, Sun, Moon } from "lucide-react";

const LoveSection = () => {
  const loveReasons = [
  {
    icon: <Sun className="text-gold-deep" size={32} />,
    title: "Esse seu jeito",
    description: "Adoro cada detalhe de quem você é. Seu jeito único me deixa completamente apaixonado."
  },
  {
    icon: <Heart className="text-rose-deep" size={32} fill="currentColor" />,
    title: "Como você me trata",
    description: "Você me faz sentir tão especial de um jeito que ninguém mais consegue. Estar com você é incrível."
  },
  {
    icon: <Star className="text-pink-500" size={32} fill="currentColor" />,
    title: "Nossos momentos juntos",
    description: "Cada instante ao seu lado se torna inesquecível. Eu amo estar com você e compartilhar tudo."
  },
  {
    icon: <Moon className="text-rose-medium" size={32} fill="currentColor" />,
    title: "Suas risadas",
    description: "Sua risada é contagiante e ilumina meu dia. É impossível não sorrir junto com você."
  }
];


  return (
    <section className="py-20 bg-gradient-romantic">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Algumas coisas que amo em você
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            (são muitas, mas escolhi essas)
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