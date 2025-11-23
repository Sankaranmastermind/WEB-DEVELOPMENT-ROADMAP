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
      className="group relative overflow-hidden bg-card border-border hover:border-primary cursor-pointer transition-all duration-300 hover:glow-primary-sm animate-fade-in p-6"
    >
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 rounded-lg bg-primary/10 text-primary">
            <Icon className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-mono font-semibold text-foreground">{title}</h3>
        </div>
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
          <span>Start Learning</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </Card>
  );
}
