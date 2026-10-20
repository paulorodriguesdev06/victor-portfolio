import { ExternalLink } from "lucide-react";

type Project = {
  title: string;
  tagline: string;
  description: string;
  image: string;
  fullImage?: boolean;
  stack: string[];
  live?: string;
  repo?: string;
  year: string;
};

const projects: Project[] = [
  {
    title: "Sistema de Gestão Escolar",
    tagline: "Dashboard analítico para escolas",
    description:
      "Aplicação web completa para gestão de operações com gráficos dinâmicos, autenticação multi-tenant e API REST escalável. Foco em performance e DX.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
    live: "#",
    repo: "#",
    year: "2025",
  },
  {
    title: "Clarify - Sistema de Gestão de Finanças",
    tagline: "Dashboard analítico para gestão financeira",
    description:
      "Aplicação web completa para gestão de operações financeiras com gráficos dinâmicos, API REST escalável. Foco em performance e DX.",
    image: "/clarify-mockup.png",
    fullImage: true,
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma"],
    live: "https://finances-dashboard-front.vercel.app/login",
    repo: "#",
    year: "2024",
  },
  {
    title: "API Financeira",
    tagline: "Microsserviços para fintech",
    description:
      "Conjunto de microsserviços em Node.js com mensageria, processamento assíncrono e observabilidade. Mais de 10k req/min em produção.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1200&q=80",
    stack: ["Node.js", "NestJS", "RabbitMQ", "Docker", "AWS"],
    repo: "#",
    year: "2024",
  },
];

export function Projects() {
  return (
    <section id="projetos" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-primary-glow">03 — Projetos</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold">Trabalhos selecionados.</h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Uma amostra do que construí recentemente — cada projeto com seu próprio contexto e desafios.
          </p>
        </div>

        <div className="mt-16 space-y-24">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`grid lg:grid-cols-12 gap-8 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="lg:col-span-7">
                <div className="relative group rounded-3xl overflow-hidden border border-border shadow-card">
                  {!p.fullImage && (
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-accent/20 mix-blend-overlay opacity-60 group-hover:opacity-90 transition-opacity z-10" />
                  )}
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className={p.fullImage
                      ? "block w-full h-auto"
                      : "w-full h-[340px] md:h-[440px] object-cover group-hover:scale-105 transition-transform duration-700"}
                  />
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="font-mono">{p.year}</span>
                  <span className="h-px flex-1 bg-border" />
                  <span className="uppercase tracking-wider">{p.tagline}</span>
                </div>
                <h3 className="mt-4 text-3xl md:text-4xl font-bold">{p.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{p.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <li key={s} className="text-xs px-2.5 py-1 rounded-md bg-surface border border-border text-foreground/80">
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-3">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-primary-glow hover:opacity-80">
                      Ver demo <ExternalLink className="size-4" />
                    </a>
                  )}
                  {p.repo && (
                    <a href={p.repo} className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
                       Repositório Github
                       <img src={'/github.png'} className="text-white"/>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
