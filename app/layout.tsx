import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://kontrol-design-studios.kontroldev.chatgpt.site'),
  title: 'Kontrol Design Studio — Raúl Gallego',
  description: 'Diseño y desarrollo de aplicaciones nativas para el ecosistema Apple.',
  openGraph: {
    title: 'Kontrol Design Studio — Raúl Gallego',
    description: 'Diseño y desarrollo de aplicaciones nativas para el ecosistema Apple.',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Kontrol Design Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontrol Design Studio — Raúl Gallego',
    description: 'Diseño y desarrollo de aplicaciones nativas para el ecosistema Apple.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
