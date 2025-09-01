import { Link } from '@vercel/microfrontends/next/client';

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Site</h1>
        <p>This is the site, main app</p>

        <Link href="/">Home</Link>
        <Link href="/members">Members</Link>
      </main>
    </div>
  );
}
