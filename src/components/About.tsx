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

const About: React.FC<AboutProps> = () => {
  const { t } = useLanguage();

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
      </div>
    </section>
  );
};

export default About;
