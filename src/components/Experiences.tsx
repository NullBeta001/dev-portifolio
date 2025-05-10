import React from "react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

interface ExperiencesProps {
  experienceList?: string[];
}

const Experiences: React.FC<ExperiencesProps> = ({
  experienceList = ["bix_tech", "germinareagro", "dgsistemas", "braintrust"]
}) => {
  const { t } = useLanguage();

  const experiences = experienceList.map(key => ({
    logo: `/${key}.jpeg`,
    title: t(`${key}_cargo`) || t(`${key}_empresa`),
    company: t(`${key}_empresa`),
    period: t(`${key}_periodo`),
    description: t(`${key}_descricao`),
    technologies: t(`${key}_tecnologias`)?.split(", ") || []
  }));

  return (
    <section id="experiences" className="section bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="section-title">{t("Experiências")}</h2>

        <div className="mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card/30 rounded-lg p-6 animate-fade-in hover:bg-card/40 transition-colors"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 relative overflow-hidden bg-background/50">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="object-contain rounded-lg p-2"
                    width={58}
                    height={58}
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-blue-400">{exp.title}</h4>
                  <p className="text-lg font-medium">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.period}</p>

                  <p className="mt-4 text-pretty">{exp.description}</p>

                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="bg-accent/5 hover:bg-accent/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences; 