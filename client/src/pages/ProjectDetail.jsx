import { ScrollAnimation } from "@/components/ScrollAnimation";
import { projectMedia } from "@/config/projectMedia";
import { t } from "@/config/translations";
import { useLang } from "@/context/LanguageContext";
import { ArrowLeft, CheckCircle2, ExternalLink, Layers } from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const getProjectMedia = (project) => projectMedia[project.slug]?.media ?? [];

const ProjectVisualPlaceholder = ({ project, label }) => (
  <div className="flex aspect-video w-full flex-col justify-between bg-gradient-to-br from-gray-950 via-gray-800 to-black p-6 sm:p-8">
    <div className="flex items-center gap-2 text-purple-200">
      <Layers className="h-6 w-6" aria-hidden="true" />
      <span className="text-xs font-medium uppercase tracking-wide">
        {project.slug}
      </span>
    </div>
    <div>
      <p className="text-sm text-gray-400">{label}</p>
      <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
        {project.title}
      </h2>
    </div>
  </div>
);

const ProjectDetail = () => {
  const { slug } = useParams();
  const { lang } = useLang();
  const tx = t.projects[lang];
  const project = tx.items.find((item) => item.slug === slug && !item.hidden);
  const media = project ? getProjectMedia(project) : [];
  const [selectedMediaId, setSelectedMediaId] = useState(media[0]?.id);
  const selectedMedia =
    media.find((item) => item.id === selectedMediaId) ?? media[0];

  if (!project) {
    return (
      <div className="min-h-screen pt-24 px-4 max-w-4xl mx-auto pb-20">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {tx.backToProjects}
        </Link>
        <div className="mt-16 rounded-xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
          <h1 className="text-3xl font-bold gradient-text">Proyecto no encontrado</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {tx.backToProjects}
        </Link>
      </ScrollAnimation>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <ScrollAnimation>
          <div className="overflow-hidden rounded-xl border border-white/10 bg-gray-800/40 backdrop-blur-sm">
            {projectMedia[project.slug]?.cover ? (
              <img
                src={projectMedia[project.slug].cover}
                alt={project.title}
                width={900}
                height={520}
                className="aspect-video w-full object-cover"
              />
            ) : (
              <ProjectVisualPlaceholder
                project={project}
                label={tx.previewLabel}
              />
            )}
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="space-y-6">
          <div>
            <div className="mb-4 flex items-center gap-3 text-purple-300">
              <Layers className="h-6 w-6" aria-hidden="true" />
              <span className="text-sm font-medium uppercase tracking-wide">
                {tx.pageTitle}
              </span>
            </div>
            <h1 className="text-3xl font-bold gradient-text sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 text-base leading-relaxed text-gray-300 sm:text-lg">
              {project.detail}
            </p>
          </div>

          {project.demoAccess && (
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
              <h2 className="text-lg font-semibold text-white">
                {tx.demoAccessTitle}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-400">
                {tx.demoAccessDescription}
              </p>
              <div className="mt-4 overflow-hidden rounded-lg border border-white/10">
                <table className="w-full text-left text-sm">
                  <thead className="bg-white/[0.06] text-xs uppercase text-gray-400">
                    <tr>
                      <th className="px-3 py-2 font-medium">{tx.demoRoleLabel}</th>
                      <th className="px-3 py-2 font-medium">{tx.demoUserLabel}</th>
                      <th className="px-3 py-2 font-medium">{tx.demoPinLabel}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {project.demoAccess.map((credential) => (
                      <tr key={credential.user} className="text-gray-300">
                        <td className="px-3 py-2">{credential.role}</td>
                        <td className="px-3 py-2 font-mono text-purple-100">
                          {credential.user}
                        </td>
                        <td className="px-3 py-2 font-mono text-purple-100">
                          {credential.pin}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {project.arNotice && (
            <div className="rounded-xl border border-purple-400/30 bg-purple-500/10 p-4 backdrop-blur-sm">
              <h2 className="text-lg font-semibold text-white">
                {tx.arNoticeTitle}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-300">
                {tx.arNoticeDescription}
              </p>
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            {(project.projectLinks ?? [
              { label: tx.projectLink, url: project.projectUrl },
            ]).map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-100"
              >
                {link.label}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </ScrollAnimation>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        <ScrollAnimation className="rounded-xl border border-white/5 bg-gray-800/40 p-6 backdrop-blur-sm">
          <h2 className="mb-6 text-2xl font-semibold gradient-text">
            {tx.featuresTitle}
          </h2>
          <ul className="space-y-4">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-3 text-gray-300">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-300"
                  aria-hidden="true"
                />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </ScrollAnimation>

        <ScrollAnimation className="rounded-xl border border-white/5 bg-gray-800/40 p-6 backdrop-blur-sm">
          <h2 className="mb-6 text-2xl font-semibold gradient-text">
            {tx.technologiesTitle}
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-purple-500/30 bg-purple-500/20 px-3 py-1 text-xs font-medium text-purple-100"
              >
                {technology}
              </span>
            ))}
          </div>
        </ScrollAnimation>
      </div>

      <ScrollAnimation className="mt-8 rounded-xl border border-white/5 bg-gray-800/40 p-4 backdrop-blur-sm sm:p-6">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold gradient-text">
              {tx.galleryTitle}
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              {selectedMedia
                ? `${selectedMedia.type === "video" ? tx.videoLabel : tx.imageLabel} · ${
                    selectedMedia.title?.[lang] ?? selectedMedia.title
                  }`
                : tx.emptyGallery}
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-white/10 bg-black/30">
          {!selectedMedia ? (
            <div className="flex aspect-video w-full items-center justify-center px-6 text-center text-sm text-gray-400">
              {tx.emptyGallery}
            </div>
          ) : selectedMedia.type === "video" ? (
            <video
              src={selectedMedia.src}
              poster={selectedMedia.poster}
              controls
              className="aspect-video w-full bg-black object-contain"
            />
          ) : (
            <img
              src={selectedMedia?.src}
              alt={selectedMedia?.title?.[lang] ?? project.title}
              width={1200}
              height={675}
              className="h-[70vh] max-h-[760px] min-h-72 w-full bg-black object-contain"
            />
          )}
        </div>

        {media.length > 0 && (
          <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
            {media.map((item) => {
              const isSelected = item.id === selectedMedia?.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedMediaId(item.id)}
                  className={`relative h-20 w-32 flex-shrink-0 overflow-hidden rounded-lg border transition-all ${
                    isSelected
                      ? "border-white/60 opacity-100"
                      : "border-white/10 opacity-70 hover:opacity-100"
                  }`}
                  aria-label={item.title?.[lang] ?? item.title}
                >
                  {item.type === "video" ? (
                    <video
                      src={item.src}
                      muted
                      preload="metadata"
                      className="h-full w-full bg-black object-contain"
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt=""
                      className="h-full w-full bg-black object-contain"
                    />
                  )}
                  <span className="absolute bottom-1 left-1 rounded bg-black/70 px-2 py-0.5 text-[10px] font-medium text-white">
                    {item.type === "video" ? tx.videoLabel : tx.imageLabel}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </ScrollAnimation>
    </div>
  );
};

export default ProjectDetail;
