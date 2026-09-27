type VineHeaderProps = {
  showNavigation?: boolean;
};

export function VineHeader({ showNavigation = true }: VineHeaderProps) {
  return (
    <header className="site-header">
      <a className="brand header-brand" href="/" aria-label="Volver al portfolio">
        <img src="/kontrol-isotipo.png" alt="KontrolDev" className="header-logo" />
      </a>
      {showNavigation ? (
        <nav aria-label="Navegación principal">
          <a href="#funciones">Funciones</a>
          <a href="https://github.com/kontroldev/PanelMax-App" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </nav>
      ) : (
        <span />
      )}
      <span />
    </header>
  );
}