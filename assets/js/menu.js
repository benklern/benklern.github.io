// Mobile menu drawer: open from the top-bar button, close on ×, scrim, Escape, or a link tap.
(function () {
  var drawer = document.getElementById('menu-drawer');
  var opener = document.querySelector('.topbar .menu-button');
  if (!drawer || !opener) return;
  var panel = drawer.querySelector('.drawer__panel');

  function open() {
    drawer.hidden = false;
    opener.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
    var first = panel.querySelector('a, button');
    if (first) first.focus();
  }

  function close(returnFocus) {
    if (drawer.hidden) return;
    drawer.hidden = true;
    opener.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
    if (returnFocus) opener.focus();
  }

  opener.addEventListener('click', open);
  drawer.querySelectorAll('[data-menu-close]').forEach(function (el) {
    el.addEventListener('click', function () { close(true); });
  });
  drawer.querySelectorAll('.drawer__nav a').forEach(function (a) {
    a.addEventListener('click', function () { close(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close(true);
  });
  window.matchMedia('(min-width: 641px)').addEventListener('change', function (mq) {
    if (mq.matches) close(false);
  });
})();
