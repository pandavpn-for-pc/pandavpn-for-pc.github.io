// PandaVPN for PC - script.js
document.addEventListener('DOMContentLoaded', () => {
  // Navbar toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Smooth scroll with offset for anchors
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      const targetEl = document.querySelector(href);
      if (!targetEl) return;
      e.preventDefault();

      const navbarHeight = document.querySelector('.navbar') ? document.querySelector('.navbar').offsetHeight : 90;
      const targetPos = targetEl.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 8;

      window.scrollTo({
        top: targetPos,
        behavior: 'smooth'
      });

      // close mobile menu if open
      if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
      }
    });
  });

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-question');
    if (!q) return;
    q.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });

  // Footer collapse for mobile
  document.querySelectorAll('.footer-section').forEach(section => {
    const header = section.querySelector('.footer-toggle') || section.querySelector('h3');
    if (!header) return;
    header.addEventListener('click', () => {
      section.classList.toggle('active');
    });
  });

  // Accessibility: allow Enter to toggle FAQ / nav
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      // close nav menu on Escape
      if (navMenu && navMenu.classList.contains('active')) navMenu.classList.remove('active');
    }
  });
});
