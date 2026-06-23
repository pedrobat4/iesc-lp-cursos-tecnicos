import { contato } from "../config";
import { telLink, waLink } from "../lib/links";
import { Icon } from "./Icons";

export function Footer() {
  return (
    <footer className="bg-navy-800 py-12 text-white/80">
      <div className="container-lp">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <img src="/logo-iesc-branco.png" alt="IESC" className="h-9 w-auto" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Instituto Educacional Santa Cruz — formando profissionais da saúde
              com tradição, estrutura e foco no mercado de trabalho.
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <a href={telLink} className="flex items-center gap-3 transition-colors hover:text-white">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10">
                <Icon name="phone" className="h-4 w-4" />
              </span>
              {contato.telefoneFormatado}
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 transition-colors hover:text-white"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10">
                <Icon name="whatsapp" className="h-5 w-5" />
              </span>
              Atendimento via WhatsApp
            </a>
            <p className="flex items-center gap-3 text-white/60">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10">
                <Icon name="map" className="h-4 w-4" />
              </span>
              {contato.endereco}
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} IESC — Instituto Educacional Santa Cruz. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}
