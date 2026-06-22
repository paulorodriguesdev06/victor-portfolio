import { Code2, Sparkles, Coffee } from "lucide-react";

export function About() {
  return (
    <section id="sobre" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-12 items-start">
        <div className="md:col-span-2">
          <span className="text-xs uppercase tracking-[0.2em] text-primary-glow">01 — Sobre mim</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Desenvolvedor de Sistemas <br /> apaixonado por <span className="text-gradient">detalhes</span>.
          </h2>
        </div>
        <div className="md:col-span-3 space-y-5 text-muted-foreground leading-relaxed text-lg">
          <p>
            Sou desenvolvedor Full Stack com foco no ecossistema <span className="text-foreground">TypeScript</span>. No frontend trabalho com Next.js e React; no backend, com Node.js, APIs REST e bancos relacionais.
          </p>
          <p>
            Acredito que software bom nasce do equilíbrio entre <span className="text-foreground">arquitetura sólida</span>, <span className="text-foreground">experiência do usuário</span> e <span className="text-foreground">colaboração próxima</span> com o time de produto.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 pt-4">
            {[
              { icon: Code2, label: "Código limpo", text: "Padrões, testes e revisão." },
              { icon: Sparkles, label: "UI refinada", text: "Pixel perfect e acessível." },
              { icon: Coffee, label: "Time player", text: "Comunicação clara." },
            ].map((b) => (
              <div key={b.label} className="rounded-2xl border border-border bg-card-gradient p-4">
                <b.icon className="size-5 text-primary-glow" />
                <p className="mt-3 text-sm font-medium text-foreground">{b.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
