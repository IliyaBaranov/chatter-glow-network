import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Image, Users, MessageCircle, Calendar, Settings, LogOut, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTranslation } from "@/utils/translations";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [username] = useState("John Doe");
  const { language, setLanguage } = useLanguage();
  const t = useTranslation(language);

  const menuItems = [
    { icon: Home, label: t("home"), path: "/" },
    { icon: Image, label: t("gallery"), path: "/gallery" },
    { icon: Users, label: t("friends"), path: "/friends" },
    { icon: MessageCircle, label: t("messages"), path: "/messages" },
    { icon: Calendar, label: t("events"), path: "/events" },
    { icon: Settings, label: t("settings"), path: "/settings" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ru' : 'en');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <div className="fixed h-screen w-64 bg-card border-r p-4">
          <div className="flex flex-col h-full">
            <div className="space-y-2">
              <div className="text-xl font-semibold p-2">{t("community")}</div>
              <div className="text-sm text-muted-foreground px-2">
                {t("welcome")}, {username}
              </div>
            </div>
            
            <nav className="space-y-1 mt-8">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.path}
                    variant={location.pathname === item.path ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => navigate(item.path)}
                  >
                    <Icon className="mr-2 h-4 w-4" />
                    {item.label}
                  </Button>
                );
              })}
            </nav>

            <div className="mt-auto space-y-2">
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={toggleLanguage}
              >
                <Languages className="mr-2 h-4 w-4" />
                {language === 'en' ? 'English' : 'Русский'}
              </Button>
              <Button
                variant="ghost"
                className="w-full justify-start text-destructive hover:text-destructive"
                onClick={() => navigate("/login")}
              >
                <LogOut className="mr-2 h-4 w-4" />
                {t("logout")}
              </Button>
            </div>
          </div>
        </div>

        <div className="ml-64 flex-1 p-8">
          <div className="page-transition">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;