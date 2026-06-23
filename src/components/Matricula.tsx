import { copy, oferta } from "../config";
import { Countdown } from "./Countdown";
import { LeadForm } from "./LeadForm";
import { Icon } from "./Icons";

export function Matricula() {
  const c = copy.finalCta;
  return (
    <section
      id="matricula"
      className="relative scroll-mt-20 overflow-hidden bg-gradient-to-br from-orange-600 via-orange to-orange-500 py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute -right-16 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-10 bottom-0 h-60 w-60 rounded-full bg-navy/20 blur-3xl" />

      <div className="container-lp relative grid items-center gap-12 lg:grid-cols-[1fr_460px]">
        {/* chamada */}
        <div className="reveal text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-bold ring-1 ring-white/30">
            🔥 Matrícula promocional
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
            {c.titulo}
          </h2>
          <p className="mt-4 max-w-lg text-lg text-white/90">{c.subtitulo}</p>

          <div className="mt-7 flex flex-wrap items-end gap-5 rounded-2xl bg-white/15 p-5 ring-1 ring-white/20 backdrop-blur">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
                De R$ {oferta.precoDe} por
              </p>
              <p className="font-display text-5xl font-extrabold leading-none">
                R$ {oferta.precoPor}
              </p>
            </div>
            <div className="border-l border-white/30 pl-5">
              <p className="mb-2 text-sm font-semibold text-white/80">Termina em:</p>
              <Countdown variant="dark" />
            </div>
          </div>

          <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
            {[
              "Vagas limitadas por turma",
              `Início em ${oferta.inicioAulas}`,
              "Certificação reconhecida",
              "Atendimento pelo WhatsApp",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2.5 text-sm font-medium text-white">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-white/25">
                  <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.6} />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* formulário */}
        <div className="reveal" data-reveal-delay={120}>
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
