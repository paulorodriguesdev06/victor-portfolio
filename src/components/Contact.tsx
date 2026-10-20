import { Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="relative py-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.2em] text-primary-glow">05 — Contato</span>
        <h2 className="mt-4 text-4xl md:text-6xl font-bold">
          Vamos construir <span className="text-gradient">algo juntos</span>?
        </h2>
        <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
          Estou aberto a novas oportunidades, freelas e parcerias. Responder mensagens é uma das minhas hard skills.
        </p>

        <a
          href="mailto:paulo@example.com"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-base font-medium text-primary-foreground shadow-glow hover:opacity-90 transition"
        >
          <Mail className="size-5" /> paulo.rodrigues.develop@gmail.com
        </a>

        <div className="mt-12 flex items-center justify-center gap-3">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="size-12 rounded-full border border-border bg-surface grid place-items-center hover:bg-surface-elevated transition" aria-label="GitHub">
            <img src={'/github.png'} />
          </a>
          <a href="https://www.linkedin.com/in/paulo-victor-souza-rodrigues/" target="_blank" rel="noreferrer" className="size-12 rounded-full border border-border bg-surface grid place-items-center hover:bg-surface-elevated transition" aria-label="LinkedIn">
            <img src={'/linkedin.png'} />
          </a>
        </div>

        <p className="mt-10 inline-flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="size-4" /> Brasil · Remoto
        </p>
      </div>

      <footer className="mt-24 border-t border-border/60 pt-8 max-w-6xl mx-auto text-xs text-muted-foreground flex flex-wrap items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} Paulo Victor Rodrigues. Todos os direitos reservados.</p>
        <p>Construído com TypeScript + React.</p>
      </footer>
    </section>
  );
}
