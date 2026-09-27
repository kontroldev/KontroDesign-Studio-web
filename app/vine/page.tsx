import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight, BookOpen, Bell, FileText } from 'lucide-react';
import { VineFooter } from '@/components/vine/vine-footer';
import { VineHeader } from '@/components/vine/vine-header';

export const metadata: Metadata = {
  title: 'Viñe — organiza tu colección de cómics',
  description:
    'Viñe organiza tus colecciones de cómics, sigue próximos lanzamientos e importa y lee archivos CBZ y PDF. App nativa para iOS.',
  openGraph: {
    title: 'Viñe — organiza tu colección de cómics',
    description: 'App nativa para iOS que organiza tus cómics, sigue lanzamientos y lee CBZ/PDF.',
    type: 'website',
    images: [{ url: '/vine/hero.png', width: 1200, height: 630, alt: 'Viñe' }],
  },
};

const features = [
  {
    icon: BookOpen,
    title: 'Organiza tu colección',
    text: 'Agrupa tus cómics por serie, número y estado de lectura en un mismo sitio.',
    image: '/vine/coleccion.png',
  },
  {
    icon: Bell,
    title: 'Sigue los lanzamientos',
    text: 'Detecta los números que te faltan y te avisa de las próximas publicaciones.',
    image: '/vine/lanzamientos.png',
  },
  {
    icon: FileText,
    title: 'Lee CBZ y PDF',
    text: 'Importa tus archivos y léelos con un visor integrado, sin salir de la app.',
    image: '/vine/importar.png',
  },
];

const tech = ['Swift 6', 'SwiftUI', 'SwiftData', 'StoreKit 2', 'PDFKit'];

export default function VinePage() {
  return (
    <main>
      <VineHeader />

      <section className="hero shell vine-hero" id="top">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="vine-brand" aria-label="Viñe">
          <Image src="/projects/vine.png" alt="Logo de Viñe" width={72} height={72} priority />
          <span>Viñe</span>
        </div>
        <div className="eyebrow">
          <span /> App para iOS · Próximamente en App Store
        </div>
        <h1>
          Tu colección de cómics,
          <br />
          siempre <em>a mano.</em>
        </h1>
        <p className="hero-copy">
          Viñe organiza tus cómics, te avisa de los números y lanzamientos que te faltan, e integra un
          lector para tus archivos CBZ y PDF.
        </p>
        <div className="hero-actions">
          <a
            className="button button-primary"
            href="https://github.com/kontroldev/PanelMax-App"
            target="_blank"
            rel="noreferrer"
          >
            Ver en GitHub <ArrowUpRight size={18} />
          </a>
          <a className="text-link" href="#funciones">
            Ver funciones
          </a>
        </div>
        <div className="device-row">
          <div className="phone-frame">
            <img src="/vine/hero.png" alt="Pantalla de inicio de Viñe en iPhone" />
          </div>
          <div className="tablet-frame">
            <img src="/vine/ipad-hero.png" alt="Pantalla de inicio de Viñe en iPad" />
          </div>
        </div>
        <div className="hero-foot">
          {tech.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section shell" id="funciones">
        <div className="section-intro compact">
          <p className="kicker">Qué hace</p>
          <h2>
            Pensada para quien
            <br />
            colecciona de verdad.
          </h2>
        </div>
        <div className="capability-grid">
          {features.map(({ icon: Icon, title, text, image }) => (
            <article className="capability-card" key={title}>
              <div className="capability-icon">
                <Icon size={20} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
              <div className="capability-shot">
                <img src={image} alt={title} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <VineFooter />
    </main>
  );
}
