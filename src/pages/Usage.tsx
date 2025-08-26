import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";

const profileData = [
  { month: "Jan", fetched: 150, hiring: 45 },
  { month: "Feb", fetched: 120, hiring: 38 },
  { month: "Mar", fetched: 180, hiring: 52 },
  { month: "Apr", fetched: 160, hiring: 48 },
  { month: "May", fetched: 140, hiring: 41 },
  { month: "Jun", fetched: 200, hiring: 60 },
];

const hiringRoles = [
  { role: "Frontend Developer", percentage: 85 },
  { role: "UX Designer", percentage: 72 },
  { role: "Backend Developer", percentage: 68 },
  { role: "Product Manager", percentage: 45 },
  { role: "Data Scientist", percentage: 38 },
  { role: "DevOps Engineer", percentage: 32 },
  { role: "Mobile Developer", percentage: 28 },
  { role: "QA Engineer", percentage: 25 },
];

const locationData = [
  { location: "San Francisco", percentage: 92 },
  { location: "New York", percentage: 78 },
  { location: "Austin", percentage: 65 },
  { location: "Seattle", percentage: 58 },
  { location: "Boston", percentage: 45 },
  { location: "Chicago", percentage: 38 },
  { location: "Denver", percentage: 32 },
  { location: "Portland", percentage: 28 },
];

export default function Usage() {
  return (
    <Layout title="Usage">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Data range</span>
            <Select defaultValue="last-3-months">
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="last-3-months">Last 3 months</SelectItem>
                <SelectItem value="last-6-months">Last 6 months</SelectItem>
                <SelectItem value="last-year">Last year</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Profile Statistics */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">No of profiles fetched</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {profileData.map((data, index) => (
                  <div key={data.month} className="flex items-center justify-between">
                    <span className="text-sm font-medium w-8">{data.month}</span>
                    <div className="flex-1 mx-4">
                      <div className="h-8 bg-muted rounded flex items-center">
                        <div 
                          className="h-full bg-primary rounded"
                          style={{ width: `${(data.fetched / 200) * 100}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground w-8">{data.fetched}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">No of hiring</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {profileData.map((data, index) => (
                  <div key={data.month} className="flex items-center justify-between">
                    <span className="text-sm font-medium w-8">{data.month}</span>
                    <div className="flex-1 mx-4">
                      <div className="h-8 bg-muted rounded flex items-center">
                        <div 
                          className="h-full bg-talent-success rounded"
                          style={{ width: `${(data.hiring / 60) * 100}%` }}
                        />
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground w-8">{data.hiring}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Hiring Statistics */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Most hiring roles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {hiringRoles.map((role, index) => (
                  <div key={role.role} className="flex items-center justify-between">
                    <span className="text-sm">{role.role}</span>
                    <div className="flex items-center gap-3">
                      <Progress value={role.percentage} className="w-20 h-2" />
                      <span className="text-sm text-muted-foreground w-8">{role.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Location with most hiring</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {locationData.map((location, index) => (
                  <div key={location.location} className="flex items-center justify-between">
                    <span className="text-sm">{location.location}</span>
                    <div className="flex items-center gap-3">
                      <Progress value={location.percentage} className="w-20 h-2" />
                      <span className="text-sm text-muted-foreground w-8">{location.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}