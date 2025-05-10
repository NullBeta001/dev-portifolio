
import React from "react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

const skills = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "React",
  "Next.js", "TailwindCSS", "Styled Components", "Git",
  "Node.js", "Redux", "GraphQL", "Figma"
];

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="section-title">{t("Sobre Mim")}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="animate-fade-in">
            <p className="text-lg mb-6">
              {t("Sou um desenvolvedor front-end apaixonado por criar interfaces bonitas e funcionais. Com mais de 3 anos de experiência em desenvolvimento web, tenho trabalhado com diversas tecnologias modernas para criar soluções digitais de alta qualidade.")}
            </p>
            <p className="text-lg mb-6">
              {t("Minha jornada começou com HTML, CSS e JavaScript, mas logo me aprofundei em frameworks modernos como React e Next.js. Meu objetivo é sempre criar experiências de usuário excepcionais que combinam design atraente com código limpo e eficiente.")}
            </p>
            <p className="text-lg">
              {t("Quando não estou codando, gosto de ler sobre novas tecnologias, jogar videogames e explorar novos lugares.")}
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">{t("Minhas Habilidades")}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  className="bg-accent/10 hover:bg-accent/20 text-accent-foreground px-4 py-2 text-sm animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
            
            <h3 className="text-xl font-semibold mt-10 mb-6">{t("Educação")}</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-accent pl-4 animate-fade-in">
                <h4 className="font-semibold">{t("Bacharelado em Ciência da Computação")}</h4>
                <p className="text-muted-foreground">{t("Universidade Federal, 2017-2021")}</p>
              </div>
              <div className="border-l-2 border-accent pl-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h4 className="font-semibold">{t("Especialização em Desenvolvimento Web")}</h4>
                <p className="text-muted-foreground">{t("Instituto de Tecnologia, 2021-2022")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
