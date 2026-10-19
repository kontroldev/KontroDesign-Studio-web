'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Moon, Sun } from 'lucide-react';

type VineHeaderProps = { showNavigation?: boolean };

export function VineHeader({ showNavigation = true }: VineHeaderProps) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem('kds-theme');
    setDark(saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    window.localStorage.setItem('kds-theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <header className="site-header vine-site-header">
      <Link className="brand header-brand" href="/" aria-label="Kontrol Design Studios, inicio">
        <span className="brand-symbol" aria-hidden="true"><Image src="/kontrol-isotipo.png" alt="" width={374} height={591} /></span>
        <span>KONTROL</span>
      </Link>
      {showNavigation ? (
        <nav aria-label="Navegación principal">
          <a href="#funciones">Funciones</a>
          <a href="#capturas">Capturas</a>
          <a href="https://apps.apple.com/es/app/vi%C3%B1e/id6809613945" target="_blank" rel="noreferrer">App Store</a>
        </nav>
      ) : <span />}
      <button className="theme-toggle" type="button" onClick={() => setDark((value) => !value)} aria-label={dark ? 'Activar modo claro' : 'Activar modo oscuro'}>
        {dark ? <Sun size={17} /> : <Moon size={17} />}
      </button>
    </header>
  );
}
