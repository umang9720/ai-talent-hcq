import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Integrations() {
  return (
    <Layout title="Integrations">
      <div className="max-w-4xl space-y-8">
        {/* Email Integration */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Email Integration</CardTitle>
            <p className="text-sm text-muted-foreground">
              Connect your email accounts to send automated sequences
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="border border-border rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                    <span className="text-primary-foreground text-xs font-bold">in</span>
                  </div>
                  <span className="font-medium">LinkedIn</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Reach talent directly onto LinkedIn
                </p>
                <Button variant="outline" className="w-full">
                  Connect with linkedin
                </Button>
              </div>
              
              <div className="border border-border rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                    <span className="text-primary-foreground text-xs font-bold">in</span>
                  </div>
                  <span className="font-medium">LinkedIn</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Reach talent directly onto LinkedIn
                </p>
                <Button variant="outline" className="w-full">
                  Connect with linkedin
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Import Data */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Import data</CardTitle>
            <p className="text-sm text-muted-foreground">
              Add CVs from your end
            </p>
          </CardHeader>
          <CardContent>
            <div className="border border-border rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <span className="text-primary-foreground text-xs font-bold">in</span>
                </div>
                <span className="font-medium">LinkedIn</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Upload CVs
              </p>
              <Button variant="outline" className="w-full">
                Upload
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}