(() => {
  const canvas = document.getElementById('orbs');
  const ctx = canvas.getContext('2d');
  const COLORS = ['#00ffff', '#ff00aa'];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  window.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });

  // Click to disperse
  window.addEventListener('click', e => {
    orbs.forEach(o => {
      const dx = o.x - e.clientX;
      const dy = o.y - e.clientY;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const force = Math.max(0, (220 - dist)) / 220 * 5;
      o.vx += (dx / dist) * force;
      o.vy += (dy / dist) * force;
    });
  });

  const orbs = Array.from({ length: 7 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    r: Math.random() * 1.5 + 0.75,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    vx: (Math.random() - 0.5) * 0.12,
    vy: (Math.random() - 0.5) * 0.12,
    alpha: Math.random() * 0.3 + 0.1,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: Math.random() * 0.008 + 0.003,
  }));

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    orbs.forEach(o => {
      o.pulse += o.pulseSpeed;
      const glowR = o.r * (1 + 0.4 * Math.sin(o.pulse));
      const alpha = o.alpha * (0.8 + 0.2 * Math.sin(o.pulse));

      const grad = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, glowR * 10);
      grad.addColorStop(0, o.color + Math.round(alpha * 255).toString(16).padStart(2, '0'));
      grad.addColorStop(1, o.color + '00');
      ctx.beginPath();
      ctx.arc(o.x, o.y, glowR * 10, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(o.x, o.y, glowR, 0, Math.PI * 2);
      ctx.fillStyle = o.color;
      ctx.globalAlpha = alpha;
      ctx.fill();
      ctx.globalAlpha = 1;

      // Magnetic pull
      const dx = mouse.x - o.x;
      const dy = mouse.y - o.y;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      o.vx += (dx / dist) * 0.0008;
      o.vy += (dy / dist) * 0.0008;

      // Speed cap
      const spd = Math.sqrt(o.vx * o.vx + o.vy * o.vy);
      if (spd > 0.6) { o.vx = (o.vx / spd) * 0.6; o.vy = (o.vy / spd) * 0.6; }

      o.x += o.vx;
      o.y += o.vy;

      // Wrap edges
      if (o.x < -20) o.x = canvas.width + 20;
      if (o.x > canvas.width + 20) o.x = -20;
      if (o.y < -20) o.y = canvas.height + 20;
      if (o.y > canvas.height + 20) o.y = -20;
    });
    requestAnimationFrame(draw);
  }
  draw();
})();
