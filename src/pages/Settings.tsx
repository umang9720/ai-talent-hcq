import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function Settings() {
  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <Layout>
      <div className="max-w-2xl space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Welcome, Keya</h1>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="/api/placeholder/64/64" alt="Keya" />
                  <AvatarFallback>K</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">Keya</h3>
                  <p className="text-sm text-muted-foreground">United States</p>
                </div>
                <Button className="ml-auto">Edit</Button>
              </div>

              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium">Email</Label>
                  <div className="flex items-center gap-2 mt-1">
                    <Input value="keya@gmail.com" readOnly className="flex-1" />
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium">Phone</Label>
                  <div className="flex items-center gap-2 mt-1">
                    <Input value="+1234567890" readOnly className="flex-1" />
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium">Password</Label>
                  <div className="flex items-center gap-2 mt-1">
                    <Input type="password" value="••••••••" readOnly className="flex-1" />
                    <Button variant="outline" size="sm">Edit</Button>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium">Language</Label>
                  <Select defaultValue="english">
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="spanish">Spanish</SelectItem>
                      <SelectItem value="french">French</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <Button variant="destructive">Logout</Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Edit Dialog */}
        <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Edit Details</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="flex flex-col items-center gap-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="/api/placeholder/80/80" alt="Keya" />
                  <AvatarFallback>K</AvatarFallback>
                </Avatar>
                <Button variant="outline" size="sm">Replace Image</Button>
              </div>

              <div>
                <Label htmlFor="fullname">Full name</Label>
                <Input id="fullname" defaultValue="Your first Name" className="mt-1" />
              </div>

              <div>
                <Label htmlFor="country">Country</Label>
                <Select defaultValue="united-states">
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="united-states">United States</SelectItem>
                    <SelectItem value="canada">Canada</SelectItem>
                    <SelectItem value="uk">United Kingdom</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full">Save</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
}