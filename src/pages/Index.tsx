import { useState } from "react";
import { PathCard } from "@/components/PathCard";
import { StepCard } from "@/components/StepCard";
import { StepDetail } from "@/components/StepDetail";
import { ProgressBar } from "@/components/ProgressBar";
import { roadmaps } from "@/data/roadmaps";
import { PathType, Step } from "@/types/roadmap";
import { useProgress } from "@/hooks/useProgress";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Sparkles } from "lucide-react";

const Index = () => {
  const [selectedPath, setSelectedPath] = useState<PathType | null>(null);
  const [selectedStep, setSelectedStep] = useState<Step | null>(null);
  const { progress, toggleStep, getProgressPercentage } = useProgress(selectedPath || undefined);

  const currentRoadmap = selectedPath ? roadmaps[selectedPath] : null;
  const progressPercentage = currentRoadmap
    ? getProgressPercentage(currentRoadmap.steps.length)
    : 0;
  const completedCount = currentRoadmap
    ? currentRoadmap.steps.filter((step) => progress[step.id]).length
    : 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      {!selectedPath && (
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/10 border border-foreground/20 text-foreground text-sm font-medium mb-4 animate-border-glow">
              <Sparkles className="w-4 h-4 animate-glow-pulse" />
              <span>AI-Powered Learning • Updated 2025</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-mono font-bold text-foreground leading-tight">
              Your Web Dev <span className="text-glow animate-pulse-glow">Roadmap</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Follow a clear, structured path to becoming a web developer. Track your progress,
              learn with GenAI assistance, and build real projects.
            </p>
          </div>

          {/* Path Selection */}
          <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(roadmaps).map(([key, roadmap]) => (
              <PathCard
                key={key}
                path={roadmap.path}
                title={roadmap.title}
                description={roadmap.description}
                onClick={() => setSelectedPath(roadmap.path)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Roadmap View */}
      {selectedPath && currentRoadmap && (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Back button & Header */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSelectedPath(null)}
            className="mb-6 hover:bg-secondary"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Paths
          </Button>

          <div className="mb-8 animate-fade-in">
            <h2 className="text-3xl font-mono font-bold text-foreground mb-2">
              {currentRoadmap.title}
            </h2>
            <p className="text-muted-foreground">{currentRoadmap.description}</p>
          </div>

          {/* Progress Bar */}
          <ProgressBar
            percentage={progressPercentage}
            completedCount={completedCount}
            totalCount={currentRoadmap.steps.length}
          />

          {/* Steps */}
          <div className="mt-8 space-y-6">
            {currentRoadmap.steps.map((step, index) => (
              <StepCard
                key={step.id}
                step={step}
                isCompleted={!!progress[step.id]}
                onToggleComplete={() => toggleStep(step.id)}
                onClick={() => setSelectedStep(step)}
                index={index}
              />
            ))}
          </div>
        </div>
      )}

      {/* Step Detail Drawer */}
      <StepDetail
        step={selectedStep}
        isOpen={!!selectedStep}
        onClose={() => setSelectedStep(null)}
      />
    </div>
  );
};

export default Index;
