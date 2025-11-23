export type PathType = "frontend" | "backend" | "fullstack";

export interface Step {
  id: string;
  title: string;
  description: string;
  resources: Array<{
    title: string;
    url: string;
  }>;
  genAiTip: string;
  optionalTask?: string;
  estimatedTime: string;
}

export interface Roadmap {
  path: PathType;
  title: string;
  description: string;
  steps: Step[];
}

export interface Progress {
  [stepId: string]: boolean;
}
