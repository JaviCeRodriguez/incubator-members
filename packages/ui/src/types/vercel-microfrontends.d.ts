declare module '@vercel/microfrontends/next/client' {
  import { ComponentType, ReactNode } from 'react';

  export interface LinkProps {
    href: string;
    children?: ReactNode;
    className?: string;
    [key: string]: any;
  }

  export const Link: ComponentType<LinkProps>;

  export const PrefetchCrossZoneLinks: ComponentType<{
    children?: ReactNode;
  }>;

  export const PrefetchCrossZoneLinksProvider: ComponentType<{
    children: ReactNode;
  }>;
}
