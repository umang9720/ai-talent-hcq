import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreHorizontal, Plus } from "lucide-react";

const listings = [
  {
    id: 1,
    name: "JOB name",
    location: "remote-state 14 Jun 2023",
    rating: 5.0,
    experience: "4+ years experience",
    applications: 10,
    status: "Under review",
  },
  {
    id: 2,
    name: "JOB name",
    location: "remote-state 14 Jun 2023",
    rating: 4.5,
    experience: "4+ years experience",
    applications: 8,
    status: "Under review",
  },
  {
    id: 3,
    name: "JOB name",
    location: "remote-state 14 Jun 2023",
    rating: 4.8,
    experience: "3+ years experience",
    applications: 6,
    status: "Under review",
  },
];

export default function Listings() {
  return (
    <Layout title="Listing">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Show shortlist
            </Button>
            <Button variant="outline" size="sm">
              Show contact
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          {listings.map((listing) => (
            <Card key={listing.id} className="hover:shadow-talent-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src="/api/placeholder/48/48" alt={listing.name} />
                      <AvatarFallback>JN</AvatarFallback>
                    </Avatar>
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-4">
                        <h3 className="font-semibold text-foreground">{listing.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{listing.location}</span>
                          <span>★ {listing.rating}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>{listing.experience}</span>
                        <span>{listing.applications} applications</span>
                        <span>{listing.status}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      Under review
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Button variant="outline" className="gap-2">
            <Plus className="h-4 w-4" />
            Load more
          </Button>
        </div>
      </div>
    </Layout>
  );
}