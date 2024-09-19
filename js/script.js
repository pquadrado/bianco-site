function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('menu-open');
}

function removeBrElements() {
  if (window.innerWidth <= 600) {
      const brElements = document.querySelectorAll('br');

      brElements.forEach(br => br.remove());
  }
}

window.addEventListener('load', removeBrElements);

window.addEventListener('resize', removeBrElements);

const modals = document.querySelectorAll('.modal');
const imgs = document.querySelectorAll('.imgClick');
const modalImgs = document.querySelectorAll('.modal-contente');
const captions = document.querySelectorAll('.caption');
const closeButtons = document.querySelectorAll('.close');

imgs.forEach((img, index) => {
  img.addEventListener('click', () => {
      modals[index].style.display = "flex";
      modalImgs[index].src = img.src;
      captions[index].innerHTML = img.alt;
  });
});

closeButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
      modals[index].style.display = "none";
  });
});