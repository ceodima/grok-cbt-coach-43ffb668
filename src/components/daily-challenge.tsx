import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Clock, ArrowRight } from "lucide-react";

interface DailyChallengeProps {
  title: string;
  description: string;
  category: "sport" | "business" | "general";
  timeEstimate: string;
  difficulty: "easy" | "medium" | "hard";
  onStart: () => void;
  isCompleted?: boolean;
}

export const DailyChallenge = ({
  title,
  description, 
  category,
  timeEstimate,
  difficulty,
  onStart,
  isCompleted = false
}: DailyChallengeProps) => {
  const categoryLabels = {
    sport: "🏃 Спорт",
    business: "💼 Бизнес", 
    general: "🧠 Общее"
  };

  const difficultyColors = {
    easy: "bg-secondary/20 text-secondary border-secondary/40",
    medium: "bg-accent/20 text-accent border-accent/40",
    hard: "bg-destructive/20 text-destructive border-destructive/40"
  };

  const difficultyLabels = {
    easy: "Легко",
    medium: "Средне", 
    hard: "Сложно"
  };

  return (
    <Card className="relative overflow-hidden group hover:shadow-elegant transition-all duration-300">
      {/* Декоративный градиент */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5 group-hover:opacity-10 transition-opacity duration-300" />
      
      <CardHeader className="relative">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-accent" />
              <span className="text-sm font-medium text-accent">Вызов дня</span>
            </div>
            <CardTitle className="text-xl">{title}</CardTitle>
          </div>
          
          <div className="flex flex-col gap-2">
            <Badge variant="outline" className={difficultyColors[difficulty]}>
              {difficultyLabels[difficulty]}
            </Badge>
            <Badge variant="outline">
              {categoryLabels[category]}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="relative space-y-4">
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{timeEstimate}</span>
          </div>
          
          <Button 
            onClick={onStart}
            variant={isCompleted ? "outline" : "action"}
            className="group/button"
          >
            {isCompleted ? "Повторить" : "Принять вызов"}
            <ArrowRight className="h-4 w-4 group-hover/button:translate-x-1 transition-transform" />
          </Button>
        </div>
        
        {isCompleted && (
          <div className="mt-4 p-3 bg-secondary/10 rounded-md border border-secondary/20">
            <div className="flex items-center gap-2 text-sm text-secondary">
              <div className="h-2 w-2 bg-secondary rounded-full" />
              Вызов выполнен! Отличная работа 💪
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};