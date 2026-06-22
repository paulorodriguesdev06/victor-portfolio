type Job = {
  role: string;
  company: string;
  period: string;
  description: string;
  stack: string[];
};

const jobs: Job[] = [
  {
    role: "Full Stack Developer",
    company: "Empresa Atual",
    period: "2024 — Presente",
    description:
      "Liderança técnica em features de alto impacto. Arquitetura de módulos Next.js + Node.js, code review e mentoria de devs juniores.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    role: "Desenvolvedor Front-end Pleno",
    company: "Startup B",
    period: "2022 — 2024",
    description:
      "Construção do design system interno e refatoração da plataforma web. Redução de 40% no tempo de carregamento inicial.",
    stack: ["React", "TypeScript", "Tailwind", "Storybook"],
  },
  {
    role: "Desenvolvedor Júnior",
    company: "Agência C",
    period: "2021 — 2022",
    description:
      "Desenvolvimento de sites institucionais e e-commerces. Primeiro contato profissional com Node.js e bancos relacionais.",
    stack: ["JavaScript", "Node.js", "MySQL"],
  },
];

export function Experience() {
  return (
    <section id="experiencia" className="relative py-28 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <span className="text-xs uppercase tracking-[0.2em] text-primary-glow">04 — Experiência</span>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold">Trajetória profissional.</h2>

        <ol className="mt-14 relative border-l border-border/70 space-y-10 pl-8">
          {jobs.map((j) => (
            <li key={j.role} className="relative">
              <span className="absolute -left-[37px] top-2 size-3 rounded-full bg-primary ring-4 ring-background shadow-glow" />
              <div className="rounded-2xl border border-border bg-card-gradient p-6 hover:border-primary/40 transition-colors">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold">
                    {j.role} <span className="text-primary-glow">· {j.company}</span>
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground">{j.period}</span>
                </div>
                <p className="mt-3 text-muted-foreground leading-relaxed">{j.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {j.stack.map((s) => (
                    <li key={s} className="text-[11px] px-2 py-1 rounded-md bg-surface-elevated border border-border text-muted-foreground">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
