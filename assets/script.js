const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('#nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const sideScroll = document.querySelector('.side-scroll');
const canSmoothSideScroll = () => window.matchMedia('(min-width: 981px)').matches;

if (sideScroll) {
  sideScroll.addEventListener('wheel', (event) => {
    if (!canSmoothSideScroll() || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
    event.preventDefault();
    sideScroll.scrollBy({ left: event.deltaY, behavior: 'auto' });
  }, { passive: false });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target || !canSmoothSideScroll()) return;
      event.preventDefault();
      sideScroll.scrollTo({ left: target.offsetLeft, behavior: 'smooth' });
      links?.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });
}
