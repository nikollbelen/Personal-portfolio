import { ScrollAnimation } from "@/components/ScrollAnimation";
import { motion } from "framer-motion";
import { Award, Calendar, Trophy } from "lucide-react";
import { t } from "@/config/translations";
import { useLang } from "@/context/LanguageContext";

const Certificates = () => {
  const { lang } = useLang();
  const tx = t.certificates[lang];

  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Trophy className="w-8 h-8 text-yellow-400" />
          <h2 className="text-4xl font-bold gradient-text">{tx.pageTitle}</h2>
        </motion.div>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 gap-6">
        {tx.items.map((cert) => (
          <ScrollAnimation key={cert.id}>
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm hover:bg-gray-800/70 transition-all group border border-white/5 h-full flex flex-col">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {cert.title}
                </h3>
                <Award className="w-6 h-6 text-purple-400 flex-shrink-0" />
              </div>

              <div className="text-gray-400 space-y-3 flex flex-col flex-grow">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-purple-400 font-medium">{cert.issuer}</span>
                  <div className="flex items-center gap-1.5 text-gray-300">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">{cert.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs bg-white/10 text-gray-200 rounded-full border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
