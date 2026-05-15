/* ============================================================
   ECOLOJIM — main.js
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── NAVBAR scroll behaviour ── */
  const navbar = document.querySelector('.navbar');
  const onScroll = () => {
    if (window.scrollY > 60) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll(); // run once on load

  /* ── Mobile menu ── */
  const toggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('navMobile');
  toggle?.addEventListener('click', () => {
    toggle.classList.toggle('open');
    mobileMenu?.classList.toggle('open');
  });
  // close on link click
  mobileMenu?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle?.classList.remove('open');
      mobileMenu?.classList.remove('open');
    });
  });

  /* ── Scroll reveal ── */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* ── Active nav link ── */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── Contact form ── */
  const form = document.getElementById('contactForm');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const name = form.querySelector('#name')?.value;
    const service = form.querySelector('#service')?.value;
    const phone = form.querySelector('#phone')?.value;
    const message = form.querySelector('#message')?.value;

    // Build WhatsApp message
    const text = `¡Hola! Me llamo *${name}* y me gustaría solicitar información sobre *${service}*.%0A%0A📞 Mi teléfono: ${phone}%0A%0A${message ? '💬 Mensaje: ' + message : ''}%0A%0A_Enviado desde ecolojimcontrol.com_`;
    window.open(`https://wa.me/524443718817?text=${text}`, '_blank');

    if (btn) {
      btn.textContent = '¡Enviado! ✓';
      btn.style.background = '#4a7c3f';
      setTimeout(() => {
        btn.textContent = 'Solicitar cotización';
        btn.style.background = '';
        form.reset();
      }, 3000);
    }
  });

  /* ── Counter animation ── */
  const counters = document.querySelectorAll('[data-count]');
  const countIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.count);
        const suffix = el.dataset.suffix || '';
        let current = 0;
        const step = target / 60;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          el.textContent = Math.floor(current) + suffix;
        }, 16);
        countIO.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(el => countIO.observe(el));

});
