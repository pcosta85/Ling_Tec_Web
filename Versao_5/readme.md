# Esplanada Morabeza

## Universidade de Santiago

Departamento de Ciências da Saúde, Ambiente e Tecnologias

- Curso: Licenciatura em Engenharia Informática
- Unidade Curricular: Linguagem e Tecnologias Web
- Docente: Adelcides Monteiro Semedo
- Discente: Paulo Jorge Araújo Costa
- Número de estudante: 7517
- Ano letivo: 2026/2027
- Trabalho: Ficha de Exercícios 4
- Tema: Layouts, site responsivo e efeitos

---

# 1. Descrição do Projeto

O presente projeto consiste no desenvolvimento de um website
dedicado à Esplanada Morabeza, situada na Praça Alexandre
Albuquerque, no Plateau, Cidade da Praia, Cabo Verde.

O website tem como finalidade divulgar o estabelecimento,
apresentar a sua história, disponibilizar informações sobre
os serviços e produtos, apresentar preços indicativos e
facilitar o acesso aos contactos, horários e localização.

O projeto foi desenvolvido utilizando HTML5, CSS3 e
JavaScript, aplicando princípios de organização, usabilidade,
acessibilidade e design responsivo.

Nesta etapa foram implementadas as técnicas abordadas nas
Aulas 7 e 8 da unidade curricular de Linguagem e Tecnologias
Web, considerando os requisitos da Ficha de Exercícios 4.

---

# 2. Objetivos do Projeto

## 2.1. Objetivo Geral

Desenvolver um website informativo, funcional, organizado,
acessível e responsivo para a Esplanada Morabeza, utilizando
tecnologias fundamentais de desenvolvimento Web.

## 2.2. Objetivos Específicos

- Apresentar a Esplanada Morabeza.
- Divulgar a história do estabelecimento.
- Apresentar os serviços disponibilizados.
- Disponibilizar uma ementa organizada por categorias.
- Permitir a pesquisa e filtragem de produtos.
- Apresentar os preços indicativos em CVE.
- Disponibilizar os contactos e horários de funcionamento.
- Apresentar a localização geográfica do estabelecimento.
- Utilizar HTML5 semântico.
- Aplicar Flexbox e CSS Grid na organização dos conteúdos.
- Desenvolver páginas responsivas.
- Implementar transições e efeitos visuais discretos.
- Melhorar a acessibilidade através da navegação por teclado.
- Validar os documentos HTML e CSS.
- Utilizar Git e GitHub para o controlo de versões.

---

# 3. Páginas do Website

O projeto encontra-se organizado em quatro páginas principais.

| Página | Ficheiro | Descrição |
|---|---|---|
| Início | index.html | Apresentação e destaques |
| Sobre | sobre.html | História e importância da Esplanada |
| Serviços | servicos.html | Serviços, ementa, preços e filtros |
| Contactos | contactos.html | Contactos, formulário, horário e localização |

## 3.1. Página Inicial

A página inicial apresenta uma introdução à Esplanada
Morabeza, destacando os seus principais serviços.

Principais elementos:

- Cabeçalho e menu de navegação.
- Nome e identidade do estabelecimento.
- Fotografia da Esplanada Morabeza.
- Texto de apresentação.
- Botão de contacto.
- Ligação telefónica.
- Ligações para as redes sociais.
- Cartões de destaque.
- Rodapé.

Os cartões de destaque apresentam:

1. Gastronomia.
2. Cafetaria.
3. Convívio.

A organização dos destaques utiliza CSS Flexbox.

## 3.2. Página Sobre

A página Sobre apresenta informações históricas sobre
a Esplanada Morabeza.

O conteúdo inclui:

- Localização do estabelecimento.
- Fotografia histórica.
- História da Esplanada.
- Reconstrução e modernização do espaço.
- Inauguração em 15 de setembro de 2011.
- Importância histórica, cultural e turística.
- Convite aos visitantes.
- Fontes de informação.

A importância da Esplanada encontra-se organizada em seis
cartões:

1. Património histórico.
2. Cultura e convívio.
3. Turismo e comércio.
4. Gastronomia.
5. Localização privilegiada.
6. Hospitalidade.

Os seis cartões utilizam CSS Grid para se adaptarem
automaticamente ao espaço disponível.

## 3.3. Página Serviços

A página Serviços apresenta os serviços disponibilizados,
a ementa e os respetivos preços indicativos.

A página contém:

- Introdução aos serviços.
- Menu vertical de navegação.
- Ligações internas por âncoras.
- Cartões de apresentação dos serviços.
- Campo de pesquisa de produtos.
- Filtro por categoria.
- Botão para limpar os filtros.
- Tabela responsiva.
- Contador de produtos apresentados.
- Mensagem de pesquisa sem resultados.
- Informação sobre os preços.
- Ligações de contacto.

A ementa contém 18 produtos distribuídos por cinco
categorias.

| Categoria | Quantidade |
|---|---:|
| Cafetaria | 4 |
| Bebidas | 3 |
| Sandes e snacks | 4 |
| Gastronomia | 4 |
| Sobremesas | 3 |
| Total | 18 |

O layout principal utiliza CSS Grid, com um menu lateral
de 220px e uma coluna de conteúdo que ocupa o espaço
restante.

## 3.4. Página Contactos

A página Contactos disponibiliza informações úteis para
os visitantes da Esplanada Morabeza.

Principais elementos:

- Informações de contacto.
- Localização.
- Número de telefone.
- Redes sociais.
- Fotografia do estabelecimento.
- Formulário de contacto.
- Horário de funcionamento.
- Tabela responsiva de horários.
- Mapa de localização integrado.

O formulário possui finalidade demonstrativa e académica.

A validação dos campos é efetuada no navegador através
de HTML5 e JavaScript.

Nesta versão não existe um servidor de processamento
do formulário nem envio efetivo de mensagens por email.

---

# 4. Estrutura de Ficheiros

```text
Esplanada_Morabeza/
│
├── index.html
├── sobre.html
├── servicos.html
├── contactos.html
├── README.md
│
└── src/
    │
    ├── Imagem/
    │   └── morabeza.jpg
    │
    ├── javascript/
    │   └── script.js
    │
    └── styles/
        ├── styles.css
        ├── marco.css
        ├── header.css
        ├── home.css
        ├── sobre.css
        ├── servicos.css
        ├── contacto.css
        ├── footer.css
        └── responsive.css
```

## 4.1. Organização dos Ficheiros CSS

| Ficheiro       | Finalidade                           |
|----------------|--------------------------------------|
| styles.css     | Importação das folhas de estilo      |
| marco.css      | Configurações gerais e variáveis CSS |
| header.css     | Cabeçalho e menu de navegação        |
| home.css       | Formatação da página inicial         |
| sobre.css      | Formatação da página Sobre           |
| servicos.css   | Formatação da página Serviços        |
| contacto.css   | Formatação da página Contactos       |
| footer.css     | Formatação do rodapé                 |
| responsive.css | Media queries e regras responsivas   |

O ficheiro styles.css centraliza a importação das folhas
de estilo utilizadas no projeto.

```css
@import url("./marco.css");
@import url("./header.css");
@import url("./home.css");
@import url("./sobre.css");
@import url("./servicos.css");
@import url("./contacto.css");
@import url("./footer.css");
@import url("./responsive.css");
```

Esta organização permite separar responsabilidades,
facilitar a manutenção e localizar mais rapidamente
eventuais erros de formatação.

---

# 5. Tecnologias Utilizadas

| Tecnologia    | Finalidade                                   |
|---------------|----------------------------------------------|
| HTML5         | Estrutura semântica das páginas              |
| CSS3          | Formatação e apresentação visual             |
| CSS Flexbox   | Organização de elementos em linhas e colunas |
| CSS Grid      | Organização de layouts e cartões             |
| Media Queries | Adaptação a diferentes resoluções            |
| JavaScript    | Interatividade e manipulação do DOM          |
| Font Awesome  | Apresentação de ícones                       |
| Google Fonts  | Utilização da fonte Poppins                  |
| Google Maps   | Apresentação da localização                  |
| Git           | Controlo de versões                          |
| GitHub        | Armazenamento e publicação do código         |
| Markdown      | Documentação do projeto                      |

---

# 6. Identidade Visual

A identidade visual foi desenvolvida considerando
uma combinação de cores verdes, castanhas e tonalidades
claras, procurando transmitir tranquilidade,
hospitalidade e conforto.

## 6.1. Paleta de Cores

| Variável CSS     | Cor       | Finalidade                               |
|------------------|-----------|------------------------------------------|
| --cor-primaria   | #234D38 | Cabeçalho, rodapé e elementos principais |
| --cor-secundaria | #D4A373 | Destaques e elementos complementares     |
| --cor-fundo      | #FAF6EF | Fundo das páginas                        |
| --cor-branca     | #FFFFFF | Cartões e textos                         |
| --cor-texto      | #26332C | Textos principais                        | 
| --cor-destaque   | #BC6C25 | Ícones e destaques                       |

## 6.2. Tipografia

Foi utilizada a fonte Poppins, disponibilizada através
do serviço Google Fonts.

A tipografia apresenta diferentes tamanhos e pesos
para estabelecer uma hierarquia visual entre:

- Títulos principais.
- Subtítulos.
- Parágrafos.
- Menus.
- Botões.
- Tabelas.

---

# 7. Funcionalidades Implementadas

## 7.1. Navegação Principal

O website possui um menu de navegação comum às quatro
páginas.

O menu permite:

- Navegar entre as páginas.
- Identificar a página atualmente selecionada.
- Apresentar efeitos ao passar o rato.
- Navegar através do teclado.
- Adaptar a apresentação a dispositivos móveis.

## 7.2. Menu Móvel

A versão móvel utiliza JavaScript para controlar
a abertura e o encerramento do menu.

O comportamento previsto inclui:

- Abrir o menu através do botão.
- Fechar o menu através do mesmo botão.
- Fechar ao selecionar uma ligação.
- Fechar através da tecla Escape.
- Atualizar o atributo aria-expanded.

## 7.3. Menu Vertical dos Serviços

A página Serviços possui um menu vertical com
ligações internas para:

- Os nossos serviços.
- Ementa e preços.
- Cafetaria.
- Bebidas.
- Sandes e snacks.
- Gastronomia.
- Sobremesas.
- Contacto.

As ligações utilizam âncoras HTML para facilitar
a navegação dentro da página.

## 7.4. Pesquisa de Produtos

A pesquisa permite localizar produtos através
do respetivo nome.

A filtragem é efetuada dinamicamente através
de JavaScript, sem necessidade de atualizar
a página.

## 7.5. Filtro por Categoria

O utilizador pode selecionar uma categoria
específica da ementa.

O JavaScript controla a apresentação das
linhas correspondentes da tabela.

## 7.6. Limpeza dos Filtros

O botão Limpar permite:

- Limpar o campo de pesquisa.
- Repor todas as categorias.
- Apresentar novamente os produtos.
- Atualizar a contagem de resultados.

## 7.7. Formulário de Contacto

O formulário permite demonstrar o preenchimento
e a validação de informações introduzidas
pelo utilizador.

O formulário possui finalidade demonstrativa.

O envio efetivo de mensagens dependerá de uma
futura integração com um servidor ou serviço
de processamento de formulários.

## 7.8. Localização

A página Contactos apresenta um mapa integrado
através de um iframe.

O mapa facilita a identificação da localização
da Esplanada Morabeza, na Praça Alexandre
Albuquerque, Cidade da Praia.

---

# 8. Ficha de Exercícios 4

## Layouts, site responsivo e efeitos

A Ficha de Exercícios 4 tem como objetivo aplicar
Flexbox, CSS Grid, media queries e efeitos discretos,
obtendo quatro páginas responsivas, validadas e
guardadas no GitHub.

## 8.1. Exercício 1 - Flexbox: cabeçalho e menu

O cabeçalho foi estruturado utilizando CSS Flexbox.

```css
#navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}
```

Esta configuração permite posicionar:

- O nome do estabelecimento à esquerda.
- O menu de navegação à direita.
- Os elementos alinhados verticalmente.
- Os elementos em novas linhas quando necessário.

A lista do menu utiliza:

```css
#nav_list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 25px;
    list-style: none;
}
```

Foram mantidos os efeitos de hover, o foco de
navegação e a indicação da página atual.

Ficheiros principais:

- header.css
- responsive.css
- script.js

Estado: implementado no código proposto.

## 8.2. Exercício 2 - Flexbox: destaques e rodapé

Os destaques da página inicial foram organizados
através de Flexbox.

```css
#home-destaques {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}
```

Cada cartão utiliza:

```css
#home-destaques .cartao {
    flex: 1 1 220px;
}
```

Esta configuração permite que os cartões cresçam,
encolham e mudem de linha consoante o espaço
disponível.

Para manter o rodapé no fundo do ecrã quando
existe pouco conteúdo, foi utilizado:

```css
body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

main {
    flex: 1;
}
```

Ficheiros principais:

- marco.css
- home.css
- footer.css
- index.html

Estado: implementado no código proposto.

## 8.3. Exercício 3 - Grid: cartões que se ajustam

A página Sobre apresenta seis cartões organizados
através de CSS Grid.

```css
.importancia-container {
    display: grid;
    grid-template-columns:
        repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
}
```

A propriedade auto-fit permite ajustar
automaticamente a quantidade de colunas.

A função minmax estabelece:

- Largura mínima de 220px.
- Crescimento até ocupar o espaço disponível.

Os cartões não necessitam de uma largura fixa,
uma vez que o Grid controla a sua distribuição.

Ficheiros principais:

- sobre.html
- sobre.css

Estado: implementado no código proposto.

## 8.4. Exercício 4 - Grid: layout dos serviços

A página Serviços utiliza um layout de duas
colunas.

```css
.servicos-layout {
    display: grid;
    grid-template-columns: 220px 1fr;
    align-items: start;
    gap: 25px;
}
```

A primeira coluna possui 220px e contém
o menu vertical.

A segunda coluna ocupa o espaço restante
e contém:

- Cartões dos serviços.
- Ementa.
- Pesquisa.
- Filtros.
- Tabela de produtos.
- Informações complementares.
- Contactos.

Foi também utilizada a propriedade:

```css
.servicos-conteudo {
    min-width: 0;
}
```

Esta propriedade ajuda a impedir que a tabela
aumente indevidamente a largura da página.

Ficheiros principais:

- servicos.html
- servicos.css
- responsive.css

Estado: implementado no código proposto.
A apresentação final deve ser confirmada no navegador.

## 8.5. Exercício 5 - Viewport e imagens fluidas

As quatro páginas utilizam a seguinte configuração
no elemento head:

```html
<meta name="viewport"
      content="width=device-width, initial-scale=1.0">
```

As imagens utilizam uma configuração CSS global:

```css
img {
    display: block;
    max-width: 100%;
    height: auto;
}
```

Esta configuração permite que as imagens se adaptem
ao tamanho do respetivo contentor, mantendo a sua
proporção natural quando não existem regras de
recorte específicas.

Os atributos HTML width e height devem corresponder
às dimensões reais dos ficheiros de imagem.

Estes atributos permitem reservar espaço para
as imagens antes de o navegador terminar
o seu carregamento.

Ficheiros principais:

- index.html
- sobre.html
- servicos.html
- contactos.html
- marco.css

Estado: viewport e imagens fluidas implementados.
A confirmação dos atributos width e height permanece
pendente.

## 8.6. Exercício 6 - Media Queries

Foram utilizadas media queries para adaptar
a apresentação do website a diferentes resoluções.

### Ecrãs até 768px

```css
@media screen and (max-width: 768px) {
    .servicos-layout {
        grid-template-columns: 1fr;
    }
}
```

Nesta resolução, o menu lateral passa a ser
apresentado acima do conteúdo principal.

Também são adaptados os espaços laterais,
os filtros e os restantes contentores.

### Ecrãs até 600px

São aplicadas regras para:

- Reduzir os títulos principais.
- Adaptar o cabeçalho e o menu.
- Apresentar o menu aberto em coluna.
- Organizar os cartões verticalmente.
- Adaptar os botões e os formulários.

As media queries são colocadas depois das
regras que substituem.

Ficheiros principais:

- responsive.css
- home.css
- sobre.css
- servicos.css
- contacto.css

Estado: regras responsivas propostas.
O cumprimento integral deve ser confirmado
através dos testes finais.

## 8.7. Exercício 7 - Tabelas e texto responsivos

As tabelas encontram-se dentro de contentores
que permitem deslocamento horizontal.

```css
.tabela-container {
    width: 100%;
    max-width: 100%;
    overflow-x: auto;
}
```

Para a tabela de horários:

```css
.horario-tabela-container {
    width: 100%;
    overflow-x: auto;
}
```

Estas propriedades permitem consultar tabelas
em dispositivos com ecrãs estreitos sem
aumentar a largura total da página.

Os parágrafos de leitura utilizam:

```css
main p {
    max-width: 65ch;
}
```

A unidade ch permite definir uma largura
relacionada com a dimensão dos caracteres
da fonte utilizada.

Ficheiros principais:

- marco.css
- servicos.css
- contacto.css

Estado: implementado no código proposto.

## 8.8. Exercício 8 - Efeitos e transições

Foram utilizados efeitos discretos nos menus,
botões e cartões.

As transições utilizam uma duração de 0,3 segundos.

```css
transition:
    background-color 0.3s ease,
    color 0.3s ease,
    transform 0.3s ease,
    box-shadow 0.3s ease;
```

Os cartões apresentam um efeito de elevação
ao passar o rato.

```css
.importancia-cartao:hover {
    transform: translateY(-5px);
    box-shadow:
        0 6px 15px rgba(0, 0, 0, 0.10);
}
```

Os botões apresentam efeitos equivalentes
quando selecionados através do teclado.

```css
.btn-default:hover,
.btn-default:focus-visible {
    transform: translateY(-2px);
}
```

Foi considerada a preferência de movimento
reduzido.

```css
@media (prefers-reduced-motion: reduce) {
    html {
        scroll-behavior: auto;
    }

    .importancia-cartao,
    .cartao,
    .btn-default,
    .menu-vertical a {
        transition: none;
    }

    .importancia-cartao:hover,
    .cartao:hover,
    .btn-default:hover,
    .btn-default:focus-visible,
    .menu-vertical a:hover,
    .menu-vertical a:focus-visible {
        transform: none;
    }
}
```

Esta configuração serve como exemplo das regras
necessárias para reduzir os efeitos de movimento.

Ficheiros principais:

- marco.css
- header.css
- home.css
- sobre.css
- servicos.css
- contacto.css
- responsive.css

Estado: efeitos implementados no código proposto.
Teste da preferência de movimento reduzido pendente.



---

# 9. Acessibilidade

O projeto considera princípios básicos de
acessibilidade Web.

Foram utilizados ou considerados:

- Elementos HTML semânticos.
- Descrições alternativas nas imagens.
- Etiquetas associadas aos campos dos formulários.
- Atributos aria-label.
- Atributo aria-current na navegação.
- Atributo aria-expanded no menu móvel.
- Atributo aria-controls.
- Navegação através do teclado.
- Indicação visual de foco.
- Cabeçalhos de tabelas com scope.
- Legendas das tabelas.
- Mensagens dinâmicas com aria-live.
- Preferência de movimento reduzido.

Estas medidas procuram melhorar a utilização
do website por diferentes utilizadores.

Não representam, por si só, uma certificação
de conformidade integral com as WCAG.

---

# 10. Execução Local do Projeto

O projeto é constituído por páginas estáticas,
não necessitando de uma base de dados ou
servidor de aplicação.

## 10.1. Abrir diretamente

Abrir o ficheiro index.html através de um
navegador Web.

## 10.2. Executar através de Python

Caso Python esteja instalado, abrir um terminal
na pasta principal do projeto.

```bash
python -m http.server 8000
```

Em seguida, abrir:

http://localhost:8000

Para terminar o servidor:

Ctrl + C

## 10.3. Recursos Externos

Alguns recursos necessitam de ligação à Internet:

- Google Fonts.
- Font Awesome.
- Google Maps.
- Redes sociais.

---

# 11. Controlo de Versões com Git

O Git é utilizado para controlar as alterações
realizadas durante o desenvolvimento.

## 11.1. Verificar o Estado

```bash
git status
```

## 11.2. Verificar a Branch

```bash
git branch --show-current
```

## 11.3. Verificar o Repositório Remoto

```bash
git remote -v
```

## 14.4. Consultar Alterações

```bash
git diff
```

## 11.5. Adicionar os Ficheiros

```bash
git add index.html sobre.html servicos.html contactos.html
git add src/
git add README.md
```

## 11.6. Criar um Commit

```bash
git commit -m "Ficha 4 - Layout responsivo, Flexbox, Grid e efeitos"
```

## 11.7. Verificar o Histórico

```bash
git log --oneline -5
```

## 11.8. Atualizar o GitHub

Considerando que o repositório remoto é origin
e a branch utilizada é main:

```bash
git push origin main
```

Caso seja utilizada outra branch, o comando
deve ser adaptado ao respetivo nome.

## 11.9. Repositório do Projeto

GitHub:

Link - https://github.com/pcosta85/Ling_Tec_Web


---

# 12. Declaração de Utilização de Inteligência Artificial

Durante o desenvolvimento deste projeto foi
utilizada a ferramenta ChatGPT, desenvolvida
pela OpenAI, como recurso de apoio académico
e técnico.

A ferramenta foi utilizada para:

- Apoiar a análise e organização do código.
- Identificar problemas de formatação.
- Propor correções em HTML, CSS e JavaScript.
- Auxiliar na implementação de Flexbox.
- Auxiliar na implementação de CSS Grid.
- Melhorar a organização dos ficheiros CSS.
- Auxiliar na implementação de efeitos visuais.
- Apoiar a resolução de problemas de responsividade.


A utilização da inteligência artificial teve
como finalidade apoiar o processo de aprendizagem
e desenvolvimento do projeto.

A validação, adaptação, compreensão e entrega
do código são da responsabilidade do estudante.

O estudante deverá confirmar que consegue
explicar o funcionamento das propriedades
CSS, dos layouts implementados e das
funcionalidades JavaScript utilizadas.

---

# 13. Fontes e Referências

## Documentação Académica

- Universidade de Santiago.
- Linguagem e Tecnologias Web.
- Ficha de Exercícios 4 


## Informações Históricas

As fontes de referência histórica encontram-se
identificadas na página sobre.html.

- Esplanada Morabeza - Grupo do Facebook.
- Espaço Cabo Verde - Esplanada da Praça
  Alexandre Albuquerque.

---

© 2026 Esplanada Morabeza - Projeto académico.