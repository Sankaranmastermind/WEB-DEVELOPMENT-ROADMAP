import { useState, useEffect } from "react";
import { Progress } from "@/types/roadmap";

const STORAGE_KEY = "devpath_progress";

export function useProgress(pathType?: string) {
  const [progress, setProgress] = useState<Progress>({});

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setProgress(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse progress from localStorage", e);
      }
    }
  }, []);

  const toggleStep = (stepId: string) => {
    setProgress((prev) => {
      const updated = { ...prev, [stepId]: !prev[stepId] };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const getProgressPercentage = (totalSteps: number) => {
    if (!pathType || totalSteps === 0) return 0;
    const completedSteps = Object.keys(progress).filter(
      (key) => progress[key] && key.startsWith(pathType)
    ).length;
    return Math.round((completedSteps / totalSteps) * 100);
  };

  return { progress, toggleStep, getProgressPercentage };
}
