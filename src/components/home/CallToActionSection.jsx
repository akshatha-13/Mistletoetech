const CallToActionSection = ({ onContactOpen }) => (
  <section className="py-40 px-6 md:px-12 bg-surface">
    <div className="max-w-[1440px] mx-auto text-center border-y border-outline-variant/30 py-32">
      <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-12 leading-[0.9] max-w-4xl mx-auto">
        Let’s Build Something That Actually Grows Your Business
      </h2>
      <button
        type="button"
        className="bg-primary text-on-primary px-16 py-6 text-base font-black uppercase tracking-[0.2em] hover:scale-105 transition-transform"
        onClick={onContactOpen}
      >
        Contact Us
      </button>
    </div>
  </section>
);

export default CallToActionSection;
