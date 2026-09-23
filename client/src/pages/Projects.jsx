import project1 from "@/assets/projects_img/project-1.png";
import project2 from "@/assets/projects_img/project-2.png";
import project3 from "@/assets/projects_img/project-3.png";
import project4 from "@/assets/projects_img/project-4.png";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import { Layers } from "lucide-react";
import { t } from "@/config/translations";
import { useLang } from "@/context/LanguageContext";

const projectImages = {
  1: project1,
  2: project4,
  3: project3,
  4: project2,
};

const Projects = () => {
  const { lang } = useLang();
  const tx = t.projects[lang];

  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <div className="flex items-center gap-3 mb-4">
          <Layers className="w-8 h-8 text-purple-400" />
          <h2 className="text-4xl font-bold gradient-text">
            {tx.pageTitle}
          </h2>
        </div>
      </ScrollAnimation>

      <ScrollAnimation>
        <p className="text-gray-400 mb-12 max-w-2xl">
          {tx.description}
        </p>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {tx.items.map((project) => (
          <ScrollAnimation key={project.id}>
            <div className="bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm h-full flex flex-col border border-white/5 hover:bg-gray-800/70 transition-all">
              <img
                src={projectImages[project.id]}
                alt={project.title}
                loading="lazy"
                width={600}
                height={300}
                className="w-full h-52 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-200 rounded-full border border-purple-500/30"
                    >
                      {tag}
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

export default Projects;
