import Link from 'next/link';
import Image from 'next/image';
type VineHeaderProps = {
  showNavigation?: boolean;
};

export function VineHeader({ showNavigation = true }: VineHeaderProps) {
  return (
    <header className="site-header">
      <Link className="brand header-brand" href="/" aria-label="Volver al portfolio">
        <Image src="/kontrol-isotipo.png" alt="KontrolDev" className="header-logo" width={374} height={591} />
      </Link>
      {showNavigation ? (
        <nav aria-label="Navegación principal">
          <a href="#funciones">Funciones</a>
          <a href="https://apps.apple.com/es/app/vi%C3%B1e/id6809613945" target="_blank" rel="noreferrer">
            App Store
          </a>
        </nav>
      ) : (
        <span />
      )}
      <span />
    </header>
  );
}
