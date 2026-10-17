import Link from 'next/link';
import Image from 'next/image';
export function VineFooter() {
  return (
    <footer className="site-footer shell">
      <Link className="brand footer-brand" href="/" aria-label="Volver al portfolio">
        <Image src="/kontrol-isotipo.png" alt="KontrolDev" className="footer-logo" width={374} height={591} />
      </Link>
      <div className="footer-meta">
        <span>© {new Date().getFullYear()} Raúl Gallego</span>
        <span>Viñe está en desarrollo activo.</span>
      </div>
      <div className="footer-links">
        <Link href="/vine/privacy">Privacidad</Link>
        <Link href="/vine/support">Soporte</Link>
        <Link href="/vine/terms">Condiciones de uso</Link>
      </div>
    </footer>
  );
}
