function buildList(list, target) {
  target.innerHTML = '';
  list.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    target.appendChild(li);
  });
}

function paintPalette(colors, target) {
  target.innerHTML = '';
  colors.forEach((color) => {
    const swatch = document.createElement('span');
    swatch.className = 'swatch';
    swatch.style.background = color;
    target.appendChild(swatch);
  });
}

function initProjectPage() {
  const projectId = Number(document.body.dataset.projectId);
  const project = projects.find((item) => item.id === projectId);

  if (!project) return;

  document.querySelector('.project-title').textContent = project.title;
  document.querySelector('.project-summary').textContent = project.summary;
  document.querySelector('.project-description').textContent = project.description;
  document.querySelector('.project-demo').textContent = project.demo;

  buildList(project.highlights, document.querySelector('.project-highlights'));
  buildList(project.technologies, document.querySelector('.project-tech'));

  const chips = document.querySelector('.chip-row');
  chips.innerHTML = '';
  project.technologies.forEach((tech) => {
    const span = document.createElement('span');
    span.className = 'chip';
    span.textContent = tech;
    chips.appendChild(span);
  });

  const palette = document.querySelector('.project-palette');
  paintPalette(project.palette, palette);

  const demoBox = document.querySelector('.demo-box');
  if (demoBox) {
    demoBox.style.background = `linear-gradient(135deg, ${project.palette[0]}, ${project.palette[1]})`;
    demoBox.style.boxShadow = `0 20px 40px ${project.palette[1]}33`;
    demoBox.innerHTML = '<span>Preview conceitual</span>';
  }
}

document.addEventListener('DOMContentLoaded', initProjectPage);
