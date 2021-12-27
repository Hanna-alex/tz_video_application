const btnMenu = document.querySelector('.menu-btn');
const menu = document.querySelector('.nav__list-mobile');
const lockBody = document.querySelector('body');

const toggleMenu = () => {
  btnMenu.classList.toggle('menu-btn--active');
  menu.classList.toggle('nav__list-mobile--active');
  lockBody.classList.toggle('lock');
};

const closeMenu = () => {
  btnMenu.classList.remove('menu-btn--active');
  menu.classList.remove('nav__list-mobile--active');
  lockBody.classList.remove('lock');
};

btnMenu.addEventListener('click', toggleMenu);

menu.addEventListener('click', (event) => {
  console.log(event.target);
  const target = event.target;

  if (target.classList.contains('nav__link-mobile')) closeMenu()
  
})
