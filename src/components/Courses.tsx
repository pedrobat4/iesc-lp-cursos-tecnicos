import { copy, cursos } from "../config";
import { scrollToId } from "../lib/links";
import { Icon } from "./Icons";

type CursoLike = (typeof cursos)[number] & { tag?: string };

export function Courses() {
  const s = copy.cursosSecao;
  // Com 2 cursos ou menos exibimos "banners maiores"; com mais, grade compacta.
  const banner = cursos.length <= 2;

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

        {banner ? (
          <div className="mt-12 grid gap-7 lg:grid-cols-2">
            {(cursos as CursoLike[]).map((c, i) => (
              <article
                key={c.nome + c.turno}
                data-reveal-delay={i * 110}
                className="reveal group flex flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card"
              >
                <div className="relative h-72 overflow-hidden sm:h-80">
                  <img
                    src={c.imagem}
                    alt={c.nome}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-800/85 via-navy-800/15 to-transparent" />
                  {c.destaque && (
                    <span className="absolute right-4 top-4 rounded-full bg-orange px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-glow">
                      Mais procurado
                    </span>
                  )}
                  {/* título sobre a imagem */}
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="font-display text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                      {c.nome}
                    </h3>
                    <p className="mt-1.5 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-sm font-semibold text-white ring-1 ring-white/25 backdrop-blur">
                      <Icon name="clock" className="h-4 w-4" />
                      {c.turno}
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="flex-1 text-base leading-relaxed text-navy-400">
                    {c.descricao}
                  </p>
                  <button
                    onClick={() => scrollToId("matricula")}
                    className="btn-primary mt-6 w-full"
                  >
                    Quero me matricular
                    <Icon name="arrow" className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {(cursos as CursoLike[]).map((c, i) => (
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
                  {c.tag && (
                    <span className="mb-2 self-start rounded-md bg-navy-50 px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-navy-500">
                      {c.tag}
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
        )}
      </div>
    </section>
  );
}
