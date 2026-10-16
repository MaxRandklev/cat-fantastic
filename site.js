// Shared behavior for the individual project pages

// Current year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu
const body = document.body;
const btn = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');
btn?.addEventListener('click', () => {
  const open = body.classList.toggle('menu-open');
  menu.classList.toggle('show', open);
  btn.setAttribute('aria-expanded', String(open));
});

// Open outside links in a new tab
document.querySelectorAll('a[href^="http"]').forEach(a => {
  if (!a.href.includes(location.hostname)) {
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
  }
});
