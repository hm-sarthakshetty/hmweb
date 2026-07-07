const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('#nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

const sideScroll = document.querySelector('.side-scroll');
const sideTrack = document.querySelector('.side-track');
const panels = [...document.querySelectorAll('.panel')];
const canPinnedSideScroll = () => window.matchMedia('(min-width: 981px)').matches;

const updatePinnedSideScroll = () => {
  if (!sideScroll || !sideTrack || !canPinnedSideScroll()) {
    sideTrack?.style.removeProperty('--scroll-x');
    return;
  }

  const start = sideScroll.offsetTop;
  const maxVertical = sideScroll.offsetHeight - window.innerHeight + document.querySelector('.site-header').offsetHeight;
  const progress = Math.min(Math.max((window.scrollY - start) / Math.max(maxVertical, 1), 0), 1);
  const maxHorizontal = Math.max(sideTrack.scrollWidth - window.innerWidth, 0);
  sideTrack.style.setProperty('--scroll-x', `${-(maxHorizontal * progress)}px`);
};

if (sideScroll && sideTrack) {
  updatePinnedSideScroll();
  window.addEventListener('scroll', updatePinnedSideScroll, { passive: true });
  window.addEventListener('resize', updatePinnedSideScroll);

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target || !canPinnedSideScroll()) return;
      const index = Math.max(panels.indexOf(target), 0);
      const maxVertical = sideScroll.offsetHeight - window.innerHeight + document.querySelector('.site-header').offsetHeight;
      const destination = sideScroll.offsetTop + (maxVertical * (index / Math.max(panels.length - 1, 1)));
      event.preventDefault();
      window.scrollTo({ top: destination, behavior: 'smooth' });
      links?.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
    });
  });
}
