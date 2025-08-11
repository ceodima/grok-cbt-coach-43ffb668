import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Bell, Settings, Menu } from "lucide-react";

interface NavigationHeaderProps {
  userName?: string;
  userLevel: number;
  notificationCount?: number;
  onMenuClick?: () => void;
  onNotificationsClick?: () => void;
  onSettingsClick?: () => void;
}

export const NavigationHeader = ({
  userName = "Участник",
  userLevel,
  notificationCount = 0,
  onMenuClick,
  onNotificationsClick,
  onSettingsClick
}: NavigationHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Левая часть - логотип и меню */}
        <div className="flex items-center gap-4">
          <Button
            variant="ghost" 
            size="icon"
            onClick={onMenuClick}
            className="md:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-gradient-strength rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">W</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold bg-gradient-hero bg-clip-text text-transparent">
                WillPower Coach
              </h1>
              <p className="text-xs text-muted-foreground -mt-1">
                Преодолей паралич воли
              </p>
            </div>
          </div>
        </div>

        {/* Правая часть - уведомления и профиль */}
        <div className="flex items-center gap-3">
          {/* Уведомления */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onNotificationsClick}
            className="relative"
          >
            <Bell className="h-5 w-5" />
            {notificationCount > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"
              >
                {notificationCount > 9 ? "9+" : notificationCount}
              </Badge>
            )}
          </Button>

          {/* Настройки */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onSettingsClick}
          >
            <Settings className="h-5 w-5" />
          </Button>

          {/* Профиль */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right">
              <p className="text-sm font-medium">{userName}</p>
              <div className="flex items-center gap-1">
                <Badge variant="outline" className="bg-gradient-growth/10 text-secondary border-secondary/40">
                  Уровень {userLevel}
                </Badge>
              </div>
            </div>
            
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder-avatar.jpg" alt={userName} />
              <AvatarFallback className="bg-gradient-strength text-primary-foreground font-semibold">
                {userName.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
};