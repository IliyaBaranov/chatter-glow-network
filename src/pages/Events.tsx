import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/utils/translations";

const Events = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [eventCount, setEventCount] = useState(0);

  const handleInteraction = () => {
    setEventCount(prev => prev + 1);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{t("events")}</h1>
      <Card>
        <CardHeader>
          <CardTitle>{t("interactiveEvents")}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-muted-foreground">
            {t("eventsDesc")}
          </p>
          <div className="text-center">
            <p className="text-2xl font-bold mb-4">{t("eventCount")}: {eventCount}</p>
            <Button onClick={handleInteraction}>
              {t("triggerEvent")}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Events;