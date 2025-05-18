import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface Project {
  titleKey: string;
  descriptionKey: string;
  image: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
}

const Projects: React.FC = () => {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      titleKey: "Invoko",
      descriptionKey: "Um app para desenvolvedores gerarem invoices para seus clientes sem burocracia",
      image: "/invoko.png",
      tags: ["React", "Vite", "Tailwind CSS", "TypeScript", "GSAP", "shadcn/ui"],
      liveUrl: "https://www.invoko.com.br/",
      repoUrl: "https://github.com/NullBeta001/invoko_frontend",
    },
    {
      titleKey: "Dashboard Financeiro",
      descriptionKey: "Um dashboard financeiro completo com visualização de dados, gráficos e tabelas para gerenciamento de finanças.",
      image: "/financial_dash.png",
      tags: ["React", "Next.js", "Chart.js", "Styled Components"],
      liveUrl: "https://financial-dashboard-two-sigma.vercel.app/",
      repoUrl: "https://github.com/NullBeta001/financial-dashboard",
    },
    {
      titleKey: "Game Mania",
      descriptionKey: "Um app SPA que simula um e-commerce de acessórios e periféricos para gamers.",
      image: "/game_mania.png",
      tags: ["Angular", "TypeScript", "Karma", "Babel"],
      liveUrl: "https://game-mania-lilac.vercel.app/",
      repoUrl: "https://github.com/NullBeta001/game-mania-angular",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container mx-auto">
        <h2 className="section-title">{t("Meus Projetos")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover animate-fade-in flex flex-col h-full" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={t(project.titleKey)}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle>{t(project.titleKey)}</CardTitle>
                  {project.titleKey === "Invoko" && (
                    <span className="bg-yellow-500/10 text-yellow-500 text-xs font-medium px-2.5 py-1 rounded-full border border-yellow-500/20 animate-pulse">
                      Em Construção
                    </span>
                  )}
                </div>
                <CardDescription>{t(project.descriptionKey)}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-secondary text-xs font-medium px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between mt-auto">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                  rel="noopener noreferrer"
                  aria-label={`Ver código do projeto ${t(project.titleKey)}`}
                >
                  <Github size={18} className="mr-1" /> {t("Código")}
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                  rel="noopener noreferrer"
                  aria-label={`Ver demonstração do projeto ${t(project.titleKey)}`}
                >
                  <Globe size={18} className="mr-1" /> {t("Demo")}
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="group">
            {t("Ver mais projetos")}
            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
