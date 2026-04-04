import { useState, useEffect, useRef } from 'react';

const stats = [
  { target: 50, label: 'Clients', suffix: '+' },
  { target: 100, label: 'Projects', suffix: '+' },
  { target: 10, label: 'Years Experience', suffix: '+' },
  { target: 99, label: 'Satisfaction', suffix: '%' },
];

const StatsSection = () => {
  const [values, setValues] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const duration = 2000; // animation duration in ms

    const animate = () => {
      const startTime = performance.now();

      const frame = (time) => {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);

        setValues(
          stats.map((stat) => Math.floor(stat.target * progress))
        );

        if (progress < 1) {
          requestAnimationFrame(frame);
        }
      };

      requestAnimationFrame(frame);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animate();
        }
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="bg-primary text-on-primary py-24 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
        {stats.map((item, index) => (
          <div key={item.label} className="border-l border-on-surface-variant/30 pl-6">
            <div className="text-4xl md:text-6xl font-black tracking-tighter mb-2">
  {String(hasAnimated ? values[index] : 0).padStart(2, '0')}
  {item.suffix}
</div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-on-primary/60">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
