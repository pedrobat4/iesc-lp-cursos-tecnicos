import { useState } from "react";
import { contato, copy, opcoesCurso, mensagemWhatsApp } from "../config";
import { waLink } from "../lib/links";
import { Icon } from "./Icons";

type Status = "idle" | "sent";

export function LeadForm() {
  const [nome, setNome] = useState("");
  const [tel, setTel] = useState("");
  const [curso, setCurso] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  function maskPhone(v: string) {
    const d = v.replace(/\D/g, "").slice(0, 11);
    if (d.length <= 2) return d;
    if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
    if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
    return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg =
      `${mensagemWhatsApp}\n\n` +
      `*Nome:* ${nome}\n` +
      `*Telefone:* ${tel}\n` +
      `*Curso de interesse:* ${curso || "A definir"}`;
    setStatus("sent");
    // Abre o WhatsApp da escola com os dados preenchidos
    window.open(waLink(msg), "_blank", "noopener");
  }

  if (status === "sent") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-white p-8 text-center shadow-card">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-green-100 text-green-600">
          <Icon name="check" className="h-8 w-8" strokeWidth={2.4} />
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold text-navy">Tudo certo, {nome.split(" ")[0] || "futuro aluno"}! 🎉</h3>
        <p className="mt-2 max-w-xs text-navy-400">
          Abrimos o WhatsApp para você finalizar a matrícula. Se não abriu,
          toque no botão abaixo.
        </p>
        <a
          href={waLink(
            `${mensagemWhatsApp}\n\n*Nome:* ${nome}\n*Telefone:* ${tel}\n*Curso de interesse:* ${curso || "A definir"}`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-6"
        >
          <Icon name="whatsapp" className="h-5 w-5" />
          Abrir WhatsApp
        </a>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-semibold text-navy-400 underline-offset-2 hover:underline"
        >
          Enviar outra inscrição
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      name="matricula-iesc"
      method="POST"
      data-netlify="true"
      className="rounded-3xl bg-white p-6 shadow-card sm:p-8"
    >
      {/* honeypot + identificação p/ Netlify Forms */}
      <input type="hidden" name="form-name" value="matricula-iesc" />
      <p className="hidden">
        <label>
          Não preencha: <input name="bot-field" />
        </label>
      </p>

      <h3 className="font-display text-2xl font-bold text-navy">{copy.formulario.titulo}</h3>
      <p className="mt-2 text-sm text-navy-400">{copy.formulario.subtitulo}</p>

      <div className="mt-6 space-y-4">
        <Field label="Nome completo">
          <input
            required
            name="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome"
            className="input"
            autoComplete="name"
          />
        </Field>

        <Field label="Telefone / WhatsApp">
          <input
            required
            name="telefone"
            value={tel}
            onChange={(e) => setTel(maskPhone(e.target.value))}
            placeholder="(38) 90000-0000"
            inputMode="tel"
            className="input"
            autoComplete="tel"
          />
        </Field>

        <Field label="Curso de interesse">
          <select
            required
            name="curso"
            value={curso}
            onChange={(e) => setCurso(e.target.value)}
            className={`input ${curso ? "" : "text-navy-300"}`}
          >
            <option value="" disabled>
              Selecione um curso
            </option>
            {opcoesCurso.map((o) => (
              <option key={o} value={o} className="text-navy-800">
                {o}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <button type="submit" className="btn-primary mt-6 w-full animate-pulseGlow">
        <Icon name="whatsapp" className="h-5 w-5" />
        {copy.formulario.botao}
      </button>

      <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-navy-400">
        <Icon name="shield" className="h-4 w-4 text-green-600" />
        Seus dados estão seguros. Sem spam — atendimento direto pelo WhatsApp{" "}
        {contato.telefoneFormatado}.
      </p>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-navy-600">{label}</span>
      {children}
    </label>
  );
}
