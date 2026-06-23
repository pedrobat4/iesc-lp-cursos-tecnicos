import { copy, cursos } from "../config";
import { scrollToId } from "../lib/links";
import { Icon } from "./Icons";

export function Courses() {
  const s = copy.cursosSecao;
  return (
    <section id="cursos" className="bg-white py-20 sm:py-24">
      <div className="container-lp">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="eyebrow">{s.eyebrow}</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            {s.titulo}
          </h2>
          <p className="mt-3 text-navy-400">{s.subtitulo}</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {cursos.map((c, i) => (
            <article
              key={c.nome + c.turno}
              data-reveal-delay={i * 90}
              className="reveal group flex flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card sm:flex-row"
            >
              <div className="relative h-52 shrink-0 overflow-hidden sm:h-auto sm:w-44">
                <img
                  src={c.imagem}
                  alt={c.nome}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {c.destaque && (
                  <span className="absolute left-3 top-3 rounded-full bg-orange px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-glow">
                    Mais procurado
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent sm:bg-gradient-to-r" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                {"tag" in c && (c as { tag?: string }).tag && (
                  <span className="mb-2 self-start rounded-md bg-navy-50 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-navy-500">
                    {(c as { tag?: string }).tag}
                  </span>
                )}
                <h3 className="font-display text-xl font-bold leading-snug text-navy">
                  {c.nome}
                </h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold text-orange-600">
                  <Icon name="clock" className="h-4 w-4" />
                  {c.turno}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-400">
                  {c.descricao}
                </p>
                <button
                  onClick={() => scrollToId("matricula")}
                  className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-bold text-orange transition-colors hover:text-orange-600"
                >
                  Quero me matricular
                  <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
