
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
      titleKey: "E-commerce Responsivo",
      descriptionKey: "Uma plataforma de comércio eletrônico completa com carrinho de compras, checkout e integração de pagamentos.",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      titleKey: "Dashboard Admin",
      descriptionKey: "Painel administrativo com visualização de dados, gráficos e tabelas para gerenciamento de conteúdo.",
      image: "/placeholder.svg",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
      liveUrl: "#",
      repoUrl: "#",
    },
    {
      titleKey: "App de Notícias",
      descriptionKey: "Aplicativo de notícias com categorias, pesquisa e sistema de favoritos utilizando APIs de notícias.",
      image: "/placeholder.svg",
      tags: ["React Native", "Redux", "Firebase", "REST API"],
      liveUrl: "#",
      repoUrl: "#",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container mx-auto">
        <h2 className="section-title">{t("Meus Projetos")}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="aspect-video w-full overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={t(project.titleKey)} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{t(project.titleKey)}</CardTitle>
                <CardDescription>{t(project.descriptionKey)}</CardDescription>
              </CardHeader>
              <CardContent>
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
              <CardFooter className="flex justify-between">
                <a 
                  href={project.repoUrl} 
                  className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
                  rel="noopener noreferrer"
                  aria-label={`Ver código do projeto ${t(project.titleKey)}`}
                >
                  <Github size={18} className="mr-1" /> {t("Código")}
                </a>
                <a 
                  href={project.liveUrl}
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
