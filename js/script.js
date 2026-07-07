/* =========================================================
   Script principal do site Scoppo Integrativa
   Responsável por:
   - Injeção do cabeçalho e rodapé
   - Alternância do menu mobile
   - Marcação do link ativo conforme a página
   - Atualização automática do ano no rodapé
   ========================================================= */

// URL do WhatsApp usada em vários pontos do site
const URL_WHATSAPP =
  "https://wa.me/5511975155308?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20na%20Scoppo%20Integrativa.";

// Caminhos dos ativos (imagens hospedadas na CDN interna)
const ATIVOS = {
  logoBranca: "assets/logo-branca.png",
  clinica: "assets/foto-clinica.jpg",
  tulio: "assets/tulio1.jpeg",
  ariane: "assets/ariane-longo.jpg",
  claudia: "assets/claudia-gonçalves.jpg",
  helen: "assets/helen-coral.jpg",
  marcos: "assets/Marcos.jpg",
};

// Links da navegação principal
const LINKS_NAV = [
  { href: "index.html", rotulo: "Início" },
  { href: "clinica.html", rotulo: "Clínica" },
  { href: "especialidades.html", rotulo: "Especialidades" },
  { href: "emagrecimento.html", rotulo: "Emagrecimento" },
  { href: "equipe.html", rotulo: "Equipe" },
  { href: "estrutura.html", rotulo: "Estrutura" },
  { href: "contato.html", rotulo: "Contato" },
];

// Dados de especialidades exibidos na home e página específica
const ESPECIALIDADES = [
  { titulo: "Gastroenterologia", descricao: "Prevenção, diagnóstico e tratamento das doenças do aparelho digestivo, com avaliação clínica completa." },
  { titulo: "Endoscopia Digestiva Alta", descricao: "Exame que permite avaliar esôfago, estômago e duodeno com precisão e segurança." },
  { titulo: "Colonoscopia", descricao: "Avaliação do intestino grosso para rastreio, diagnóstico e tratamento de alterações." },
  { titulo: "Retossigmoidoscopia", descricao: "Exame endoscópico do reto e da porção final do cólon, indicado em casos selecionados." },
  { titulo: "Anuscopia", descricao: "Avaliação do canal anal para diagnóstico de afecções proctológicas." },
  { titulo: "Endoscopia Terapêutica", descricao: "Procedimentos endoscópicos para tratamento de lesões e condições do aparelho digestivo." },
  { titulo: "Endoscopia Bariátrica", descricao: "Procedimentos minimamente invasivos para auxiliar no tratamento da obesidade e reganho de peso." },
  { titulo: "Tratamento Clínico da Obesidade", descricao: "Abordagem médica integrada para controle de peso e melhora da saúde metabólica." },
  { titulo: "Nutrição Clínica", descricao: "Acompanhamento nutricional individualizado, integrado ao plano médico de cada paciente." },
  { titulo: "Psicologia Aplicada ao Emagrecimento", descricao: "Apoio para o desenvolvimento de hábitos saudáveis, controle emocional e mudanças comportamentais." },
  { titulo: "Endocrinologia", descricao: "Avaliação hormonal e metabólica integrada à jornada de cuidado." },
  { titulo: "Saúde Metabólica e Longevidade", descricao: "Avaliação de metabolismo, composição corporal, disposição e qualidade de vida." },
];

// Dados de tratamentos exibidos na página de emagrecimento
const TRATAMENTOS = [
  { numero: "01", titulo: "Balão Intragástrico", descricao: "Procedimento endoscópico que auxilia na reeducação alimentar e no controle de peso, acompanhado por equipe multiprofissional." },
  { numero: "02", titulo: "Gastroplastia Endoscópica", descricao: "Técnica minimamente invasiva que reduz a capacidade gástrica por via endoscópica, sem cortes externos." },
  { numero: "03", titulo: "Plasma de Argônio", descricao: "Recurso endoscópico utilizado em casos específicos, como reganho de peso após cirurgia bariátrica." },
  { numero: "04", titulo: "Tratamento Clínico da Obesidade", descricao: "Abordagem médica integrada, considerando histórico, metabolismo e hábitos de cada paciente." },
  { numero: "05", titulo: "Terapias Injetáveis", descricao: "Quando indicadas, integradas a um plano médico individualizado e seguro." },
  { numero: "06", titulo: "Acompanhamento Multiprofissional", descricao: "Nutrição, psicologia, avaliação física e suporte comportamental ao longo da jornada." },
];

// Perguntas frequentes exibidas na página de emagrecimento
const FAQ = [
  { pergunta: "Como sei qual tratamento é indicado para mim?", resposta: "A indicação depende de avaliação médica individualizada, considerando histórico clínico, exames, objetivos e hábitos." },
  { pergunta: "Os procedimentos endoscópicos exigem cortes ou internação prolongada?", resposta: "São procedimentos minimamente invasivos, realizados por via endoscópica, com protocolos modernos de segurança." },
  { pergunta: "Existe acompanhamento após o procedimento?", resposta: "Sim. O acompanhamento multiprofissional é parte central do tratamento, com foco em resultados sustentáveis." },
  { pergunta: "A Scoppo Integrativa garante resultados?", resposta: "Nenhum tratamento médico pode prometer resultado garantido. O foco é segurança, ciência e cuidado individualizado." },
];

// Equipe multiprofissional
const EQUIPE = [
  {
    nome: "Dr. Túlio Medeiros",
    funcao: "Direção médica · Gastroenterologia e Endoscopia",
    bio: "Médico formado pela Universidade Federal da Paraíba, especialista em Gastroenterologia e Endoscopia Digestiva, com formação complementar em doenças funcionais digestivas pelo Hospital Israelita Albert Einstein e MBA em Gestão de Negócios de Saúde pela FGV. Mais de 20 anos de experiência em endoscopia avançada e procedimentos para tratamento da obesidade.",
    img: ATIVOS.tulio,
  },
  {
    nome: "Dra. Ariane Longo",
    funcao: "Nutricionista",
    registro: "CRN(3) 14801",
    bio: "Formada em Nutrição pelo Centro Universitário São Camilo (2003), especialista em Nutrição Clínica (2006), pós-graduada em Fitoterapia (CIN 2015) e em Obesidade e Cirurgia Bariátrica (CIN 2019). Mais de 20 anos de experiência em tratamento clínico, endoscópico e bariátrico da obesidade. Membro Efetivo SBCBM-Coesas e Integrated Member Health IFSO.",
    img: ATIVOS.ariane,
  },
  {
    nome: "Dra. Claudia Gonçalves",
    funcao: "Nutrição · Reeducação alimentar",
    registro: "CRN3 6305",
    bio: "Mais de 20 anos de experiência em nutrição clínica com abordagem comportamental para emagrecimento e desordens digestivas. Especialista em Nutrição Hospitalar em Cardiologia e Nutrição Clínica Funcional, com pós-graduação em andamento em Comportamento Alimentar. Foco em individualidade bioquímica e bem-estar sustentável.",
    img: ATIVOS.claudia,
  },
  {
    nome: "Dra. Helen Coral",
    funcao: "Psicologia Clínica",
    registro: "CRP 06/116711",
    bio: "Psicóloga clínica com mais de 10 anos de experiência, especialista em descontrole alimentar, transtornos alimentares, obesidade e ansiedade. Baseada em Terapia Cognitiva Comportamental, atua na identificação de pensamentos disfuncionais para destravar a mente e ajudar o paciente a superar o excesso de peso.",
    img: ATIVOS.helen,
  },
  {
    nome: "Dr. Marcos Moraes de Oliveira",
    funcao: "Preparador Físico",
    registro: "CREF 089845-G/SP",
    bio: "Profissional de Educação Física formado pela UEPA, mestre em Ciências Endocrinológicas e especialista em Fisiologia do Exercício pela UNIFESP, com especialização em Educação em Diabetes pela IDF. Docente do programa de pós-graduação em Medicina do Exercício da UNIFESP. Mais de 15 anos em obesidade e cirurgia bariátrica, com mais de 7 mil pacientes atendidos. Autor do livro Manual Prático do Preparador Físico Bariátrico.",
    img: ATIVOS.marcos,
  },
];

// Estrutura da clínica
const ESTRUTURA = [
  { titulo: "Recepção e acolhimento", descricao: "Ambiente projetado para receber o paciente com conforto e privacidade desde a chegada." },
  { titulo: "Consultórios equipados", descricao: "Espaços modernos, com infraestrutura para avaliações clínicas detalhadas." },
  { titulo: "Salas de procedimento", descricao: "Estrutura preparada para endoscopia digestiva e bariátrica com protocolos modernos." },
  { titulo: "Tecnologia de diagnóstico", descricao: "Equipamentos atualizados que apoiam diagnósticos precisos e minimamente invasivos." },
  { titulo: "Segurança e protocolos", descricao: "Processos rigorosos de higienização e segurança em todas as etapas." },
  { titulo: "Ambiente integrativo", descricao: "Espaço pensado para integrar saúde digestiva, emagrecimento e cuidado multiprofissional." },
];

// Blocos exibidos na página do Dr. Túlio
const BLOCOS_TULIO = [
  { titulo: "Formação", itens: ["Medicina — Universidade Federal da Paraíba", "Especialista em Gastroenterologia e Endoscopia Digestiva", "Formação em doenças funcionais digestivas — Hospital Israelita Albert Einstein", "MBA em Gestão de Negócios de Saúde — FGV"] },
  { titulo: "Sociedades", itens: ["Sociedade Brasileira de Endoscopia Digestiva", "Sociedade Brasileira de Motilidade Digestiva", "American Society for Gastrointestinal Endoscopy"] },
  { titulo: "Áreas de atuação", itens: ["Gastroenterologia", "Endoscopia Digestiva", "Endoscopia Bariátrica", "Balão Intragástrico", "Gastroplastia Endoscópica", "Tratamento da obesidade"] },
];

// Utilitário para escapar HTML em textos dinâmicos
function esc(str) {
  return String(str).replace(/[&<>"']/g, (c) => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]
  ));
}

// Cria e injeta o cabeçalho no elemento com id="cabecalho"
function montarCabecalho() {
  const alvo = document.getElementById("cabecalho");
  if (!alvo) return;
  const paginaAtual = (location.pathname.split("/").pop() || "index.html").toLowerCase();

  const linksHtml = LINKS_NAV.map((l) => {
    const ativo = l.href.toLowerCase() === paginaAtual ? "ativo" : "";
    return `<a href="${l.href}" class="${ativo}">${l.rotulo}</a>`;
  }).join("");

  const linksMobileHtml = LINKS_NAV.map((l) => {
    const ativo = l.href.toLowerCase() === paginaAtual ? "ativo" : "";
    return `<a href="${l.href}" class="${ativo}">${l.rotulo}</a>`;
  }).join("");

  alvo.innerHTML = `
    <header class="cabecalho">
      <div class="container cabecalho-inner">
        <a href="index.html" class="cabecalho-logo">
          <img src="${ATIVOS.logoBranca}" alt="Scoppo Integrativa" />
        </a>
        <nav class="cabecalho-nav">${linksHtml}</nav>
        <div class="cabecalho-acoes">
          <a href="${URL_WHATSAPP}" target="_blank" rel="noopener noreferrer"
             class="botao botao-marca pequeno">Agendar <span class="seta">→</span></a>
          <button type="button" class="botao-menu" id="botaoMenu" aria-label="Abrir menu">☰</button>
        </div>
      </div>
      <div class="menu-mobile" id="menuMobile">
        <div class="container menu-mobile-lista">${linksMobileHtml}</div>
      </div>
    </header>
  `;

  // Alterna a exibição do menu mobile
  const botao = document.getElementById("botaoMenu");
  const menu = document.getElementById("menuMobile");
  botao.addEventListener("click", () => menu.classList.toggle("aberto"));
}

// Cria e injeta a faixa CTA no elemento com id="cta"
function montarCtaBand() {
  const alvo = document.getElementById("cta");
  if (!alvo) return;
  alvo.innerHTML = `
    <section class="cta-faixa">
      <div class="container">
        <div class="cta-caixa">
          <div class="cta-conteudo">
            <div class="texto">
              <span class="sobrancelha">Agendamento</span>
              <h2>Dê o primeiro passo para cuidar da sua saúde.</h2>
              <p>Agende uma avaliação e entenda qual abordagem é mais adequada para o seu caso.</p>
            </div>
            <div class="cta-acoes">
              <a href="${URL_WHATSAPP}" target="_blank" rel="noopener noreferrer"
                 class="botao botao-marca">Agendar pelo WhatsApp</a>
              <a href="contato.html" class="botao botao-contorno">Falar com a clínica</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

// Cria e injeta o rodapé no elemento com id="rodape"
function montarRodape() {
  const alvo = document.getElementById("rodape");
  if (!alvo) return;
  alvo.innerHTML = `
    <footer class="rodape">
      <div class="container rodape-grid">
        <div>
          <div class="rodape-logo">
            <img src="${ATIVOS.logoBranca}" alt="Scoppo Integrativa" />
          </div>
          <p class="rodape-texto">
            Gastroenterologia, endoscopia digestiva, endoscopia bariátrica e emagrecimento saudável em Higienópolis, São Paulo.
          </p>
        </div>
        <div>
          <p class="rodape-titulo">Navegar</p>
          <ul>
            <li><a href="clinica.html">Clínica</a></li>
            <li><a href="especialidades.html">Especialidades</a></li>
            <li><a href="emagrecimento.html">Emagrecimento</a></li>
            <li><a href="equipe.html">Equipe</a></li>
            <li><a href="estrutura.html">Estrutura</a></li>
            <li><a href="contato.html">Contato</a></li>
          </ul>
        </div>
        <div>
          <p class="rodape-titulo">Contato</p>
          <ul>
            <li><a href="${URL_WHATSAPP}" target="_blank" rel="noopener noreferrer">WhatsApp (11) 97515-5308</a></li>
            <li><a href="tel:+551128835691">(11) 2883-5691</a></li>
            <li><a href="mailto:contato@clinicascoppo.com.br">contato@clinicascoppo.com.br</a></li>
            <li style="padding-top:4px">Rua Mato Grosso, 306<br />Higienópolis · São Paulo</li>
          </ul>
        </div>
      </div>
      <div class="rodape-base">
        <div class="container rodape-base-inner">
          <p>© <span id="ano"></span> Clínica Scoppo Integrativa</p>
          <p>Higienópolis · São Paulo</p>
        </div>
      </div>
    </footer>
  `;
  const ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();
}

// Renderiza cartões de especialidades em um contêiner
function renderizarEspecialidades(idContainer, limite) {
  const alvo = document.getElementById(idContainer);
  if (!alvo) return;
  const lista = typeof limite === "number" ? ESPECIALIDADES.slice(0, limite) : ESPECIALIDADES;
  alvo.innerHTML = lista.map((it, i) => `
    <article class="cartao">
      <div class="cartao-topo">
        <span class="cartao-numero">${String(i + 1).padStart(2, "0")}</span>
        <span class="cartao-linha"></span>
      </div>
      <h3>${esc(it.titulo)}</h3>
      <p>${esc(it.descricao)}</p>
      ${idContainer === "listaEspecialidadesCompleta"
        ? `<a href="${URL_WHATSAPP}" target="_blank" rel="noopener noreferrer" class="cartao-link">Agendar avaliação <span class="seta">→</span></a>`
        : ""}
    </article>
  `).join("");
}

// Renderiza cartões de tratamentos
function renderizarTratamentos() {
  const alvo = document.getElementById("listaTratamentos");
  if (!alvo) return;
  alvo.innerHTML = TRATAMENTOS.map((t) => `
    <article class="cartao superficie-2">
      <span class="cartao-numero">${esc(t.numero)}</span>
      <h3>${esc(t.titulo)}</h3>
      <p>${esc(t.descricao)}</p>
    </article>
  `).join("");
}

// Renderiza FAQ
function renderizarFaq() {
  const alvo = document.getElementById("listaFaq");
  if (!alvo) return;
  alvo.innerHTML = FAQ.map((f) => `
    <details>
      <summary><span>${esc(f.pergunta)}</span><span class="mais">+</span></summary>
      <p>${esc(f.resposta)}</p>
    </details>
  `).join("");
}

// Renderiza a equipe — modo preview (home) ou completa (página equipe)
function renderizarEquipe(idContainer, completa) {
  const alvo = document.getElementById(idContainer);
  if (!alvo) return;
  alvo.innerHTML = EQUIPE.map((p) => `
    <article class="card-pessoa${completa ? " completa" : ""}">
      <img src="${p.img}" alt="${esc(p.nome)}" loading="lazy" />
      <div class="info">
        <p class="nome">${esc(p.nome)}</p>
        <p class="funcao">${esc(p.funcao)}</p>
        ${completa && p.registro ? `<p class="registro">${esc(p.registro)}</p>` : ""}
        ${completa ? `<p class="bio">${esc(p.bio)}</p>` : ""}
      </div>
    </article>
  `).join("");
}

// Renderiza cartões da estrutura da clínica
function renderizarEstrutura() {
  const alvo = document.getElementById("listaEstrutura");
  if (!alvo) return;
  alvo.innerHTML = ESTRUTURA.map((s, i) => `
    <article class="cartao">
      <span class="cartao-numero">${String(i + 1).padStart(2, "0")}</span>
      <h3>${esc(s.titulo)}</h3>
      <p>${esc(s.descricao)}</p>
    </article>
  `).join("");
}

// Renderiza blocos da página Dr. Túlio
function renderizarBlocosTulio() {
  const alvo = document.getElementById("blocosTulio");
  if (!alvo) return;
  const blocos = BLOCOS_TULIO.map((b) => `
    <div class="bloco-tulio">
      <span class="sobrancelha">${esc(b.titulo)}</span>
      <ul>${b.itens.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>
    </div>
  `).join("");
  alvo.innerHTML = blocos + `
    <div class="bloco-tulio destaque">
      <span class="sobrancelha">Filosofia</span>
      <p>O emagrecimento deve ser consequência de uma transformação da saúde física e emocional. Por isso, cada paciente é avaliado individualmente, com foco em segurança, acolhimento e resultados sustentáveis.</p>
    </div>
  `;
}

// Inicialização — executada quando o DOM está pronto
document.addEventListener("DOMContentLoaded", () => {
  montarCabecalho();
  montarCtaBand();
  montarRodape();

  // Cada página chama apenas o que precisa via data-attributes no <body>
  const pagina = document.body.dataset.pagina;

  if (pagina === "home") {
    renderizarEspecialidades("listaEspecialidadesPreview", 6);
    renderizarEquipe("listaEquipePreview", false);
  }
  if (pagina === "especialidades") {
    renderizarEspecialidades("listaEspecialidadesCompleta");
  }
  if (pagina === "emagrecimento") {
    renderizarTratamentos();
    renderizarFaq();
  }
  if (pagina === "equipe") {
    renderizarEquipe("listaEquipeCompleta", true);
  }
  if (pagina === "estrutura") {
    renderizarEstrutura();
  }
  if (pagina === "dr-tulio") {
    renderizarBlocosTulio();
  }
});
