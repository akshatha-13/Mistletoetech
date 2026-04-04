const HeroSection = ({ onGetStarted, onViewServices }) => (
  <section className="min-h-[819px] flex flex-col justify-center items-center px-6 md:px-12 py-24 max-w-[1440px] mx-auto text-center">
    <div className="w-full md:w-3/4 lg:w-2/3">
      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-on-surface-variant mb-6 block">Precision Brutalism</span>
      <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 text-primary">
        AI-Powered Software and Digital Growth Solutions
      </h1>
      <p className="mx-auto text-xl md:text-2xl text-on-surface-variant max-w-2xl leading-relaxed mb-12">
        We combine artificial intelligence, modern development, and digital media to create systems that drive engagement, efficiency, and business growth.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <button
          type="button"
          className="bg-primary text-on-primary px-10 py-5 text-sm font-bold uppercase tracking-widest hover:opacity-90 transition-all"
          onClick={onGetStarted}
        >
          Get Started
        </button>
        <button
          type="button"
          className="bg-surface-container-highest text-on-surface px-10 py-5 text-sm font-bold uppercase tracking-widest hover:bg-surface-container-high transition-all"
          onClick={onViewServices}
        >
          View Services
        </button>
      </div>
    </div>
  </section>
);

export default HeroSection;
