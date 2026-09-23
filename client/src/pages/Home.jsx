import cvES from "@/assets/files/cv_pdf/Nikoll_Bonilla(CV-ES).pdf";
import cvEN from "@/assets/files/cv_pdf/Nikoll_Bonilla(CV-EN).pdf";
import { VercelLogo } from "@/components/TechLogos";
import { CONTACT_INFO } from "@/config/contact";
import { t } from "@/config/translations";
import { useLang } from "@/context/LanguageContext";
import { isTouchDevice } from "@/utils/helpers";
import { motion } from "framer-motion";
import {
  Check,
  Copy,
  FileDown,
  Linkedin,
  MessageCircle,
  User,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const { lang } = useLang();
  const tx = t.home[lang];
  const cvFile = lang === "es" ? cvES : cvEN;
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // silent fail
    }
  };

  const handleEmailClick = () => {
    if (isTouchDevice()) {
      window.location.href = `mailto:${CONTACT_INFO.email}`;
    } else {
      copyToClipboard();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 mt-7 sm:mt-0 md:mt-3 lg:mt-5">
      <div className="text-center relative z-10 max-w-4xl mx-auto w-full">
        <motion.h1
          className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 relative tracking-tighter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {tx.title}
        </motion.h1>

        <motion.h2
          className="text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 relative tracking-tight leading-snug"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {tx.subtitle}
        </motion.h2>

        <motion.p
          className="text-sm sm:text-base md:text-lg text-gray-400 mb-4 sm:mb-5 max-w-2xl mx-auto px-2 sm:px-4 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {tx.description}
        </motion.p>

        <motion.div
          className="flex flex-col items-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href={cvFile}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-black rounded-full text-sm sm:text-base font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
            >
              <FileDown className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              {tx.downloadCV}
            </a>
            <Link
              to="/about"
              className="px-4 sm:px-6 py-2.5 sm:py-3 bg-white/10 text-white rounded-full text-sm sm:text-base font-medium hover:bg-white/20 transition-colors flex items-center gap-2"
            >
              <User className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              {tx.aboutMe}
            </Link>
          </div>

          <button
            onClick={handleEmailClick}
            className="group relative flex items-center gap-2 py-2 pl-8 pr-4 hover:bg-transparent transition-all cursor-copy sm:cursor-pointer max-w-full overflow-hidden"
            aria-label={`Email: ${CONTACT_INFO.email}`}
          >
            <div className="absolute left-0 flex items-center flex-shrink-0">
              <div className="w-3 text-gray-500 group-hover:text-white transition-colors">
                <VercelLogo />
              </div>
              <span className="text-lg font-mono text-gray-400 ml-3 group-hover:text-white transition-colors">
                ~
              </span>
            </div>
            <span className="text-gray-400 group-hover:text-white transition-colors ml-4 text-xs sm:text-sm md:text-base truncate min-w-0">
              {CONTACT_INFO.email}
            </span>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity ml-1 hidden sm:block flex-shrink-0">
              {copied ? (
                <Check className="w-4 h-4 text-green-500" aria-hidden="true" />
              ) : (
                <Copy
                  className="w-4 h-4 text-gray-400 hover:text-white transition-colors"
                  aria-hidden="true"
                />
              )}
            </div>
          </button>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 justify-items-center gap-4 sm:gap-6 mt-8 sm:mt-12 max-w-xs sm:max-w-sm mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href={CONTACT_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group w-full"
            whileHover={{ y: -2 }}
            aria-label="Perfil de LinkedIn"
          >
            <div className="p-3 rounded-xl transition-colors mb-2 flex justify-center">
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors" />
            </div>
            <span className="text-sm sm:text-base font-semibold">LinkedIn</span>
            <span className="text-xs text-gray-400 text-center">{tx.professionalProfile}</span>
          </motion.a>

          <motion.a
            href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center group w-full"
            whileHover={{ y: -2 }}
            aria-label="WhatsApp"
          >
            <div className="p-3 rounded-xl transition-colors mb-2 flex justify-center">
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-white transition-colors" />
            </div>
            <span className="text-xs sm:text-sm font-semibold">+51 900 466 281</span>
            <span className="text-xs text-gray-400 text-center">{tx.sendMessage}</span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
