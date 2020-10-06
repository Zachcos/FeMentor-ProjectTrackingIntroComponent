const nav = document.getElementById('nav');
const navBtn = document.getElementById('nav-btn');

const state = {
  open: true
}

const toggleOpen = function() {
  state.open = !state.open;
  handleNav();
}

const handleNav = function() {
  if (state.open) {
    navBtn.classList.add('open');
    nav.classList.add('open');
  } else {
    navBtn.classList.remove('open');
    nav.classList.remove('open');
  }
}