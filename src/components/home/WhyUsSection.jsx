const reasons = [
  {
    title: 'Service-first mindset',
    description: 'We prioritize your business objectives over arbitrary technical milestones.',
  },
  {
    title: 'End-to-end solutions',
    description: 'From concept to deployment and management, we cover the entire lifecycle.',
  },
  {
    title: 'Scalable architecture',
    description: 'Systems built to handle growth without compromising performance.',
  },
  {
    title: 'Fast and reliable delivery',
    description: 'Engineering precision meets agile execution for rapid market entry.',
  },
];

const WhyUsSection = () => (
  <section className="py-32 px-6 md:px-12 bg-surface-container-high overflow-hidden" id="why-us">
    <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-24">
      <div className="w-full md:w-1/2">
        <img
          alt="Tech engineering environment"
          className="w-full h-[600px] object-cover grayscale brightness-90"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7B3lIu-s0kdeRtj94gsMl9wJi79VFvqQmQNj71snYg-MHUzjWjNKMNxpbSVGuC6n-nPLQCx5bOf71TxKJfErQrDJu38F1wnG4vjRGVA6gAZ6jv9WupqEErs4OvVmzesarEC2aoX0H87qShiHVPx0IiStD2chV2KMrZyeJtcoeNmykg9qrqn--n8-e3iJleK9j_LP_cvujtA5VdtCk76rcJP0sdKX351dKsUHIEmO6sUlPcJdSxMvmLhh6m0RtcJcCwO_JZoF0n0c"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-5xl font-black tracking-tighter mb-12">Why Choose Us</h2>
        <ul className="space-y-10">
          {reasons.map((reason) => (
            <li key={reason.title}>
              <div className="space-y-2">
                <h4 className="text-xl font-bold uppercase tracking-tight mb-2">{reason.title}</h4>
                <p className="text-on-surface-variant">{reason.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default WhyUsSection;
