import {
  Briefcase,
  MapPin,
  Building2,
  ArrowRight,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { t } from "@/config/translations";
import { useLang } from "@/context/LanguageContext";

const Experience = () => {
  const { lang } = useLang();
  const tx = t.experience[lang];

  return (
    <div className="min-h-screen pt-16 sm:pt-20 px-4 max-w-5xl mx-auto pb-16 sm:pb-20">
      <ScrollAnimation>
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 gradient-text flex items-center gap-3">
          <Briefcase className="w-7 h-7 sm:w-8 sm:h-8" />
          {tx.pageTitle}
        </h2>
      </ScrollAnimation>

      <div className="space-y-8 sm:space-y-12">
        {tx.jobs.map((exp) => (
          <ScrollAnimation key={exp.id}>
            <div className="group relative bg-gray-800/50 rounded-xl sm:rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5 p-6 sm:p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 sm:mb-6 border-b border-white/10 pb-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl group-hover:bg-white/20 transition-colors flex-shrink-0">
                    <Building2 className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-xl md:text-2xl font-bold mb-1 leading-tight">
                      {exp.title}
                    </h3>
                    <p className="text-purple-400 font-medium text-sm sm:text-base">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-gray-300 text-sm sm:text-base">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span>{exp.location}</span>
                  </div>
                  <span className="text-gray-500">•</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-semibold">
                    {exp.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 sm:space-y-4">
                {exp.description.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-300 text-sm sm:text-base"
                  >
                    <ArrowRight className="w-5 h-5 mt-0.5 text-purple-400 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Experience;
