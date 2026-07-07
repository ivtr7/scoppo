/* ============================================================
       DADOS DINÂMICOS DO SITE
       (mesma estrutura do site original, agora em objetos JS)
       ============================================================ */

    // Lista das 6 especialidades exibidas na home
    const especialidades = [
      { titulo: "Gastroenterologia", descricao: "Prevenção, diagnóstico e tratamento das doenças do aparelho digestivo, com avaliação clínica completa." },
      { titulo: "Endoscopia Digestiva Alta", descricao: "Exame que permite avaliar esôfago, estômago e duodeno com precisão e segurança." },
      { titulo: "Colonoscopia", descricao: "Avaliação do intestino grosso para rastreio, diagnóstico e tratamento de alterações." },
      { titulo: "Retossigmoidoscopia", descricao: "Exame endoscópico do reto e da porção final do cólon, indicado em casos selecionados." },
      { titulo: "Anuscopia", descricao: "Avaliação do canal anal para diagnóstico de afecções proctológicas." },
      { titulo: "Endoscopia Terapêutica", descricao: "Procedimentos endoscópicos para tratamento de lesões e condições do aparelho digestivo." }
    ];

    // Equipe de profissionais da clínica
    const baseAssets = "https://id-preview--37d96163-4dd1-498a-a8c1-110583e6abce.lovable.app/__l5e/assets-v1";
    const equipe = [
      { nome: "Dr. Túlio Medeiros",        funcao: "Direção médica · Gastroenterologia e Endoscopia", img: baseAssets + "/c9407aa9-7359-44a8-9b39-a36fe312a6ea/tulio.jpeg" },
      { nome: "Dra. Ariane Longo",         funcao: "Nutricionista",                                   img: baseAssets + "/2630047c-7fdc-4424-b88f-e06e8c0d07fa/ariane.jpg" },
      { nome: "Dra. Claudia Gonçalves",    funcao: "Nutrição · Reeducação alimentar",                 img: baseAssets + "/22e3ec63-7774-4ed2-a574-3275b63e2518/claudia.jpg" },
      { nome: "Dra. Helen Coral",          funcao: "Psicologia Clínica",                              img: baseAssets + "/0d688eda-797a-4a63-bdc8-d3e89b4fdd2a/helen.jpg" },
      { nome: "Dr. Marcos Moraes de Oliveira", funcao: "Preparador Físico",                           img: baseAssets + "/1b1da8bd-33a8-4780-a847-f38f5f9a4a3c/marcos.jpg" }
    ];

    // Diferenciais da clínica
    const diferenciais = [
      "Atendimento personalizado e humanizado",
      "Mais de 20 anos de experiência",
      "Procedimentos minimamente invasivos",
      "Tecnologia avançada de diagnóstico",
      "Acompanhamento em toda a jornada",
      "Integração saúde digestiva e peso",
      "Equipe multiprofissional",
      "Foco em resultados sustentáveis",
      "Baseado em evidências científicas"
    ];

    /* ============================================================
       RENDERIZAÇÃO – MONTA OS CARDS NA PÁGINA
       ============================================================ */

    // Renderiza os cartões de especialidades
    function renderizarEspecialidades() {
      const container = document.getElementById("gridEspecialidades");
      const html = especialidades.map(function (item, indice) {
        const numero = String(indice + 1).padStart(2, "0");
        return (
          '<article class="cartao-especialidade">' +
            '<div class="cartao-numero"><span>' + numero + '</span><span class="linha"></span></div>' +
            '<h3>' + item.titulo + '</h3>' +
            '<p>' + item.descricao + '</p>' +
          '</article>'
        );
      }).join("");
      container.innerHTML = html;
    }

    // Renderiza os cartões da equipe
    function renderizarEquipe() {
      const container = document.getElementById("gridEquipe");
      const html = equipe.map(function (pessoa) {
        return (
          '<article class="cartao-membro">' +
            '<img src="' + pessoa.img + '" alt="' + pessoa.nome + '" />' +
            '<div class="cartao-membro-info">' +
              '<p class="cartao-membro-nome">' + pessoa.nome + '</p>' +
              '<p class="cartao-membro-funcao">' + pessoa.funcao + '</p>' +
            '</div>' +
          '</article>'
        );
      }).join("");
      container.innerHTML = html;
    }

    // Renderiza a lista de diferenciais
    function renderizarDiferenciais() {
      const container = document.getElementById("listaDiferenciais");
      const iconeCheck = '<svg class="checagem" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
      const html = diferenciais.map(function (texto) {
        return '<li class="item-diferencial">' + iconeCheck + '<span>' + texto + '</span></li>';
      }).join("");
      container.innerHTML = html;
    }

    /* ============================================================
       INTERAÇÕES DA INTERFACE
       ============================================================ */

    // Alterna a exibição do menu mobile
    function configurarMenuMobile() {
      const botao = document.getElementById("botaoMenu");
      const menu = document.getElementById("navMobile");
      botao.addEventListener("click", function () {
        const aberto = menu.classList.toggle("aberto");
        botao.setAttribute("aria-expanded", aberto ? "true" : "false");
        botao.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
      });
      // Fecha o menu ao clicar em qualquer link interno
      menu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
          menu.classList.remove("aberto");
          botao.setAttribute("aria-expanded", "false");
        });
      });
    }

    // Atualiza o ano exibido no rodapé
    function atualizarAno() {
      document.getElementById("anoAtual").textContent = new Date().getFullYear();
    }

    // Inicialização geral ao carregar a página
    document.addEventListener("DOMContentLoaded", function () {
      renderizarEspecialidades();
      renderizarEquipe();
      renderizarDiferenciais();
      configurarMenuMobile();
      atualizarAno();
    });