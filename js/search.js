(function () {
  // Resolve path to search.html relative to current page
  var base = window.location.pathname.includes('/articles/') ? '../' : '';

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter') return;
    var input = e.target.closest('.nav-search input');
    if (!input) return;
    var q = input.value.trim();
    if (!q) return;
    window.location.href = base + 'search.html?q=' + encodeURIComponent(q);
  });
})();
