import React from 'react';

import {
  PrefetchCrossZoneLinks,
  PrefetchCrossZoneLinksProvider,
} from '@vercel/microfrontends/next/client';
import type { PropsWithChildren } from 'react';
import { Header } from './header';
import { Footer } from './footer';

export function LayoutMain({ children }: PropsWithChildren) {
  return (
    <PrefetchCrossZoneLinksProvider>
      <Header />
      {children}
      <Footer />
      <PrefetchCrossZoneLinks />
    </PrefetchCrossZoneLinksProvider>
  );
}
