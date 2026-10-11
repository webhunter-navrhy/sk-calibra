// Dopyt prepravy: ukážkový režim nič neodosiela. Rýchly dopyt v úvode predvyplní hlavný formulár.
(function () {
  var hlavni = document.getElementById('dopyt-formular');
  var rychly = document.getElementById('rychly');
  if (rychly && hlavni) {
    rychly.addEventListener('submit', function (e) {
      e.preventDefault();
      rychly.querySelectorAll('[data-rychly]').forEach(function (i) {
        var cil = hlavni.elements[i.getAttribute('data-rychly')];
        if (cil && i.value) cil.value = i.value;
      });
      var cil = document.getElementById('dopyt');
      cil.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      var prazdne = hlavni.querySelector('input[name=odkial]').value ? (hlavni.querySelector('input[name=kam]').value ? 'select[name=tovar]' : 'input[name=kam]') : 'input[name=odkial]';
      setTimeout(function () { hlavni.querySelector(prazdne).focus({ preventScroll: true }); }, 450);
    });
  }
  document.querySelectorAll('a[data-tovar]').forEach(function (a) {
    a.addEventListener('click', function () {
      if (hlavni) hlavni.elements.tovar.value = a.getAttribute('data-tovar');
    });
  });
  document.querySelectorAll('form.formular').forEach(function (f) {
    var stav = f.querySelector('.formular-stav');
    f.addEventListener('submit', function (e) {
      var endpoint = f.getAttribute('data-endpoint');
      var demo = f.getAttribute('data-demo') === '1';
      if (f.querySelector('.past input').value) { e.preventDefault(); return; }
      if (demo || !endpoint) {
        e.preventDefault();
        stav.textContent = 'Ukážka formulára: nič sa neodosiela. Po spustení webu príde dopyt na e-mail firmy.';
        return;
      }
      e.preventDefault();
      stav.textContent = 'Odosielam…';
      fetch(endpoint, { method: 'POST', body: new FormData(f), headers: { Accept: 'application/json' } })
        .then(function (r) { if (!r.ok) throw new Error(r.status); f.reset(); stav.textContent = 'Ďakujeme, dopyt bol odoslaný.'; })
        .catch(function () { stav.textContent = 'Odoslanie sa nepodarilo. Napíšte nám prosím e-mailom.'; });
    });
  });
})();
