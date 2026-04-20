export const initStars = () => {
  const lenis = new window.Lenis({
    duration: 1.2,
    smooth: true,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  const container = document.getElementById('star-container');
  if (!container) return;

  container.innerHTML = '';

  const stars = [];

  for (let i = 0; i < 60; i++) {
    const s = document.createElement('div');
    s.className = 'star';

    const x = Math.random() * 100;
    const y = Math.random() * 100;

    const isStatic = Math.random() < 0.3;
    const z = isStatic ? 0 : 0.2 + Math.random() * 0.6;

    const size = isStatic ? 1 : 2;

    s.style.left = x + '%';
    s.style.top = y + '%';
    s.style.width = size + 'px';
    s.style.height = size + 'px';

    container.appendChild(s);
    stars.push({ el: s, initialY: y, speed: z });
  }

  lenis.on('scroll', ({ scroll, velocity }) => {
    const stretch = Math.max(1, Math.min(1 + Math.abs(velocity) * 0.15, 4));

    stars.forEach(star => {
      if (star.speed === 0) return;

      let pos = (star.initialY - (scroll * star.speed * 0.05)) % 100;
      if (pos < 0) pos += 100;

      star.el.style.top = pos + '%';
      star.el.style.transform = `scaleY(${stretch})`;
    });
  });
};