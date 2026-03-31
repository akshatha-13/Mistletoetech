import React, { useEffect, useRef } from 'react';
import './style.css';

const DOT_COUNT = 50;
const LINE_DISTANCE = 120;

const AdvancedNetworkBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = 430;
    const dots = [];
    for (let i = 0; i < DOT_COUNT; i++) {
      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        dx: (Math.random() - 0.5) * 1.2,
        dy: (Math.random() - 0.5) * 1.2,
        r: 2 + Math.random() * 3,
        color: `hsl(${Math.random()*360}, 80%, 70%)`,
      });
    }
    let mouse = { x: null, y: null };
    canvas.addEventListener('mousemove', e => {
      mouse.x = e.offsetX;
      mouse.y = e.offsetY;
    });
    canvas.addEventListener('mouseleave', () => {
      mouse.x = null;
      mouse.y = null;
    });
    function animate() {
      ctx.clearRect(0, 0, width, height);
      // Draw lines between close dots
      for (let i = 0; i < DOT_COUNT; i++) {
        for (let j = i + 1; j < DOT_COUNT; j++) {
          const a = dots[i], b = dots[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < LINE_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(30,144,255,${0.12 + 0.18 * (1 - dist/LINE_DISTANCE)})`;
            ctx.lineWidth = 1.1;
            ctx.stroke();
          }
        }
      }
      // Draw dots
      dots.forEach(dot => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.shadowColor = '#2176ff';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
      // Mouse interaction: highlight lines to mouse
      if (mouse.x !== null && mouse.y !== null) {
        dots.forEach(dot => {
          const dist = Math.hypot(dot.x - mouse.x, dot.y - mouse.y);
          if (dist < LINE_DISTANCE) {
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(255, 120, 0, ${0.18 + 0.22 * (1 - dist/LINE_DISTANCE)})`;
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
        });
      }
      // Move dots
      dots.forEach(dot => {
        dot.x += dot.dx;
        dot.y += dot.dy;
        if (dot.x < 0 || dot.x > width) dot.dx *= -1;
        if (dot.y < 0 || dot.y > height) dot.dy *= -1;
      });
      requestAnimationFrame(animate);
    }
    animate();
    // Responsive
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = 430;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas ref={canvasRef} className="network-bg-canvas" />
  );
};

export default AdvancedNetworkBackground;
