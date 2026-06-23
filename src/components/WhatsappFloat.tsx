import { useEffect, useState } from "react";
import { waLink } from "../lib/links";
import { Icon } from "./Icons";

export function WhatsappFloat() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className={`fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-3 pr-4 font-bold text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.6)] transition-all duration-500 hover:bg-[#1ebe5b] ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-16 opacity-0"
      }`}
    >
      <span className="relative grid h-8 w-8 place-items-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />
        <Icon name="whatsapp" className="relative h-7 w-7" />
      </span>
      <span className="hidden text-sm sm:inline">Fale conosco</span>
    </a>
  );
}
