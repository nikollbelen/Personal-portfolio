import { CONTACT_INFO } from "@/config/contact";
import { Code2, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { t } from "@/config/translations";
import { useLang } from "@/context/LanguageContext";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { lang } = useLang();
  const tx = t.footer[lang];

  const column1 = tx.links.slice(0, 3);
  const column2 = tx.links.slice(3, 5);
  const column3 = tx.links.slice(5, 7);

  return (
    <footer className="relative mt-24">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <Code2 className="w-8 h-8 text-white" aria-hidden="true" />
              <span className="text-xl font-bold text-white">
                Nikoll Bonilla Hancco
              </span>
            </Link>
            <p className="text-sm text-gray-400">
              {tx.tagline}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">{tx.contact}</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  aria-label="Email Nikoll Bonilla Hancco"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phoneRaw}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  aria-label="Phone Nikoll Bonilla Hancco"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  {CONTACT_INFO.phone}
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">{tx.navigation}</h3>
            <div className="grid grid-cols-3 gap-x-6 gap-y-3">
              <div>
                {column1.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-sm text-gray-400 hover:text-white transition-colors mb-2"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div>
                {column2.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-sm text-gray-400 hover:text-white transition-colors mb-2"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div>
                {column3.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-sm text-gray-400 hover:text-white transition-colors mb-2"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white">{tx.networks}</h3>
            <div className="flex space-x-4">
              <a
                href={CONTACT_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {currentYear} Nikoll Bonilla Hancco. {tx.copyright}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <span className="text-sm text-gray-400 flex items-center gap-2">
                <svg
                  className="w-3 h-3"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M12 1L24 22H0L12 1Z" />
                </svg>
                {tx.portfolio}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
