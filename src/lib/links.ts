import { contato, mensagemWhatsApp } from "../config";

/** Monta um link wa.me com mensagem opcional pré-preenchida. */
export function waLink(msg: string = mensagemWhatsApp) {
  return `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(msg)}`;
}

export const telLink = `tel:+${contato.whatsapp}`;

/** Rola suavemente até uma seção pelo id. */
export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}
