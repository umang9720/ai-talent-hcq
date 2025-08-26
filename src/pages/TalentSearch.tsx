import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Briefcase, Calendar, Building, Zap, Search } from "lucide-react";

const filters = [
  { id: "location", label: "Location", icon: MapPin, active: true },
  { id: "jobTitle", label: "Job Title", icon: Briefcase, active: true },
  { id: "experience", label: "Experience", icon: Calendar, active: true },
  { id: "industry", label: "Industry", icon: Building, active: true },
  { id: "skills", label: "Skills", icon: Zap, active: true },
];

const suggestions = [
  "UI designer, human more than 4 years experience",
  "Full stack developer, New York metro than 4 years experience",
  "Marketing wizard, located in California none than 2.5 years experience",
];

export default function TalentSearch() {
  const [searchText, setSearchText] = useState(
    "Position: Senior UX/UI Designer. Experience: 4+ Years. Joining: Immediately, Remote, US Only. Skills: FIGMA, Adobe or Sketch..."
  );

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Who are you looking for?
          </h1>
          
          <div className="space-y-4">
            <Textarea
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="min-h-[120px] text-sm resize-none"
              placeholder="Describe the talent you're looking for..."
            />
            
            <div className="flex flex-wrap gap-2 justify-center">
              {filters.map((filter) => (
                <Badge
                  key={filter.id}
                  variant={filter.active ? "default" : "secondary"}
                  className="px-3 py-1 cursor-pointer hover:bg-primary/90"
                >
                  <filter.icon className="w-3 h-3 mr-1" />
                  {filter.label}
                </Badge>
              ))}
            </div>
            
            <div className="flex gap-2 justify-center">
              <Button 
                variant="outline" 
                className="px-6"
              >
                Refine prompt
              </Button>
              <Button className="px-6 gap-2">
                <Search className="w-4 h-4" />
                Search
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-muted-foreground text-center">
            You can try these prompt also
          </p>
          
          <div className="grid gap-3 md:grid-cols-3">
            {suggestions.map((suggestion, index) => (
              <Card 
                key={index} 
                className="cursor-pointer hover:shadow-talent-md transition-shadow"
                onClick={() => setSearchText(suggestion)}
              >
                <CardContent className="p-4">
                  <p className="text-sm text-foreground">{suggestion}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}