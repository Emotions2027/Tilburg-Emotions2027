(function () {
  const toggle = document.querySelector('[data-menu-toggle]');
  const sourceNav = document.querySelector('[data-side-nav]');

  function createMobileNav() {
    if (!toggle || !sourceNav || document.querySelector('[data-mobile-nav-wrap]')) return;
    const wrap = document.createElement('div');
    wrap.className = 'mobile-nav-wrap';
    wrap.setAttribute('data-mobile-nav-wrap', '');

    const nav = document.createElement('nav');
    nav.className = 'mobile-nav';
    nav.id = 'mobile-navigation';
    nav.setAttribute('aria-label', 'Mobile conference navigation');

    sourceNav.querySelectorAll('a').forEach((link) => nav.appendChild(link.cloneNode(true)));
    wrap.appendChild(nav);
    document.querySelector('.site-header').insertAdjacentElement('afterend', wrap);
    toggle.setAttribute('aria-controls', 'mobile-navigation');
  }

  function setMenu(open) {
    const wrap = document.querySelector('[data-mobile-nav-wrap]');
    if (!toggle || !wrap) return;
    wrap.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    toggle.textContent = open ? '×' : '☰';
  }

  createMobileNav();

  if (toggle) {
    toggle.addEventListener('click', () => {
      const wrap = document.querySelector('[data-mobile-nav-wrap]');
      setMenu(!(wrap && wrap.classList.contains('open')));
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setMenu(false);
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) setMenu(false);
    });
  }

  document.querySelectorAll('[data-year]').forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
})();