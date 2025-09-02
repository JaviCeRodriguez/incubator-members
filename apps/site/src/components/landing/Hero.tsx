import { Link } from '@vercel/microfrontends/next/client';

export function Hero() {
  return (
    <section className="w-full bg-gradient-to-b from-[#f6f2ff] to-transparent dark:from-[#120c25] py-20">
      <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <span className="inline-block text-xs tracking-widest uppercase text-[#6c47ff]">
            Miembros de Incubator
          </span>
          <h1 className="font-sans text-4xl sm:text-5xl font-semibold leading-tight">
            Conectamos talento argentino con oportunidades reales
          </h1>
          <p className="text-lg text-black/70 dark:text-white/70">
            Descubrí a la comunidad de Incubator: builders, founders y makers
            que crean el futuro desde Argentina.
          </p>
          <div className="flex gap-3">
            <Link
              href="/members"
              className="bg-[#6c47ff] text-white rounded-full font-medium h-11 px-5 flex items-center"
            >
              Ver miembros
            </Link>
            <a
              href="#sumate"
              className="border border-black/10 dark:border-white/20 rounded-full font-medium h-11 px-5 flex items-center"
            >
              Conocé más
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-sm" />
        </div>
      </div>
    </section>
  );
}
