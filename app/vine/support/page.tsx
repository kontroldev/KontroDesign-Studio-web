import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Viñe — Soporte',
};

export default function VineSupportPage() {
  return (
    <main className="shell" style={{ paddingTop: 140, paddingBottom: 100, maxWidth: 720 }}>
      <p className="kicker">Viñe</p>
      <h1 style={{ fontSize: 36, marginBottom: 24 }}>Soporte</h1>
      <p style={{ color: 'var(--muted)', marginBottom: 32 }}>
        Borrador pendiente de revisión. Apple exige una URL de soporte funcional antes de enviar la app a
        revisión.
      </p>
      <div style={{ lineHeight: 1.7 }}>
        <h3>¿Tienes un problema o una sugerencia?</h3>
        <p>[TODO: email o formulario de contacto de soporte.]</p>
        <h3>Preguntas frecuentes</h3>
        <p>[TODO: 2–3 preguntas típicas — formatos soportados, sincronización, requisitos de iOS.]</p>
      </div>
      <p style={{ marginTop: 40 }}>
        <a className="text-link" href="/vine">
          ← Volver a Viñe
        </a>
      </p>
    </main>
  );
}
