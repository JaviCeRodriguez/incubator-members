import {
  PrefetchCrossZoneLinks,
  PrefetchCrossZoneLinksProvider,
} from '@vercel/microfrontends/next/client';
import type { PropsWithChildren } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export function LayoutShell({ children }: PropsWithChildren) {
  return (
    <PrefetchCrossZoneLinksProvider>
      <Header />
      {children}
      <Footer />
      <PrefetchCrossZoneLinks />
    </PrefetchCrossZoneLinksProvider>
  );
}
