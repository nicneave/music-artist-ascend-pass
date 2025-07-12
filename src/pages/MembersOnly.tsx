
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Lock, Shield, Star, Zap, Music, Instagram, Youtube, Cloud, TrendingUp, BarChart3, ShoppingCart, Mail, Crown, Gem, Award, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MembersOnly = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simple password check - in production, this should be more secure
    if (password === "labelservices2024") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  const handlePurchase = (packageName: string, price: string) => {
    // Placeholder for purchase functionality
    console.log(`Purchase requested for ${packageName} at ${price}`);
    alert(`Purchase functionality for ${packageName} (${price}) would be implemented here.`);
  };

  const handleInquiry = (service: string) => {
    // Placeholder for inquiry functionality
    console.log(`Inquiry requested for ${service}`);
    alert(`Inquiry for ${service} would be sent here.`);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
        {/* Floating Icons Background */}
        <div className="absolute inset-0 pointer-events-none">
          <Lock className="absolute top-20 left-20 w-8 h-8 text-primary/20 animate-float" style={{ animationDelay: '0s' }} />
          <Shield className="absolute top-40 right-32 w-12 h-12 text-primary/15 animate-float" style={{ animationDelay: '2s' }} />
          <Crown className="absolute bottom-40 left-16 w-10 h-10 text-primary/25 animate-float" style={{ animationDelay: '1s' }} />
          <Gem className="absolute top-60 left-1/3 w-6 h-6 text-primary/30 animate-float" style={{ animationDelay: '3s' }} />
          <Award className="absolute bottom-20 right-20 w-8 h-8 text-primary/20 animate-float" style={{ animationDelay: '1.5s' }} />
          <Star className="absolute top-32 right-1/4 w-6 h-6 text-primary/25 animate-float" style={{ animationDelay: '2.5s' }} />
        </div>

        <Card className="w-full max-w-md music-card relative z-10">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center animate-pulse-glow">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="gradient-text text-2xl">Members Only</CardTitle>
            <CardDescription>
              This section is password protected and only available to select clients.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            />
            {error && <p className="text-destructive text-sm">{error}</p>}
            <Button onClick={handleLogin} className="w-full glow-button">
              Access Members Area
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Back to Home Button */}
      <div className="fixed top-4 left-4 z-50">
        <Button 
          variant="outline" 
          size="sm"
          onClick={() => navigate('/')}
          className="flex items-center gap-2 backdrop-blur-sm bg-background/80"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Button>
      </div>

      {/* Floating Icons Background */}
      <div className="absolute inset-0 pointer-events-none">
        <Lock className="absolute top-32 right-20 w-8 h-8 text-primary/10 animate-float" style={{ animationDelay: '0s' }} />
        <Shield className="absolute top-20 left-1/4 w-10 h-10 text-primary/15 animate-float" style={{ animationDelay: '2s' }} />
        <Crown className="absolute bottom-60 right-1/3 w-12 h-12 text-primary/10 animate-float" style={{ animationDelay: '1s' }} />
        <Gem className="absolute top-80 right-16 w-6 h-6 text-primary/20 animate-float" style={{ animationDelay: '3s' }} />
        <Award className="absolute bottom-40 left-20 w-8 h-8 text-primary/15 animate-float" style={{ animationDelay: '1.5s' }} />
        <Star className="absolute top-1/2 left-16 w-6 h-6 text-primary/20 animate-float" style={{ animationDelay: '2.5s' }} />
        <Music className="absolute bottom-80 right-1/4 w-8 h-8 text-primary/10 animate-float" style={{ animationDelay: '0.5s' }} />
        <Instagram className="absolute top-96 left-1/3 w-6 h-6 text-primary/15 animate-float" style={{ animationDelay: '3.5s' }} />
        <Youtube className="absolute bottom-32 left-1/2 w-8 h-8 text-primary/10 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Header */}
      <section className="py-20 px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Private Access Only</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Label Services</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            One-Time Boost Services for Private Clients Only. Premium growth packages designed to elevate visibility, credibility, and engagement — quickly and discreetly.
          </p>
        </div>
      </section>

      {/* Instagram Growth Packages */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Instagram className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold gradient-text">Instagram Growth Packages</h2>
          </div>
          
          <Card className="music-card mb-8">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Package</TableHead>
                    <TableHead>Followers</TableHead>
                    <TableHead>Post Likes</TableHead>
                    <TableHead>Reels Views</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Starter Boost</TableCell>
                    <TableCell>10,000</TableCell>
                    <TableCell>500–1,000 (x5 posts)</TableCell>
                    <TableCell>50,000</TableCell>
                    <TableCell className="text-primary font-bold">$250</TableCell>
                    <TableCell>
                      <Button 
                        size="sm" 
                        className="glow-button"
                        onClick={() => handlePurchase("Instagram Starter Boost", "$250")}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Buy Now
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Growth Pack</TableCell>
                    <TableCell>30,000</TableCell>
                    <TableCell>2,000–5,000 (x10 posts)</TableCell>
                    <TableCell>75,000</TableCell>
                    <TableCell className="text-primary font-bold">$500</TableCell>
                    <TableCell>
                      <Button 
                        size="sm" 
                        className="glow-button"
                        onClick={() => handlePurchase("Instagram Growth Pack", "$500")}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Buy Now
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Pro Pack</TableCell>
                    <TableCell>100,000</TableCell>
                    <TableCell>5,000–10,000 (x20 posts)</TableCell>
                    <TableCell>100,000</TableCell>
                    <TableCell className="text-primary font-bold">$1,250</TableCell>
                    <TableCell>
                      <Button 
                        size="sm" 
                        className="glow-button"
                        onClick={() => handlePurchase("Instagram Pro Pack", "$1,250")}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Buy Now
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Engagement Only</TableCell>
                    <TableCell>–</TableCell>
                    <TableCell>500–1,000 (x10 posts)</TableCell>
                    <TableCell>Optional</TableCell>
                    <TableCell className="text-primary font-bold">$150</TableCell>
                    <TableCell>
                      <Button 
                        size="sm" 
                        className="glow-button"
                        onClick={() => handlePurchase("Instagram Engagement Only", "$150")}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Buy Now
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">High Engagement Pack</TableCell>
                    <TableCell>–</TableCell>
                    <TableCell>10,000+ (x10 posts)</TableCell>
                    <TableCell>200,000+</TableCell>
                    <TableCell className="text-primary font-bold">$500+</TableCell>
                    <TableCell>
                      <Button 
                        size="sm" 
                        className="glow-button"
                        onClick={() => handlePurchase("Instagram High Engagement Pack", "$500+")}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Buy Now
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          
          <p className="text-muted-foreground">
            <span className="text-primary">🔁 Optional add-ons:</span> Comments, story views, saves — available on request.
          </p>
        </div>
      </section>

      {/* YouTube Boost Packages */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Youtube className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold gradient-text">YouTube Boost Packages</h2>
          </div>
          
          <Card className="music-card mb-8">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Package</TableHead>
                    <TableHead>Views</TableHead>
                    <TableHead>Likes</TableHead>
                    <TableHead>Subscribers</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Starter Boost</TableCell>
                    <TableCell>10,000</TableCell>
                    <TableCell>500</TableCell>
                    <TableCell>1,000</TableCell>
                    <TableCell className="text-primary font-bold">$250</TableCell>
                    <TableCell>
                      <Button 
                        size="sm" 
                        className="glow-button"
                        onClick={() => handlePurchase("YouTube Starter Boost", "$250")}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Buy Now
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Growth Pack</TableCell>
                    <TableCell>25,000</TableCell>
                    <TableCell>1,000</TableCell>
                    <TableCell>2,500</TableCell>
                    <TableCell className="text-primary font-bold">$500</TableCell>
                    <TableCell>
                      <Button 
                        size="sm" 
                        className="glow-button"
                        onClick={() => handlePurchase("YouTube Growth Pack", "$500")}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Buy Now
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Pro Pack</TableCell>
                    <TableCell>50,000</TableCell>
                    <TableCell>2,000</TableCell>
                    <TableCell>5,000</TableCell>
                    <TableCell className="text-primary font-bold">$900</TableCell>
                    <TableCell>
                      <Button 
                        size="sm" 
                        className="glow-button"
                        onClick={() => handlePurchase("YouTube Pro Pack", "$900")}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Buy Now
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Premium Pack</TableCell>
                    <TableCell>100,000</TableCell>
                    <TableCell>4,000</TableCell>
                    <TableCell>10,000</TableCell>
                    <TableCell className="text-primary font-bold">$1,500</TableCell>
                    <TableCell>
                      <Button 
                        size="sm" 
                        className="glow-button"
                        onClick={() => handlePurchase("YouTube Premium Pack", "$1,500")}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Buy Now
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          
          <p className="text-muted-foreground">
            <span className="text-primary">📹 Ideal for:</span> Music video drops, fan-building, or monetization eligibility.
          </p>
        </div>
      </section>

      {/* SoundCloud Boost Packages */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Cloud className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold gradient-text">SoundCloud Boost Packages</h2>
          </div>
          
          <Card className="music-card mb-8">
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Package</TableHead>
                    <TableHead>Plays</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Starter</TableCell>
                    <TableCell>50,000</TableCell>
                    <TableCell className="text-primary font-bold">$250</TableCell>
                    <TableCell>
                      <Button 
                        size="sm" 
                        className="glow-button"
                        onClick={() => handlePurchase("SoundCloud Starter", "$250")}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Buy Now
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Boost</TableCell>
                    <TableCell>150,000</TableCell>
                    <TableCell className="text-primary font-bold">$500</TableCell>
                    <TableCell>
                      <Button 
                        size="sm" 
                        className="glow-button"
                        onClick={() => handlePurchase("SoundCloud Boost", "$500")}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Buy Now
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Premium</TableCell>
                    <TableCell>500,000</TableCell>
                    <TableCell className="text-primary font-bold">$1,500</TableCell>
                    <TableCell>
                      <Button 
                        size="sm" 
                        className="glow-button"
                        onClick={() => handlePurchase("SoundCloud Premium", "$1,500")}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Buy Now
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Viral (Best Offer)</TableCell>
                    <TableCell>1,000,000</TableCell>
                    <TableCell className="text-primary font-bold">$2,500</TableCell>
                    <TableCell>
                      <Button 
                        size="sm" 
                        className="glow-button"
                        onClick={() => handlePurchase("SoundCloud Viral", "$2,500")}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Buy Now
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          
          <p className="text-muted-foreground">
            <span className="text-primary">🔁 Optional add-ons:</span> Likes, reposts, and followers.
          </p>
        </div>
      </section>

      {/* Label Ready Pro Membership */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Star className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold gradient-text">Label Ready Pro Membership</h2>
          </div>
          
          <Card className="music-card text-center">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">Pro Member - Annual</CardTitle>
              <CardDescription className="text-lg">Built for serious artists and teams who plan to scale monthly or quarterly</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-4xl font-bold text-primary">$2,500/year</div>
              <div className="space-y-3 text-left max-w-md mx-auto">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>25% off all services on this page</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Priority turnaround</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Dedicated rep & strategy support</span>
                </div>
              </div>
              <Button className="glow-button" onClick={() => handlePurchase("Label Ready Pro Membership", "$2,500/year")}>
                <ShoppingCart className="w-4 h-4 mr-2" />
                Upgrade to Pro Member
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Label Charting Services */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Label Charting Services</h2>
            <p className="text-xl text-muted-foreground">Premium charting solutions for industry professionals</p>
          </div>

          {/* SoundCloud Charting */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-bold gradient-text">🔥 SoundCloud Charting 📈</h3>
            </div>
            
            <Card className="music-card mb-8">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Chart Rank</TableHead>
                      <TableHead>Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Top 40–50</TableCell>
                      <TableCell className="text-primary font-bold">$10,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Top 20–30</TableCell>
                      <TableCell className="text-primary font-bold">$15,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Top 20–10</TableCell>
                      <TableCell className="text-primary font-bold">$20,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Top 10</TableCell>
                      <TableCell className="text-primary font-bold">$30,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Top 5</TableCell>
                      <TableCell className="text-primary font-bold">$35,000</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">
                <span className="text-primary">📤</span> Submit music for approval. Pricing includes strategy, promo, and volume needed to trigger chart algorithm.
              </p>
              <div className="text-center">
                <Button 
                  variant="outline"
                  onClick={() => handleInquiry("SoundCloud Charting")}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email for Inquiry
                </Button>
              </div>
            </div>
          </div>

          {/* Apple Music + iTunes Charting */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Music className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-bold gradient-text">🍏 Apple Music + iTunes Charting 📈</h3>
            </div>
            
            <p className="text-muted-foreground mb-6">(Pop & Hip-Hop Singles or Albums)</p>
            
            <Card className="music-card mb-8">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Chart Rank</TableHead>
                      <TableHead>Quote</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Top 100 – Top 5</TableCell>
                      <TableCell className="text-primary font-bold">Ask for quote</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Number 1 Single (Est.)</TableCell>
                      <TableCell className="text-primary font-bold">$25–30K</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Number 1 Album (Est.)</TableCell>
                      <TableCell className="text-primary font-bold">$100K</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">
                <span className="text-primary">⏱</span> Quotes in 24–48 hrs. Final price varies by genre, project length, and timing.
              </p>
              <div className="text-center">
                <Button 
                  variant="outline"
                  onClick={() => handleInquiry("Apple Music Charting")}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email for Inquiry
                </Button>
              </div>
            </div>
          </div>

          {/* Singles & Projects - Units */}
          <div className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <BarChart3 className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-bold gradient-text">💽 Singles & Projects – Units 🎶</h3>
            </div>
            
            <Card className="music-card text-center">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">RIAA Gold Plaque – 500,000 Units</CardTitle>
                <CardDescription className="text-lg">Units delivered through streams & downloads</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-4xl font-bold text-primary">$3.5M</div>
                <div className="text-lg text-muted-foreground">Estimated cost to achieve</div>
                <div className="space-y-3 text-left max-w-md mx-auto">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Inquiries must be serious only</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>🎯 Can be structured across multiple campaigns or bundled with charting</span>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  onClick={() => handleInquiry("RIAA Gold Plaque Campaign")}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email for Inquiry
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Billboard Charting */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <BarChart3 className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-bold gradient-text">📊 Billboard Charting 📈</h3>
            </div>
            
            <Card className="music-card mb-8">
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Chart</TableHead>
                      <TableHead>Starting Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Billboard Sales Chart</TableCell>
                      <TableCell className="text-primary font-bold">$25,000+</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Billboard Hot 100 (Top 90–100)</TableCell>
                      <TableCell className="text-primary font-bold">$55,000+</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Top 50 Spot Available</TableCell>
                      <TableCell className="text-primary font-bold">Custom Quote</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">
                <span className="text-primary">📈</span> Billboard placements require large-scale volume and conversion tracking. Only available to pre-qualified clients.
              </p>
              <div className="text-center">
                <Button 
                  variant="outline"
                  onClick={() => handleInquiry("Billboard Charting")}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email for Inquiry
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms & Notes */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Card className="music-card">
            <CardHeader>
              <CardTitle className="gradient-text text-center">⚠️ Terms & Notes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>These services increase perceived traction and algorithm visibility. They're best used to amplify real momentum.</p>
              <p>All followers and views are high-retention. Country targeting and genre matching available on some services.</p>
              <p className="text-primary font-medium">This page is private and only shared with select clients. Please do not distribute publicly.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default MembersOnly;
