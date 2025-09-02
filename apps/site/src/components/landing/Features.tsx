const FEATURES = [
  {
    title: 'Comunidad curada',
    desc: 'Miembros seleccionados: founders, ingenieros, diseñadores y operadores con track real.',
  },
  {
    title: 'Networking con propósito',
    desc: 'Conexiones que se traducen en equipos, inversiones y nuevos productos.',
  },
  {
    title: 'Eventos y recursos',
    desc: 'Workshops, AMAs y playbooks compartidos por la comunidad.',
  },
];

export function Features() {
  return (
    <section className="py-16" id="features">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-black/10 dark:border-white/10 p-6 bg-white/50 dark:bg-white/5"
            >
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-black/70 dark:text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
