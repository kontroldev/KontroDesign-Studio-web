import type { Metadata } from 'next';
import Image from 'next/image';
import { BookOpen, Bell, FileText } from 'lucide-react';
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
  },
  {
    icon: Bell,
    title: 'Sigue los lanzamientos',
    text: 'Detecta los números que te faltan y te avisa de las próximas publicaciones.',
  },
  {
    icon: FileText,
    title: 'Lee CBZ y PDF',
    text: 'Importa tus archivos y léelos con un visor integrado, sin salir de la app.',
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
          <Image src="/vine/app-icon.png" alt="Logo de Viñe" width={72} height={72} priority />
          <span>Viñe</span>
        </div>
        <div className="eyebrow">
          <span /> App para iOS · Disponible en App Store
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
            className="app-store-badge-link"
            href="https://apps.apple.com/es/app/vi%C3%B1e/id6809613945"
            target="_blank"
            rel="noreferrer"
            aria-label="Descargar Viñe en el App Store"
          >
            <Image
              className="app-store-badge"
              src="/vine/app-store-badge.svg"
              alt="Descárgalo en el App Store"
              width={144}
              height={48}
              priority
            />
          </a>
          <a className="text-link" href="#funciones">
            Ver funciones
          </a>
        </div>
        <div className="vine-video-frame">
          <video autoPlay muted loop playsInline preload="metadata" poster="/vine/inicio-claro.png" aria-label="Vídeo de presentación de Viñe">
            <source src="/vine/vine-preview.mp4" type="video/mp4" />
          </video>
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
          {features.map(({ icon: Icon, title, text }) => (
            <article className="capability-card" key={title}>
              <div className="capability-icon">
                <Icon size={20} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell vine-screens" id="capturas" aria-labelledby="vine-screens-title">
        <div className="section-intro compact">
          <p className="kicker">Viñe en acción</p>
          <div>
            <h2 id="vine-screens-title">Tu colección,<br />siempre a mano.</h2>
            <p>La misma experiencia, preparada para los modos claro y oscuro de tu dispositivo.</p>
          </div>
        </div>
        <div className="vine-screen-grid">
          <figure className="vine-screen-card">
            <Image src="/vine/inicio-claro.png" alt="Pantalla de inicio de Viñe en modo claro" width={1535} height={2048} />
            <figcaption>Modo claro</figcaption>
          </figure>
          <figure className="vine-screen-card">
            <Image src="/vine/inicio-oscuro.png" alt="Pantalla de inicio de Viñe en modo oscuro" width={1535} height={2048} />
            <figcaption>Modo oscuro</figcaption>
          </figure>
        </div>
      </section>

      <VineFooter />
    </main>
  );
}
