import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, TrendingUp, MoreVertical } from "lucide-react";
import { cn } from "@/lib/utils";

interface JournalEntryProps {
  date: string;
  situation: string;
  thoughts: string[];
  emotion: string;
  intensity: number;
  actionTaken?: string;
  category: "sport" | "business" | "general";
  className?: string;
  onEdit?: () => void;
}

export const JournalEntry = ({
  date,
  situation,
  thoughts,
  emotion,
  intensity,
  actionTaken,
  category,
  className,
  onEdit
}: JournalEntryProps) => {
  const categoryColors = {
    sport: "bg-secondary/20 text-secondary border-secondary/40",
    business: "bg-accent/20 text-accent border-accent/40",
    general: "bg-muted text-muted-foreground border-border"
  };

  const getIntensityColor = (intensity: number) => {
    if (intensity <= 3) return "text-secondary";
    if (intensity <= 6) return "text-accent";
    return "text-destructive";
  };

  const categoryLabels = {
    sport: "Спорт",
    business: "Бизнес", 
    general: "Общее"
  };

  return (
    <Card className={cn("hover:shadow-elegant transition-all duration-300", className)}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">{date}</span>
            <Badge variant="outline" className={categoryColors[category]}>
              {categoryLabels[category]}
            </Badge>
          </div>
          {onEdit && (
            <Button variant="ghost" size="sm" onClick={onEdit}>
              <MoreVertical className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div>
          <h4 className="font-medium text-foreground mb-2">Ситуация</h4>
          <p className="text-muted-foreground leading-relaxed">{situation}</p>
        </div>
        
        <div>
          <h4 className="font-medium text-foreground mb-2">Автоматические мысли</h4>
          <ul className="space-y-1">
            {thoughts.map((thought, index) => (
              <li key={index} className="text-muted-foreground leading-relaxed">
                • {thought}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm font-medium">Эмоция: </span>
            <span className="text-muted-foreground">{emotion}</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Интенсивность:</span>
            <span className={cn("font-bold", getIntensityColor(intensity))}>
              {intensity}/10
            </span>
          </div>
        </div>
        
        {actionTaken && (
          <div className="mt-4 p-3 bg-secondary/10 rounded-md border border-secondary/20">
            <h5 className="font-medium text-secondary mb-1">Действие предпринято</h5>
            <p className="text-sm text-muted-foreground">{actionTaken}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};