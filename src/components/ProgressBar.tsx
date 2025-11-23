import { Progress } from "@/components/ui/progress";
import { CheckCircle2 } from "lucide-react";

interface ProgressBarProps {
  percentage: number;
  completedCount: number;
  totalCount: number;
}

export function ProgressBar({ percentage, completedCount, totalCount }: ProgressBarProps) {
  return (
    <div className="w-full p-4 bg-card border border-border rounded-lg animate-fade-in">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-success" />
          <span className="text-sm font-semibold text-foreground">Your Progress</span>
        </div>
        <span className="text-sm font-mono font-bold text-primary">
          {completedCount} / {totalCount}
        </span>
      </div>
      <Progress value={percentage} className="h-3" />
      <p className="text-xs text-muted-foreground mt-2">
        {percentage === 100
          ? "🎉 Congratulations! You've completed this path!"
          : `${percentage}% complete - Keep going!`}
      </p>
    </div>
  );
}
