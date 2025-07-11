
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Calendar } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
          Ready to Get <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Label Ready?</span>
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Join thousands of artists who have already boosted their careers with Label Ready's proven marketing strategies. 
          Let's discuss how we can help you reach your next milestone.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 text-center animate-scale-in hover:scale-105">
            <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
            <p className="text-muted-foreground text-sm">Get a detailed proposal within 24 hours</p>
          </div>
          
          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 text-center animate-scale-in hover:scale-105" style={{ animationDelay: '0.3s' }}>
            <MessageCircle className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Live Chat</h3>
            <p className="text-muted-foreground text-sm">Instant answers to your questions</p>
          </div>
          
          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 text-center animate-scale-in hover:scale-105" style={{ animationDelay: '0.6s' }}>
            <Calendar className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground mb-2">Book a Call</h3>
            <p className="text-muted-foreground text-sm">Free 15-minute strategy consultation</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-10 py-4 hover:scale-105 transition-all duration-300">
            Start Your Campaign Today
          </Button>
          <Button 
            variant="outline" 
            className="text-lg px-10 py-4 border-border hover:border-primary/50 bg-transparent hover:bg-primary/10 hover:scale-105 transition-all duration-300"
          >
            Schedule Free Consultation
          </Button>
        </div>

        <div className="mt-12 p-6 bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl border border-border animate-scale-in" style={{ animationDelay: '1.2s' }}>
          <p className="text-foreground font-semibold mb-2">🎵 Special Launch Offer</p>
          <p className="text-muted-foreground">
            Book your first Label Ready campaign this month and get a <span className="text-primary font-semibold">free strategy audit</span> worth $200!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
