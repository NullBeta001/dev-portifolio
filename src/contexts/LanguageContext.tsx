import React, { createContext, useState, useContext, ReactNode } from "react";

type Language = "pt" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  // Navbar
  "Home": {
    pt: "Home",
    en: "Home"
  },
  "Sobre": {
    pt: "Sobre",
    en: "About"
  },
  "Projetos": {
    pt: "Projetos",
    en: "Projects"
  },
  "Contato": {
    pt: "Contato",
    en: "Contact"
  },

  "Experiências": {
    pt: "Experiências",
    en: "Experience"
  },

  // Hero
  "Olá, meu nome é": {
    pt: "Olá, meu nome é",
    en: "Hi, my name is"
  },
  "Desenvolvedor Front-end": {
    pt: "Desenvolvedor Front-end",
    en: "Front-end Developer"
  },
  "Eu crio experiências digitais excepcionais com foco em design moderno e código limpo. Especializado em construir aplicações web responsivas com React.": {
    pt: "Eu crio experiências digitais excepcionais com foco em design moderno e código limpo. Especializado em construir aplicações web responsivas com React.",
    en: "I create exceptional digital experiences with a focus on modern design and clean code. Specialized in building responsive web applications with React."
  },
  "Ver Projetos": {
    pt: "Ver Projetos",
    en: "View Projects"
  },
  "Baixar CV": {
    pt: "Baixar CV",
    en: "Download CV"
  },

  // About
  "Sobre Mim": {
    pt: "Sobre Mim",
    en: "About Me"
  },
  "first_paragraph": {
    pt: "Olá! Sou Fábio Oliveira, desenvolvedor front-end com foco em React, Next.js e Angular, apaixonado por criar aplicações web escaláveis, acessíveis e com alta performance. Desde 2021, atuo com consultoria em tecnologia, liderando projetos estratégicos que conectam design, usabilidade e código limpo.",
    en: "Hi! I'm Fábio Oliveira, a front-end developer focused on React, Next.js, and Angular, passionate about building scalable, accessible, and high-performance web applications. Since 2021, I've worked on technology consulting projects, leading strategic initiatives that connect design, usability, and clean code."
  },
  "second_paragraph": {
    pt: "Na BIX Tech, além de implementar interfaces modernas e responsivas, contribuo ativamente em decisões de arquitetura, integração com APIs RESTful e práticas de engenharia como SOLID, Clean Code e DDD. Também venho expandindo minhas habilidades full-stack com Node.js e Docker, sempre buscando evoluir como engenheiro de software completo.",
    en: "At BIX Tech, I not only build modern and responsive interfaces but also contribute to architectural decisions, RESTful API integrations, and software engineering best practices like SOLID, Clean Code, and DDD. I'm also expanding my full-stack skills with Node.js and Docker, constantly evolving as a well-rounded software engineer."
  },
  "third_paragraph": {
    pt: "Tenho certificações em AWS e Google Cloud, experiência com ambientes em nuvem (AWS, GCP, Azure) e integração com sistemas de autenticação como Microsoft Entra ID. Trabalhar com agilidade, organização e entrega de valor real é o que me move em cada projeto.",
    en: "I'm AWS-certified and experienced with cloud environments such as AWS, GCP, and Azure, including authentication services like Microsoft Entra ID. I thrive in agile environments, bringing organization, technical leadership, and real value to every project."
  },
  "Minhas Habilidades": {
    pt: "Minhas Habilidades",
    en: "My Skills"
  },
  "Educação": {
    pt: "Educação",
    en: "Education"
  },

  "first_education": {
    pt: "Curso Técnico Integrado em User Experience",
    en: "Technical Program in User Experience"
  },
  "first_education_date": {
    pt: "FIAP, 2023",
    en: "FIAP, 2023"
  },

  "second_education": {
    pt: "Curso Superior de Tecnologia em Desenvolvimento Back End",
    en: "Associate Degree in Back-End Development"
  },
  "second_education_date": {
    pt: "Senai São Paulo, 2022–2023",
    en: "Senai São Paulo, 2022–2023"
  },

  "third_education": {
    pt: "Curso Superior de Tecnologia em Desenvolvimento Front End",
    en: "Associate Degree in Front-End Development"
  },
  "third_education_date": {
    pt: "Senai São Paulo, 2021–2022",
    en: "Senai São Paulo, 2021–2022"
  },

  "fourth_education": {
    pt: "Certificação em Implantação de Sistemas em AWS Cloud",
    en: "Certification in AWS Cloud Systems Deployment"
  },
  "fourth_education_date": {
    pt: "Senai São Paulo, 2022",
    en: "Senai São Paulo, 2022"
  },

  // Experience
  "bix_tech_empresa": {
    pt: "BIX Tech",
    en: "BIX Tech"
  },
  "bix_tech_cargo": {
    pt: "Engenheiro de Software Front-End",
    en: "Front-End Software Engineer"
  },
  "bix_tech_periodo": {
    pt: "Outubro de 2024 – Presente",
    en: "October 2024 – Present"
  },
  "bix_tech_descricao": {
    pt: "Desenvolvimento de aplicações escaláveis com foco em performance, acessibilidade e usabilidade utilizando React, Next.js e TypeScript. Participação em decisões de arquitetura, integração com APIs RESTful, aplicação de padrões como SOLID e Clean Code, e liderança técnica em projetos de consultoria.",
    en: "Development of scalable applications with a focus on performance, accessibility, and usability using React, Next.js, and TypeScript. Participated in architectural decisions, RESTful API integrations, applied principles like SOLID and Clean Code, and provided technical leadership in consulting projects."
  },
  "bix_tech_tecnologias": {
    pt: "React, Next.js, TypeScript, Node.js, Docker, Docker Compose, Git, APIs RESTful, Vite, TailwindCSS",
    en: "React, Next.js, TypeScript, Node.js, Docker, Docker Compose, Git, RESTful APIs, Vite, TailwindCSS"
  },

  "germinareagro_empresa": {
    pt: "Germinare",
    en: "Germinare"
  },
  "germinareagro_cargo": {
    pt: "Desenvolvedor Front-End",
    en: "Front-End Developer"
  },
  "germinareagro_periodo": {
    pt: "Abril de 2023 – Novembro de 2024",
    en: "April 2023 – November 2024"
  },
  "germinareagro_descricao": {
    pt: "Desenvolvimento de aplicações web internas e externas voltadas para o mercado Agro. Atuação desde o levantamento de requisitos até a implementação, utilizando React, TypeScript, Python, PostgreSQL, MongoDB, Figma e APIs REST.",
    en: "Development of internal and external web applications focused on the Agro market. Worked from requirements gathering to implementation, using React, TypeScript, Python, PostgreSQL, MongoDB, Figma, and REST APIs."
  },
  "germinareagro_tecnologias": {
    pt: "React, TypeScript, Python, PostgreSQL, MongoDB, Figma, APIs REST",
    en: "React, TypeScript, Python, PostgreSQL, MongoDB, Figma, REST APIs"
  },

  "dgsistemas_empresa": {
    pt: "DG Sistemas Inteligentes",
    en: "DG Sistemas Inteligentes"
  },
  "dgsistemas_cargo": {
    pt: "Desenvolvedor de Software",
    en: "Software Developer"
  },
  "dgsistemas_periodo": {
    pt: "Novembro de 2022 – Abril de 2023",
    en: "November 2022 – April 2023"
  },
  "dgsistemas_descricao": {
    pt: "Desenvolvimento com Angular, TypeScript, Node.js, Firebase e AWS Lambda. Envolvimento em projetos de alta criticidade, com foco em segurança de dados e criação de novas funcionalidades.",
    en: "Development using Angular, TypeScript, Node.js, Firebase, and AWS Lambda. Involved in high-criticality projects, focusing on data security and the creation of new features."
  },
  "dgsistemas_tecnologias": {
    pt: "Angular, TypeScript, Node.js, Firebase, AWS Lambda",
    en: "Angular, TypeScript, Node.js, Firebase, AWS Lambda"
  },

  "braintrust_empresa": {
    pt: "Braintrust",
    en: "Braintrust"
  },
  "braintrust_cargo": {
    pt: "Desenvolvedor Full Stack",
    en: "Full Stack Developer"
  },
  "braintrust_periodo": {
    pt: "Julho de 2022 – Abril de 2023",
    en: "July 2022 – April 2023"
  },
  "braintrust_descricao": {
    pt: "Desenvolvimento full stack de aplicações web, atuando desde o design até a implementação do front-end e back-end.",
    en: "Full stack web application development, working from design to front-end and back-end implementation."
  },
  "braintrust_tecnologias": {
    pt: "Full Stack: React, Node.js, JavaScript, HTML, CSS",
    en: "Full Stack: React, Node.js, JavaScript, HTML, CSS"
  },

  // Projects
  "Meus Projetos": {
    pt: "Meus Projetos",
    en: "My Projects"
  },
  "Dashboard Financeiro": {
    pt: "Dashboard Financeiro",
    en: "Financial Dashboard"
  },
  "Um dashboard financeiro completo com visualização de dados, gráficos e tabelas para gerenciamento de finanças.": {
    pt: "Um dashboard financeiro completo com visualização de dados, gráficos e tabelas para gerenciamento de finanças.",
    en: "A complete financial dashboard with data visualization, charts, and tables for financial management."
  },
  "Game Mania": {
    pt: "Game Mania",
    en: "Game Mania"
  },
  "Um app SPA que simula um e-commerce de acessórios e periféricos para gamers.": {
    pt: "Um app SPA que simula um e-commerce de acessórios e periféricos para gamers.",
    en: "A SPA app that simulates an e-commerce of accessories and peripherals for gamers."
  },
  "App de Notícias": {
    pt: "App de Notícias",
    en: "News App"
  },
  "Aplicativo de notícias com categorias, pesquisa e sistema de favoritos utilizando APIs de notícias.": {
    pt: "Aplicativo de notícias com categorias, pesquisa e sistema de favoritos utilizando APIs de notícias.",
    en: "News application with categories, search, and favorites system using news APIs."
  },
  "Código": {
    pt: "Código",
    en: "Code"
  },
  "Demo": {
    pt: "Demo",
    en: "Demo"
  },
  "Ver mais projetos": {
    pt: "Ver mais projetos",
    en: "View more projects"
  },

  // Contact
  "Vamos conversar!": {
    pt: "Vamos conversar!",
    en: "Let's talk!"
  },
  "Estou interessado em oportunidades de trabalho freelance ou em período integral. Se você tem um projeto que precisa de um desenvolvedor front-end experiente, entre em contato comigo.": {
    pt: "Estou interessado em oportunidades de trabalho freelance ou em período integral. Se você tem um projeto que precisa de um desenvolvedor front-end experiente, entre em contato comigo.",
    en: "I'm interested in freelance or full-time job opportunities. If you have a project that needs an experienced front-end developer, get in touch with me."
  },
  "Nome": {
    pt: "Nome",
    en: "Name"
  },
  "Seu nome": {
    pt: "Seu nome",
    en: "Your name"
  },
  "Email": {
    pt: "Email",
    en: "Email"
  },
  "Seu email": {
    pt: "Seu email",
    en: "Your email"
  },
  "Assunto": {
    pt: "Assunto",
    en: "Subject"
  },
  "Assunto da mensagem": {
    pt: "Assunto da mensagem",
    en: "Message subject"
  },
  "Mensagem": {
    pt: "Mensagem",
    en: "Message"
  },
  "Escreva sua mensagem aqui...": {
    pt: "Escreva sua mensagem aqui...",
    en: "Write your message here..."
  },
  "Enviar Mensagem": {
    pt: "Enviar Mensagem",
    en: "Send Message"
  },
  "Mensagem enviada!": {
    pt: "Mensagem enviada!",
    en: "Message sent!"
  },
  "Obrigado por entrar em contato. Responderei em breve.": {
    pt: "Obrigado por entrar em contato. Responderei em breve.",
    en: "Thank you for reaching out. I'll respond soon."
  },

  // Footer
  "Todos os direitos reservados.": {
    pt: "Todos os direitos reservados.",
    en: "All rights reserved."
  },
  "Desenvolvido com ❤️ e React": {
    pt: "Desenvolvido com ❤️ e React",
    en: "Developed with ❤️ and React"
  },

  // Theme
  "Claro": {
    pt: "Claro",
    en: "Light"
  },
  "Escuro": {
    pt: "Escuro",
    en: "Dark"
  },
  "Sistema": {
    pt: "Sistema",
    en: "System"
  }
};

export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => { },
  t: () => "",
});

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation '${key}' not found.`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => useContext(LanguageContext);
