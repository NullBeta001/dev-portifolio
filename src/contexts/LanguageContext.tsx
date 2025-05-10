
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
  "Sou um desenvolvedor front-end apaixonado por criar interfaces bonitas e funcionais. Com mais de 3 anos de experiência em desenvolvimento web, tenho trabalhado com diversas tecnologias modernas para criar soluções digitais de alta qualidade.": {
    pt: "Sou um desenvolvedor front-end apaixonado por criar interfaces bonitas e funcionais. Com mais de 3 anos de experiência em desenvolvimento web, tenho trabalhado com diversas tecnologias modernas para criar soluções digitais de alta qualidade.",
    en: "I am a front-end developer passionate about creating beautiful and functional interfaces. With over 3 years of experience in web development, I have been working with various modern technologies to create high-quality digital solutions."
  },
  "Minha jornada começou com HTML, CSS e JavaScript, mas logo me aprofundei em frameworks modernos como React e Next.js. Meu objetivo é sempre criar experiências de usuário excepcionais que combinam design atraente com código limpo e eficiente.": {
    pt: "Minha jornada começou com HTML, CSS e JavaScript, mas logo me aprofundei em frameworks modernos como React e Next.js. Meu objetivo é sempre criar experiências de usuário excepcionais que combinam design atraente com código limpo e eficiente.",
    en: "My journey started with HTML, CSS and JavaScript, but I soon delved into modern frameworks like React and Next.js. My goal is always to create exceptional user experiences that combine attractive design with clean and efficient code."
  },
  "Quando não estou codando, gosto de ler sobre novas tecnologias, jogar videogames e explorar novos lugares.": {
    pt: "Quando não estou codando, gosto de ler sobre novas tecnologias, jogar videogames e explorar novos lugares.",
    en: "When I'm not coding, I enjoy reading about new technologies, playing video games, and exploring new places."
  },
  "Minhas Habilidades": {
    pt: "Minhas Habilidades",
    en: "My Skills"
  },
  "Educação": {
    pt: "Educação",
    en: "Education"
  },
  "Bacharelado em Ciência da Computação": {
    pt: "Bacharelado em Ciência da Computação",
    en: "Bachelor's Degree in Computer Science"
  },
  "Universidade Federal, 2017-2021": {
    pt: "Universidade Federal, 2017-2021",
    en: "Federal University, 2017-2021"
  },
  "Especialização em Desenvolvimento Web": {
    pt: "Especialização em Desenvolvimento Web",
    en: "Specialization in Web Development"
  },
  "Instituto de Tecnologia, 2021-2022": {
    pt: "Instituto de Tecnologia, 2021-2022",
    en: "Technology Institute, 2021-2022"
  },
  
  // Projects
  "Meus Projetos": {
    pt: "Meus Projetos",
    en: "My Projects"
  },
  "E-commerce Responsivo": {
    pt: "E-commerce Responsivo",
    en: "Responsive E-commerce"
  },
  "Uma plataforma de comércio eletrônico completa com carrinho de compras, checkout e integração de pagamentos.": {
    pt: "Uma plataforma de comércio eletrônico completa com carrinho de compras, checkout e integração de pagamentos.",
    en: "A complete e-commerce platform with shopping cart, checkout, and payment integration."
  },
  "Dashboard Admin": {
    pt: "Dashboard Admin",
    en: "Admin Dashboard"
  },
  "Painel administrativo com visualização de dados, gráficos e tabelas para gerenciamento de conteúdo.": {
    pt: "Painel administrativo com visualização de dados, gráficos e tabelas para gerenciamento de conteúdo.",
    en: "Administrative panel with data visualization, charts, and tables for content management."
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
  language: "pt",
  setLanguage: () => {},
  t: () => "",
});

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("pt");

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
