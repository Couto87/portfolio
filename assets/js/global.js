(function () {
  const path = window.location.pathname;
  const links = document.querySelectorAll('.nav-links a');
  links.forEach((link) => {
    const href = link.getAttribute('href');
    if (href && path.includes(href.replace('./', ''))) {
      link.classList.add('active');
    }
  });

  const badges = document.querySelectorAll('[data-animated-badge]');
  badges.forEach((badge, index) => {
    badge.style.animationDelay = `${index * 80}ms`;
  });
})();
