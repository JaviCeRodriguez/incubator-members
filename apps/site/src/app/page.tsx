import { Hero } from '@/src/components/landing/Hero';
import { Features } from '@/src/components/landing/Features';
import { CommunityGrid } from '@/src/components/landing/CommunityGrid';
import { CTA } from '@/src/components/landing/CTA';

export default function Home() {
  return (
    <main className="font-sans">
      <Hero />
      <Features />
      <CommunityGrid />
      <CTA />
    </main>
  );
}
