# AquaPet — Marco 1 | Linguagem e Tecnologias Web

## 1. Identificação
- **Estudante:** Paulo Jorge Araújo Costa
- **Unidade curricular:** Linguagem e Tecnologias Web
- **Universidade:** Universidade de Santiago
- **Negócio:** AquaPet — Loja de Animais e Produtos
- **Tema:** Site institucional e catálogo informativo de uma loja de animais em Cabo Verde

## 2. Descrição do negócio
A AquaPet é uma loja de animais e produtos relacionados com a criação e o cuidado de animais de estimação. A oferta apresentada no projeto destaca peixes ornamentais, outros animais aquáticos, alimentação e equipamentos de aquariofilia. A loja disponibiliza informações e contactos para clientes interessados em conhecer os produtos. O projeto está enquadrado na realidade de Cabo Verde e inclui referência a entregas no país mediante taxa.

## 3. Público-alvo
Pessoas interessadas na criação e cuidado de animais, aquariofilistas iniciantes ou experientes, famílias e clientes que procuram animais, alimentos, acessórios e equipamentos.

## 4. Objetivos do site
1. Dar a conhecer a AquaPet, os animais e os produtos apresentados.
2. Organizar informações de produtos num catálogo e numa tabela de consulta.
3. Facilitar o contacto com a loja através dos contactos e de um formulário demonstrativo.

## 5. Requisitos funcionais
| Código | Requisito | Página |
|---|---|---|
| RF01 | Apresentar a loja e o seu objetivo | index.html |
| RF02 | Permitir navegar entre quatro páginas pelo mesmo menu | Todas |
| RF03 | Apresentar informações sobre o negócio e o público-alvo | sobre.html |
| RF04 | Mostrar cartões de animais com imagens e características | produtos.html |
| RF05 | Mostrar uma tabela com o catálogo | produtos.html |
| RF06 | Disponibilizar telefone e email | contactos.html |
| RF07 | Apresentar um formulário com campos obrigatórios | contactos.html |
| RF08 | Adaptar o menu à largura do ecrã | Todas |

## 6. Requisitos não funcionais
1. **Acessibilidade:** utilizar elementos semânticos, um `h1` por página, `alt` nas imagens e etiquetas nos campos.
2. **Compatibilidade:** funcionar nos navegadores modernos sem dependências de serviços externos.
3. **Usabilidade:** manter menu consistente e legível em computador e telemóvel.
4. **Manutenção:** separar HTML, CSS e JavaScript em ficheiros próprios.

## 7. Mapa do site
```text
AquaPet
├── Início (index.html)
├── Sobre Nós (sobre.html)
├── Produtos (produtos.html)
└── Contactos (contactos.html)
```
O menu é igual nas quatro páginas.

## 8. Conteúdos previstos
| Página | Textos | Imagens | Tabelas | Formulário | Multimédia |
|---|---|---|---|---|---|
| Início | Boas-vindas e destaques | Ilustrações locais | Não | Não | Não |
| Sobre Nós | Descrição, missão, visão e valores | Não obrigatório | Não | Não | Não |
| Produtos | Animais e características | Ilustrações de cada animal | Catálogo | Não | Não |
| Contactos | Contactos e instruções | Ilustração local | Não | Contacto | Não |

**Nota:** o projeto foi solicitado sem áudio. O enunciado do Marco 1 pede que os conteúdos previstos sejam identificados; não obriga a incluir um ficheiro de áudio ou vídeo no HTML de base. Confirmar com o docente os requisitos das fichas anteriores, caso se apliquem cumulativamente.

## 9. Esboços
- `esbocos/index.svg`: esboço da página inicial.
- `esbocos/contactos.svg`: esboço da página de contactos.

## 10. Tecnologias e execução
HTML5, CSS3 e JavaScript local. Não utiliza base de dados nem serviços externos.

No PowerShell, dentro da pasta do projeto:
```powershell
py -m http.server 8000 --bind 127.0.0.1
```
Abrir `http://127.0.0.1:8000/`.

## 11. Validação e testes
- Validar individualmente as quatro páginas no validador W3C: https://validator.w3.org/ (opção **Validate by File Upload** ou **Direct Input**).
- No navegador, abrir Ferramentas de Programador > Network e confirmar ausência de erros 404.
- Verificar o menu, as imagens, a tabela e os campos obrigatórios.
- O formulário é apenas demonstrativo e **não envia mensagens**.
- Substituir as ilustrações provisórias por fotografias próprias ou autorizadas, se desejado.

## 12. Declaração de uso de IA
- **Ferramenta(s) usada(s):** ChatGPT (OpenAI).
- **Para que a usei:** Organização das quatro páginas HTML.
- **Para que a usei:** Complementação da formatação das paginas
- **Para que a usei:** Averiguação de erros cometidos nas elaboração do projecto

## 13. Tutorial
- **Youtube:** Link - https://www.youtube.com/watch?v=8V3mw1w6h0U&t=266s
- **Youtube:** Link - https://www.youtube.com/watch?v=llF6vD-RljE&t=1055s

## 14. Entrega
- Repositório GitHub com nome **LTW_MARCO_I_NOMEALUNO_US_Versao2**
- Efetuar commits por tarefa, com mensagens claras.
- Entregar no Moodle até **16/11/2026 às 21:00**, segundo o enunciado.
