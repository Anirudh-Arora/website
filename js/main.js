/* ============================================================
   MAIN.JS — Anirudh Arora Portfolio
   Handles: dark mode, nav scroll, hamburger, scroll reveal,
            typing effect, scroll progress bar
   ============================================================ */

/* ── Dark / Light Mode Toggle ────────────────────────────── */
const themeToggle = document.getElementById('theme-toggle');
const themeIcon   = document.getElementById('theme-icon');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  if (themeIcon) themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', theme);
}

// Load saved theme on page init
(function() {
  const saved = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(saved);
})();

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  });
}

/* ── Navigation: scroll shadow + active link ─────────────── */
const siteNav = document.querySelector('.site-nav');

window.addEventListener('scroll', () => {
  if (!siteNav) return;
  siteNav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ── Hamburger Menu ──────────────────────────────────────── */
const hamburger = document.getElementById('nav-hamburger');
const mobileMenu = document.getElementById('nav-mobile');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ── Scroll Progress Bar ─────────────────────────────────── */
const progressBar = document.getElementById('scroll-progress');

if (progressBar) {
  window.addEventListener('scroll', () => {
    const scrollTop    = window.scrollY;
    const docHeight    = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent= docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = scrollPercent + '%';
  }, { passive: true });
}

/* ── Scroll Reveal ───────────────────────────────────────── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('[data-reveal], [data-reveal-stagger]').forEach(el => {
  revealObserver.observe(el);
});

/* ── Typing Animation ────────────────────────────────────── */
function startTyping(elementId, phrases, speed = 80, pause = 2200, deleteSpeed = 45) {
  const el = document.getElementById(elementId);
  if (!el || !phrases || !phrases.length) return;

  let phraseIndex = 0;
  let charIndex   = 0;
  let isDeleting  = false;

  function tick() {
    const current = phrases[phraseIndex];

    if (isDeleting) {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
    } else {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
    }

    let delay = isDeleting ? deleteSpeed : speed;

    if (!isDeleting && charIndex === current.length) {
      // Pause at full phrase
      delay = pause;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = 400;
    }

    setTimeout(tick, delay);
  }

  // Start after a brief delay
  setTimeout(tick, 600);
}

/* ── Publications Filter ─────────────────────────────────── */
function initPubFilter() {
  const filterBtns = document.querySelectorAll('.pub-filter-btn');
  const pubCards   = document.querySelectorAll('.pub-card');

  if (!filterBtns.length || !pubCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      pubCards.forEach(card => {
        if (filter === 'all') {
          card.classList.remove('hidden');
        } else {
          const matches = card.dataset.status === filter ||
                          card.dataset.type   === filter ||
                          card.dataset.year   === filter;
          card.classList.toggle('hidden', !matches);
        }
      });
    });
  });
}

/* ── Projects Filter ─────────────────────────────────────── */
function initProjectFilter() {
  const filterBtns   = document.querySelectorAll('.proj-filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      projectCards.forEach(card => {
        if (filter === 'all') {
          card.classList.remove('hidden');
        } else {
          card.classList.toggle('hidden', card.dataset.category !== filter);
        }
      });
    });
  });
}

/* ── Run on DOM ready ────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initPubFilter();
  initProjectFilter();

  // Typing effect — only runs if element exists (index.html)
  if (window.SITE_DATA) {
    startTyping('typing-text', SITE_DATA.typingRoles);
  }
});
