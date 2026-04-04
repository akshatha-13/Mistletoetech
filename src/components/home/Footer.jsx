import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => (
  <footer className="w-full py-16 px-6 md:px-12 bg-gray-100 dark:bg-gray-900">
    <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-end w-full gap-8">
      <div className="w-full md:w-auto">
        <div className="text-lg font-black text-black dark:text-white mb-4">MISTLETOE</div>
        <div className="font-inter text-[10px] tracking-widest uppercase font-semibold text-gray-500 dark:text-gray-400">
          © 2024 MISTLETOE TECH SOLUTIONS. PRECISION BRUTALISM.
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-4 text-gray-500 dark:text-gray-400">
        <a aria-label="LinkedIn" className="text-xl hover:text-black dark:hover:text-white transition-colors" href="#">
          <FaLinkedin />
        </a>
        <a aria-label="Instagram" className="text-xl hover:text-black dark:hover:text-white transition-colors" href="#">
          <FaInstagram />
        </a>
        <a aria-label="Twitter" className="text-xl hover:text-black dark:hover:text-white transition-colors" href="#">
          <FaTwitter />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
