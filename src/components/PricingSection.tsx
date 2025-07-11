import { Check, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const packages = [
    {
      name: "Kickstarter Plan",
      price: "$297",
      description: "Perfect for testing new singles or promos",
      features: [
        "1 Ad Campaign (Spotify, Instagram, or YouTube)",
        "Weekly reporting and optimization", 
        "Campaign setup + 2 custom creatives",
        "Performance tracking dashboard"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-600"
    },
    {
      name: "Momentum Plan",
      price: "$796",
      description: "Best for new releases with complete rollout support",
      features: [
        "3 Campaigns (Spotify + YouTube + Instagram)",
        "Single rollout plan & content creation help",
        "Weekly reporting and optimization",
        "Combined ad strategy across platforms",
        "Fan email newsletter setup"
      ],
      popular: true,
      color: "from-primary to-primary/70"
    },
    {
      name: "Deluxe Plan",
      price: "$1,499",
      description: "Ideal for comprehensive artist development",
      features: [
        "3 Ad Campaigns across all platforms",
        "Strategy call + 5 custom creatives",
        "Advanced targeting & optimization",
        "Full placement and performance reports",
        "Basic artist website included",
        "Spotify playlisting campaign",
        "Shopify store setup"
      ],
      popular: false,
      color: "from-amber-500 to-orange-600"
    }
  ];

  const addOns = [
    { name: "Shortform Video Creation", price: "$200", description: "5 Instagram Reels/TikTok videos based on your track" },
    { name: "Basic Artist Website", price: "$197", description: "Professional site to post music and sell merch" },
    { name: "Landing Page Setup", price: "$50", description: "Simple Linktree-style page or pre-save funnel" },
    { name: "Email Collection Setup", price: "$100", description: "Lead capture form for fan email list" }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-secondary/20" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">💸 Label Ready Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            "Flat fee entry. Long-term scale."
          </p>
          <div className="inline-block bg-primary/20 px-6 py-3 rounded-lg border border-primary/30 animate-scale-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-foreground font-semibold">⚠️ Ad spend not included — you control your own budget</p>
          </div>
        </div>

        {/* Main Packages */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 relative overflow-hidden animate-scale-in hover:scale-105 ${
                pkg.popular ? 'ring-2 ring-primary/50 scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-primary to-primary/70 text-primary-foreground px-4 py-1 text-sm font-semibold rounded-bl-lg flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  MOST POPULAR
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">{pkg.price}</span>
                </div>
                <p className="text-muted-foreground">{pkg.description}</p>
              </div>

              <div className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full ${
                  pkg.popular 
                    ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                    : 'bg-card hover:bg-card/80 text-foreground border border-border hover:border-primary/50'
                } transition-all duration-300 hover:scale-105`}
              >
                Choose {pkg.name}
              </Button>
            </div>
          ))}
        </div>

        {/* Add-Ons Section */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 mb-16 animate-fade-in">
          <h3 className="text-3xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">🧩 Easy Add-Ons & Upsells</span>
          </h3>
          <p className="text-center text-muted-foreground mb-8">
            Enhance your campaign with these proven add-on services
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 text-center animate-scale-in hover:scale-105" style={{ animationDelay: `${index * 0.1}s` }}>
                <h4 className="font-semibold text-foreground mb-2">{addon.name}</h4>
                <p className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-3">{addon.price}</p>
                <p className="text-muted-foreground text-sm">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Retainer Section */}
        <div className="text-center bg-gradient-to-r from-primary/20 to-primary/10 rounded-xl p-8 border border-border animate-scale-in">
          <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            📈 Ready to Scale? Transition to Monthly Retainers
          </h3>
          <p className="text-muted-foreground mb-6">
            After 2-3 successful campaigns, lock in consistent growth with our monthly retainer packages
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-center">
              <p className="text-foreground font-semibold">2 Platforms + Strategy</p>
              <p className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">$600-$1,000/month</p>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-all duration-300">
              Learn About Retainers
            </Button>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">📌 Why Label Ready Pricing Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center animate-scale-in">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-primary text-xl">💸</span>
              </div>
              <p className="text-foreground font-semibold mb-1">$297 flat fee</p>
              <p className="text-muted-foreground text-sm">Low-risk entry point</p>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-primary text-xl">🎯</span>
              </div>
              <p className="text-foreground font-semibold mb-1">High-value add-ons</p>
              <p className="text-muted-foreground text-sm">Better results & revenue</p>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-primary text-xl">📦</span>
              </div>
              <p className="text-foreground font-semibold mb-1">Bundled plans</p>
              <p className="text-muted-foreground text-sm">More momentum for artists</p>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-primary text-xl">🔄</span>
              </div>
              <p className="text-foreground font-semibold mb-1">Retainers available</p>
              <p className="text-muted-foreground text-sm">Scale without burnout</p>
            </div>
          </div>
          <p className="text-foreground font-semibold mt-8 text-lg">
            No hidden fees, no percentage cuts — just real growth with Label Ready
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
