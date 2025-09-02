import { Link } from '@vercel/microfrontends/next/client';

export function CTA() {
  return (
    <section id="sumate" className="py-20">
      <div className="mx-auto max-w-6xl px-4 rounded-3xl border border-black/10 dark:border-white/10 p-10 bg-white/50 dark:bg-white/5 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-3">
          ¿Querés sumar tu perfil?
        </h2>
        <p className="text-black/70 dark:text-white/70 mb-6">
          Unite a Incubator y conectá con una red de builders, founders y
          makers.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/members"
            className="bg-[#6c47ff] text-white rounded-full font-medium h-11 px-5 flex items-center"
          >
            Explorar miembros
          </Link>
          <Link
            href="/sign-up"
            className="border border-black/10 dark:border-white/20 rounded-full font-medium h-11 px-5 flex items-center"
          >
            Crear cuenta
          </Link>
        </div>
      </div>
    </section>
  );
}
