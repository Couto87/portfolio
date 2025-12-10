# Portfólio 30x

Site estático com 30 projetos autorais e independentes, todos prontos para o GitHub Pages e sem qualquer formulário ou rota de contato. Cada projeto possui página individual com descrição, tecnologias, destaques e uma prévia visual.

## Estrutura
- `index.html`: vitrine com cards e navegação.
- `projects/project-XX.html`: 30 páginas individuais (01 a 30) carregadas via `data-project-id`.
- `assets/css/styles.css`: tema escuro, responsivo e com gradientes.
- `assets/js/projects-data.js`: catálogo dos projetos (títulos, descrições, paletas e tecnologias).
- `assets/js/main.js`: monta o grid de cards da página inicial.
- `assets/js/project-page.js`: preenche os detalhes em cada página de projeto.

## Como usar
Basta abrir `index.html` localmente ou publicar a pasta no GitHub Pages. Não há dependências ou build: apenas HTML, CSS e JavaScript puro.
