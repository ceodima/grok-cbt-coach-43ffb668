import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressRing } from "@/components/ui/progress-ring";
import { TrendingUp, Target, Brain, Clock } from "lucide-react";

interface DashboardStatsProps {
  willpowerLevel: number;
  sessionsCompleted: number;
  totalSessions: number;
  journalEntries: number;
  currentStreak: number;
}

export const DashboardStats = ({
  willpowerLevel,
  sessionsCompleted,
  totalSessions,
  journalEntries,
  currentStreak
}: DashboardStatsProps) => {
  const completionRate = Math.round((sessionsCompleted / totalSessions) * 100);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Уровень силы воли */}
      <Card className="text-center">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center justify-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            Сила воли
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ProgressRing progress={willpowerLevel} size={100}>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{willpowerLevel}%</div>
              <div className="text-xs text-muted-foreground">уровень</div>
            </div>
          </ProgressRing>
        </CardContent>
      </Card>

      {/* Прогресс сессий */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Target className="h-5 w-5 text-secondary" />
            Прогресс
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-secondary">{completionRate}%</span>
              <span className="text-sm text-muted-foreground">завершено</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="bg-gradient-growth h-2 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${completionRate}%` }}
              />
            </div>
            <div className="text-xs text-muted-foreground">
              {sessionsCompleted} из {totalSessions} сессий
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Записи в журнале */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-accent" />
            Журнал
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-accent">{journalEntries}</div>
            <div className="text-sm text-muted-foreground">записей</div>
            <div className="text-xs text-muted-foreground">
              Осознание боли через анализ
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Текущая серия */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg flex items-center gap-2">
            <Clock className="h-5 w-5 text-destructive" />
            Серия
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="text-2xl font-bold text-destructive">{currentStreak}</div>
            <div className="text-sm text-muted-foreground">дней подряд</div>
            <div className="text-xs text-muted-foreground">
              Последовательность — ключ к результату
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};