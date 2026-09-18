# Portfólio — Walmir Fernandes Junior

Site de página única em **React + Vite + Tailwind CSS**, com temas claro/escuro e
versões em português e inglês.

## Rodar

```bash
npm install
npm run dev      # servidor local (Vite)
npm run build    # gera o bundle de produção
npm run preview  # serve o resultado do build
```

Esses três são os únicos scripts existentes. Não há lint nem testes configurados.

> **Atenção ao `dist/`.** O diretório está versionado no Git e não foi encontrada
> nenhuma configuração de CI ou deploy no repositório. Enquanto a forma de publicação
> não estiver confirmada, `npm run build` sem `--outDir` **sobrescreve** esses arquivos
> versionados. Para apenas validar o build sem tocar neles:
>
> ```bash
> npm run build -- --outDir /tmp/portfolio-build --emptyOutDir
> ```

## Onde fica cada coisa

### Conteúdo

Tudo em `src/data/`. Nenhum texto de conteúdo mora dentro de componente.

| Arquivo | Conteúdo |
| --- | --- |
| `profile.js` | Nome, foto, localidade, contatos, currículo, parágrafos do "Sobre", interesses de estudo, instituições do Hero |
| `experience.js` | Três experiências, contribuições e os resultados numéricos de cada uma |
| `projects.js` | Projetos publicados (e um registro inativo, comentado) |
| `education.js` | Formação |
| `skills.js` | Grupos de habilidades e idiomas |
| `activities.js` | Atividades extracurriculares, imagens e links |
| `certifications.js` | Certificados |
| `navLinks.js` | Os oito destinos de navegação, usados por header, menu e rodapé |

### Bilinguismo

Campos traduzíveis são objetos `{ pt, en }`; o resto (nomes de empresa, tecnologias,
URLs) fica uma vez só. O componente lê com `pick(campo, lang)`, de
`src/contexts/LanguageContext.jsx`, que devolve o valor cru quando não há tradução.

```js
role: { pt: 'Estagiário de Engenharia de Dados e IA', en: 'Data and AI Engineering Intern' },
company: 'Itaú Unibanco S.A.',   // sem tradução
```

Os textos de interface (botões, rótulos, títulos de seção) ficam em
`src/i18n/strings.js`, com as mesmas chaves nos dois idiomas.

### Tema e cores

`src/index.css` define os tokens por função (`--bg`, `--text`, `--link`, `--focus`…)
em três escopos: `:root` (claro), `.dark` (escuro) e o painel local `.panel-invert`,
que redefine as cores para os filhos — é assim que a faixa escura aparece dentro do
tema claro.

A paleta tem cinco cores: `#dce0d9` `#31081f` `#6b0f1a` `#595959` `#808f85`.
Ela tem **uma só cor clara** (`#dce0d9`), o que restringe bastante as combinações.
Só quatro pares atingem AA para texto normal:

| Par | Razão | Uso |
| --- | --- | --- |
| `#dce0d9` / `#31081f` | 13,25:1 | par principal |
| `#dce0d9` / `#6b0f1a` | 9,19:1 | botão e bloco de acento |
| `#dce0d9` / `#595959` | 5,24:1 | texto secundário no claro |
| `#31081f` / `#808f85` | 5,22:1 | — |

Os demais pares reprovam e **não podem ser texto**: `#6b0f1a`/`#808f85` (3,62, só
texto grande), `#dce0d9`/`#808f85` (2,54), `#31081f`/`#6b0f1a` (1,44),
`#31081f`/`#595959` (2,53), `#6b0f1a`/`#595959` (1,75), `#595959`/`#808f85` (2,06).

**Os vermelhos não são fundo de página.** `#31081f` e `#6b0f1a` entram como acento:
texto e botão no tema claro, e blocos preenchidos com texto `#dce0d9` por cima. O
fundo do tema escuro é um carvão neutro, `#1c1f1d`, derivado do `#808f85` a 22%
sobre preto — contra ele os vermelhos ficam em ~1,2:1 e seriam invisíveis como
linha, borda ou texto. O ritmo entre seções vem de claro/escuro (`.panel-invert`),
não de cor quente.

Para trocar uma cor de papel, edite o token — não o componente.

### Assets

Ficam em `public/` e são referenciados por caminho absoluto (`/images/...`).

- `foto-perfil.jpg` — 800×800, usada no Hero com carregamento imediato.
- `projeto-social-usp.webp` — derivada do PNG original de 1.062.451 bytes; o arquivo
  atual tem 65.116 bytes, com o conteúdo conferido lado a lado.
- `semana-si.png` — arte com texto; segue em PNG de propósito, porque compressão com
  perdas prejudicaria a leitura.
- Logos institucionais: cada uma declara o fundo que precisa (`backdrop`), porque a do
  BTG é branca e a do Itaú é escura. Nunca recolorir.
- `curriculo-walmir-fernandes-junior.pdf` — servido como está; os bytes não devem mudar
  sem uma decisão explícita.

## Acessibilidade

O que precisa continuar valendo ao editar:

- um único `h1`, hierarquia de títulos sem saltos;
- os oito IDs de seção (`#about`, `#experience`, `#education`, `#projects`,
  `#activities`, `#certifications`, `#skills`, `#contact`) — links já compartilhados
  dependem deles;
- alvo de toque de 44×44 px nos controles (a classe `.link-action` cuida dos links de
  ação isolados);
- foco visível em todas as superfícies;
- nada de informação transmitida só por cor;
- `prefers-reduced-motion` respeitado no CSS.

## Pendências registradas

- Dois certificados (Git/GitHub e Python) apontam para a **mesma URL** no cadastro.
  Os dois registros foram preservados; falta o link correto do de Python.
- "4º semestre" é o valor que estava no código e não foi recalculado por calendário.
- Domínio e pipeline de publicação não confirmados: por isso não há `canonical`,
  `og:url` nem imagem social — uma URL inventada seria pior que a ausência da tag.
- `framer-motion` continua no `package.json`, mas hoje só é importado por
  `src/components/DSA.jsx`, que não é renderizado. Não entra no bundle. As animações
  do site usam IntersectionObserver próprio (`src/components/ui/Reveal.jsx`), com rede
  de segurança: nenhum bloco fica preso invisível se a rolagem for abrupta.
- **Logo da Etec não incluída.** O Centro Paula Souza declara que os logos CPS, Etec e
  Fatec "são de uso exclusivo dos servidores da instituição e suas unidades de ensino,
  não podendo ser utilizado por alunos e terceiros, sem autorização prévia". Até que
  haja autorização, a entrada da Etec usa uma marca tipográfica
  (`src/components/ui/InstitutionMark.jsx`), que é deliberadamente tipografia e não um
  desenho parecido com o logo.
