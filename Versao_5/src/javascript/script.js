document.addEventListener("DOMContentLoaded", function () {

    /* =====================================
       1. MENU DE NAVEGAÇÃO MÓVEL
    ====================================== */

    const mobileBtn = document.getElementById("mobile_btn");
    const navList = document.getElementById("nav_list");

    if (mobileBtn && navList) {

        const menuIcon = mobileBtn.querySelector("i");

        function controlarMenu(aberto) {

            navList.classList.toggle("open", aberto);

            mobileBtn.setAttribute(
                "aria-expanded",
                String(aberto)
            );

            mobileBtn.setAttribute(
                "aria-label",
                aberto ? "Fechar menu" : "Abrir menu"
            );

            if (menuIcon) {

                menuIcon.classList.toggle(
                    "fa-bars", !aberto
                );

                menuIcon.classList.toggle(
                    "fa-xmark", aberto
                );

            }

        }

        // Abrir e fechar o menu

        mobileBtn.addEventListener("click", function () {

            const aberto =
                navList.classList.contains("open");

            controlarMenu(!aberto);

        });

        // Fechar ao seleccionar uma opção

        const navLinks = navList.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                controlarMenu(false);

            });

        });

        // Fechar ao clicar fora do menu

        document.addEventListener("click", function (event) {

            if (
                !navList.contains(event.target) &&
                !mobileBtn.contains(event.target)
            ) {

                controlarMenu(false);

            }

        });

        // Fechar com a tecla Escape

        document.addEventListener("keydown", function (event) {

            if (
                event.key === "Escape" &&
                navList.classList.contains("open")
            ) {

                controlarMenu(false);
                mobileBtn.focus();

            }

        });

        // Repor menu ao mudar o tamanho do ecrã

        window.addEventListener("resize", function () {

            if (window.innerWidth > 768) {

                controlarMenu(false);

            }

        });

    }


    /* =====================================
       2. PESQUISA E FILTRO DOS PRODUTOS
    ====================================== */

    const pesquisa = document.getElementById(
        "pesquisa_produto"
    );

    const filtroCategoria = document.getElementById(
        "filtro_categoria"
    );

    const tabela = document.getElementById(
        "tabela_produtos"
    );

    const limparFiltros = document.getElementById(
        "limpar_filtros"
    );

    const semResultados = document.getElementById(
        "sem_resultados"
    );

    const totalProdutos = document.getElementById(
        "total_produtos"
    );


    // Executar apenas na página de serviços

    if (pesquisa && filtroCategoria && tabela) {

        // Obter todas as linhas dos produtos

        const linhas = tabela.querySelectorAll("tbody tr");


        /* =================================
           NORMALIZAR TEXTO
        ================================== */

        function normalizarTexto(texto) {

            return texto
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .trim();

        }


        /* =================================
           FILTRAR PRODUTOS
        ================================== */

        function filtrarProdutos() {

            const textoPesquisa = normalizarTexto(
                pesquisa.value
            );

            const categoriaSelecionada =
                filtroCategoria.value;

            let quantidadeVisivel = 0;


            linhas.forEach(function (linha) {

                // Obter o nome do produto

                const nomeProduto = normalizarTexto(
                    linha.cells[1].textContent
                );

                // Obter a categoria

                const categoriaProduto =
                    linha.dataset.categoria;


                // Verificar pesquisa

                const correspondePesquisa =
                    nomeProduto.includes(textoPesquisa);


                // Verificar categoria

                const correspondeCategoria =
                    categoriaSelecionada === "todos" ||
                    categoriaProduto === categoriaSelecionada;


                // Mostrar ou ocultar a linha

                const mostrar =
                    correspondePesquisa &&
                    correspondeCategoria;

                linha.hidden = !mostrar;


                // Contabilizar produtos

                if (mostrar) {

                    quantidadeVisivel++;

                }

            });


            // Mostrar mensagem quando não existem resultados

            if (semResultados) {

                semResultados.hidden =
                    quantidadeVisivel !== 0;

            }


            // Actualizar quantidade apresentada

            if (totalProdutos) {

                totalProdutos.textContent =
                    quantidadeVisivel === 1
                        ? "1 produto apresentado."
                        : quantidadeVisivel +
                          " produtos apresentados.";

            }

        }


        /* =================================
           EVENTOS DOS FILTROS
        ================================== */

        // Pesquisar durante a introdução do texto

        pesquisa.addEventListener(
            "input",
            filtrarProdutos
        );


        // Filtrar quando a categoria é alterada

        filtroCategoria.addEventListener(
            "change",
            filtrarProdutos
        );


        /* =================================
           LIMPAR FILTROS
        ================================== */

        if (limparFiltros) {

            limparFiltros.addEventListener(
                "click",
                function () {

                    pesquisa.value = "";

                    filtroCategoria.value = "todos";

                    filtrarProdutos();

                    pesquisa.focus();

                }
            );

        }


        // Executar na abertura da página

        filtrarProdutos();

    }

});
/* =========================================
   FORMULÁRIO DE CONTACTO
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    // Identificar o formulário
    const formulario = document.getElementById(
        "form_contacto"
    );

    // Identificar a mensagem de estado
    const estadoFormulario = document.getElementById(
        "estado-formulario"
    );

    // Executar apenas na página de contactos
    if (formulario && estadoFormulario) {

        /* =================================
           SUBMISSÃO DO FORMULÁRIO
        ================================== */

        formulario.addEventListener("submit", function (event) {

            // Impedir o envio dos dados
            event.preventDefault();

            // Verificar os campos obrigatórios
            if (!formulario.checkValidity()) {

                formulario.reportValidity();

                return;

            }

            // Apresentar a mensagem
            estadoFormulario.textContent =
                "Demonstração concluída com sucesso. " +
                "Nenhuma mensagem foi enviada.";

            estadoFormulario.hidden = false;

        });


        /* =================================
           LIMPAR FORMULÁRIO
        ================================== */

        formulario.addEventListener("reset", function () {

            // Ocultar a mensagem
            estadoFormulario.hidden = true;

        });


        /* =================================
           ALTERAÇÃO DOS CAMPOS
        ================================== */

        formulario.addEventListener("input", function () {

            // Ocultar a mensagem anterior
            estadoFormulario.hidden = true;

        });

    }

});