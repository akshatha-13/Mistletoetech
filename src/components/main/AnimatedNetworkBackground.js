import React, { useEffect, useRef } from 'react';
import './style.css';

const AnimatedNetworkBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = 430;
    const dots = [];
    const lines = [];
    const DOT_COUNT = 30;
    const LINE_COUNT = 20;

    for (let i = 0; i < DOT_COUNT; i++) {
      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        dx: (Math.random() - 0.5) * 0.8,
        dy: (Math.random() - 0.5) * 0.8,
        r: 3 + Math.random() * 2,
      });
    }
    for (let i = 0; i < LINE_COUNT; i++) {
      lines.push({
        a: Math.floor(Math.random() * DOT_COUNT),
        b: Math.floor(Math.random() * DOT_COUNT),
        opacity: 0.15 + Math.random() * 0.15,
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      // Draw lines
      lines.forEach(line => {
        const dotA = dots[line.a];
        const dotB = dots[line.b];
        ctx.beginPath();
        ctx.moveTo(dotA.x, dotA.y);
        ctx.lineTo(dotB.x, dotB.y);
        ctx.strokeStyle = `rgba(255,255,255,${line.opacity})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      });
      // Draw dots
      dots.forEach(dot => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.8)';
        ctx.shadowColor = '#2176ff';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });
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

export default AnimatedNetworkBackground;
