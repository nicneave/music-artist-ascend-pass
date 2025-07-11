
import { Music, TrendingUp, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with your uploaded image */}
      <div className="absolute inset-0">
        <img 
          src="/lovable-uploads/246fb19f-66d8-4d1c-b0e0-9f0453a300f2.png" 
          alt="Vinyl record background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background/80 to-secondary/50"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Music className="w-12 h-12 text-primary/40" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <TrendingUp className="w-10 h-10 text-primary/40" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <Users className="w-14 h-14 text-primary/40" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '0.5s' }}>
        <Target className="w-11 h-11 text-primary/40" />
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-fade-in">
          Get Your Artist Career{" "}
          <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Label Ready
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Complete your artist development phase with professional digital marketing. 
          Build the foundation labels look for: streaming numbers, social proof, and engaged fanbase.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-4 hover:scale-105 transition-all duration-300">
            Start Your Development
          </Button>
          <Button 
            variant="outline" 
            className="text-lg px-10 py-4 border-border hover:border-primary/50 bg-transparent hover:bg-primary/10 hover:scale-105 transition-all duration-300"
          >
            Learn How We Help
          </Button>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 text-center animate-scale-in hover:scale-105">
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2">50M+</div>
            <div className="text-muted-foreground">Streams Generated</div>
          </div>
          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 text-center animate-scale-in hover:scale-105" style={{ animationDelay: '0.3s' }}>
            <div className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-2">500+</div>
            <div className="text-muted-foreground">Artists Developed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
