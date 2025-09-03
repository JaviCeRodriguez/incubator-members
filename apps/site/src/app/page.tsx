import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { CommunityGrid } from '@/components/landing/CommunityGrid';
import { CTA } from '@/components/landing/CTA';

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
