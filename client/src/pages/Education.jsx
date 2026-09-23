import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  FileText,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { t } from "@/config/translations";
import { useLang } from "@/context/LanguageContext";
import collegeImg from "@/assets/education/college_img.png";
import schoolImg from "@/assets/education/school_img.png";

const images = [collegeImg, schoolImg];

const Education = () => {
  const { lang } = useLang();
  const tx = t.education[lang];

  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.div
          className="flex items-center gap-3 mb-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GraduationCap className="w-8 h-8" />
          <h2 className="text-4xl font-bold gradient-text">{tx.pageTitle}</h2>
        </motion.div>
      </ScrollAnimation>

      <div className="space-y-12">
        {tx.institutions.map((edu, idx) => (
          <ScrollAnimation key={edu.id}>
            <div className="relative bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
              <div className="absolute top-0 right-0 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-bl-xl flex items-center gap-2 z-10">
                <Calendar className="w-4 h-4 text-gray-300" />
                <span className="text-gray-300 font-medium">{edu.duration}</span>
              </div>

              <div className="grid md:grid-cols-[300px,1fr]">
                <div className="relative h-64 md:h-full">
                  <img
                    src={images[idx]}
                    alt={edu.school}
                    loading="lazy"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{edu.school}</h3>
                      <div className="flex items-center gap-2 text-gray-300 text-sm">
                        <MapPin className="w-4 h-4 text-purple-400" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-purple-400" />
                    <h4 className="text-lg font-semibold text-white">{edu.degree}</h4>
                  </div>

                  <div className="flex items-start gap-2 text-gray-300 mb-6">
                    <FileText className="w-5 h-5 mt-1 flex-shrink-0 text-gray-400" />
                    <p className="text-sm sm:text-base leading-relaxed">{edu.description}</p>
                  </div>

                  {edu.coursework && (
                    <div className="mb-4">
                      <h5 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                        {tx.keyAreas}
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course) => (
                          <span
                            key={course}
                            className="px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm text-gray-200 border border-white/5"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {edu.subjects && (
                    <div className="mb-4">
                      <h5 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                        {tx.completedCourses}
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.subjects.map((subject) => (
                          <span
                            key={subject}
                            className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-xs sm:text-sm border border-purple-500/30"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Education;
