/* =========================================
   ESPLANADA MORABEZA
========================================= */

"use strict";


/* =========================================
   AGUARDAR O CARREGAMENTO DO HTML
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    inicializarMenu();

    inicializarCabecalho();

    inicializarAncoras();

    inicializarFiltros();

    inicializarFormulario();

});


/* =========================================
   1. MENU MÓVEL
========================================= */

function inicializarMenu() {


    /* =====================================
       1.1. IDENTIFICAR OS ELEMENTOS
    ===================================== */

    const navbar = document.getElementById(
        "navbar"
    );

    const mobileBtn = document.getElementById(
        "mobile_btn"
    );

    const navList = document.getElementById(
        "nav_list"
    );


    // Verificar se os elementos existem

    if (!navbar || !mobileBtn || !navList) {

        return;

    }


    // Identificar o ícone do botão

    const icone = mobileBtn.querySelector("i");


    // Identificar o tamanho do ecrã

    const ecraMovel = window.matchMedia(
        "(max-width: 768px)"
    );


    /* =====================================
       1.2. CONTROLAR ABERTURA DO MENU
    ===================================== */

    function controlarMenu(aberto) {


        // Adicionar ou remover classe open

        navList.classList.toggle(
            "open",
            aberto
        );


        // Actualizar estado de acessibilidade

        mobileBtn.setAttribute(
            "aria-expanded",
            String(aberto)
        );


        // Actualizar descrição do botão

        mobileBtn.setAttribute(
            "aria-label",
            aberto
                ? "Fechar menu"
                : "Abrir menu"
        );


        // Alterar ícone do menu

        if (icone) {

            icone.classList.toggle(
                "fa-bars",
                !aberto
            );

            icone.classList.toggle(
                "fa-xmark",
                aberto
            );

        }

    }


    /* =====================================
       1.3. ESTADO INICIAL
    ===================================== */

    controlarMenu(false);


    // Informar ao CSS que o menu
    // foi inicializado correctamente

    navbar.classList.add("menu-pronto");


    /* =====================================
       1.4. ABRIR E FECHAR O MENU
    ===================================== */

    mobileBtn.addEventListener(
        "click",
        function () {

            if (!ecraMovel.matches) {

                return;

            }


            // Verificar se está aberto

            const menuAberto =
                navList.classList.contains("open");


            // Inverter o estado

            controlarMenu(!menuAberto);

        }
    );


    /* =====================================
       1.5. FECHAR AO ESCOLHER UMA OPÇÃO
    ===================================== */

    const linksMenu =
        navList.querySelectorAll("a");


    linksMenu.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                if (ecraMovel.matches) {

                    controlarMenu(false);

                }

            }
        );

    });


    /* =====================================
       1.6. FECHAR AO CLICAR FORA DO MENU
    ===================================== */

    document.addEventListener(
        "click",
        function (event) {

            const menuAberto =
                navList.classList.contains("open");


            if (
                ecraMovel.matches &&
                menuAberto &&
                !navbar.contains(event.target)
            ) {

                controlarMenu(false);

            }

        }
    );


    /* =====================================
       1.7. FECHAR COM A TECLA ESCAPE
    ===================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                navList.classList.contains("open")
            ) {

                controlarMenu(false);


                // Repor foco no botão

                mobileBtn.focus();

            }

        }
    );


    /* =====================================
       1.8. ALTERAÇÃO DO TAMANHO DO ECRÃ
    ===================================== */

    ecraMovel.addEventListener(
        "change",
        function () {

            const focoNoMenu =
                navList.contains(document.activeElement);

            const focoNoBotao =
                document.activeElement === mobileBtn;


            // Repor estado inicial

            controlarMenu(false);


            // Manter uma posição de foco válida

            if (ecraMovel.matches && focoNoMenu) {

                mobileBtn.focus();

            }

            if (!ecraMovel.matches && focoNoBotao) {

                const primeiroLink =
                    navList.querySelector("a");

                if (primeiroLink) {

                    primeiroLink.focus();

                }

            }

        }
    );

}


/* =========================================
   2. CABEÇALHO E DESLOCAMENTO
========================================= */

function inicializarCabecalho() {


    /* =====================================
       2.1. IDENTIFICAR O CABEÇALHO
    ===================================== */

    const header = document.querySelector(
        "body > header"
    );


    if (!header) {

        return;

    }


    /* =====================================
       2.2. APLICAR SOMBRA AO CABEÇALHO
    ===================================== */

    function actualizarCabecalho() {

        if (window.scrollY > 0) {

            header.style.boxShadow =
                "0 3px 8px rgba(0, 0, 0, 0.10)";

        } else {

            header.style.boxShadow = "none";

        }

    }


    // Actualizar durante o deslocamento

    window.addEventListener(
        "scroll",
        actualizarCabecalho,
        { passive: true }
    );


    // Executar ao carregar a página

    actualizarCabecalho();


    /* =====================================
       2.3. CALCULAR ALTURA DO CABEÇALHO

       Evita que as secções fiquem
       escondidas atrás do header.
    ===================================== */

    function actualizarEspacamento() {

        const alturaCabecalho =
            Math.ceil(
                header.getBoundingClientRect().height
            );


        document.documentElement.style.scrollPaddingTop =
            (alturaCabecalho + 15) + "px";

    }


    // Actualizar espaçamento inicial

    actualizarEspacamento();


    // Actualizar ao redimensionar a janela

    window.addEventListener(
        "resize",
        actualizarEspacamento,
        { passive: true }
    );


    // Detectar alterações na altura
    // do cabeçalho e do menu móvel

    if ("ResizeObserver" in window) {

        const observador =
            new ResizeObserver(
                actualizarEspacamento
            );

        observador.observe(header);

    }

}


/* =========================================
   3. NAVEGAÇÃO POR ÂNCORAS
========================================= */

function inicializarAncoras() {


    /* =====================================
       3.1. IDENTIFICAR LIGAÇÕES INTERNAS
    ===================================== */

    const linksInternos =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    /* =====================================
       3.2. IDENTIFICAR PREFERÊNCIA
       DE MOVIMENTO REDUZIDO
    ===================================== */

    const movimentoReduzido =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );


    /* =====================================
       3.3. NAVEGAÇÃO PARA AS SECÇÕES
    ===================================== */

    linksInternos.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {


                // Permitir abertura normal com
                // teclas modificadoras

                if (
                    event.defaultPrevented ||
                    event.ctrlKey ||
                    event.metaKey ||
                    event.shiftKey ||
                    event.altKey
                ) {

                    return;

                }


                // Obter o destino da ligação

                const href =
                    link.getAttribute("href");


                if (!href || href === "#") {

                    return;

                }


                // Obter identificador da secção

                let identificador;

                try {

                    identificador =
                        decodeURIComponent(
                            href.substring(1)
                        );

                } catch (erro) {

                    return;

                }


                // Identificar secção de destino

                const destino =
                    document.getElementById(
                        identificador
                    );


                if (!destino) {

                    return;

                }


                // Impedir deslocamento padrão

                event.preventDefault();


                // Fechar o menu móvel, caso aberto

                const navList =
                    document.getElementById("nav_list");

                const mobileBtn =
                    document.getElementById("mobile_btn");


                if (
                    navList &&
                    mobileBtn &&
                    navList.classList.contains("open")
                ) {

                    mobileBtn.click();

                }


                // Calcular a altura actual do header

                const header =
                    document.querySelector("body > header");


                if (header) {

                    document.documentElement.style.scrollPaddingTop =
                        (Math.ceil(
                            header.getBoundingClientRect().height
                        ) + 15) + "px";

                }


                // Actualizar a âncora no endereço

                if (window.location.hash !== href) {

                    window.history.pushState(
                        null,
                        "",
                        href
                    );

                }


                // Permitir foco na secção

                if (!destino.hasAttribute("tabindex")) {

                    destino.setAttribute(
                        "tabindex",
                        "-1"
                    );

                }


                // Transferir foco para o destino

                destino.focus({
                    preventScroll: true
                });


                // Deslocar até à secção

                destino.scrollIntoView({

                    behavior:
                        movimentoReduzido.matches
                            ? "instant"
                            : "smooth",

                    block: "start"

                });

            }
        );

    });

}


/* =========================================
   4. PESQUISA E FILTRO DOS PRODUTOS
========================================= */

function inicializarFiltros() {


    /* =====================================
       4.1. IDENTIFICAR ELEMENTOS
    ===================================== */

    const pesquisa =
        document.getElementById(
            "pesquisa_produto"
        );


    const filtroCategoria =
        document.getElementById(
            "filtro_categoria"
        );


    const tabela =
        document.getElementById(
            "tabela_produtos"
        );


    const limparFiltros =
        document.getElementById(
            "limpar_filtros"
        );


    const semResultados =
        document.getElementById(
            "sem_resultados"
        );


    const totalProdutos =
        document.getElementById(
            "total_produtos"
        );


    /* =====================================
       4.2. VERIFICAR A PÁGINA
    ===================================== */

    if (
        !pesquisa ||
        !filtroCategoria ||
        !tabela
    ) {

        return;

    }


    /* =====================================
       4.3. OBTER PRODUTOS DA TABELA
    ===================================== */

    const linhas =
        tabela.querySelectorAll(
            "tbody tr[data-categoria]"
        );


    /* =====================================
       4.4. NORMALIZAR TEXTO

       Permite pesquisar sem acentos
       e sem distinguir maiúsculas
       de minúsculas.
    ===================================== */

    function normalizarTexto(texto) {

        return String(texto)

            .normalize("NFD")

            .replace(/[\u0300-\u036f]/g, "")

            .toLowerCase()

            .trim()

            .replace(/\s+/g, " ");

    }


    /* =====================================
       4.5. FILTRAR PRODUTOS
    ===================================== */

    function filtrarProdutos() {


        // Obter texto pesquisado

        const textoPesquisa =
            normalizarTexto(
                pesquisa.value
            );


        // Obter categoria seleccionada

        const categoriaSeleccionada =
            normalizarTexto(
                filtroCategoria.value
            );


        // Contador dos produtos apresentados

        let quantidadeVisivel = 0;


        /* =================================
           PERCORRER A TABELA
        ================================= */

        linhas.forEach(function (linha) {


            // Obter nome do produto

            const nomeProduto =
                normalizarTexto(
                    linha.cells[1]?.textContent || ""
                );


            // Obter categoria do produto

            const categoriaProduto =
                normalizarTexto(
                    linha.dataset.categoria || ""
                );


            // Comparar o nome

            const correspondePesquisa =
                nomeProduto.includes(textoPesquisa);


            // Comparar a categoria

            const correspondeCategoria =

                categoriaSeleccionada === "todos" ||

                categoriaSeleccionada === "" ||

                categoriaProduto === categoriaSeleccionada;


            // Combinar os dois filtros

            const mostrar =

                correspondePesquisa &&

                correspondeCategoria;


            // Mostrar ou ocultar o produto

            linha.hidden = !mostrar;


            // Actualizar o contador

            if (mostrar) {

                quantidadeVisivel++;

            }

        });


        /* =================================
           MENSAGEM SEM RESULTADOS
        ================================= */

        if (semResultados) {

            semResultados.hidden =
                quantidadeVisivel !== 0;

        }


        /* =================================
           ACTUALIZAR TOTAL DE PRODUTOS
        ================================= */

        if (totalProdutos) {

            totalProdutos.textContent =

                quantidadeVisivel === 1

                    ? "1 produto apresentado."

                    : quantidadeVisivel +
                      " produtos apresentados.";

        }

    }


    /* =====================================
       4.6. EVENTO DE PESQUISA
    ===================================== */

    pesquisa.addEventListener(

        "input",

        filtrarProdutos

    );


    /* =====================================
       4.7. EVENTO DE CATEGORIA
    ===================================== */

    filtroCategoria.addEventListener(

        "change",

        filtrarProdutos

    );


    /* =====================================
       4.8. LIMPAR FILTROS
    ===================================== */

    if (limparFiltros) {

        limparFiltros.addEventListener(
            "click",
            function (event) {


                // Evitar submissão acidental

                event.preventDefault();


                // Limpar pesquisa

                pesquisa.value = "";


                // Seleccionar todas as categorias

                const opcaoTodos =
                    Array.from(
                        filtroCategoria.options
                    ).find(function (opcao) {

                        return opcao.value === "todos";

                    });


                if (opcaoTodos) {

                    filtroCategoria.value = "todos";

                } else {

                    filtroCategoria.selectedIndex = 0;

                }


                // Actualizar tabela

                filtrarProdutos();


                // Repor foco na pesquisa

                pesquisa.focus();

            }
        );

    }


    /* =====================================
       4.9. EXECUTAR FILTRO INICIAL
    ===================================== */

    filtrarProdutos();

}


/* =========================================
   5. FORMULÁRIO DE CONTACTO

   Formulário demonstrativo.

   Não envia mensagens.
   Não guarda dados.
   Não utiliza base de dados.
========================================= */

function inicializarFormulario() {


    /* =====================================
       5.1. IDENTIFICAR ELEMENTOS
    ===================================== */

    const formulario =
        document.getElementById(
            "form_contacto"
        );


    const estadoFormulario =
        document.getElementById(
            "estado-formulario"
        );


    if (!formulario) {

        return;

    }


    const nome =
        document.getElementById("nome");


    const mensagem =
        document.getElementById("mensagem");


    const botaoSubmeter =
        formulario.querySelector(
            '[type="submit"]'
        );


    /* =====================================
       5.2. IMPEDIR ENVIO DOS DADOS
    ===================================== */

    formulario.addEventListener(
        "submit",
        function (event) {


            // Impedir submissão ao servidor

            event.preventDefault();


            // Ocultar mensagem anterior

            if (estadoFormulario) {

                estadoFormulario.hidden = true;

            }


            /* =============================
               5.3. VALIDAR NOME
            ============================== */

            if (nome) {

                nome.setCustomValidity("");


                // Impedir nomes com espaços vazios

                if (nome.value.trim() === "") {

                    nome.setCustomValidity(

                        "Introduza um nome válido."

                    );

                }

            }


            /* =============================
               5.4. VALIDAR MENSAGEM
            ============================== */

            if (mensagem) {

                mensagem.setCustomValidity("");


                if (mensagem.value.trim() === "") {

                    mensagem.setCustomValidity(

                        "Introduza uma mensagem válida."

                    );

                }

            }


            /* =============================
               5.5. VALIDAR FORMULÁRIO
            ============================== */

            if (!formulario.checkValidity()) {

                formulario.reportValidity();

                return;

            }


            /* =============================
               5.6. APRESENTAR RESULTADO
            ============================== */

            if (estadoFormulario) {

                estadoFormulario.textContent =

                    "Demonstração concluída com sucesso. " +

                    "Nenhuma mensagem foi enviada ou " +

                    "armazenada.";


                estadoFormulario.hidden = false;

            }

        }
    );


    /* =====================================
       5.7. LIMPAR MENSAGENS DE VALIDAÇÃO
    ===================================== */

    formulario.addEventListener(
        "input",
        function (event) {

            if (
                typeof event.target.setCustomValidity
                === "function"
            ) {

                event.target.setCustomValidity("");

            }


            if (estadoFormulario) {

                estadoFormulario.hidden = true;

            }

        }
    );


    /* =====================================
       5.8. ALTERAÇÃO DO ASSUNTO
    ===================================== */

    formulario.addEventListener(
        "change",
        function () {

            if (estadoFormulario) {

                estadoFormulario.hidden = true;

            }

        }
    );


    /* =====================================
       5.9. LIMPAR FORMULÁRIO
    ===================================== */

    formulario.addEventListener(
        "reset",
        function () {


            // Identificar os campos

            const campos =
                formulario.querySelectorAll(
                    "input, select, textarea"
                );


            // Limpar erros personalizados

            campos.forEach(function (campo) {

                campo.setCustomValidity("");

            });


            // Ocultar mensagem de estado

            if (estadoFormulario) {

                estadoFormulario.hidden = true;

            }

        }
    );


    /* =====================================
       5.10. ACTIVAR BOTÃO DE TESTE

       Apenas depois de configurar
       a protecção contra submissão.
    ===================================== */

    if (botaoSubmeter) {

        botaoSubmeter.disabled = false;

    }

}