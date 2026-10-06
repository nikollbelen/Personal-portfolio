import { ScrollAnimation } from "@/components/ScrollAnimation";
import { projectMedia } from "@/config/projectMedia";
import { ArrowRight, Layers } from "lucide-react";
import { t } from "@/config/translations";
import { useLang } from "@/context/LanguageContext";
import { Link } from "react-router-dom";

const ProjectCoverPlaceholder = ({ project, previewLabel }) => (
  <div className="flex h-52 w-full flex-col justify-between bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
    <div className="flex items-center gap-2 text-purple-200">
      <Layers className="h-5 w-5" aria-hidden="true" />
      <span className="text-xs font-medium uppercase tracking-wide">
        {project.slug}
      </span>
    </div>
    <div>
      <p className="text-sm text-gray-400">{previewLabel}</p>
      <h3 className="mt-2 text-2xl font-bold text-white">{project.title}</h3>
    </div>
  </div>
);

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
        {tx.items.filter((p) => !p.hidden).map((project) => (
          <ScrollAnimation key={project.id}>
            <div className="bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-sm h-full flex flex-col border border-white/5 hover:bg-gray-800/70 transition-all">
              {projectMedia[project.slug]?.cover ? (
                <img
                  src={projectMedia[project.slug].cover}
                  alt={project.title}
                  loading="lazy"
                  width={600}
                  height={300}
                  className="h-52 w-full object-cover"
                />
              ) : (
                <ProjectCoverPlaceholder
                  project={project}
                  previewLabel={tx.previewLabel}
                />
              )}
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
                <Link
                  to={`/projects/${project.slug}`}
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-100"
                >
                  {tx.detailsButton}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Projects;
