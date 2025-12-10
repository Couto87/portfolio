const demoRenderers = {};

function buildList(list, target) {
  target.innerHTML = '';
  list.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    target.appendChild(li);
  });
}

function paintPalette(colors, target) {
  target.innerHTML = '';
  colors.forEach((color) => {
    const swatch = document.createElement('span');
    swatch.className = 'swatch';
    swatch.style.background = color;
    target.appendChild(swatch);
  });
}

function createCanvas(container) {
  container.innerHTML = '';
  const canvas = document.createElement('canvas');
  canvas.width = 360;
  canvas.height = 220;
  container.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  return { canvas, ctx };
}

function createGrid(container, columns = 3) {
  container.innerHTML = '';
  container.style.display = 'grid';
  container.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  container.style.gap = '12px';
  return container;
}

function drawBars(ctx, values, palette) {
  const barWidth = (ctx.canvas.width - 40) / values.length;
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  values.forEach((v, i) => {
    const h = (ctx.canvas.height - 40) * v;
    ctx.fillStyle = palette[i % palette.length];
    ctx.fillRect(20 + i * barWidth, ctx.canvas.height - 20 - h, barWidth - 8, h);
  });
}

function sine(time, speed = 1, offset = 0) {
  return Math.sin(time * speed + offset);
}

function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

function initRenderers() {
  demoRenderers['atlas-de-cores'] = (box, palette) => {
    const { ctx, canvas } = createCanvas(box);
    function loop(t) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < 12; i++) {
        const y = (canvas.height / 12) * i;
        const hueShift = (t * 0.02 + i * 30) % 360;
        const grd = ctx.createLinearGradient(0, y, canvas.width, y + 40);
        grd.addColorStop(0, palette[0]);
        grd.addColorStop(0.5, `hsl(${hueShift},70%,60%)`);
        grd.addColorStop(1, palette[1]);
        ctx.fillStyle = grd;
        ctx.fillRect(0, y, canvas.width, 40);
      }
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  };

  demoRenderers['micro-jogo-orbital'] = (box, palette) => {
    const { ctx, canvas } = createCanvas(box);
    const satellites = Array.from({ length: 6 }, (_, i) => ({
      r: 40 + i * 12,
      speed: 0.001 + i * 0.0004,
      angle: Math.random() * Math.PI * 2,
      color: palette[i % palette.length],
    }));
    function loop(t) {
      ctx.fillStyle = palette[2];
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = palette[0];
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 22, 0, Math.PI * 2);
      ctx.fill();
      satellites.forEach((s) => {
        const angle = s.angle + t * s.speed;
        const x = canvas.width / 2 + Math.cos(angle) * s.r * 1.4;
        const y = canvas.height / 2 + Math.sin(angle) * s.r;
        ctx.strokeStyle = `${s.color}55`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.ellipse(canvas.width / 2, canvas.height / 2, s.r * 1.4, s.r, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  };

  demoRenderers['painel-de-insights'] = (box, palette) => {
    const { ctx, canvas } = createCanvas(box);
    const values = [0.2, 0.5, 0.35, 0.68, 0.48, 0.8];
    function loop(t) {
      const animated = values.map((v, i) => Math.abs(sine(t * 0.002, 1, i)) * 0.5 + v * 0.6);
      drawBars(ctx, animated, palette);
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  };

  demoRenderers['poster-tipografico'] = (box, palette) => {
    createGrid(box, 2);
    const title = document.createElement('div');
    title.style.gridColumn = '1 / span 2';
    title.style.background = palette[0];
    title.style.color = palette[1];
    title.style.fontSize = '32px';
    title.style.fontWeight = '700';
    title.style.padding = '16px';
    title.textContent = 'TYPO / 2049';
    const accent = document.createElement('div');
    accent.style.height = '120px';
    accent.style.background = `linear-gradient(135deg, ${palette[2]}, ${palette[3]})`;
    const copy = document.createElement('div');
    copy.style.padding = '12px';
    copy.style.background = palette[1];
    copy.style.color = palette[0];
    copy.style.fontWeight = '600';
    copy.textContent = 'Grades diagonais, cortes e contraste alto.';
    box.append(title, accent, copy);
  };

  demoRenderers['silhuetas-animais-svg'] = (box, palette) => {
    const svgNS = 'http://www.w3.org/2000/svg';
    box.innerHTML = '';
    const svg = document.createElementNS(svgNS, 'svg');
    svg.setAttribute('viewBox', '0 0 360 220');
    svg.style.width = '100%';
    svg.style.height = '220px';
    const path = document.createElementNS(svgNS, 'path');
    path.setAttribute('d', 'M40 170 Q90 90 160 120 T320 150 L300 170 Z');
    path.setAttribute('fill', palette[3]);
    path.setAttribute('stroke', palette[1]);
    path.setAttribute('stroke-width', '6');
    path.setAttribute('stroke-linejoin', 'round');
    const leg = document.createElementNS(svgNS, 'path');
    leg.setAttribute('d', 'M120 170 v30 M200 170 v30 M260 170 v30');
    leg.setAttribute('stroke', palette[1]);
    leg.setAttribute('stroke-width', '8');
    leg.setAttribute('stroke-linecap', 'round');
    const eye = document.createElementNS(svgNS, 'circle');
    eye.setAttribute('cx', '90');
    eye.setAttribute('cy', '130');
    eye.setAttribute('r', '6');
    eye.setAttribute('fill', palette[0]);
    svg.append(path, leg, eye);
    box.appendChild(svg);
  };

  demoRenderers['cartas-de-ia'] = (box, palette) => {
    createGrid(box, 3);
    ['Nebulosa', 'Cidade Neon', 'Retrato Futuro'].forEach((title, i) => {
      const card = document.createElement('div');
      card.style.border = `1px solid ${palette[0]}55`;
      card.style.background = `linear-gradient(135deg, ${palette[i]}, ${palette[(i + 1) % palette.length]}55)`;
      card.style.padding = '12px';
      card.style.borderRadius = '12px';
      card.style.color = '#0f172a';
      card.innerHTML = `<div style="font-weight:700; margin-bottom:6px;">${title}</div><div style="display:flex; gap:6px; flex-wrap:wrap;">` +
        ['hi-res', 'v4', 'stylized'].map((chip) => `<span class="chip" style="background:${palette[3]}; color:${palette[2]};">${chip}</span>`).join('') +
        '</div>';
      box.appendChild(card);
    });
  };

  demoRenderers['micro-lab-de-filtros'] = (box, palette) => {
    createGrid(box, 4);
    const filters = ['grayscale(1)', 'hue-rotate(90deg)', 'contrast(1.4)', 'blur(2px)', 'sepia(0.6)', 'saturate(1.5)', 'invert(0.1)', 'brightness(1.2)'];
    filters.forEach((filter, i) => {
      const tile = document.createElement('div');
      tile.style.height = '80px';
      tile.style.borderRadius = '10px';
      tile.style.backgroundImage = 'url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=60)';
      tile.style.backgroundSize = 'cover';
      tile.style.filter = filter;
      tile.style.boxShadow = `0 10px 24px ${palette[i % palette.length]}33`;
      box.appendChild(tile);
    });
  };

  demoRenderers['timeline-sonora'] = (box, palette) => {
    createGrid(box, 4);
    for (let i = 0; i < 8; i++) {
      const pulse = document.createElement('div');
      pulse.style.height = '12px';
      pulse.style.borderRadius = '999px';
      pulse.style.background = `linear-gradient(90deg, ${palette[0]}, ${palette[1]})`;
      pulse.style.animation = `pulse-${i} 2s ease-in-out infinite`;
      box.appendChild(pulse);
      const style = document.createElement('style');
      style.textContent = `@keyframes pulse-${i} {0%{transform:scaleX(0.2);}50%{transform:scaleX(1);}100%{transform:scaleX(0.2);}}`;
      document.head.appendChild(style);
    }
  };

  demoRenderers['mapa-de-particulas'] = (box, palette) => {
    const { ctx, canvas } = createCanvas(box);
    const points = Array.from({ length: 140 }, () => ({
      x: randomRange(0, canvas.width),
      y: randomRange(0, canvas.height),
      vx: randomRange(-0.4, 0.4),
      vy: randomRange(-0.4, 0.4),
    }));
    function loop() {
      ctx.fillStyle = `${palette[2]}08`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      points.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.fillStyle = palette[1];
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  };

  demoRenderers['editor-de-fractais'] = (box, palette) => {
    const { ctx, canvas } = createCanvas(box);
    function draw() {
      for (let x = 0; x < canvas.width; x++) {
        for (let y = 0; y < canvas.height; y++) {
          const nx = (x - canvas.width / 2) / 120;
          const ny = (y - canvas.height / 2) / 120;
          let a = nx;
          let b = ny;
          let i = 0;
          while (a * a + b * b <= 4 && i < 16) {
            const aa = a * a - b * b + nx;
            b = 2 * a * b + ny;
            a = aa;
            i++;
          }
          const c = palette[i % palette.length];
          ctx.fillStyle = c;
          ctx.fillRect(x, y, 1, 1);
        }
      }
    }
    draw();
  };

  demoRenderers['laboratorio-de-grid'] = (box, palette) => {
    createGrid(box, 4);
    for (let i = 0; i < 8; i++) {
      const cell = document.createElement('div');
      cell.style.border = `1px dashed ${palette[0]}55`;
      cell.style.background = i % 2 === 0 ? `${palette[1]}22` : `${palette[2]}22`;
      cell.style.height = '60px';
      cell.style.display = 'grid';
      cell.style.placeItems = 'center';
      cell.textContent = `${(i % 4) + 1} col`; 
      box.appendChild(cell);
    }
  };

  demoRenderers['gerador-de-nevoa'] = (box, palette) => {
    const { ctx, canvas } = createCanvas(box);
    function loop(t) {
      ctx.fillStyle = palette[0];
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < 4; i++) {
        ctx.fillStyle = `${palette[3]}1${i}`;
        ctx.beginPath();
        ctx.ellipse(
          canvas.width / 2 + Math.sin(t * 0.0002 + i) * 40,
          canvas.height / 2 + Math.cos(t * 0.0003 + i) * 30,
          220 - i * 30,
          80 + i * 12,
          0,
          0,
          Math.PI * 2,
        );
        ctx.fill();
      }
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  };

  demoRenderers['diagramador-de-sprints'] = (box, palette) => {
    createGrid(box, 3);
    ['Discovery', 'Build', 'Review'].forEach((phase, i) => {
      const card = document.createElement('div');
      card.style.border = `1px solid ${palette[1]}66`;
      card.style.borderLeft = `6px solid ${palette[i + 1]}`;
      card.style.padding = '12px';
      card.style.background = `${palette[0]}dd`;
      card.style.color = palette[2];
      card.innerHTML = `<div style="font-weight:700">${phase}</div><p style="opacity:0.9">Tarefas alinhadas e status.</p>`;
      box.appendChild(card);
    });
  };

  demoRenderers['cinematica-de-cards'] = (box, palette) => {
    const { canvas, ctx } = createCanvas(box);
    const cards = Array.from({ length: 5 }, (_, i) => ({
      x: 50 + i * 40,
      y: 60 + i * 6,
      w: 120,
      h: 80,
      color: palette[i % palette.length],
    }));
    box.onmousemove = (e) => {
      const rect = canvas.getBoundingClientRect();
      cards.forEach((c, idx) => {
        const dx = (e.clientX - rect.left - canvas.width / 2) * 0.02 * (idx + 1);
        const dy = (e.clientY - rect.top - canvas.height / 2) * 0.02 * (idx + 1);
        c.dx = dx;
        c.dy = dy;
      });
    };
    function loop() {
      ctx.fillStyle = palette[3];
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      cards.forEach((c, i) => {
        ctx.save();
        ctx.translate(c.x + (c.dx || 0), c.y + (c.dy || 0));
        ctx.rotate(((c.dx || 0) + (c.dy || 0)) * 0.002);
        ctx.fillStyle = `${c.color}dd`;
        ctx.fillRect(-c.w / 2, -c.h / 2, c.w, c.h);
        ctx.restore();
      });
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  };

  demoRenderers['teia-generativa'] = (box, palette) => {
    const { ctx, canvas } = createCanvas(box);
    const nodes = Array.from({ length: 36 }, () => ({
      x: randomRange(0, canvas.width),
      y: randomRange(0, canvas.height),
      vx: randomRange(-0.4, 0.4),
      vy: randomRange(-0.4, 0.4),
    }));
    function loop() {
      ctx.fillStyle = palette[0];
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });
      nodes.forEach((a, i) => {
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 120) {
            ctx.strokeStyle = `${palette[2]}33`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      });
      nodes.forEach((n) => {
        ctx.fillStyle = palette[1];
        ctx.beginPath();
        ctx.arc(n.x, n.y, 3, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  };

  demoRenderers['estudio-de-botoes'] = (box, palette) => {
    createGrid(box, 2);
    ['Vidro', 'Neomorph', 'Contraste', 'Outline', 'Brutal', 'Ghost'].forEach((variant, i) => {
      const btn = document.createElement('button');
      btn.textContent = variant;
      btn.style.padding = '12px 16px';
      btn.style.borderRadius = '12px';
      btn.style.border = i % 2 === 0 ? 'none' : `2px solid ${palette[i % palette.length]}`;
      btn.style.background = i % 3 === 0 ? `${palette[0]}33` : palette[(i + 1) % palette.length];
      btn.style.color = i % 2 === 0 ? palette[3] : palette[0];
      btn.style.boxShadow = '0 10px 20px rgba(0,0,0,0.12)';
      btn.onmouseenter = () => (btn.style.transform = 'translateY(-2px)');
      btn.onmouseleave = () => (btn.style.transform = 'translateY(0)');
      box.appendChild(btn);
    });
  };

  demoRenderers['scanner-de-posterizacao'] = (box, palette) => {
    const { canvas, ctx } = createCanvas(box);
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=600&q=40';
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const data = ctx.getImageData(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < data.data.length; i += 4) {
        const r = data.data[i];
        const g = data.data[i + 1];
        const b = data.data[i + 2];
        const quant = 4;
        data.data[i] = Math.round(r / quant) * quant;
        data.data[i + 1] = Math.round(g / quant) * quant;
        data.data[i + 2] = Math.round(b / quant) * quant;
      }
      ctx.putImageData(data, 0, 0);
      ctx.strokeStyle = palette[1];
      for (let y = 0; y < canvas.height; y += 6) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y + (y % 12 === 0 ? 6 : 0));
        ctx.stroke();
      }
    };
  };

  demoRenderers['jardim-low-poly'] = (box, palette) => {
    const { ctx, canvas } = createCanvas(box);
    ctx.fillStyle = palette[3];
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    function tri(x1, y1, x2, y2, x3, y3, color) {
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.lineTo(x3, y3);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
    }
    tri(40, 180, 180, 120, 320, 180, palette[0]);
    tri(100, 150, 180, 110, 240, 170, palette[1]);
    tri(200, 140, 260, 90, 300, 160, palette[2]);
    ctx.fillStyle = palette[0];
    ctx.fillRect(170, 130, 14, 50);
    ctx.beginPath();
    ctx.arc(177, 130, 24, 0, Math.PI * 2);
    ctx.fillStyle = palette[2];
    ctx.fill();
  };

  demoRenderers['scanner-de-tipografia'] = (box, palette) => {
    createGrid(box, 1);
    const sample = document.createElement('div');
    sample.style.fontFamily = '"Inter", system-ui';
    sample.style.color = palette[2];
    sample.style.padding = '18px';
    sample.style.background = palette[0];
    sample.innerHTML = '<div style="font-size:28px;font-weight:700">Contrast & Rhythm</div><div style="margin-top:8px;line-height:1.6">Tipografia ajustável com pesos variáveis, mostrando espaçamento, ritmo e hierarquia para páginas editoriais.</div>';
    box.appendChild(sample);
  };

  demoRenderers['relatorio-de-impacto'] = (box, palette) => {
    createGrid(box, 2);
    const hero = document.createElement('div');
    hero.style.gridColumn = '1 / span 2';
    hero.style.background = `linear-gradient(120deg, ${palette[1]}, ${palette[2]})`;
    hero.style.height = '80px';
    hero.style.borderRadius = '12px';
    hero.style.boxShadow = `0 10px 20px ${palette[2]}55`;
    const chart = document.createElement('div');
    chart.style.display = 'grid';
    chart.style.gridTemplateColumns = 'repeat(4,1fr)';
    chart.style.gap = '8px';
    chart.style.padding = '10px';
    chart.style.background = palette[3];
    ;[60, 80, 50, 90].forEach((v, i) => {
      const bar = document.createElement('div');
      bar.style.height = `${v}px`;
      bar.style.background = palette[i % palette.length];
      bar.style.borderRadius = '8px 8px 2px 2px';
      chart.appendChild(bar);
    });
    const quote = document.createElement('div');
    quote.style.padding = '12px';
    quote.style.background = palette[0];
    quote.style.color = palette[2];
    quote.textContent = 'Resultados com narrativa visual clara e concisa.';
    box.append(hero, chart, quote);
  };

  demoRenderers['diario-de-sons'] = (box, palette) => {
    const { ctx, canvas } = createCanvas(box);
    function loop(t) {
      ctx.fillStyle = palette[3];
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < 8; i++) {
        ctx.strokeStyle = palette[i % palette.length];
        ctx.lineWidth = 2;
        ctx.beginPath();
        for (let x = 0; x < canvas.width; x++) {
          const y = canvas.height / 2 + Math.sin((x * 0.02) + i + t * 0.002) * (20 + i * 4);
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  };

  demoRenderers['aplicador-de-texturas'] = (box, palette) => {
    const { canvas, ctx } = createCanvas(box);
    ctx.fillStyle = palette[0];
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = 'screen';
    for (let i = 0; i < 6000; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      ctx.fillStyle = `${palette[i % palette.length]}15`;
      ctx.fillRect(x, y, 1, 1);
    }
    ctx.globalCompositeOperation = 'source-over';
  };

  demoRenderers['painel-de-meteoros'] = (box, palette) => {
    const { canvas, ctx } = createCanvas(box);
    const streaks = Array.from({ length: 20 }, () => ({
      x: randomRange(-200, canvas.width),
      y: randomRange(-50, canvas.height),
      speed: randomRange(2, 5),
      len: randomRange(40, 120),
    }));
    function loop() {
      ctx.fillStyle = palette[0];
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      streaks.forEach((s) => {
        ctx.strokeStyle = `${palette[1]}aa`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x + s.len, s.y + s.len * 0.4);
        ctx.stroke();
        s.x += s.speed;
        s.y += s.speed * 0.4;
        if (s.x > canvas.width + 50) {
          s.x = randomRange(-200, -40);
          s.y = randomRange(-20, canvas.height / 2);
        }
      });
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  };

  demoRenderers['orquestra-de-pontos'] = (box, palette) => {
    const { canvas, ctx } = createCanvas(box);
    function loop(t) {
      ctx.fillStyle = palette[2];
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = palette[0];
      for (let i = 0; i < 80; i++) {
        const x = (i / 80) * canvas.width;
        const y = canvas.height / 2 + Math.sin((i * 0.2) + t * 0.003) * 60 * Math.cos(t * 0.001 + i);
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
      }
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  };

  demoRenderers['editor-de-cartazes'] = (box, palette) => {
    createGrid(box, 2);
    const layout = document.createElement('div');
    layout.style.gridColumn = '1 / span 2';
    layout.style.height = '120px';
    layout.style.background = `linear-gradient(90deg, ${palette[1]}, ${palette[2]})`;
    layout.style.borderRadius = '12px';
    const controls = document.createElement('div');
    controls.style.display = 'flex';
    controls.style.gap = '8px';
    ['Brutalista', 'Minimal', 'Editorial'].forEach((label) => {
      const chip = document.createElement('span');
      chip.className = 'chip';
      chip.textContent = label;
      controls.appendChild(chip);
    });
    box.append(layout, controls);
  };

  demoRenderers['micro-editor-de-sons'] = (box, palette) => {
    const { canvas, ctx } = createCanvas(box);
    const steps = Array.from({ length: 16 }, (_, i) => ({ idx: i, active: Math.random() > 0.5 }));
    function loop(t) {
      ctx.fillStyle = palette[3];
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      steps.forEach((s) => {
        const x = 20 + s.idx * 20;
        const lit = Math.floor(t / 300) % 16 === s.idx;
        ctx.fillStyle = lit ? palette[0] : `${palette[1]}55`;
        ctx.fillRect(x, canvas.height / 2 - 20, 14, 40);
      });
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  };

  demoRenderers['studio-de-marcas'] = (box, palette) => {
    createGrid(box, 3);
    for (let i = 0; i < 6; i++) {
      const logo = document.createElement('div');
      logo.style.border = `1px solid ${palette[0]}55`;
      logo.style.borderRadius = '10px';
      logo.style.aspectRatio = '1';
      logo.style.display = 'grid';
      logo.style.placeItems = 'center';
      logo.style.position = 'relative';
      logo.style.background = `${palette[i % palette.length]}22`;
      const inner = document.createElement('div');
      inner.style.width = '50%';
      inner.style.height = '50%';
      inner.style.border = `6px solid ${palette[(i + 1) % palette.length]}`;
      inner.style.borderRadius = i % 2 === 0 ? '12px' : '50%';
      inner.style.animation = 'spin 6s linear infinite';
      logo.appendChild(inner);
      box.appendChild(logo);
    }
  };

  demoRenderers['colecionador-de-luzes'] = (box, palette) => {
    const { canvas, ctx } = createCanvas(box);
    function loop(t) {
      ctx.fillStyle = palette[0];
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      const center = canvas.width * 0.3;
      for (let i = 0; i < 12; i++) {
        const angle = (Math.PI / 12) * i + t * 0.0005;
        const x2 = center + Math.cos(angle) * 260;
        const y2 = canvas.height / 2 + Math.sin(angle) * 120;
        const grad = ctx.createLinearGradient(center, canvas.height / 2, x2, y2);
        grad.addColorStop(0, palette[1]);
        grad.addColorStop(1, palette[2]);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(center, canvas.height / 2);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  };

  demoRenderers['tape-visual'] = (box, palette) => {
    const { canvas, ctx } = createCanvas(box);
    function loop(t) {
      ctx.fillStyle = palette[0];
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let y = 0; y < canvas.height; y += 6) {
        const offset = Math.sin(t * 0.003 + y) * 4;
        ctx.fillStyle = y % 12 === 0 ? palette[2] : palette[1];
        ctx.fillRect(20 + offset, y, canvas.width - 40, 4);
      }
      ctx.fillStyle = `${palette[3]}44`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  };

  demoRenderers['observatorio-de-formas'] = (box, palette) => {
    const { canvas, ctx } = createCanvas(box);
    function loop(t) {
      ctx.fillStyle = palette[2];
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = palette[0];
      ctx.lineWidth = 3;
      ctx.beginPath();
      for (let i = 0; i < 12; i++) {
        const angle = (Math.PI * 2 * i) / 12;
        const radius = 60 + Math.sin(t * 0.002 + i) * 20;
        const x = canvas.width / 2 + Math.cos(angle) * radius;
        const y = canvas.height / 2 + Math.sin(angle) * radius;
        ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();
      ctx.fillStyle = `${palette[1]}55`;
      ctx.fill();
      requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  };
}

function renderDemo(project) {
  const demoBox = document.querySelector('.demo-box');
  if (!demoBox) return;
  demoBox.style.background = `${project.palette[3]}11`;
  demoBox.style.boxShadow = `0 20px 40px ${project.palette[1]}33`;
  demoBox.style.border = `1px solid ${project.palette[0]}33`;
  const renderer = demoRenderers[project.slug];
  if (renderer) {
    renderer(demoBox, project.palette);
  } else {
    demoBox.innerHTML = '<span>Preview conceitual</span>';
  }
}

function initProjectPage() {
  const projectId = Number(document.body.dataset.projectId);
  const project = projects.find((item) => item.id === projectId);

  if (!project) return;

  document.querySelector('.project-title').textContent = project.title;
  document.querySelector('.project-summary').textContent = project.summary;
  document.querySelector('.project-description').textContent = project.description;
  document.querySelector('.project-demo').textContent = project.demo;
  document.querySelector('.project-impact').textContent = project.impact || '';
  document.querySelector('.project-usage').textContent = project.usage || '';

  buildList(project.highlights, document.querySelector('.project-highlights'));
  buildList(project.technologies, document.querySelector('.project-tech'));

  const chips = document.querySelector('.chip-row');
  chips.innerHTML = '';
  project.technologies.forEach((tech) => {
    const span = document.createElement('span');
    span.className = 'chip';
    span.textContent = tech;
    chips.appendChild(span);
  });

  const palette = document.querySelector('.project-palette');
  paintPalette(project.palette, palette);

  initRenderers();
  renderDemo(project);
}

document.addEventListener('DOMContentLoaded', initProjectPage);
