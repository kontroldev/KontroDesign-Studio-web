import type { Metadata } from 'next';
import { VineLegalPage } from '@/components/vine/vine-legal-page';

export const metadata: Metadata = {
  title: 'Viñe — Condiciones de uso',
  description: 'Condiciones de uso de Viñe.',
};

export default function VineTermsPage() {
  return (
    <VineLegalPage
      title="Condiciones de uso"
      introduction="Estas condiciones explican el uso de Viñe y las responsabilidades relacionadas con los archivos que importas."
    >
      <div className="privacy-meta" aria-label="Información de las condiciones">
        <span>Última actualización</span>
        <strong>7 de septiembre de 2026</strong>
      </div>
      <section>
        <h2>Uso de la aplicación</h2>
        <p>
          Al usar Viñe aceptas estas condiciones y la{' '}
          <a className="text-link" href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noreferrer">
            licencia estándar aplicable de la App Store
          </a>{' '}
          desde la que obtuviste la aplicación.
        </p>
        <p>
          Viñe organiza metadatos que tú mismo introduces y abre archivos locales que tú mismo seleccionas. No vende, aloja ni suministra cómics. Eres responsable de disponer de los permisos necesarios sobre cualquier archivo que importes y de cumplir la legislación aplicable.
        </p>
        <p>No debes utilizar Viñe para vulnerar derechos de autor ni para eludir medidas de protección.</p>
      </section>
      <section>
        <h2>Disponibilidad y responsabilidad</h2>
        <p>
          Viñe se proporciona sin garantía de que todos los archivos, por dañados o por su formato, sean compatibles. Nada de estas condiciones limita los derechos imperativos que correspondan al consumidor.
        </p>
      </section>
      <section>
        <h2>Contacto</h2>
        <p>
          Para soporte, consulta la página de <a className="text-link" href="/vine/support">Soporte</a>. Para cuestiones de privacidad, consulta la{' '}
          <a className="text-link" href="/vine/privacy">Política de privacidad</a>.
        </p>
      </section>
    </VineLegalPage>
  );
}
