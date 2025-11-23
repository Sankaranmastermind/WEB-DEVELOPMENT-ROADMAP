import { useState, useEffect } from "react";
import { Progress } from "@/types/roadmap";

const STORAGE_KEY = "devpath_progress";
const CHALLENGES_KEY = "devpath_challenges";

export function useProgress(pathType?: string) {
  const [progress, setProgress] = useState<Progress>({});
  const [challenges, setChallenges] = useState<Progress>({});

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setProgress(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse progress from localStorage", e);
      }
    }
    
    const storedChallenges = localStorage.getItem(CHALLENGES_KEY);
    if (storedChallenges) {
      try {
        setChallenges(JSON.parse(storedChallenges));
      } catch (e) {
        console.error("Failed to parse challenges from localStorage", e);
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

  const toggleChallenge = (stepId: string) => {
    setChallenges((prev) => {
      const newValue = !prev[stepId];
      const updated = { ...prev };
      if (newValue) {
        updated[stepId] = true;
      } else {
        // Remove from object when toggling off
        delete updated[stepId];
      }
      localStorage.setItem(CHALLENGES_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const getProgressPercentage = (totalSteps: number, stepIds?: string[]) => {
    if (!pathType || totalSteps === 0) return 0;
    
    if (stepIds) {
      // Count steps that are either marked as complete OR have completed challenges
      const completedSteps = stepIds.filter(
        (stepId) => progress[stepId] || challenges[stepId]
      ).length;
      return Math.round((completedSteps / totalSteps) * 100);
    }
    
    // Fallback to old logic if stepIds not provided
    const completedSteps = Object.keys(progress).filter(
      (key) => progress[key] && key.startsWith(pathType)
    ).length;
    return Math.round((completedSteps / totalSteps) * 100);
  };

  return { progress, toggleStep, getProgressPercentage, challenges, toggleChallenge };
}
