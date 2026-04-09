/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code2,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  Globe,
  Terminal,
  Database,
  Cloud,
  TestTube,
  BarChart3
} from 'lucide-react';

// --- Components ---

const Logo = ({ className = "", showSubtitle = false }: { className?: string, showSubtitle?: boolean }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex items-baseline">
        <span className="text-3xl md:text-4xl font-bold tracking-tight text-brand-black">S</span>
        <div className="relative inline-flex items-center justify-center mx-[1px]">
          <span className="text-3xl md:text-4xl font-bold tracking-tight text-brand-black">O</span>
          <div className="absolute w-[60%] h-[60%] border-2 border-brand-accent rounded-full"></div>
        </div>
        <span className="text-3xl md:text-4xl font-bold tracking-tight text-brand-black">RENT</span>
        <div className="relative inline-flex items-center justify-center">
          <span className="text-3xl md:text-4xl font-bold tracking-tight text-brand-black">I</span>
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-accent rounded-full"></div>
        </div>
        <span className="text-3xl md:text-4xl font-bold tracking-tight text-brand-black">X</span>
      </div>
      {showSubtitle && (
        <div className="text-[10px] md:text-xs font-medium tracking-tight text-brand-black mt-1 uppercase">
          Software Development & Intelligence Matrices
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Leistungen', href: '#services' },
    { name: 'Methodik', href: '#matrix' },
    { name: 'Über mich', href: '#about' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-3 bg-white/90 backdrop-blur-md border-b border-zinc-200' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <Logo className="scale-75 origin-left" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-brand-accent transition-colors uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 bg-brand-black text-white text-sm font-bold uppercase tracking-widest hover:bg-brand-accent transition-all"
          >
            Projekt anfragen
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-zinc-200 p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium py-2 border-b border-zinc-100"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 w-full py-4 bg-brand-black text-white text-center font-bold uppercase tracking-widest"
            >
              Projekt anfragen
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-8">
              <Logo className="items-start" showSubtitle={true} />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 border border-zinc-200 rounded-full mb-6">
              <span className="w-2 h-2 bg-brand-hero rounded-full animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Freelance Software Engineering & Consulting</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-8 tracking-tighter">
              SOFTWARE <br />
              <span className="text-brand-hero italic font-light">INTELLIGENCE</span> <br />
              MATRICES.
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 max-w-lg mb-10 leading-relaxed">
              Präzises Engineering trifft auf strukturierte Analyse. Sorentix liefert skalierbare Softwarelösungen und tiefgreifende Systembewertungen für den deutschen Mittelstand und innovative Startups.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-8 py-4 bg-brand-black text-white font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-brand-hero transition-all group">
                Jetzt anfragen <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="px-8 py-4 border border-zinc-300 font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-zinc-50 transition-all">
                Leistungen entdecken
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-square bg-zinc-50 border border-zinc-200 rounded-2xl relative overflow-hidden flex items-center justify-center">
              {/* Abstract Matrix Grid UI */}
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-10">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div key={i} className="border-[0.5px] border-brand-black"></div>
                ))}
              </div>
              <div className="relative z-10 p-12 w-full">
                <div className="bg-white p-6 rounded-lg shadow-2xl border border-zinc-100 font-mono text-[10px] leading-tight">
                  <div className="flex gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-zinc-400 mb-2">// Sorentix Intelligence Matrix v1.0</div>
                  <div className="text-brand-black">
                    <span className="text-brand-hero">const</span> analysis = <span className="text-brand-hero">await</span> sorentix.evaluate(system_architecture);<br />
                    <br />
                    <span className="text-zinc-500">{"{"}</span><br />
                    &nbsp;&nbsp;scalability: <span className="text-green-600">0.94</span>,<br />
                    &nbsp;&nbsp;maintainability: <span className="text-green-600">0.88</span>,<br />
                    &nbsp;&nbsp;security_score: <span className="text-green-600">0.91</span>,<br />
                    &nbsp;&nbsp;recommendations: [<span className="text-brand-hero">"Optimize API Latency"</span>, <span className="text-brand-hero">"Refactor Auth Module"</span>]<br />
                    <span className="text-zinc-500">{"}"}</span>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <div className="bg-brand-black text-white p-4 rounded-lg shadow-xl inline-flex items-center gap-3">
                    <BarChart3 className="w-5 h-5 text-brand-accent" />
                    <div className="text-xs font-bold uppercase tracking-widest">System Optimized</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-brand-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-black/5 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>

      {/* Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-zinc-50/50 select-none pointer-events-none -z-10 whitespace-nowrap">
        SORENTIX
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Software Development",
      description: "Design und Entwicklung von Web- und Backend-Anwendungen, APIs (REST/gRPC) und Microservices.",
      icon: <Code2 className="w-6 h-6" />,
      tags: ["React", "Node.js", "Go", "TypeScript"]
    },
    {
      title: "Cloud & DevOps",
      description: "Infrastruktur-Setup, CI/CD Pipelines, Containerisierung (Docker/K8s) und Deployment-Automatisierung.",
      icon: <Cloud className="w-6 h-6" />,
      tags: ["AWS", "Azure", "Docker", "Terraform"]
    },
    {
      title: "Enterprise Backend",
      description: "Skalierbare Systeme, Refactoring von Legacy-Anwendungen und Modernisierung bestehender Architekturen.",
      icon: <Database className="w-6 h-6" />,
      tags: ["Java", "Python", "SQL", "NoSQL"]
    },
    {
      title: "QA & Test Automation",
      description: "Automatisierte Teststrategien, Unit- & Integrationstests zur Sicherung höchster Softwarequalität.",
      icon: <Cpu className="w-6 h-6" />,
      tags: ["Jest", "Cypress", "Playwright", "TDD"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent mb-4">Kernkompetenzen</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tighter">EXZELLENZ IN JEDER ZEILE CODE.</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-white p-8 border border-zinc-200 hover:border-brand-accent transition-all group"
            >
              <div className="w-12 h-12 bg-zinc-50 flex items-center justify-center mb-6 group-hover:bg-brand-accent group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{service.title}</h4>
              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-1 bg-zinc-100 text-zinc-500">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MatrixSection = () => {
  return (
    <section id="matrix" className="py-24 bg-brand-black text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent mb-4">Methodik</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 leading-none">
              SOFTWARE INTELLIGENCE <br />
              <span className="italic text-zinc-400">MATRICES</span>
            </h3>
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
              Ein strukturierter Evaluationsansatz zur Analyse und Bewertung von Software-Systemen über mehrere technische Dimensionen hinweg.
            </p>

            <div className="space-y-6">
              {[
                { title: "Architektur-Audit", desc: "Bewertung der Systemarchitektur auf Zukunftsfähigkeit." },
                { title: "Skalierbarkeit & Performance", desc: "Identifikation von Engpässen und Optimierungspotenzialen." },
                { title: "Maintainability Check", desc: "Analyse der Code-Qualität und Wartbarkeit." },
                { title: "Risiko-Analyse", desc: "Frühzeitiges Erkennen technischer Ineffizienzen." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="mt-1">
                    <ChevronRight className="w-5 h-5 text-brand-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-zinc-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 border-l-2 border-brand-accent bg-zinc-900/50">
              <p className="italic text-zinc-300">
                "Das Ergebnis für Kunden: Klare technische Einschätzung, strukturierte Handlungsempfehlungen und fundierte Entscheidungsgrundlagen für technische Investitionen."
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Visual representation of the Matrix */}
            <div className="grid grid-cols-3 gap-4">
              {Array.from({ length: 9 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="aspect-square border border-zinc-800 flex flex-col items-center justify-center p-4 hover:bg-brand-accent/10 transition-colors cursor-default"
                >
                  <div className="text-brand-accent font-mono text-xs mb-2">0{i + 1}</div>
                  <div className="w-1 h-1 bg-zinc-700 rounded-full mb-2"></div>
                  <div className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest text-center">
                    {["Analysis", "Structure", "Matrix", "Logic", "Data", "Scale", "Code", "Audit", "Result"][i]}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-accent/20 rounded-full blur-[100px]"></div>
          </div>
        </div>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="h-full w-full" style={{ backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-zinc-100 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&h=1000"
                alt="Shakil Jansberg"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-brand-black text-white p-8 hidden md:block">
              <div className="text-3xl font-bold mb-1">Shakil Jansberg</div>
              <div className="text-brand-accent text-xs font-bold uppercase tracking-widest">Founder & Lead Engineer</div>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent mb-4">Über Sorentix</h2>
            <h3 className="text-4xl font-bold tracking-tighter mb-8">PRÄZISION TRIFFT LEIDENSCHAFT.</h3>
            <p className="text-zinc-600 text-lg mb-6 leading-relaxed">
              Als freiberuflicher Softwareentwickler und IT-Berater unterstütze ich Unternehmen dabei, hochwertige, skalierbare und wartbare Softwarelösungen zu realisieren.
            </p>
            <p className="text-zinc-600 mb-10 leading-relaxed">
              Mein Fokus liegt auf Clean Architecture und einer strukturierten, analytischen Herangehensweise an komplexe Problemstellungen. Mit Sorentix verbinde ich Engineering-Exzellenz mit strategischer Beratung.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Clean Code Focus</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">Remote</div>
                <div className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Hybrid Collaboration</div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-zinc-50 border border-zinc-100">
              <ShieldCheck className="w-6 h-6 text-brand-accent" />
              <span className="text-sm font-bold uppercase tracking-widest">Verlässlichkeit & Qualität "Made in Germany"</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-black text-white p-12 md:p-20 relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-accent mb-4">Kontakt</h2>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">BEREIT FÜR DAS <br /> NÄCHSTE LEVEL?</h3>
              <p className="text-zinc-400 text-lg mb-12 max-w-md">
                Lassen Sie uns über Ihr Projekt sprechen. Ob kurzfristige Unterstützung oder langfristige Partnerschaft.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center">
                    <Globe className="w-4 h-4 text-brand-accent" />
                  </div>
                  <span className="text-zinc-300">Remote / Hybrid (Germany)</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center">
                    <Terminal className="w-4 h-4 text-brand-accent" />
                  </div>
                  <span className="text-zinc-300">shakil@sorentix.de</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Name</label>
                    <input type="text" className="w-full p-3 bg-zinc-50 border border-zinc-200 text-brand-black focus:border-brand-accent outline-none transition-colors" placeholder="Ihr Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Email</label>
                    <input type="email" className="w-full p-3 bg-zinc-50 border border-zinc-200 text-brand-black focus:border-brand-accent outline-none transition-colors" placeholder="email@firma.de" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Betreff</label>
                  <select className="w-full p-3 bg-zinc-50 border border-zinc-200 text-brand-black focus:border-brand-accent outline-none transition-colors">
                    <option>Software Entwicklung</option>
                    <option>IT Consulting / Matrix Audit</option>
                    <option>Cloud & DevOps</option>
                    <option>Sonstiges</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Nachricht</label>
                  <textarea rows={4} className="w-full p-3 bg-zinc-50 border border-zinc-200 text-brand-black focus:border-brand-accent outline-none transition-colors" placeholder="Beschreiben Sie kurz Ihr Vorhaben..."></textarea>
                </div>
                <button className="w-full py-4 bg-brand-black text-white font-bold uppercase tracking-widest hover:bg-zinc-800 transition-all">
                  Nachricht senden
                </button>
              </form>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/5 -skew-x-12 translate-x-1/2"></div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-zinc-200 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Logo className="scale-75 origin-left items-start" showSubtitle={true} />

          <div className="flex flex-wrap justify-center gap-8">
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-brand-black transition-colors">Impressum</a>
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-brand-black transition-colors">Datenschutz</a>
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-brand-black transition-colors">AGB</a>
          </div>

          <div className="text-xs text-zinc-400 font-mono">
            © {new Date().getFullYear()} Sorentix. Built with Precision.
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <MatrixSection />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
