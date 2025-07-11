
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Lock, Shield, Star, Zap, Music, Instagram, Youtube, Cloud } from "lucide-react";

const MembersOnly = () => {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    // Simple password check - in production, this should be more secure
    if (password === "labelservices2024") {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="w-full max-w-md music-card">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-20 px-4 text-center">
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
      <section className="py-16 px-4">
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
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Starter Boost</TableCell>
                    <TableCell>10,000</TableCell>
                    <TableCell>500–1,000 (x5 posts)</TableCell>
                    <TableCell>50,000</TableCell>
                    <TableCell className="text-primary font-bold">$250</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Growth Pack</TableCell>
                    <TableCell>30,000</TableCell>
                    <TableCell>2,000–5,000 (x10 posts)</TableCell>
                    <TableCell>75,000</TableCell>
                    <TableCell className="text-primary font-bold">$500</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Pro Pack</TableCell>
                    <TableCell>100,000</TableCell>
                    <TableCell>5,000–10,000 (x20 posts)</TableCell>
                    <TableCell>100,000</TableCell>
                    <TableCell className="text-primary font-bold">$1,250</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Engagement Only</TableCell>
                    <TableCell>–</TableCell>
                    <TableCell>500–1,000 (x10 posts)</TableCell>
                    <TableCell>Optional</TableCell>
                    <TableCell className="text-primary font-bold">$150</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">High Engagement Pack</TableCell>
                    <TableCell>–</TableCell>
                    <TableCell>10,000+ (x10 posts)</TableCell>
                    <TableCell>200,000+</TableCell>
                    <TableCell className="text-primary font-bold">$500+</TableCell>
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
      <section className="py-16 px-4">
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
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Starter Boost</TableCell>
                    <TableCell>10,000</TableCell>
                    <TableCell>500</TableCell>
                    <TableCell>1,000</TableCell>
                    <TableCell className="text-primary font-bold">$250</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Growth Pack</TableCell>
                    <TableCell>25,000</TableCell>
                    <TableCell>1,000</TableCell>
                    <TableCell>2,500</TableCell>
                    <TableCell className="text-primary font-bold">$500</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Pro Pack</TableCell>
                    <TableCell>50,000</TableCell>
                    <TableCell>2,000</TableCell>
                    <TableCell>5,000</TableCell>
                    <TableCell className="text-primary font-bold">$900</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Premium Pack</TableCell>
                    <TableCell>100,000</TableCell>
                    <TableCell>4,000</TableCell>
                    <TableCell>10,000</TableCell>
                    <TableCell className="text-primary font-bold">$1,500</TableCell>
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
      <section className="py-16 px-4">
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
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Starter</TableCell>
                    <TableCell>50,000</TableCell>
                    <TableCell className="text-primary font-bold">$250</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Boost</TableCell>
                    <TableCell>150,000</TableCell>
                    <TableCell className="text-primary font-bold">$500</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Premium</TableCell>
                    <TableCell>500,000</TableCell>
                    <TableCell className="text-primary font-bold">$1,500</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Viral (Best Offer)</TableCell>
                    <TableCell>1,000,000</TableCell>
                    <TableCell className="text-primary font-bold">$2,500</TableCell>
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
      <section className="py-16 px-4">
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
              <Button className="glow-button">
                Upgrade to Pro Member
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Terms & Notes */}
      <section className="py-16 px-4">
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
