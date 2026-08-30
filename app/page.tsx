'use client';

import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Check, ChevronRight, Code2, Database, Layers3, Moon, Sparkles, Sun, TestTube2 } from 'lucide-react';

const capabilities = [
  ['01', 'Producto digital', 'Convertimos una idea en una experiencia clara, útil y preparada para crecer.'],
  ['02', 'Diseño de interfaz', 'Interfaces nativas, accesibles y cuidadas hasta el último detalle.'],
  ['03', 'Desarrollo Apple', 'Apps para el ecosistema Apple construidas con tecnología moderna.'],
];
const projects = [
  { index: '01', name: 'Dragon Ball', category: 'Proyecto colaborativo · iOS', description: 'Una app desarrollada con Swift y SwiftUI que integra contenido de Dragon Ball mediante una API comunitaria.', tone: 'blue', image: '/projects/dragon-ball.png', imageAlt: 'Icono del proyecto Dragon Ball', url: 'https://github.com/kontroldev/Proyecto-Dragon-ball-Swift' },
  { index: '02', name: 'Pomodoro', category: 'Productividad · iOS', description: 'Una aplicación colaborativa para gestionar sesiones Pomodoro y consultar métricas y estadísticas.', tone: 'violet', image: '/projects/pomodoro.png', imageAlt: 'Pantalla del temporizador de Pomodoro', url: 'https://github.com/kontroldev/Proyecto_1_Pomodoro' },
  { index: '03', name: 'Viñe', category: 'Próximo lanzamiento', description: 'Una app para organizar colecciones de cómics, detectar números pendientes y leer archivos CBZ y PDF.', tone: 'mint', image: '/projects/vine.png', imageAlt: 'Icono de Viñe', url: 'https://github.com/kontroldev/PanelMax-App' },
];
const process = [
  ['Descubrir', 'Entendemos el problema, las personas y las prioridades del producto.'],
  ['Definir', 'Aterrizamos la experiencia, el alcance y la dirección visual.'],
  ['Construir', 'Diseñamos y desarrollamos en ciclos cortos, visibles y medibles.'],
  ['Refinar', 'Probamos, pulimos y preparamos el producto para su siguiente etapa.'],
];
const technologies = [
  { name: 'Swift', detail: 'Lenguaje', icon: Code2 }, { name: 'SwiftUI', detail: 'Interfaz', icon: Layers3 },
  { name: 'SwiftData', detail: 'Datos', icon: Database }, { name: 'Swift Testing', detail: 'Calidad', icon: TestTube2 },
];

function BrandLogo() {
  return <img className="brand-logo" src="/kontrol-logo.png" alt="Kontrol Design Studios" />;
}

function BrandSymbol() {
  return <span className="brand-symbol" aria-hidden="true"><img src="/kontrol-isotipo.png" alt="" /></span>;
}

export default function Home() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = window.localStorage.getItem('kds-theme');
    setDark(saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    window.localStorage.setItem('kds-theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <main>
      <header className="site-header">
        <a className="brand header-brand" href="#top" aria-label="Kontrol Design Studios, inicio"><BrandSymbol /><span>KONTROL</span></a>
        <nav aria-label="Navegación principal"><a href="#servicios">Estudio</a><a href="#proyectos">Proyectos</a><a href="#proceso">Proceso</a><a href="#contacto">Contacto</a></nav>
        <button className="theme-toggle" type="button" onClick={() => setDark((value) => !value)} aria-label={dark ? 'Activar modo claro' : 'Activar modo oscuro'}>{dark ? <Sun size={17} /> : <Moon size={17} />}</button>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-orb hero-orb-one" /><div className="hero-orb hero-orb-two" />
        <div className="hero-brand-lockup">
          <img src="/kontrol-logo.png" alt="Kontrol Design Studios" />
        </div>
        <div className="eyebrow"><span /> Estudio independiente para productos Apple</div>
        <h1>Diseñamos apps<br />que se sienten <em>naturales.</em></h1>
        <p className="hero-copy">Estrategia, diseño y desarrollo nativo para convertir buenas ideas en experiencias Apple memorables.</p>
        <div className="hero-actions"><a className="button button-primary" href="#proyectos">Ver proyectos <ArrowDownRight size={18} /></a><a className="text-link" href="#contacto">Cuéntanos tu idea <ArrowUpRight size={17} /></a></div>
        <div className="hero-foot"><span>iOS</span><span>iPadOS</span><span>macOS</span><span>watchOS</span><span>visionOS</span></div>
      </section>

      <section className="section shell" id="servicios">
        <div className="section-intro"><p className="kicker">Qué hacemos</p><h2>De la primera idea<br />al producto que importa.</h2><p>Unimos criterio de producto, sensibilidad visual e ingeniería para crear experiencias coherentes de principio a fin.</p></div>
        <div className="capability-grid">{capabilities.map(([number, title, text]) => <article className="capability-card" key={number}><span className="card-number">{number}</span><div className="capability-icon"><Sparkles size={20} /></div><h3>{title}</h3><p>{text}</p><ArrowUpRight className="card-arrow" size={19} /></article>)}</div>
      </section>

      <section className="section projects-section" id="proyectos"><div className="shell">
        <div className="section-heading-row"><div><p className="kicker">Trabajo seleccionado</p><h2>Productos con intención.</h2></div><p>Una selección editable de apps y experiencias creadas por el estudio.</p></div>
        <div className="projects-list">{projects.map(({ index, name, category, description, tone, image, imageAlt, url }) => <article className="project-row" key={index}><span className="project-index">{index}</span><a className={`project-visual project-media ${tone}`} href={url} target="_blank" rel="noreferrer" aria-label={`Ver ${name} en GitHub`}><img src={image} alt={imageAlt} /></a><div className="project-copy"><p>{category}</p><h3><a href={url} target="_blank" rel="noreferrer">{name}</a></h3><span>{description}</span><a className="project-source" href={url} target="_blank" rel="noreferrer">Ver en GitHub <ArrowUpRight size={14} /></a></div><a className="project-link-button" href={url} target="_blank" rel="noreferrer" aria-label={`Ver ${name} en GitHub`}><ArrowUpRight size={21} /></a></article>)}</div>
      </div></section>

      <section className="section shell" id="proceso"><div className="section-intro compact"><p className="kicker">Cómo trabajamos</p><h2>Un proceso claro.<br />Sin ruido innecesario.</h2></div><div className="process-grid">{process.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div className="process-dot" /><h3>{title}</h3><p>{text}</p></article>)}</div></section>

      <section className="section tech-section"><div className="shell"><div className="section-intro compact"><p className="kicker">Tecnología nativa</p><h2>Herramientas modernas<br />para productos duraderos.</h2></div><div className="tech-grid">{technologies.map(({ name, detail, icon: Icon }) => <div className="tech-item" key={name}><Icon size={24} /><div><strong>{name}</strong><span>{detail}</span></div><Check size={16} /></div>)}</div></div></section>

      <section className="section shell about-section"><div><p className="kicker">Sobre el estudio</p><h2>Pequeño por diseño.<br />Ambicioso por naturaleza.</h2></div><div className="about-copy"><p>Kontrol Design Studios es un estudio independiente dedicado al diseño y desarrollo de aplicaciones nativas para el ecosistema Apple. Combinamos estrategia de producto, diseño de interfaz y tecnología para transformar ideas en experiencias claras, útiles y cuidadas.</p><p className="about-detail">Trabajamos cada proyecto con especial atención al detalle, la accesibilidad y el rendimiento. Nuestro objetivo es crear productos que se sientan naturales desde el primer uso y estén preparados para evolucionar.</p><a className="text-link" href="#contacto">Conocer el estudio <ChevronRight size={17} /></a></div></section>

      <section className="contact-section" id="contacto"><div className="contact-glow" /><div className="shell contact-inner"><p className="kicker">Empecemos una conversación</p><h2>¿Tienes una idea<br />que merece existir?</h2><p>Estamos preparando nuestro canal de contacto.</p><span className="button button-light contact-coming-soon">Próximamente</span></div></section>

      <footer className="site-footer shell"><a className="brand footer-brand" href="#top"><BrandLogo /></a><div className="footer-meta"><span>© {new Date().getFullYear()} Kontrol Design Studios</span><span>Diseñado y desarrollado con intención.</span></div><div className="footer-links"><a href="#">Instagram</a><a href="#">LinkedIn</a><a href="#top" aria-label="Volver arriba">Arriba ↑</a></div></footer>
    </main>
  );
}
