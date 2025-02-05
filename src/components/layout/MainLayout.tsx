import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Image, Users, MessageCircle, Calendar, Settings, LogOut } from "lucide-react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [username] = useState("John Doe"); // This will be replaced with actual auth

  const menuItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Image, label: "Gallery", path: "/gallery" },
    { icon: Users, label: "Friends", path: "/friends" },
    { icon: MessageCircle, label: "Messages", path: "/messages" },
    { icon: Calendar, label: "Events", path: "/events" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <div className="fixed h-screen w-64 bg-card border-r p-4">
          <div className="flex flex-col h-full">
            <div className="space-y-2">
              <div className="text-xl font-semibold p-2">Community</div>
              <div className="text-sm text-muted-foreground px-2">Welcome, {username}</div>
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

            <div className="mt-auto">
              <Button
                variant="ghost"
                className="w-full justify-start text-destructive hover:text-destructive"
                onClick={() => navigate("/login")}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </div>

        {/* Main content */}
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