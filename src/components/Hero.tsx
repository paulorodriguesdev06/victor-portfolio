import { Mail, ArrowDown } from "lucide-react";

export function Navbar() {
  const links = [
    { href: "#sobre", label: "Sobre" },
    { href: "#skills", label: "Skills" },
    { href: "#projetos", label: "Projetos" },
    { href: "#experiencia", label: "Experiência" },
    { href: "#contato", label: "Contato" },
  ];
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/40">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display font-bold tracking-tight text-lg">
          Paulo Victor<span className="text-gradient">DEV</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contato"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/30 px-4 py-2 text-sm text-foreground hover:bg-primary/20 transition-colors"
        >
          <Mail className="size-4" /> Fale comigo
        </a>
      </nav>
    </header>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center bg-hero overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-primary/20 blur-[120px] animate-float pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-surface/60 backdrop-blur px-4 py-1.5 text-xs text-muted-foreground">
          <span className="size-2 rounded-full bg-primary-glow animate-pulse" />
          Disponível para novos projetos
        </div>
        <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-[1.05] max-w-4xl">
          Construindo <span className="text-gradient">experiências digitais</span> com código limpo.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Olá, sou <span className="text-foreground font-medium">Paulo Victor Rodrigues</span> — desenvolvedor Full Stack focado em TypeScript, Next.js e Node.js. Transformo ideias em produtos performáticos e escaláveis.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition shadow-glow"
          >
            Ver projetos <ArrowDown className="size-4" />
          </a>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/40 px-6 py-3 text-sm font-medium hover:bg-surface transition"
          >
            Entrar em contato
          </a>
          <div className="flex items-center gap-2 ml-2">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="size-10 rounded-full border border-border bg-surface/40 grid place-items-center hover:bg-surface transition" aria-label="GitHub">
              {/* <Github className="size-4" /> */} Github
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="size-10 rounded-full border border-border bg-surface/40 grid place-items-center hover:bg-surface transition" aria-label="LinkedIn">
              {/* <Linkedin className="size-4" /> */} Linkedin 
            </a>
          </div>
        </div>

        <dl className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl">
          {[
            { k: "2+", v: "Anos de experiência" },
            { k: "10+", v: "Projetos entregues" },
            { k: "12+", v: "Stacks dominadas" },
            { k: "100%", v: "Comprometimento" },
          ].map((s) => (
            <div key={s.v}>
              <dt className="text-3xl md:text-4xl font-display font-bold text-gradient">{s.k}</dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
