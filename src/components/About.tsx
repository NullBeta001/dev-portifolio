import React from "react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

const skills = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "React",
  "Next.js", "TailwindCSS", "Styled Components", "Git",
  "Node.js", "Redux", "GraphQL", "Figma"
];

interface AboutProps {
  experienceList?: string[];
}

const About: React.FC<AboutProps> = ({
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
    <section id="about" className="section bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="section-title">{t("Sobre Mim")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="animate-fade-in">
            <p className="text-lg mb-6">
              {t("first_paragraph")}
            </p>
            <p className="text-lg mb-6">
              {t("second_paragraph")}
            </p>
            <p className="text-lg">
              {t("third_paragraph")}
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
                <h4 className="font-semibold">{t("first_education")}</h4>
                <p className="text-muted-foreground">{t("first_education_date")}</p>
              </div>
              <div className="border-l-2 border-accent pl-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h4 className="font-semibold">{t("second_education")}</h4>
                <p className="text-muted-foreground">{t("second_education_date")}</p>
              </div>
              <div className="border-l-2 border-accent pl-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h4 className="font-semibold">{t("third_education")}</h4>
                <p className="text-muted-foreground">{t("third_education_date")}</p>
              </div>
              <div className="border-l-2 border-accent pl-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <h4 className="font-semibold">{t("fourth_education")}</h4>
                <p className="text-muted-foreground">{t("fourth_education_date")}</p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-10 mb-6">{t("Experiência Profissional")}</h3>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-card/30 rounded-lg p-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 relative rounded-full overflow-hidden bg-background/50">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="object-contain p-2"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-blue-400">{exp.title}</h4>
                  <p className="text-lg font-medium">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.period}</p>

                  <p className="mt-4">{exp.description}</p>

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

export default About;
