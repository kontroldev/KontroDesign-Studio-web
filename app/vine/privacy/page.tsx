import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Viñe — Política de privacidad',
};

export default function VinePrivacyPage() {
  return (
    <main className="shell" style={{ paddingTop: 140, paddingBottom: 100, maxWidth: 720 }}>
      <p className="kicker">Viñe</p>
      <h1 style={{ fontSize: 36, marginBottom: 24 }}>Política de privacidad</h1>
      <p style={{ color: 'var(--muted)', marginBottom: 32 }}>
        Borrador pendiente de revisión. Apple exige esta página, con contenido real, antes de poder enviar la
        app a revisión.
      </p>
      <div style={{ lineHeight: 1.7 }}>
        <h3>Datos que recoge la app</h3>
        <p>[TODO: describe si Viñe guarda datos solo en el dispositivo, en iCloud, o en algún servidor propio.]</p>
        <h3>Compras dentro de la app</h3>
        <p>[TODO: si usas StoreKit 2 para compras, indica qué gestiona Apple y qué datos de compra conservas tú.]</p>
        <h3>Archivos importados (CBZ/PDF)</h3>
        <p>[TODO: aclara que los archivos que el usuario importa se procesan localmente y no se suben a ningún servidor, si es el caso.]</p>
        <h3>Contacto</h3>
        <p>[TODO: email de contacto para consultas de privacidad.]</p>
      </div>
      <p style={{ marginTop: 40 }}>
        <a className="text-link" href="/vine">
          ← Volver a Viñe
        </a>
      </p>
    </main>
  );
}
