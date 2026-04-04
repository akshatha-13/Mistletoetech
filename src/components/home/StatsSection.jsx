const stats = [
  { value: '50+', label: 'Clients' },
  { value: '100+', label: 'Projects' },
  { value: '10+', label: 'Years Experience' },
  { value: '99%', label: 'Satisfaction' },
];

const StatsSection = () => (
  <section className="bg-primary text-on-primary py-24 px-6 md:px-12">
    <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
      {stats.map((item) => (
        <div key={item.label} className="border-l border-on-surface-variant/30 pl-6">
          <div className="text-4xl md:text-6xl font-black tracking-tighter mb-2">{item.value}</div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-on-primary/60">{item.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default StatsSection;
