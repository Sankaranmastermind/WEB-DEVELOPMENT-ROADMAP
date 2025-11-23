import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Step } from "@/types/roadmap";
import { ExternalLink, Lightbulb, Target, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StepDetailProps {
  step: Step | null;
  isOpen: boolean;
  onClose: () => void;
}

export function StepDetail({ step, isOpen, onClose }: StepDetailProps) {
  if (!step) return null;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="sm:max-w-xl overflow-y-auto bg-card border-border">
        <SheetHeader className="text-left space-y-3">
          <SheetTitle className="text-2xl font-mono font-bold text-foreground pr-8">
            {step.title}
          </SheetTitle>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Estimated time: {step.estimatedTime}</span>
          </div>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          {/* Description */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
              <Target className="w-4 h-4 text-primary" />
              What You'll Learn
            </h4>
            <p className="text-muted-foreground leading-relaxed">{step.description}</p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Learning Resources</h4>
            <div className="space-y-2">
              {step.resources.map((resource, idx) => (
                <a
                  key={idx}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-lg bg-secondary hover:bg-secondary/70 border border-border transition-all group"
                >
                  <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                    {resource.title}
                  </span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* GenAI Tip */}
          <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
            <h4 className="text-sm font-semibold text-primary mb-2 flex items-center gap-2">
              <Lightbulb className="w-4 h-4" />
              AI Learning Tip
            </h4>
            <p className="text-sm text-foreground leading-relaxed font-mono">{step.genAiTip}</p>
            <Button
              variant="outline"
              size="sm"
              className="mt-3 text-xs border-primary/30 hover:bg-primary/10"
              onClick={() => navigator.clipboard.writeText(step.genAiTip)}
            >
              Copy Prompt
            </Button>
          </div>

          {/* Optional Task */}
          {step.optionalTask && (
            <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
              <h4 className="text-sm font-semibold text-accent mb-2">Practice Challenge</h4>
              <p className="text-sm text-foreground leading-relaxed">{step.optionalTask}</p>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
