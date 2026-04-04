const ContactModal = ({
  open,
  onClose,
  onSubmit,
  isSubmitting,
  submitSuccess,
  submitError,
  contactName,
  setContactName,
  contactEmail,
  setContactEmail,
  contactPhone,
  setContactPhone,
  contactMessage,
  setContactMessage,
}) => {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-60 flex min-h-screen items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-[760px] max-h-[calc(100vh-4rem)] overflow-y-auto rounded-[2rem] bg-white p-8 shadow-2xl">
        <div className="flex items-center justify-between gap-4 pb-4 border-b border-gray-200">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-gray-500">Contact</p>
            <h2 className="text-3xl font-black text-black">Get in touch</h2>
          </div>
          <button
            type="button"
            className="text-xl font-bold text-gray-600 hover:text-black"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-[1fr_1fr]">
          <div className="space-y-2">
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">Phone</div>
            <div className="text-lg font-bold">+91 9989075353</div>
          </div>
          <div className="space-y-2">
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">Email</div>
            <div className="text-lg font-bold">info@mistletoetech.com</div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="mt-8 space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-2 text-sm text-gray-700 text-left">
              <span className="block text-left">Name</span>
              <input
                value={contactName}
                onChange={(e) => setContactName(e.target.value)}
                required
                className="w-full rounded-[1rem] border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-black"
                placeholder="Your name"
              />
            </label>
            <label className="space-y-2 text-sm text-gray-700 text-left">
              <span className="block text-left">Email</span>
              <input
                type="email"
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
                required
                className="w-full rounded-[1rem] border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-black"
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label className="space-y-2 text-sm text-gray-700 text-left">
            <span className="block text-left">Phone</span>
            <input
              type="tel"
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value)}
              placeholder="Your phone number (optional)"
              className="w-full rounded-[1rem] border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-black"
            />
          </label>

          <label className="space-y-2 text-sm text-gray-700 text-left">
            <span className="block text-left">Message</span>
            <textarea
              value={contactMessage}
              onChange={(e) => setContactMessage(e.target.value)}
              required
              rows={5}
              className="w-full rounded-[1rem] border border-gray-300 bg-gray-50 px-4 py-3 text-sm text-gray-900 outline-none focus:border-black"
              placeholder="Tell us what you need help with."
            />
          </label>

          {submitSuccess && (
            <div className="rounded-[1rem] border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
              {submitSuccess}
            </div>
          )}
          {submitError && (
            <div className="rounded-[1rem] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
              {submitError}
            </div>
          )}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500">Your message will be sent securely from the website.</span>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`rounded-[1rem] px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-white transition ${
                isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-gray-900'
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
