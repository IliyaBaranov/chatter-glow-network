import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/utils/translations";

const Home = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{t("home")}</h1>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>{t("welcomeMessage")}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {t("homeFeedDesc")}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;