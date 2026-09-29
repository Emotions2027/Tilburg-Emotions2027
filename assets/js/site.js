(function () {
  const toggle = document.querySelector('[data-menu-toggle]');
  const wrap = document.querySelector('[data-mobile-nav-wrap]');
  if (!toggle || !wrap) return;

  function setMenu(open) {
    wrap.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    toggle.textContent = open ? '×' : '☰';
  }

  toggle.addEventListener('click', () => setMenu(!wrap.classList.contains('open')));
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || !wrap.classList.contains('open')) return;
    const focusWasInMenu = wrap.contains(document.activeElement);
    setMenu(false);
    if (focusWasInMenu) toggle.focus();
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) setMenu(false);
  });

  // Collapse navigation only after its controls have initialized successfully.
  setMenu(false);
  document.documentElement.classList.add('navigation-ready');
})();
