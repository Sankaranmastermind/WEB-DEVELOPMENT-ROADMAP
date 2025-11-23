import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Step } from "@/types/roadmap";
import { Clock, ChevronRight, CheckCircle2 } from "lucide-react";

interface StepCardProps {
  step: Step;
  isCompleted: boolean;
  onToggleComplete: () => void;
  onClick: () => void;
  index: number;
}

export function StepCard({ step, isCompleted, onToggleComplete, onClick, index }: StepCardProps) {
  return (
    <div className="relative animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
      {/* Connection line */}
      {index > 0 && (
        <div className="absolute left-6 -top-6 w-0.5 h-6 bg-border" />
      )}
      
      <Card
        className={`relative group bg-card border-border hover:border-foreground transition-all duration-500 cursor-pointer hover-lift ${
          isCompleted ? "border-foreground glow-border animate-border-glow" : ""
        }`}
      >
        <div className="p-5">
          <div className="flex items-start gap-4">
            {/* Step number & checkbox */}
            <div className="flex flex-col items-center gap-2 pt-1">
              <div
                className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-mono font-bold transition-all duration-500 ${
                  isCompleted
                    ? "border-foreground bg-foreground/20 text-foreground glow-primary-sm animate-pulse-glow"
                    : "border-border bg-secondary text-foreground group-hover:border-foreground/50"
                }`}
              >
                {isCompleted ? <CheckCircle2 className="w-6 h-6 animate-glow-pulse" /> : index + 1}
              </div>
              <Checkbox
                checked={isCompleted}
                onCheckedChange={onToggleComplete}
                onClick={(e) => e.stopPropagation()}
                className="data-[state=checked]:bg-success data-[state=checked]:border-success"
              />
            </div>

            {/* Content */}
            <div className="flex-1" onClick={onClick}>
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-lg font-semibold text-foreground group-hover:text-glow transition-all duration-300">
                  {step.title}
                </h4>
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-2 transition-all duration-300" />
              </div>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{step.description}</p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5" />
                <span>{step.estimatedTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        <div className="absolute -inset-0.5 bg-foreground/10 blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
      </Card>
    </div>
  );
}
