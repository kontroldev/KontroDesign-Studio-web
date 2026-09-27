import type { Metadata } from 'next';
import { VineLegalPage } from '@/components/vine/vine-legal-page';

export const metadata: Metadata = {
  title: 'Viñe — Política de privacidad',
  description: 'Información sobre cómo Viñe trata los datos de tu colección y los archivos que importas.',
};

export default function VinePrivacyPage() {
  return (
    <VineLegalPage
      title="Política de privacidad"
      introduction="Tu colección es tuya. Viñe está diseñada para organizarla sin convertir tus datos ni tus lecturas en un producto."
    >
      <div className="privacy-meta" aria-label="Información de la política"><span>Última actualización</span><strong>27 de septiembre de 2026</strong></div>
      <aside className="privacy-summary"><p className="privacy-summary-label">En pocas palabras</p><p>Viñe guarda los datos de tu colección y los archivos que importas en tu dispositivo. No vendemos tus datos ni los utilizamos para publicidad.</p></aside>
      <section><h2>1. Responsable</h2><p>Viñe es una aplicación desarrollada por Raúl Gallego, bajo el nombre Kontrol Design Studio. Esta política explica qué información se trata al utilizar la aplicación y con qué finalidad.</p></section>
      <section><h2>2. Información que guardas en Viñe</h2><p>La aplicación guarda en tu dispositivo la información necesaria para que puedas organizar tu colección: títulos, números, estados de lectura, etiquetas, notas y otros datos que añadas. Esta información se usa exclusivamente para ofrecer las funciones de Viñe.</p></section>
      <section><h2>3. Archivos CBZ y PDF</h2><p>Los archivos que importas se procesan en tu dispositivo para que puedas leerlos y asociarlos a tu colección. Viñe no sube esos archivos a servidores propios ni accede a ellos fuera de las acciones que inicias dentro de la aplicación.</p></section>
      <section><h2>4. Compras y suscripciones</h2><p>Si Viñe ofrece compras dentro de la app, Apple gestiona el pago mediante StoreKit y tu cuenta de Apple. Viñe no recibe ni almacena los datos de tu tarjeta o método de pago. Solo utiliza la información de compra que Apple proporciona para habilitar el contenido o las funciones correspondientes.</p></section>
      <section><h2>5. Datos que no usamos</h2><p>Viñe no vende datos personales, no muestra publicidad basada en tu actividad y no crea perfiles comerciales a partir de tu colección o de tus hábitos de lectura.</p></section>
      <section><h2>6. Tus opciones</h2><p>Puedes eliminar los datos de Viñe desde la aplicación o al desinstalarla. Para gestionar una compra, solicitar ayuda o plantear una cuestión sobre privacidad, puedes escribirnos directamente.</p></section>
      <section><h2>7. Contacto</h2><p>Para cualquier consulta relacionada con esta política, escríbenos a <a className="text-link" href="mailto:info@kontroldesignstudio.com">info@kontroldesignstudio.com</a>.</p></section>
      <section><h2>8. Cambios en esta política</h2><p>Si las funciones de Viñe cambian de una forma que afecte a la privacidad, actualizaremos esta página y la fecha de revisión antes de aplicar esos cambios.</p></section>
    </VineLegalPage>
  );
}
