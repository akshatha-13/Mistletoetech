const AboutSection = () => (
  <section className="py-32 px-6 md:px-12 bg-surface-container-low" id="about">
    <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row gap-16 items-start">
      <div className="w-full md:w-1/3">
        <h2 className="text-4xl font-black uppercase tracking-tighter leading-none sticky top-32">
          About
          <br />
          Mistletoe
        </h2>
      </div>
      <div className="w-full md:w-2/3">
        <p className="text-2xl md:text-3xl font-medium leading-tight text-on-surface mb-8">
          Mistletoe Tech Solutions is a service-driven digital and technology company focused on helping businesses grow with the right mix of technology, content, and data.
        </p>
        <p className="text-lg text-on-surface-variant leading-relaxed mb-12">
          We don’t just build applications — we also manage digital presence, create content, and deliver scalable systems that support real business growth. From social media to cloud architecture, we act as your end-to-end technology partner.
        </p>
        <div className="py-12 border-t border-outline-variant/30">
          <span className="text-sm font-bold uppercase tracking-widest text-primary italic">
            "We don’t just deliver projects — we build long-term partnerships."
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
