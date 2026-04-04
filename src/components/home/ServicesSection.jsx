const services = [
  {
    icon: 'campaign',
    title: 'Digital Media Solutions',
    description: 'Helping brands grow their digital presence with consistent content and strategy.',
  },
  {
    icon: 'terminal',
    title: 'Web Application Development',
    description: 'Scalable and high-performance web applications tailored to your needs.',
  },
  {
    icon: 'smartphone',
    title: 'Mobile Application Development',
    description: 'User-focused mobile apps built for performance and scalability.',
  },
  {
    icon: 'query_stats',
    title: 'Data Analytics',
    description: 'Transforming data into actionable insights for better decision-making.',
  },
  {
    icon: 'psychology',
    title: 'AI & Automation',
    description: 'Automating processes and improving efficiency with intelligent systems.',
  },
  {
    icon: 'cloud',
    title: 'Cloud & DevOps',
    description: 'Reliable cloud systems and seamless deployment pipelines.',
  },
];

const ServicesSection = () => (
  <section className="py-32 px-6 md:px-12 bg-surface" id="services">
    <div className="max-w-[1440px] mx-auto">
      <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-on-surface-variant mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {services.map((service) => (
          <div key={service.title} className="group bg-surface-container-lowest p-12 min-h-[400px] flex flex-col justify-between hover:bg-primary transition-all duration-300">
            <div>
              <span className="material-symbols-outlined text-4xl mb-6 group-hover:text-on-primary transition-colors">{service.icon}</span>
              <h3 className="text-2xl font-black tracking-tighter mb-4 group-hover:text-on-primary transition-colors">{service.title}</h3>
              <p className="text-on-surface-variant group-hover:text-on-primary/70 transition-colors">{service.description}</p>
            </div>
            <div className="w-12 h-px bg-outline-variant group-hover:bg-on-primary transition-colors"></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
