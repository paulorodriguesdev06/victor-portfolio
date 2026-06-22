import {
  Atom, Server, Database, Cloud, GitBranch, Layers, Cpu, Palette,
} from "lucide-react";

const skills = [
  { icon: Atom, name: "Frontend", level: "Avançado", items: ["React", "Next.js", "TanStack", "Tailwind"] },
  { icon: Server, name: "Backend", level: "Avançado", items: ["Node.js", "Express", "NestJS", "APIs REST"] },
  { icon: Layers, name: "Linguagens", level: "Avançado", items: ["TypeScript", "JavaScript", "PHP"] },
  { icon: Database, name: "Bancos de dados", level: "Sólido", items: ["PostgreSQL", "MySQL"] },
  { icon: Cloud, name: "Cloud & DevOps", level: "Intermediário", items: ["AWS", "Vercel", "CI/CD"] },
  { icon: GitBranch, name: "Versionamento", level: "Avançado", items: ["Git", "GitHub", "GitFlow", "Code Review"] },
  { icon: Cpu, name: "Arquitetura", level: "Avançado", items: ["Clean Arch", "DDD", "SOLID"] },
  { icon: Palette, name: "Testes", level: "Sólido", items: ["Testes Unitários", "Testes de Integração", "E2E", "Jest", "Cypress"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-primary-glow">02 — Hard skills</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Tecnologias que eu domino.</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Stack moderna para entregar produtos completos — do banco de dados à interface.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((s) => (
            <article
              key={s.name}
              className="group relative rounded-2xl border border-border bg-card-gradient p-6 shadow-card hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 transition-colors pointer-events-none" />
              <div className="relative">
                <div className="size-12 rounded-xl bg-primary/15 border border-primary/30 grid place-items-center">
                  <s.icon className="size-5 text-primary-glow" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.name}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">{s.level}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {s.items.map((i) => (
                    <li key={i} className="text-[11px] px-2 py-1 rounded-md bg-surface-elevated border border-border text-muted-foreground">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
