type Member = {
  name: string;
  role: string;
  company: string;
  years: number;
  skills: string[];
  hobbies: string[];
};

const MEMBERS: Member[] = [
  {
    name: 'Sofía',
    role: 'Product Designer',
    company: 'Indie',
    years: 6,
    skills: ['UX', 'UI', 'Design Systems'],
    hobbies: ['Ilustración', 'Ciclismo'],
  },
  {
    name: 'Martín',
    role: 'Founder',
    company: 'Fintech',
    years: 8,
    skills: ['Estrategia', 'Fundraising', 'Growth'],
    hobbies: ['Asados', 'Fútbol'],
  },
  {
    name: 'Valen',
    role: 'ML Engineer',
    company: 'AI',
    years: 5,
    skills: ['LLMs', 'Python', 'MLOps'],
    hobbies: ['Ajedrez', 'Senderismo'],
  },
  {
    name: 'Nico',
    role: 'Fullstack Dev',
    company: 'SaaS',
    years: 7,
    skills: ['TypeScript', 'Next.js', 'Node.js'],
    hobbies: ['Running', 'Café de especialidad'],
  },
  {
    name: 'Camila',
    role: 'Ops Lead',
    company: 'Ecommerce',
    years: 9,
    skills: ['Operaciones', 'Automatización', 'KPIs'],
    hobbies: ['Yoga', 'Viajes'],
  },
  {
    name: 'Juan',
    role: 'Growth',
    company: 'B2B',
    years: 4,
    skills: ['SEO', 'Paid', 'Analytics'],
    hobbies: ['Fotografía', 'Cocina'],
  },
];

export function MembersList() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-3xl font-semibold mb-6">Miembros de Incubator</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {MEMBERS.map((m) => (
            <div
              key={m.name}
              className="rounded-xl border border-black/10 dark:border-white/10 p-4 space-y-3"
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
              <p className="text-sm text-black/70 dark:text-white/70">
                Experiencia: {m.years} años
              </p>
              <div>
                <p className="text-sm font-medium mb-1">Skills</p>
                <div className="flex flex-wrap gap-2">
                  {m.skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2 py-1 rounded-full border border-black/10 dark:border-white/15"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium mb-1">Hobbies</p>
                <div className="flex flex-wrap gap-2">
                  {m.hobbies.map((h) => (
                    <span
                      key={h}
                      className="text-xs px-2 py-1 rounded-full border border-black/10 dark:border-white/15"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
