import { Heart } from "lucide-react";

const FloatingHearts = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <Heart
          key={i}
          className="absolute text-rose-medium/20 animate-float"
          size={Math.random() * 20 + 10}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
          fill="currentColor"
        />
      ))}
    </div>
  );
};

export default FloatingHearts;