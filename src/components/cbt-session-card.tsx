import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Target, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

interface CBTSessionCardProps {
  title: string;
  description: string;
  duration: string;
  difficulty: "easy" | "medium" | "hard";
  category: "sport" | "business" | "general";
  isCompleted?: boolean;
  onStart: () => void;
  className?: string;
}

export const CBTSessionCard = ({
  title,
  description,
  duration,
  difficulty,
  category,
  isCompleted = false,
  onStart,
  className
}: CBTSessionCardProps) => {
  const difficultyColors = {
    easy: "bg-secondary text-secondary-foreground",
    medium: "bg-accent text-accent-foreground", 
    hard: "bg-destructive text-destructive-foreground"
  };

  const categoryIcons = {
    sport: Target,
    business: Brain,
    general: Clock
  };

  const CategoryIcon = categoryIcons[category];

  return (
    <Card className={cn(
      "group hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1",
      isCompleted && "opacity-75 border-secondary",
      className
    )}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <CategoryIcon className="h-5 w-5 text-primary" />
            <CardTitle className="text-lg leading-tight">{title}</CardTitle>
          </div>
          <Badge variant="outline" className={difficultyColors[difficulty]}>
            {difficulty}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          
          <Button 
            onClick={onStart}
            variant={isCompleted ? "outline" : "default"}
            className={cn(
              "transition-smooth",
              !isCompleted && "bg-gradient-strength hover:shadow-strength"
            )}
          >
            {isCompleted ? "Повторить" : "Начать"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};