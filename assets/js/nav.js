(function () {
  var btn = document.getElementById('navToggle');
  var menu = document.getElementById('mnav');
  if (!btn || !menu) return;
  var openIcon = btn.querySelector('.nav-icon-open');
  var closeIcon = btn.querySelector('.nav-icon-close');

  function setHidden(el, hide) {
    if (!el) return;
    if (hide) el.setAttribute('hidden', '');
    else el.removeAttribute('hidden');
  }

  function setOpen(open) {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    setHidden(menu, !open);
    setHidden(openIcon, open);
    setHidden(closeIcon, !open);
  }

  btn.addEventListener('click', function () {
    setOpen(menu.hasAttribute('hidden'));
  });
  menu.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });
})();
