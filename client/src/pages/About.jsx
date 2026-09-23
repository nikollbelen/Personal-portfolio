import cvES from "@/assets/files/cv_pdf/Nikoll_Bonilla(CV-ES).pdf";
import cvEN from "@/assets/files/cv_pdf/Nikoll_Bonilla(CV-EN).pdf";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { t } from "@/config/translations";
import { useLang } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Briefcase, Code2, Globe, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const achievementIcons = [
  <Briefcase className="w-6 h-6" />,
  <Code2 className="w-6 h-6" />,
  <GraduationCap className="w-6 h-6" />,
];

const About = () => {
  const { lang } = useLang();
  const tx = t.about[lang];
  const cvFile = lang === "es" ? cvES : cvEN;

  return (
    <div className="min-h-screen pt-20 px-4 max-w-4xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.h2 className="text-4xl font-bold mb-8 gradient-text">
          {tx.pageTitle}
        </motion.h2>
      </ScrollAnimation>

      <div className="space-y-8">
        <ScrollAnimation className="space-y-6 bg-gray-800/20 p-6 sm:p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              {tx.bio1}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {tx.bio2}
            </p>
            <p className="text-gray-300 leading-relaxed">
              {tx.bio3}
            </p>
          </div>

          <div className="pt-4">
            <h3 className="text-2xl font-semibold mb-4 gradient-text">
              {tx.quickFactsTitle}
            </h3>
            <ul className="list-none space-y-3">
              {tx.quickFacts.map((fact) => (
                <motion.li
                  key={fact}
                  className="flex items-center space-x-2 text-gray-300"
                >
                  <span className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                  <span>{fact}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3 justify-start">
            <a
              href={cvFile}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-white text-black rounded-full text-sm sm:text-base font-medium hover:bg-gray-100 transition-colors"
            >
              {tx.downloadCV}
            </a>
            <Link
              to="/skills"
              className="px-5 py-2.5 bg-white/10 text-white rounded-full text-sm sm:text-base font-medium hover:bg-white/20 transition-colors"
            >
              {tx.mySkills}
            </Link>
          </div>
        </ScrollAnimation>
      </div>

      <ScrollAnimation>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 gradient-text">
            {tx.achievementsTitle}
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {tx.achievements.map((achievement, idx) => (
              <div
                key={achievement.title}
                className="bg-white/5 p-6 rounded-xl backdrop-blur-sm"
              >
                <div className="text-white mb-4">{achievementIcons[idx]}</div>
                <h4 className="text-lg sm:text-xl font-semibold mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-400 text-sm sm:text-base">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-8 gradient-text">
            {tx.interestsTitle}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {tx.interests.map((interest) => (
              <div
                key={interest}
                className="bg-white/5 p-4 rounded-xl backdrop-blur-sm flex items-center gap-3"
              >
                <Globe className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default About;
