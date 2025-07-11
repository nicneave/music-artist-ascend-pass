
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const navigate = useNavigate();

  const handleMembersOnly = () => {
    navigate("/members");
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <ContactSection />
      
      {/* Members Only Button */}
      <div className="py-8 px-4 text-center bg-muted/20">
        <Button 
          onClick={handleMembersOnly}
          variant="outline"
          className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          <Lock className="w-4 h-4" />
          Members Only
        </Button>
      </div>
    </div>
  );
};

export default Index;
