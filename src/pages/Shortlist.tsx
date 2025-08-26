import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";

export default function Shortlist() {
  return (
    <Layout title="Shortlist">
      <div className="max-w-4xl">
        <Card>
          <CardContent className="p-12 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-lg font-semibold">No shortlisted candidates yet</h3>
              <p className="text-muted-foreground">
                Start searching for talent and shortlist candidates you're interested in.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}