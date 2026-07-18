const intro = document.getElementById('intro');
const page = document.getElementById('page');
const skip = document.getElementById('skipIntro');
const menuButton = document.getElementById('menuButton');
const menuOverlay = document.getElementById('menuOverlay');

function finishIntro(){
  if (intro.classList.contains('exit')) return;
  page.classList.add('visible');
  intro.classList.add('exit');
  document.body.style.overflow = 'auto';
}
skip.addEventListener('click', finishIntro);
window.addEventListener('load', () => setTimeout(finishIntro, 4700));

function toggleMenu(force){
  const shouldOpen = typeof force === 'boolean' ? force : !menuOverlay.classList.contains('open');
  menuOverlay.classList.toggle('open', shouldOpen);
  menuButton.classList.toggle('open', shouldOpen);
  menuButton.setAttribute('aria-expanded', shouldOpen);
  menuOverlay.setAttribute('aria-hidden', !shouldOpen);
  document.body.style.overflow = shouldOpen ? 'hidden' : 'auto';
}
menuButton.addEventListener('click', () => toggleMenu());
menuOverlay.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggleMenu(false)));
document.addEventListener('keydown', e => { if(e.key === 'Escape') toggleMenu(false); });
