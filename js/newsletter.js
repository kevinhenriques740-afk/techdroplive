// Newsletter subscription handler — works on all pages
(function () {
  function isValidEmail(val) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim());
  }

  function handleSubscribe(widget) {
    const input = widget.querySelector('input[type="email"]');
    const btn = widget.querySelector('button');

    // Remove any previous message
    const existing = widget.querySelector('.nl-msg');
    if (existing) existing.remove();

    const msg = document.createElement('p');
    msg.className = 'nl-msg';
    msg.style.cssText = 'font-size:12px;margin:6px 0 0;padding:6px 10px;border-radius:4px;';

    if (!input.value.trim() || !isValidEmail(input.value)) {
      msg.textContent = 'Please enter a valid email.';
      msg.style.color = '#e63946';
      msg.style.background = '#fff0f0';
      btn.insertAdjacentElement('afterend', msg);
      return;
    }

    // Valid — hide form elements, show success
    input.style.display = 'none';
    btn.style.display = 'none';
    msg.textContent = "You're subscribed! Check your inbox.";
    msg.style.color = '#2d9e6b';
    msg.style.background = '#e8f8f2';
    msg.style.fontSize = '14px';
    msg.style.textAlign = 'center';
    msg.style.padding = '12px';
    btn.insertAdjacentElement('afterend', msg);
  }

  document.addEventListener('click', function (e) {
    const btn = e.target.closest('.newsletter-widget button');
    if (!btn) return;
    handleSubscribe(btn.closest('.newsletter-widget'));
  });
})();
