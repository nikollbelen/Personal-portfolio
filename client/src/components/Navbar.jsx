import { useLang } from "@/context/LanguageContext";
import { t } from "@/config/translations";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Menu, X, Search, Command } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { searchData } from "@/config/searchData";

// ── Language Toggle Button ────────────────────────────────
const LangToggle = () => {
  const { lang, toggleLang } = useLang();
  const isES = lang === "es";

  return (
    <button
      onClick={toggleLang}
      aria-label={isES ? "Switch to English" : "Cambiar a Español"}
      className="relative flex items-center gap-0 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-all overflow-hidden h-8 w-[68px] flex-shrink-0"
    >
      {/* Sliding pill indicator */}
      <motion.span
        className="absolute top-0.5 bottom-0.5 w-[30px] rounded-full bg-white/20 border border-white/30"
        animate={{ left: isES ? "2px" : "36px" }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
      <span
        className={`relative z-10 w-1/2 text-center text-xs font-semibold transition-colors ${
          isES ? "text-white" : "text-gray-500"
        }`}
      >
        ES
      </span>
      <span
        className={`relative z-10 w-1/2 text-center text-xs font-semibold transition-colors ${
          !isES ? "text-white" : "text-gray-500"
        }`}
      >
        EN
      </span>
    </button>
  );
};

// ── Inline Search (replaces SearchDialog) ────────────────
const SearchBar = ({ iconOnly = false }) => {
  const { lang } = useLang();
  const tx = t.nav[lang];
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(searchData);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mac, setMac] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isMac =
      typeof navigator !== "undefined" &&
      (/Mac|iPod|iPhone|iPad/.test(navigator.platform) ||
        navigator.userAgentData?.platform === "macOS");
    setMac(isMac);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (!isOpen) return;
      if (e.key === "Escape") setIsOpen(false);
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % results.length);
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
      }
      if (e.key === "Enter" && results.length > 0) {
        e.preventDefault();
        navigate(results[selectedIndex].path);
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, results, selectedIndex, navigate]);

  useEffect(() => {
    if (query) {
      const lower = query.toLowerCase();
      setResults(
        searchData.filter(
          (item) =>
            item.title.toLowerCase().includes(lower) ||
            item.description.toLowerCase().includes(lower) ||
            item.keywords.some((k) => k.toLowerCase().includes(lower))
        )
      );
      setSelectedIndex(0);
    } else {
      setResults(searchData);
    }
  }, [query]);

  if (!isOpen) {
    if (iconOnly) {
      return (
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 text-gray-400 hover:text-white transition-colors"
          aria-label={tx.openSearch}
        >
          <Search className="w-5 h-5" />
        </button>
      );
    }
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-between gap-2 px-4 py-1.5 w-56 lg:w-64 xl:w-72 text-gray-400 hover:text-white transition-colors bg-white/10 hover:bg-white/15 rounded-lg border border-white/10 hover:border-white/20"
      >
        <span className="flex items-center gap-2">
          <Search className="w-4 h-4 flex-shrink-0" />
          <span className="text-sm">{tx.searchPlaceholder}</span>
        </span>
        <span className="flex items-center gap-0.5 px-1.5 py-0.5 text-xs bg-white/10 rounded flex-shrink-0">
          {mac ? (
            <>
              <Command className="w-3 h-3" />
              <span>K</span>
            </>
          ) : (
            <span>Ctrl+K</span>
          )}
        </span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 text-center">
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        <div className="inline-block w-full max-w-2xl mt-24 text-left align-middle transition-all transform">
          <div className="relative bg-gray-900 rounded-xl shadow-2xl">
            <div className="flex items-center px-4 border-b border-white/10">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={tx.searchPlaceholder}
                className="w-full px-4 py-4 text-white bg-transparent border-0 focus:outline-none focus:ring-0"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
              />
              <div className="flex items-center px-1.5 py-0.5 text-xs text-gray-400 bg-white/10 rounded">
                <span>Esc</span>
              </div>
            </div>
            <div className="max-h-[60vh] overflow-y-auto">
              {results.length === 0 ? (
                <div className="p-4 text-sm text-gray-400">{tx.searchNoResults}</div>
              ) : (
                <div className="py-2">
                  {results.map((result, index) => (
                    <button
                      key={result.path}
                      className={`w-full px-4 py-3 text-left hover:bg-white/5 flex items-center justify-between ${
                        index === selectedIndex ? "bg-white/10" : ""
                      }`}
                      onClick={() => {
                        navigate(result.path);
                        setIsOpen(false);
                      }}
                    >
                      <div>
                        <div className="text-white font-medium">{result.title}</div>
                        <div className="text-sm text-gray-400">{result.description}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Navbar ────────────────────────────────────────────────
const Navbar = () => {
  const { lang } = useLang();
  const tx = t.nav[lang];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    if (!isMenuOpen) return;
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      ref={menuRef}
      className="fixed top-0 w-full z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center gap-2">
            {/* Left — Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2">
                <Code2 className="w-7 h-7 text-white" aria-hidden="true" />
                <span className="text-lg font-bold text-white hidden sm:block">Nikoll</span>
              </Link>
            </div>

            {/* Center — Full search bar (lg+ only) */}
            <div className="hidden lg:flex flex-1 justify-center">
              <SearchBar />
            </div>

            {/* Right — Nav links (md+) + Lang Toggle */}
            <div className="hidden md:flex flex-shrink-0 items-center gap-1 ml-auto lg:ml-0">
              {tx.links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link flex items-center gap-1.5 text-xs xl:text-sm ${
                    location.pathname === link.path
                      ? "bg-white/15 backdrop-blur-sm text-white"
                      : ""
                  }`}
                  aria-current={location.pathname === link.path ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}

              {/* Icon-only search for md–lg range */}
              <div className="lg:hidden ml-1">
                <SearchBar iconOnly />
              </div>

              {/* Language Toggle */}
              <div className="ml-2">
                <LangToggle />
              </div>
            </div>

            {/* Mobile — Search + Lang + Hamburger */}
            <div className="flex md:hidden items-center gap-1 ml-auto">
              <SearchBar iconOnly />
              <LangToggle />
              <button
                className="p-2 text-gray-400 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                aria-label={isMenuOpen ? tx.closeMenu : tx.openMenu}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 right-0 bg-black/80 backdrop-blur-xl border-t border-white/10"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="px-4 pt-2 pb-3 space-y-1">
                {tx.links.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors ${
                      location.pathname === link.path
                        ? "bg-white/10 text-white"
                        : ""
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={location.pathname === link.path ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
