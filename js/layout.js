// Shared nav + footer, injected on every page so they live in one place.
(function () {
  document.getElementById('siteHeader').innerHTML = `
    <div class="container nav-inner">
      <a href="index.html" class="nav-logo">Othman<span>.</span></a>
      <nav class="nav-links" id="navLinks">
        <a href="about.html">About</a>
        <a href="projects.html">Projects</a>
        <a href="experience.html">Experience</a>
        <a href="skills.html">Skills</a>
        <a href="writing.html">Writing</a>
        <a href="contact.html">Contact</a>
        <a href="contact.html" class="btn btn-small">Get in Touch</a>
      </nav>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>`;

  document.getElementById('siteFooter').innerHTML = `
    <div class="container">
      <p>© 2026 Othman El · Rabat, Morocco · <a href="mailto:mastermajidosse@gmail.com">mastermajidosse@gmail.com</a></p>
    </div>`;

  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

  const here = location.pathname.split('/').pop() || 'index.html';
  links.querySelectorAll('a').forEach(a => {
    if (a.getAttribute('href') === here) a.classList.add('active');
  });
})();
