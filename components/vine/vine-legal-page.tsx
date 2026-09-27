import type { ReactNode } from 'react';
import Link from 'next/link';
import { VineFooter } from './vine-footer';
import { VineHeader } from './vine-header';

type VineLegalPageProps = {
  title: string;
  introduction: string;
  children: ReactNode;
};

export function VineLegalPage({ title, introduction, children }: VineLegalPageProps) {
  return (
    <main>
      <VineHeader showNavigation={false} />
      <article className="legal-page shell">
        <p className="kicker">Viñe</p>
        <h1>{title}</h1>
        <p className="legal-page-introduction">{introduction}</p>
        <div className="legal-page-content">{children}</div>
        <p className="legal-page-back">
          <Link className="text-link" href="/vine">
            ← Volver a Viñe
          </Link>
        </p>
      </article>
      <VineFooter />
    </main>
  );
}
