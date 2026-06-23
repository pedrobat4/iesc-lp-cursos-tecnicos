import { useEffect, useState } from "react";
import { scrollToId } from "../lib/links";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-soft backdrop-blur supports-[backdrop-filter]:bg-white/80"
          : "bg-transparent"
      }`}
    >
      <div className="container-lp flex items-center justify-between py-3.5">
        <img
          src={scrolled ? "/logo-iesc.png" : "/logo-iesc-branco.png"}
          alt="IESC — Instituto Educacional Santa Cruz"
          className="h-8 w-auto transition-all duration-300 sm:h-9"
        />
        <button
          onClick={() => scrollToId("matricula")}
          className={`hidden rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 sm:inline-flex ${
            scrolled
              ? "bg-orange text-white hover:bg-orange-600"
              : "bg-white/15 text-white ring-1 ring-white/40 backdrop-blur hover:bg-white hover:text-navy"
          }`}
        >
          Quero matrícula por R$ 69,90
        </button>
      </div>
    </header>
  );
}
