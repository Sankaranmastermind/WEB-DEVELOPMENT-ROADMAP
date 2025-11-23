import { Card } from "@/components/ui/card";
import { ArrowRight, Code, Server, Layers } from "lucide-react";
import { PathType } from "@/types/roadmap";

interface PathCardProps {
  path: PathType;
  title: string;
  description: string;
  onClick: () => void;
}

const iconMap = {
  frontend: Code,
  backend: Server,
  fullstack: Layers,
};

export function PathCard({ path, title, description, onClick }: PathCardProps) {
  const Icon = iconMap[path];

  return (
    <Card
      onClick={onClick}
      className="group relative overflow-hidden bg-card border-border hover:border-foreground cursor-pointer transition-all duration-500 hover:glow-primary-sm animate-fade-in p-6 hover-lift"
    >
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-foreground/10 text-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-300 animate-float">
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-mono font-semibold text-foreground group-hover:text-glow transition-all duration-300">{title}</h3>
        </div>
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        <div className="flex items-center gap-2 text-foreground font-medium group-hover:gap-4 transition-all duration-300">
          <span className="group-hover:text-glow">Start Learning</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -inset-1 bg-foreground/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
    </Card>
  );
}
