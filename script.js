const menuButton = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
menuButton.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('hidden') === false;
  menu.classList.toggle('flex', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 768) {
      menu.classList.add('hidden');
      menu.classList.remove('flex');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });
});
document.getElementById('year').textContent = new Date().getFullYear();

