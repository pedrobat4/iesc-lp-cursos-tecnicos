import { beneficios, copy } from "../config";
import { Icon } from "./Icons";

export function Benefits() {
  const s = copy.beneficiosSecao;
  return (
    <section className="bg-navy-50/60 py-20 sm:py-24">
      <div className="container-lp">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">{s.eyebrow}</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            {s.titulo}
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {beneficios.map((b, i) => (
            <div
              key={b.titulo}
              data-reveal-delay={i * 80}
              className="reveal group flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-orange/40 hover:shadow-card"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-orange/10 text-orange transition-colors duration-300 group-hover:bg-orange group-hover:text-white">
                <Icon name={b.icon} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-navy">{b.titulo}</h3>
                <p className="mt-1 text-sm leading-relaxed text-navy-400">{b.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
