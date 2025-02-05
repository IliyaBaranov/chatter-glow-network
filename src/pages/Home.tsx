import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Home = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Home Feed</h1>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Welcome to Community</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This is your home feed. Here you'll see updates from your friends and community.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;