import type { Metadata } from 'next';
import { VineLegalPage } from '@/components/vine/vine-legal-page';

export const metadata: Metadata = {
  title: 'Viñe — Soporte',
  description: 'Ayuda y soporte para Viñe, la app para organizar colecciones de cómics.',
};

export default function VineSupportPage() {
  return (
    <VineLegalPage
      title="Soporte"
      introduction="Si necesitas ayuda con Viñe o quieres informar de un error, estamos aquí para ayudarte."
    >
      <section>
        <h2>¿Tienes un problema o una sugerencia?</h2>
        <p>
          Para informar de un error o solicitar ayuda, abre una incidencia en{' '}
          <a className="text-link" href="https://github.com/kontroldev/PanelMax-App/issues" target="_blank" rel="noreferrer">
            GitHub Issues
          </a>{' '}
          o escribe a{' '}
          <a className="text-link" href="mailto:info@kontroldesignstudio.com">
            info@kontroldesignstudio.com
          </a>.
        </p>
        <p>Incluye, cuando sea posible:</p>
        <ul>
          <li>versión de Viñe y de iOS;</li>
          <li>modelo del dispositivo;</li>
          <li>pasos para reproducir el problema;</li>
          <li>mensaje de error visible.</li>
        </ul>
        <p>No publiques ni envíes archivos CBZ/PDF, contraseñas ni otros datos personales.</p>
      </section>
      <section>
        <h2>Problemas habituales</h2>
        <h3>Un archivo no se abre</h3>
        <p>
          Comprueba que sea un PDF válido o un CBZ/ZIP que contenga imágenes compatibles. Vuelve a importarlo si el archivo original se movió o dejó de estar disponible.
        </p>
        <h3>He borrado la app y he perdido mi colección</h3>
        <p>
          Viñe funciona sin conexión ni cuenta, así que la colección solo vive en el dispositivo. Usa “Exportar colección” desde Perfil de vez en cuando para tener una copia con la que reconstruirla si cambias de dispositivo.
        </p>
      </section>
      <section>
        <h2>Compatibilidad</h2>
        <p>La versión actual tiene como mínimo iOS 18 y está diseñada para iPhone y iPad.</p>
      </section>
    </VineLegalPage>
  );
}
