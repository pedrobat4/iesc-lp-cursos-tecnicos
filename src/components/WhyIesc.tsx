import { copy, porqueIesc, stats } from "../config";
import { Icon } from "./Icons";

export function WhyIesc() {
  const s = copy.porqueSecao;
  return (
    <section className="relative overflow-hidden bg-navy-700 py-20 text-white sm:py-24">
      <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-orange/20 blur-3xl" />
      <div className="container-lp relative grid items-center gap-12 lg:grid-cols-2">
        {/* imagem */}
        <div className="reveal relative order-last lg:order-first">
          <div className="overflow-hidden rounded-3xl shadow-card ring-1 ring-white/10">
            <img src={s.imagem} alt="Estrutura do IESC" className="h-full w-full object-cover" />
          </div>
          {/* card flutuante de estatística */}
          <div className="absolute -bottom-6 -right-2 hidden rounded-2xl bg-white p-5 text-navy shadow-card sm:block">
            <p className="font-display text-3xl font-extrabold text-orange">{stats[0].numero}</p>
            <p className="text-sm font-semibold text-navy-400">{stats[0].rotulo}</p>
          </div>
        </div>

        {/* texto */}
        <div>
          <span className="reveal eyebrow bg-white/10 text-orange-200">{s.eyebrow}</span>
          <h2 className="reveal mt-4 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            {s.titulo}
          </h2>

          <ul className="mt-8 space-y-5">
            {porqueIesc.map((p, i) => (
              <li
                key={p.titulo}
                data-reveal-delay={i * 80}
                className="reveal flex items-start gap-4"
              >
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-orange text-white shadow-glow">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold">{p.titulo}</h3>
                  <p className="mt-0.5 text-sm text-white/70">{p.texto}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* faixa de estatísticas */}
      <div className="container-lp relative mt-16">
        <div className="reveal grid grid-cols-2 divide-x divide-white/10 overflow-hidden rounded-3xl bg-white/5 ring-1 ring-white/10 sm:grid-cols-4">
          {stats.map((st) => (
            <div key={st.rotulo} className="px-4 py-7 text-center">
              <p className="font-display text-3xl font-extrabold text-orange-300 sm:text-4xl">
                {st.numero}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-white/70">
                {st.rotulo}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
