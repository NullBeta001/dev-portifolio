
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-background shadow-md py-3" : "py-5"
      }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-xl md:text-2xl font-heading font-bold">
          <span className="gradient-text">Dev</span>Fábio
        </a>

        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex items-center space-x-6">
            <a href="#home" className="nav-link">{t("Home")}</a>
            <a href="#about" className="nav-link">{t("Sobre")}</a>
            <a href="#experiences" className="nav-link">{t("Experiências")}</a>
            <a href="#projects" className="nav-link">{t("Projetos")}</a>
            <a href="#contact" className="nav-link">{t("Contato")}</a>
          </nav>
          <div className="flex items-center space-x-4">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <ThemeSwitcher />
          <LanguageSwitcher />
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute w-full bg-background shadow-md transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0 overflow-hidden"
        }`}>
        <nav className="flex flex-col py-4 px-6 space-y-4">
          <a href="#home" className="nav-link" onClick={toggleMenu}>{t("Home")}</a>
          <a href="#about" className="nav-link" onClick={toggleMenu}>{t("Sobre")}</a>
          <a href="#projects" className="nav-link" onClick={toggleMenu}>{t("Projetos")}</a>
          <a href="#contact" className="nav-link" onClick={toggleMenu}>{t("Contato")}</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
