const navItems = [
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'why-us', label: 'Why Us' },
];

const NavBar = ({ activeSection, onSelectSection, onContactOpen }) => {
  const navLinkClass = (section) =>
    `font-inter tracking-tight font-bold uppercase text-sm transition-colors ${
      activeSection === section
        ? 'text-black dark:text-white border-b-2 border-black dark:border-white pb-1'
        : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
    }`;

  const handleNavClick = (section, event) => {
    event.preventDefault();
    const sectionElement = document.getElementById(section);
    sectionElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', `#${section}`);
    onSelectSection(section);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-xl">
      <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-[1440px] mx-auto w-full">
        <button
          type="button"
          className="text-2xl font-black tracking-tighter text-black dark:text-white cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          MISTLETOE
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              className={navLinkClass(item.id)}
              href={`#${item.id}`}
              onClick={(event) => handleNavClick(item.id, event)}
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="bg-primary text-on-primary px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-primary-container transition-all active:scale-95 duration-100"
          onClick={onContactOpen}
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
