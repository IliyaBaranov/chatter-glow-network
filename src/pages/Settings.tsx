import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/utils/translations";

const Settings = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">{t("settings")}</h1>
      <Card>
        <CardHeader>
          <CardTitle>{t("yourSettings")}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            {t("settingsDesc")}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;