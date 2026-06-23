import { copy, oferta } from "../config";
import { scrollToId } from "../lib/links";
import { Countdown } from "./Countdown";
import { Icon } from "./Icons";

export function Hero() {
  const h = copy.hero;
  return (
    <section className="relative overflow-hidden bg-navy-700 pt-24 text-white">
      {/* fundo */}
      <div className="absolute inset-0">
        <img
          src={h.imagem}
          alt="Estudantes do IESC"
          className="h-full w-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-800/95 via-navy-700/90 to-navy-600/80" />
      </div>
      {/* blobs decorativos */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-orange/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-orange/10 blur-3xl" />

      <div className="container-lp relative grid items-center gap-12 pb-16 pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-24">
        {/* coluna texto */}
        <div>
          <span className="animate-fade-in inline-flex items-center gap-2 rounded-full bg-orange/15 px-4 py-1.5 text-sm font-semibold text-orange-200 ring-1 ring-orange/30">
            <Icon name="spark" className="h-4 w-4 text-orange" />
            {h.badge}
          </span>

          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            {h.titulo}
            <span className="text-gradient">{h.tituloDestaque}</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            {h.subtitulo}
          </p>

          {/* oferta destaque */}
          <div className="mt-7 inline-flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl bg-white/10 p-4 ring-1 ring-white/15 backdrop-blur">
            <span className="text-3xl">🔥</span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-orange-200">
                Matrícula promocional
              </p>
              <p className="text-lg font-bold">
                De <span className="text-white/60 line-through">R$ {oferta.precoDe}</span> por
                apenas{" "}
                <span className="text-2xl font-extrabold text-orange-300">
                  R$ {oferta.precoPor}
                </span>
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button onClick={() => scrollToId("matricula")} className="btn-primary animate-pulseGlow">
              {h.cta}
              <Icon name="arrow" className="h-5 w-5" />
            </button>
            <button onClick={() => scrollToId("cursos")} className="btn-outline">
              Ver cursos
            </button>
          </div>
        </div>

        {/* coluna contador */}
        <div className="lg:justify-self-end">
          <div className="rounded-3xl border border-white/15 bg-white/5 p-6 shadow-card backdrop-blur-md sm:p-8">
            <p className="flex items-center gap-2 text-sm font-semibold text-orange-200">
              <Icon name="clock" className="h-5 w-5" />
              Oferta válida {oferta.validade}
            </p>
            <p className="mt-1 font-display text-xl font-bold">A promoção termina em:</p>
            <div className="mt-5">
              <Countdown variant="dark" />
            </div>
            <div className="mt-6 space-y-2.5 border-t border-white/10 pt-5 text-sm text-white/80">
              {["Vagas limitadas por turma", `Início das aulas em ${oferta.inicioAulas}`, "Atendimento direto pelo WhatsApp"].map(
                (t) => (
                  <p key={t} className="flex items-center gap-2.5">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-orange/20">
                      <Icon name="check" className="h-3.5 w-3.5 text-orange-300" />
                    </span>
                    {t}
                  </p>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* onda inferior */}
      <div className="relative">
        <svg viewBox="0 0 1440 80" className="block h-[40px] w-full sm:h-[60px]" preserveAspectRatio="none">
          <path d="M0 80h1440V0c-240 50-480 60-720 40C480 60 240 30 0 0z" className="fill-white" />
        </svg>
      </div>
    </section>
  );
}
