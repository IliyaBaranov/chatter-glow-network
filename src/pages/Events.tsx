import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Events = () => {
  const [eventCount, setEventCount] = useState(0);

  const handleInteraction = () => {
    setEventCount(prev => prev + 1);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Events</h1>
      <Card>
        <CardHeader>
          <CardTitle>Interactive Events Page</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            This page includes JavaScript interactions. Click the button below to see it in action!
          </p>
          <div className="text-center">
            <p className="text-2xl font-bold mb-4">Event Count: {eventCount}</p>
            <Button onClick={handleInteraction}>
              Trigger Event
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Events;