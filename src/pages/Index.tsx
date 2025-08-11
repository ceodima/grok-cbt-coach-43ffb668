import { useState } from "react";
import { NavigationHeader } from "@/components/navigation-header";
import { DashboardStats } from "@/components/dashboard-stats";
import { DailyChallenge } from "@/components/daily-challenge";
import { CBTSessionCard } from "@/components/cbt-session-card";
import { JournalEntry } from "@/components/journal-entry";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, BookOpen, Target, Trophy } from "lucide-react";
import heroImage from "@/assets/willpower-hero.jpg";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Моковые данные для демонстрации
  const userStats = {
    willpowerLevel: 67,
    sessionsCompleted: 8,
    totalSessions: 12,
    journalEntries: 15,
    currentStreak: 5
  };

  const dailyChallenge = {
    title: "Преодолей паралич решений",
    description: "Как спортсмен принимает решение за секунды на поле, так и ты можешь научиться быстро принимать бизнес-решения. Попробуй технику '5-минутный лимит'.",
    category: "business" as const,
    timeEstimate: "15 мин",
    difficulty: "medium" as const
  };

  const recentSessions = [
    {
      title: "Анализ страха провала",
      description: "Техника вызова катастрофических мыслей через аналогию с спортивными неудачами",
      duration: "20 мин",
      difficulty: "medium" as const,
      category: "business" as const,
      isCompleted: true
    },
    {
      title: "Тренировка самодисциплины",
      description: "Как атлет строит дисциплину: малые ежедневные действия для больших результатов",
      duration: "15 мин", 
      difficulty: "easy" as const,
      category: "sport" as const,
      isCompleted: false
    },
    {
      title: "Преодоление паралича воли",
      description: "Техника разбития больших решений на микро-шаги, как тренировочный процесс",
      duration: "25 мин",
      difficulty: "hard" as const,
      category: "general" as const,
      isCompleted: false
    }
  ];

  const journalEntries = [
    {
      date: "Сегодня, 14:30",
      situation: "Размышления о запуске фриланс-проекта",
      thoughts: [
        "А если у меня не получится и я потеряю время?",
        "Мне не хватает дисциплины, как у профессиональных спортсменов",
        "Лучше подождать идеального момента"
      ],
      emotion: "Тревога",
      intensity: 7,
      actionTaken: "Установил таймер на 15 минут для исследования конкурентов",
      category: "business" as const
    },
    {
      date: "Вчера, 09:15", 
      situation: "Пропустил утреннюю тренировку",
      thoughts: [
        "Я недостаточно мотивирован",
        "Профессиональные атлеты никогда не пропускают тренировки",
        "Я не смогу достичь своих целей"
      ],
      emotion: "Разочарование",
      intensity: 5,
      category: "sport" as const
    }
  ];

  return (
    <div className="min-h-screen bg-background dark">
      <NavigationHeader
        userName="Александр"
        userLevel={3}
        notificationCount={2}
      />
      
      <main className="container px-4 py-6 space-y-8">
        {/* Hero секция */}
        <section className="relative overflow-hidden rounded-xl">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-hero/80" />
          <div className="relative z-10 p-8 md:p-12 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
              Преодолей паралич воли
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Как спортсмен преодолевает страх перед прыжком, так и ты можешь преодолеть страх принятия решений в бизнесе и жизни
            </p>
            <Button variant="hero" size="lg">
              <Target className="h-5 w-5" />
              Начать сессию КПТ
            </Button>
          </div>
        </section>

        {/* Табы навигации */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <Trophy className="h-4 w-4" />
              <span className="hidden sm:inline">Дашборд</span>
            </TabsTrigger>
            <TabsTrigger value="sessions" className="flex items-center gap-2">
              <Target className="h-4 w-4" />
              <span className="hidden sm:inline">Сессии</span>
            </TabsTrigger>
            <TabsTrigger value="journal" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Журнал</span>
            </TabsTrigger>
            <TabsTrigger value="progress" className="flex items-center gap-2">
              <PlusCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Прогресс</span>
            </TabsTrigger>
          </TabsList>

          {/* Дашборд */}
          <TabsContent value="dashboard" className="space-y-8">
            <DashboardStats {...userStats} />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <DailyChallenge 
                {...dailyChallenge}
                onStart={() => console.log("Starting daily challenge")}
              />
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5 text-primary" />
                    Быстрый старт
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Выбери тип работы с параличом воли:
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    <Button variant="outline" className="justify-start">
                      🏃 Спортивная психология
                    </Button>
                    <Button variant="outline" className="justify-start">
                      💼 Бизнес решения
                    </Button>
                    <Button variant="outline" className="justify-start">
                      🧠 Общая работа со страхами
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Сессии КПТ */}
          <TabsContent value="sessions" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Сессии КПТ</h2>
              <Button variant="strength">
                <PlusCircle className="h-4 w-4" />
                Новая сессия
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentSessions.map((session, index) => (
                <CBTSessionCard
                  key={index}
                  {...session}
                  onStart={() => console.log(`Starting session: ${session.title}`)}
                />
              ))}
            </div>
          </TabsContent>

          {/* Журнал */}
          <TabsContent value="journal" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Журнал размышлений</h2>
              <Button variant="growth">
                <PlusCircle className="h-4 w-4" />
                Добавить запись
              </Button>
            </div>
            
            <div className="space-y-4">
              {journalEntries.map((entry, index) => (
                <JournalEntry
                  key={index}
                  {...entry}
                  onEdit={() => console.log(`Editing entry: ${entry.date}`)}
                />
              ))}
            </div>
          </TabsContent>

          {/* Прогресс */}
          <TabsContent value="progress" className="space-y-6">
            <h2 className="text-2xl font-bold">Твой прогресс</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Достижения</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="bg-secondary/20 text-secondary border-secondary/40">
                      🏃 Первая сессия
                    </Badge>
                    <span className="text-sm text-muted-foreground">Завершена</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="bg-accent/20 text-accent border-accent/40">
                      💪 5 дней подряд
                    </Badge>
                    <span className="text-sm text-muted-foreground">Завершена</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="bg-muted text-muted-foreground">
                      🎯 10 записей в журнале
                    </Badge>
                    <span className="text-sm text-muted-foreground">5/10</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Аналитика</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Преодоление страхов</span>
                        <span>85%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-gradient-strength h-2 rounded-full" style={{ width: "85%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Самодисциплина</span>
                        <span>67%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-gradient-growth h-2 rounded-full" style={{ width: "67%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Принятие решений</span>
                        <span>73%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-gradient-action h-2 rounded-full" style={{ width: "73%" }} />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
