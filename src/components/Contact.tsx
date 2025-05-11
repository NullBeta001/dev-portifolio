import React, { useRef, useState } from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (!formRef.current) return;
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          toast({
            title: t("Mensagem enviada!"),
            description: t("Obrigado por entrar em contato. Responderei em breve."),
          });
          formRef.current?.reset();
        },
        (error) => {
          toast({
            title: "Erro ao enviar mensagem",
            description: error.text || "Tente novamente mais tarde.",
            variant: "destructive",
          });
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="section bg-secondary/30">
      <div className="container mx-auto">
        <h2 className="section-title">{t("Contato")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">{t("Vamos conversar!")}</h3>
            <p className="text-lg mb-8">
              {t("Estou interessado em oportunidades de trabalho freelance ou em período integral. Se você tem um projeto que precisa de um desenvolvedor front-end experiente, entre em contato comigo.")}
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-accent mr-4" />
                <a href="mailto:contato@exemplo.com" className="hover:text-accent transition-colors">
                  infotechstz@gmail.com
                </a>
              </div>
              <div className="mt-8 flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                  aria-label="LinkedIn"
                  onClick={() => window.open('https://www.linkedin.com/in/fabio-oliveira-nb/', '_blank')}
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                  aria-label="GitHub"
                  onClick={() => window.open('https://github.com/NullBeta001', '_blank')}
                >
                  <Github size={20} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                  aria-label="WhatsApp"
                  onClick={() => window.open('https://wa.me/5516994399358', '_blank')}
                >
                  <Phone size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">{t("Nome")}</label>
                  <Input id="name" name="name" placeholder={t("Seu nome")}
                    required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">{t("Email")}</label>
                  <Input id="email" name="email" type="email" placeholder={t("Seu email")}
                    required />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">{t("Assunto")}</label>
                <Input id="subject" name="subject" placeholder={t("Assunto da mensagem")}
                  required />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">{t("Mensagem")}</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t("Escreva sua mensagem aqui...")}
                  required
                  rows={5}
                />
              </div>
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90" disabled={loading}>
                {loading ? t("Enviando...") : t("Enviar Mensagem")}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
