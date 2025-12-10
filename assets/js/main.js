const grid = document.querySelector('#projects-grid');
const paletteEl = document.querySelector('#palette');

function renderPalette() {
  const colors = ['#5bd1b5', '#7aa2f7', '#f472b6', '#22c55e', '#f59e0b', '#c084fc'];
  colors.forEach((color) => {
    const swatch = document.createElement('span');
    swatch.className = 'swatch';
    swatch.style.background = color;
    paletteEl.appendChild(swatch);
  });
}

function createCard(project) {
  const article = document.createElement('article');
  article.className = 'card';
  const tags = project.technologies
    .slice(0, 3)
    .map((tech) => `<span class="tag">${tech}</span>`)
    .join('');

  article.innerHTML = `
    <div class="badge">Projeto ${String(project.id).padStart(2, '0')}</div>
    <h3>${project.title}</h3>
    <p>${project.summary}</p>
    <div class="tags">${tags}</div>
    <a href="projects/project-${String(project.id).padStart(2, '0')}.html">Ver detalhes</a>
  `;
  return article;
}

function renderGrid() {
  projects.forEach((project) => {
    grid.appendChild(createCard(project));
  });
}

renderPalette();
renderGrid();
