(function () {
    var themes = ['a', 'b', 'c'];
    var swatches = { a: ['#0B0F14', '#14293E', '#00A0E9'], b: ['#0B0F14', '#B9C2CC', '#182028'], c: ['#0A141C', '#00A0E9', '#7FD4FF'] };
    function apply(t) { document.documentElement.setAttribute('data-theme', t); try { localStorage.setItem('denza-theme', t); } catch (e) {} }
    function current() {
        var t = (location.search.match(/theme=([abc])/) || [])[1];
        if (!t) { try { t = localStorage.getItem('denza-theme'); } catch (e) {} }
        return themes.indexOf(t) >= 0 ? t : 'a';
    }
    var t = current(); apply(t);
    var bar = document.createElement('div'); bar.className = 'dz-switcher'; bar.title = 'Палітра Denza: A / B / C';
    themes.forEach(function (k) {
        var b = document.createElement('button'); b.className = 'dz-sw'; b.setAttribute('data-t', k); b.setAttribute('aria-label', 'Варіант ' + k.toUpperCase());
        swatches[k].forEach(function (c) { var i = document.createElement('i'); i.style.background = c; b.appendChild(i); });
        b.onclick = function () { apply(k); mark(k); };
        bar.appendChild(b);
    });
    function mark(k) { bar.querySelectorAll('.dz-sw').forEach(function (x) { x.classList.toggle('active', x.getAttribute('data-t') === k); }); }
    document.body.appendChild(bar); mark(t);
})();