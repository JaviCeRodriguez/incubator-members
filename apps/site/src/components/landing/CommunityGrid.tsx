type Member = { name: string; role: string; company: string };

const MEMBERS: Member[] = [
  { name: 'Sofía', role: 'Product Designer', company: 'Indie' },
  { name: 'Martín', role: 'Founder', company: 'Fintech' },
  { name: 'Valen', role: 'ML Engineer', company: 'AI' },
  { name: 'Nico', role: 'Fullstack Dev', company: 'SaaS' },
  { name: 'Camila', role: 'Ops Lead', company: 'Ecommerce' },
  { name: 'Juan', role: 'Growth', company: 'B2B' },
];

export function CommunityGrid() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold mb-6">Gente que construye</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {MEMBERS.map((m) => (
            <div
              key={m.name}
              className="rounded-xl border border-black/10 dark:border-white/10 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-[#6c47ff]/20" />
                <div>
                  <p className="font-medium">{m.name}</p>
                  <p className="text-sm text-black/70 dark:text-white/70">
                    {m.role} · {m.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
