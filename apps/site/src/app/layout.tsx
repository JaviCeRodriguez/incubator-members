import type { Metadata } from 'next';
import {
  PrefetchCrossZoneLinks,
  PrefetchCrossZoneLinksProvider,
} from '@vercel/microfrontends/next/client';
import { Geist, Geist_Mono } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import { Header } from '@/src/components/Header';
import { Footer } from '@/src/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Incubator · Miembros',
  description:
    'Conoce a la comunidad de miembros de Incubator: talento, proyectos y conexión desde Argentina.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <PrefetchCrossZoneLinksProvider>
            <Header />
            {children}
            <Footer />
          </PrefetchCrossZoneLinksProvider>
          <PrefetchCrossZoneLinks />
        </body>
      </html>
    </ClerkProvider>
  );
}
