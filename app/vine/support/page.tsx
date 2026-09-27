import type { Metadata } from 'next';
import { VineLegalPage } from '@/components/vine/vine-legal-page';

export const metadata: Metadata = {
  title: 'Viñe — Soporte',
};

export default function VineSupportPage() {
  return (
    <VineLegalPage
      title="Soporte"
      introduction="Borrador pendiente de revisión. Apple exige una URL de soporte funcional antes de enviar la app a revisión."
    >
      <h2>¿Tienes un problema o una sugerencia?</h2>
      <p>[TODO: email o formulario de contacto de soporte.]</p>
      <h2>Preguntas frecuentes</h2>
      <p>[TODO: 2–3 preguntas típicas — formatos soportados, sincronización, requisitos de iOS.]</p>
    </VineLegalPage>
  );
}
