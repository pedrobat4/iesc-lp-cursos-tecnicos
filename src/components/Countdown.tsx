import { useEffect, useState } from "react";
import { oferta } from "../config";

function diff(target: number) {
  const total = Math.max(0, target - Date.now());
  const dias = Math.floor(total / 86400000);
  const horas = Math.floor((total % 86400000) / 3600000);
  const min = Math.floor((total % 3600000) / 60000);
  const seg = Math.floor((total % 60000) / 1000);
  return { dias, horas, min, seg, total };
}

const pad = (n: number) => String(n).padStart(2, "0");

export function Countdown({ variant = "light" }: { variant?: "light" | "dark" }) {
  const target = new Date(oferta.fimPromocao).getTime();
  const [t, setT] = useState(() => diff(target));

  useEffect(() => {
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const items = [
    { v: t.dias, l: "dias" },
    { v: t.horas, l: "horas" },
    { v: t.min, l: "min" },
    { v: t.seg, l: "seg" },
  ];

  const cell =
    variant === "dark"
      ? "bg-white/10 text-white ring-1 ring-white/20"
      : "bg-navy text-white shadow-soft";
  const label = variant === "dark" ? "text-white/70" : "text-navy-400";

  if (t.total <= 0) {
    return (
      <p className={variant === "dark" ? "text-white/90" : "text-navy-600"}>
        Promoção encerrada — fale com a gente para condições atuais.
      </p>
    );
  }

  return (
    <div className="flex items-center gap-2.5 sm:gap-3" aria-label="Tempo restante da promoção">
      {items.map((it, i) => (
        <div key={it.l} className="flex items-center gap-2.5 sm:gap-3">
          <div className="flex flex-col items-center">
            <div
              className={`grid h-14 w-14 place-items-center rounded-xl text-2xl font-extrabold tabular-nums sm:h-16 sm:w-16 sm:text-3xl ${cell}`}
            >
              {pad(it.v)}
            </div>
            <span className={`mt-1.5 text-[11px] font-semibold uppercase tracking-wide ${label}`}>
              {it.l}
            </span>
          </div>
          {i < items.length - 1 && (
            <span className="-mt-5 text-2xl font-bold text-orange">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
