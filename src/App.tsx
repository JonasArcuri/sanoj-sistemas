/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { type ReactNode } from "react";
import logo from "/assets/Logo.png";
import {
  Terminal,
  Globe,
  Zap,
  ArrowRight,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  ArrowDown,
  Menu,
  Instagram,
  Layers,
  Cpu,
  ShieldCheck,
  Rocket,
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-surface-dim selection:bg-primary/30 selection:text-primary">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-surface-dim/80 backdrop-blur-xl border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-20 h-20 rounded-lg overflow-hidden">
              <img
                src={logo}
                alt="Sanoj Sistemas"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-2xl font-bold tracking-tighter text-white font-headline">
              Sanoj Sistemas
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-primary font-headline tracking-tight hover:text-primary-dim transition-colors"
            >
              Início
            </a>
            <a
              href="#servicos"
              className="text-on-surface-variant font-headline tracking-tight hover:text-primary transition-colors"
            >
              Serviços
            </a>
            <a
              href="#sobre"
              className="text-on-surface-variant font-headline tracking-tight hover:text-primary transition-colors"
            >
              Sobre
            </a>
            <a
              href="#contato"
              className="text-on-surface-variant font-headline tracking-tight hover:text-primary transition-colors"
            >
              Contato
            </a>
            <a
              href="https://wa.me/47999065181"
              className="pulse-gradient text-on-primary px-6 py-2.5 rounded-md font-bold hover:scale-105 transition-transform text-sm uppercase tracking-wider shadow-lg shadow-primary/40"
            >
              WhatsApp
            </a>
          </div>

          <button className="md:hidden text-primary">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920"
              alt="Background"
              className="w-full h-full object-cover opacity-20"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-surface-dim via-surface-dim/80 to-surface-dim"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest font-label">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Inovação em Joinville
              </div>
              <h1 className="font-headline text-5xl md:text-7xl font-bold leading-tight tracking-tighter text-white">
                Desenvolvimento de Sistemas de{" "}
                <span className="text-gradient-pulse">Ponta a Ponta</span>
              </h1>
              <p className="text-on-surface-variant text-xl max-w-xl leading-relaxed">
                Transformamos ideias em infraestrutura digital. Do planejamento
                à execução de Websites e Landing Pages de alta performance que
                impulsionam o seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#contato"
                  className="pulse-gradient text-on-primary px-8 py-4 rounded-md font-bold text-center hover:shadow-lg hover:shadow-primary/20 transition-all"
                >
                  Fale Conosco
                </a>
                <a
                  href="#servicos"
                  className="bg-surface-container-highest/50 backdrop-blur border border-outline-variant/30 text-white px-8 py-4 rounded-md font-bold text-center hover:bg-surface-container-highest transition-all flex items-center justify-center gap-2"
                >
                  Ver Soluções
                  <ArrowDown className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="hidden md:block relative"
            >
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div>
              <div className="glass-card border border-primary/20 rounded-xl p-2 relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
                  alt="Tech Interface"
                  className="rounded-lg w-full aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
                {/* Circuit Nodes Decor */}
                <div className="absolute top-4 left-4 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_#54c3ff]"></div>
                <div className="absolute top-4 right-4 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_#54c3ff]"></div>
                <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_#54c3ff]"></div>
                <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_#54c3ff]"></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-12 border-y border-outline-variant/5 bg-surface-dim/50">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-on-surface-variant text-xs font-bold uppercase tracking-[0.3em] mb-8">
              Tecnologias que Dominamos
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
              <TechBrand name="React" />
              <TechBrand name="TypeScript" />
              <TechBrand name="Node.js" />
              <TechBrand name="Next.js" />
              <TechBrand name="Tailwind" />
              <TechBrand name="Firebase" />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section
          id="servicos"
          className="py-24 bg-surface-container-low overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center md:text-left"
            >
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-white mb-4">
                Soluções que <span className="text-primary">Pulsa</span>{" "}
                Tecnologia
              </h2>
              <p className="text-on-surface-variant max-w-2xl">
                Não criamos apenas código. Desenvolvemos ferramentas
                estratégicas para posicionar sua marca no topo do mercado
                digital.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ServiceCard
                icon={<Terminal className="w-8 h-8" />}
                title="Sistemas Personalizados"
                description="Software sob medida desenvolvido para otimizar seus processos internos e escalar sua operação com segurança."
                delay={0.1}
              />
              <ServiceCard
                icon={<Globe className="w-8 h-8" />}
                title="Criação de Websites"
                description="Sites institucionais modernos com design responsivo, focados em usabilidade e performance em qualquer dispositivo."
                className="md:translate-y-8"
                delay={0.2}
              />
              <ServiceCard
                icon={<Zap className="w-8 h-8" />}
                title="Landing Pages Otimizadas"
                description="Focadas em conversão, nossas landing pages são construídas para transformar visitantes em clientes reais de forma imediata."
                delay={0.3}
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre" className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative order-2 md:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
                  alt="Infrastructure"
                  className="rounded-lg shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="space-y-4 pt-8">
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800"
                    alt="Programming"
                    className="rounded-lg shadow-2xl"
                    referrerPolicy="no-referrer"
                  />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-primary p-6 rounded-lg shadow-lg shadow-primary/20"
                  >
                    <span className="text-on-primary text-4xl font-bold font-headline">
                      2+
                    </span>
                    <p className="text-on-primary/80 font-bold text-sm uppercase">
                      Anos de Expertise
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-6 order-1 md:order-2"
            >
              <span className="text-primary font-bold font-label tracking-widest uppercase text-sm">
                Sobre a Sanoj Sistemas
              </span>
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-white">
                Nós conectamos{" "}
                <span className="text-gradient-pulse">Negócios ao Futuro</span>
              </h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Sediada em Joinville-SC, a Sanoj Sistemas nasceu com a missão de
                democratizar a tecnologia de ponta. Não apenas escrevemos
                código; mergulhamos no seu modelo de negócio para criar
                ecossistemas digitais que resolvem dores reais.
              </p>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Nossa abordagem é centrada em dados e na experiência do usuário,
                garantindo que cada pixel e cada linha de comando contribuam
                para o crescimento sustentável da sua empresa.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                  <span className="text-white font-bold">
                    Qualidade Rigorosa
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="text-primary w-6 h-6 shrink-0" />
                  <span className="text-white font-bold">
                    Agilidade na Entrega
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-surface-dim relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-headline text-4xl font-bold text-white mb-4">
                Nosso Processo de{" "}
                <span className="text-primary">Excelência</span>
              </h2>
              <p className="text-on-surface-variant max-w-xl mx-auto">
                Metodologia ágil e transparente para garantir que seu projeto
                seja entregue com perfeição técnica.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <ProcessStep
                number="01"
                icon={<Layers className="w-6 h-6" />}
                title="Descoberta"
                description="Imersão total no seu negócio para entender desafios e objetivos."
              />
              <ProcessStep
                number="02"
                icon={<Cpu className="w-6 h-6" />}
                title="Arquitetura"
                description="Planejamento técnico e design focado na experiência do usuário."
              />
              <ProcessStep
                number="03"
                icon={<ShieldCheck className="w-6 h-6" />}
                title="Desenvolvimento"
                description="Codificação limpa e segura seguindo os mais altos padrões."
              />
              <ProcessStep
                number="04"
                icon={<Rocket className="w-6 h-6" />}
                title="Lançamento"
                description="Deploy otimizado e suporte contínuo para sua evolução."
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contato"
          className="py-24 bg-surface-container-high relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-headline text-4xl font-bold text-white mb-6">
                  Inicie seu <span className="text-primary">Projeto</span> Agora
                </h2>
                <p className="text-on-surface-variant mb-12">
                  Estamos prontos para ouvir seu desafio e propor a melhor
                  solução técnica. Entre em contato pelos nossos canais
                  oficiais.
                </p>
                <div className="space-y-8">
                  <ContactInfo
                    icon={<Phone className="w-6 h-6" />}
                    label="Whatsapp Comercial"
                    value="(47) 9 9906-5181"
                  />
                  <ContactInfo
                    icon={<MapPin className="w-6 h-6" />}
                    label="Localização"
                    value="Joinville - SC"
                  />
                  <ContactInfo
                    icon={<Mail className="w-6 h-6" />}
                    label="E-mail"
                    value="sanojsistemas@gmail.com"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-card p-8 rounded-xl border border-outline-variant/10 flex flex-col justify-center gap-6"
              >
                <motion.a
                  href="https://wa.me/47999065181"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="pulse-gradient text-on-primary font-bold py-6 rounded-xl flex items-center justify-center gap-4 shadow-lg shadow-primary/20 transition-all text-xl"
                >
                  <Phone className="w-8 h-8 fill-current" />
                  WhatsApp
                </motion.a>

                <motion.a
                  href="https://www.instagram.com/sanojsistemas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-bold py-6 rounded-xl flex items-center justify-center gap-4 shadow-lg shadow-red-500/20 transition-all text-xl"
                >
                  <Instagram className="w-8 h-8" />
                  Instagram
                </motion.a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-dim border-t border-outline-variant/10 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 pulse-gradient rounded flex items-center justify-center">
                <Terminal className="text-on-primary w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tighter text-white font-headline">
                Sanoj Sistemas
              </span>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs">
              Transformando negócios através de tecnologia de ponta em Joinville
              e para todo o Brasil. Desenvolvemos ecossistemas digitais de alta
              performance.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-primary font-bold text-sm uppercase tracking-wider">
                Empresa
              </h4>
              <ul className="space-y-2 text-on-surface-variant text-sm">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="#servicos"
                    className="hover:text-primary transition-colors"
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#sobre"
                    className="hover:text-primary transition-colors"
                  >
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a
                    href="#contato"
                    className="hover:text-primary transition-colors"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h4 className="text-primary font-bold text-sm uppercase tracking-wider">
                Social
              </h4>
              <div className="flex gap-4">
                <SocialLink icon={<Instagram className="w-5 h-5" />} href="#" />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-primary font-bold text-sm uppercase tracking-wider">
              Contato Direto
            </h4>
            <p className="text-on-surface-variant text-sm">
              WhatsApp: (47) 9 9906-5181
            </p>
            <p className="text-on-surface-variant text-xs mt-8">
              © 2026 Sanoj Sistemas. Todos os direitos reservados.
            </p>
          </motion.div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/47999065181"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl md:hidden"
      >
        <Phone className="w-8 h-8 fill-current" />
      </motion.a>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  description,
  className = "",
  delay = 0,
}: {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className={`glass-card p-8 rounded-xl border border-outline-variant/10 hover:border-primary/40 transition-all group relative overflow-hidden ${className}`}
    >
      <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
        {icon}
      </div>
      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="font-headline text-2xl font-bold text-white mb-4">
        {title}
      </h3>
      <p className="text-on-surface-variant mb-6 leading-relaxed">
        {description}
      </p>
      <div className="flex items-center text-primary font-bold gap-2 cursor-pointer">
        Saiba mais{" "}
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </motion.div>
  );
}

function ContactInfo({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-6 group">
      <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-primary border border-outline-variant/20 group-hover:bg-primary group-hover:text-on-primary transition-all">
        {icon}
      </div>
      <div>
        <p className="text-xs text-on-surface-variant uppercase font-bold tracking-widest mb-1">
          {label}
        </p>
        <p className="text-white font-headline text-xl">{value}</p>
      </div>
    </div>
  );
}

function SocialLink({ icon, href }: { icon: ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full bg-surface-container-highest border border-outline-variant/20 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary hover:shadow-[0_0_15px_rgba(84,195,255,0.3)] transition-all"
    >
      {icon}
    </a>
  );
}

function TechBrand({ name }: { name: string }) {
  return (
    <span className="text-white font-headline text-lg font-bold tracking-tight">
      {name}
    </span>
  );
}

function ProcessStep({
  number,
  icon,
  title,
  description,
}: {
  number: string;
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative p-6 rounded-xl bg-surface-container-low border border-outline-variant/5 group hover:border-primary/20 transition-all"
    >
      <div className="text-primary/20 font-headline text-5xl font-bold absolute top-4 right-4 group-hover:text-primary/40 transition-colors">
        {number}
      </div>
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
        {icon}
      </div>
      <h3 className="text-white font-headline text-xl font-bold mb-2">
        {title}
      </h3>
      <p className="text-on-surface-variant text-sm leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
