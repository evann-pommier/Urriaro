/* Urriaro – script.js (JS minimal, aucune dépendance, aucun appel externe) */
(function () {
  // Menu burger (mobile)
  var b = document.querySelector('.burger'), m = document.getElementById('menu');
  function toggle(open) {
    m.classList.toggle('open', open);
    b.setAttribute('aria-expanded', open);
  }
  b.addEventListener('click', function () { toggle(!m.classList.contains('open')); });
  m.addEventListener('click', function (e) { if (e.target.tagName === 'A') toggle(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') toggle(false); });

  // Année du pied de page
  document.getElementById('yr').textContent = new Date().getFullYear();

  // Copier l'adresse e-mail
  var c = document.getElementById('copy'), s = document.getElementById('copied');
  c.addEventListener('click', function () {
    var a = document.getElementById('addr').textContent;
    var ok = function () { s.textContent = 'Adresse copiée'; };
    if (navigator.clipboard) navigator.clipboard.writeText(a).then(ok, function () { s.textContent = a; });
    else { var r = document.createRange(); r.selectNode(document.getElementById('addr')); getSelection().addRange(r); s.textContent = 'Adresse sélectionnée'; }
  });

  // Schéma des 5 axes : clic ou clavier affiche le détail de la branche
  var nodes = document.querySelectorAll('.node'), panel = document.getElementById('panel');
  function pick(n) {
    nodes.forEach(function (x) { x.classList.toggle('on', x === n); });
    panel.style.setProperty('--p', getComputedStyle(n).getPropertyValue('--a'));
    panel.innerHTML = '<h3></h3><small></small><p></p>';
    panel.children[0].textContent = n.dataset.t;
    panel.children[1].textContent = n.dataset.s;
    panel.children[2].textContent = n.dataset.d;
  }
  nodes.forEach(function (n) {
    n.addEventListener('click', function () { pick(n); });
    n.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); pick(n); } });
  });

  // Bouton mailto : si aucune messagerie ne s'ouvre, afficher une solution de repli
  var mb = document.querySelector('a[href^="mailto:"]'), fb = document.getElementById('fallback');
  mb.addEventListener('click', function () {
    setTimeout(function () { if (document.hasFocus()) fb.hidden = false; }, 1500);
  });

  // Apparition douce au scroll (désactivée si mouvement réduit)
  var items = document.querySelectorAll('.card, .kpi, .steps li');
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); } });
    }, { threshold: .1 });
    items.forEach(function (i) { i.classList.add('rv'); io.observe(i); });
  }
})();
