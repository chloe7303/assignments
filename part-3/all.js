// click to change text
const sectionWelcome = document.querySelector('#section-welcome');
sectionWelcome.addEventListener('click', () => {
  document.querySelector('.section-welcome-title').textContent = 'Have a Good Time!';
})

// click to show/close menu
const navbarIcon = document.querySelector('#navbar-icon');
const navbarList = document.querySelector('.navbar-list');
const closeButton = document.querySelector('.navbar-list .close-button');

navbarIcon.addEventListener('click', () => {
  navbarList.style.display = 'block';
  closeButton.style.display = 'block';
})

closeButton.addEventListener('click', () => {
  navbarList.removeAttribute('style');
  closeButton.removeAttribute('style');
})

// click to show more content boxes
const ctaButton = document.querySelector('#button-cta');
ctaButton.addEventListener('click', () => {
  document.querySelector('.section-content-box-container.hidden').classList.remove('hidden');
})
