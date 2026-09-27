export function VineFooter() {
  return (
    <footer className="site-footer shell">
      <a className="brand footer-brand" href="/" aria-label="Volver al portfolio">
        <img src="/kontrol-isotipo.png" alt="KontrolDev" className="footer-logo" />
      </a>
      <div className="footer-meta">
        <span>© {new Date().getFullYear()} Raúl Gallego</span>
        <span>Viñe está en desarrollo activo.</span>
      </div>
      <div className="footer-links">
        <a href="/vine/privacy">Privacidad</a>
        <a href="/vine/support">Soporte</a>
      </div>
    </footer>
  );
}