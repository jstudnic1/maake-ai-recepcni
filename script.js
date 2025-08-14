// Simple interactions: mobile nav and demo audio
(function() {
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  const audio = document.getElementById('demo-audio');
  const playDemoBtn = document.querySelector('[data-action="play-demo"]');
  const form = document.querySelector('[data-enhance]');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
  }

  if (playDemoBtn && audio) {
    playDemoBtn.addEventListener('click', async () => {
      try {
        playDemoBtn.disabled = true;
        await audio.play();
        playDemoBtn.textContent = '⏸ Pauza';
      } catch (e) {
        console.warn('Audio play blocked', e);
      } finally {
        setTimeout(() => (playDemoBtn.disabled = false), 600);
      }
    });

    audio.addEventListener('pause', () => {
      playDemoBtn.textContent = '▶ Přehrát ukázku';
    });

    audio.addEventListener('ended', () => {
      playDemoBtn.textContent = '▶ Přehrát znovu';
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const ok = form.querySelector('.form-ok');
      if (ok) ok.hidden = false;
      form.reset();
    });
  }
})();
