// =============================================================
//  IESC — LP 01 · CURSOS TÉCNICOS
//  Ponto único de configuração de conteúdo, contato e oferta.
//  Edite aqui sem mexer nos componentes.
// =============================================================

export const contato = {
  // Telefone informado pela escola (Montes Claros - 38)
  telefone: "3832208924",
  telefoneFormatado: "(38) 3220-8924",
  // Número usado nos botões de WhatsApp (formato internacional, só dígitos).
  // ⚠️ TROCAR pelo WhatsApp REAL da escola (celular). O número acima é fixo/landline.
  whatsapp: "553832208924",
  endereco: "R. Correia Machado, 865 — Centro, Montes Claros/MG",
  instagram: "https://instagram.com/iescmontesclaros",
};

export const oferta = {
  precoDe: "149,90",
  precoPor: "69,90",
  validade: "de 19/06 a 03/07",
  // Data/hora final da promoção para o contador regressivo (horário local)
  fimPromocao: "2026-07-03T23:59:59",
  inicioAulas: "10 de agosto",
  inicioAulasCurto: "10/08",
};

export const mensagemWhatsApp =
  "Olá! Vim pela página dos *Cursos Técnicos do IESC* e quero garantir minha matrícula promocional de R$ 69,90.";

export type Curso = {
  nome: string;
  turno: string;
  descricao: string;
  imagem: string;
  destaque?: boolean;
};

export const cursos: Curso[] = [
  {
    nome: "Técnico em Enfermagem",
    turno: "Turmas Matutino e Noturno",
    descricao:
      "Forme-se em uma das profissões que mais contratam na saúde, com aulas práticas em laboratório. Escolha a turma que cabe na sua rotina.",
    imagem: "/img/tecnica-enfermagem.jpg",
    destaque: true,
  },
  {
    nome: "Técnico em Farmácia",
    turno: "Noturno",
    descricao:
      "Atue em farmácias, drogarias, indústria e laboratórios com uma formação valorizada pelo mercado.",
    imagem: "/img/estudante-farmacia.jpg",
  },
];

export const beneficios: { titulo: string; texto: string; icon: string }[] = [
  {
    titulo: "Formação reconhecida",
    texto: "Certificação válida em todo o território nacional.",
    icon: "shield",
  },
  {
    titulo: "Professores experientes",
    texto: "Profissionais que atuam na área e ensinam na prática.",
    icon: "users",
  },
  {
    titulo: "Aulas práticas",
    texto: "Laboratórios equipados para você aprender fazendo.",
    icon: "flask",
  },
  {
    titulo: "Mercado em alta",
    texto: "Alta demanda por profissionais técnicos da saúde.",
    icon: "trending",
  },
  {
    titulo: "Inserção rápida",
    texto: "Formação que abre portas para o emprego com agilidade.",
    icon: "rocket",
  },
];

export const porqueIesc: { titulo: string; texto: string }[] = [
  {
    titulo: "Anos formando profissionais",
    texto: "Tradição e credibilidade na educação técnica em saúde.",
  },
  {
    titulo: "Estrutura completa",
    texto: "Ambientes preparados para aulas teóricas e práticas.",
  },
  {
    titulo: "Ensino focado no mercado",
    texto: "Conteúdo conectado à realidade de quem contrata.",
  },
  {
    titulo: "Certificação reconhecida",
    texto: "Diploma que tem valor onde você quiser trabalhar.",
  },
];

export const stats: { numero: string; rotulo: string }[] = [
  { numero: "+15", rotulo: "anos de tradição" },
  { numero: "4", rotulo: "turmas disponíveis" },
  { numero: "10/08", rotulo: "início das aulas" },
  { numero: "100%", rotulo: "foco no mercado" },
];

// Lista de opções do <select> do formulário (turmas matriculáveis)
export const opcoesCurso = [
  "Técnico em Enfermagem — Matutino",
  "Técnico em Enfermagem — Noturno",
  "Técnico em Farmácia — Noturno",
];

// Textos das seções (a mesma estrutura é usada nas duas LPs)
export const copy = {
  hero: {
    badge: `Início das aulas: ${oferta.inicioAulasCurto}`,
    titulo: "Sua carreira na área da saúde ",
    tituloDestaque: "começa agora.",
    subtitulo:
      "Matricule-se nos cursos técnicos mais procurados do mercado e aproveite a condição especial de lançamento.",
    cta: "Quero minha matrícula promocional",
    imagem: "/img/estudantes-corredor.jpg",
  },
  cursosSecao: {
    eyebrow: "Cursos disponíveis",
    titulo: "Escolha o curso técnico ideal para você",
    subtitulo:
      "Turmas com vagas limitadas e início em " + oferta.inicioAulas + ".",
  },
  beneficiosSecao: {
    eyebrow: "Por que fazer um técnico",
    titulo: "Uma formação que trabalha por você",
  },
  porqueSecao: {
    eyebrow: "Por que escolher o IESC?",
    titulo: "Tradição, estrutura e foco no mercado",
    imagem: "/img/campus-recepcao.jpg",
  },
  finalCta: {
    titulo: "Garanta sua vaga pagando apenas R$ 69,90 na matrícula",
    subtitulo:
      "As vagas são limitadas e as turmas iniciam em " +
      oferta.inicioAulas +
      ". Não deixe sua oportunidade passar.",
    botao: "Quero minha matrícula promocional",
  },
  formulario: {
    titulo: "Garanta sua matrícula promocional",
    subtitulo:
      "Preencha seus dados e nossa equipe entra em contato pelo WhatsApp para finalizar sua matrícula.",
    botao: "QUERO MINHA MATRÍCULA PROMOCIONAL",
  },
};

