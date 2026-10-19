import Link from 'next/link';
import Image from 'next/image';
export function VineFooter() {
  return (
    <footer className="site-footer shell">
      <Link className="brand footer-brand" href="/" aria-label="Kontrol Design Studios">
        <Image src="/kontrol-logo.png" alt="Kontrol Design Studios" className="footer-logo" width={1774} height={887} />
      </Link>
      <div className="footer-meta">
        <span>© {new Date().getFullYear()} Raúl Gallego</span>
        <span>Viñe ya está disponible en App Store.</span>
      </div>
      <div className="footer-links">
        <Link href="/vine/privacy">Privacidad</Link>
        <Link href="/vine/support">Soporte</Link>
        <Link href="/vine/terms">Condiciones de uso</Link>
      </div>
    </footer>
  );
}
