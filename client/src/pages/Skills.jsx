import {
  Code2,
  Layout,
  Server,
  Box,
  Terminal,
  Wrench,
  Users,
  Brain,
  MessageSquare,
  GitBranch,
  Smartphone,
  Layers,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import {
  JavaScriptLogo,
  ReactLogo,
  TypeScriptLogo,
  NodeLogo,
  GitLogo,
  TailwindLogo,
  NextjsLogo,
  PythonLogo,
  BashLogo,
  LinuxLogo,
} from "@/components/TechLogos";
import { t } from "@/config/translations";
import { useLang } from "@/context/LanguageContext";

const getIconForCategory = (idx) => {
  const icons = [
    <Code2 className="w-6 h-6" />,
    <Layout className="w-6 h-6" />,
    <Server className="w-6 h-6" />,
    <Smartphone className="w-6 h-6" />,
    <GitBranch className="w-6 h-6" />,
    <Layers className="w-6 h-6" />,
    <Terminal className="w-6 h-6" />,
    <Brain className="w-6 h-6" />,
  ];
  return icons[idx] || <Code2 className="w-6 h-6" />;
};

const getItemIcon = (name) => {
  const map = {
    "JavaScript": <JavaScriptLogo />,
    "Python": <PythonLogo />,
    "TypeScript": <TypeScriptLogo />,
    "Dart": <Code2 className="w-4 h-4 text-cyan-400" />,
    "React.js": <ReactLogo />,
    "Next.js": <NextjsLogo />,
    "Three.js": <Box className="w-4 h-4 text-purple-400" />,
    "WebGL": <Layers className="w-4 h-4 text-blue-400" />,
    "HTML5 / CSS3": <Layout className="w-4 h-4 text-orange-400" />,
    "Tailwind CSS": <TailwindLogo />,
    "FastAPI": <PythonLogo />,
    "Python APIs": <PythonLogo />,
    "APIs REST": <Server className="w-4 h-4 text-green-400" />,
    "REST APIs": <Server className="w-4 h-4 text-green-400" />,
    "Node.js": <NodeLogo />,
    "Flutter": <Smartphone className="w-4 h-4 text-cyan-400" />,
    "Dart Mobile": <Code2 className="w-4 h-4 text-cyan-400" />,
    "Docker": <Box className="w-4 h-4 text-blue-500" />,
    "Nginx": <Server className="w-4 h-4 text-green-500" />,
    "GitLab CI/CD": <GitLogo />,
    "Git & GitHub": <GitLogo />,
    "Estándar SCORM": <Layers className="w-4 h-4 text-yellow-400" />,
    "SCORM Standard": <Layers className="w-4 h-4 text-yellow-400" />,
    "Integración LMS": <Server className="w-4 h-4 text-purple-400" />,
    "LMS Integration": <Server className="w-4 h-4 text-purple-400" />,
    "Simulación 3D": <Box className="w-4 h-4 text-purple-400" />,
    "3D Simulation": <Box className="w-4 h-4 text-purple-400" />,
    "Accesibilidad Web": <Layout className="w-4 h-4 text-blue-400" />,
    "Web Accessibility": <Layout className="w-4 h-4 text-blue-400" />,
    "Linux Servidores": <LinuxLogo />,
    "Linux Servers": <LinuxLogo />,
    "Bash Terminal": <BashLogo />,
    "VS Code": <Wrench className="w-4 h-4 text-blue-400" />,
    "Liderazgo de Equipo": <Users className="w-4 h-4 text-purple-400" />,
    "Team Leadership": <Users className="w-4 h-4 text-purple-400" />,
    "Trabajo Colaborativo": <MessageSquare className="w-4 h-4 text-green-400" />,
    "Collaborative Work": <MessageSquare className="w-4 h-4 text-green-400" />,
    "Resolución de Incidencias": <Wrench className="w-4 h-4 text-yellow-400" />,
    "Incident Resolution": <Wrench className="w-4 h-4 text-yellow-400" />,
    "QA & Pruebas UI/UX": <Brain className="w-4 h-4 text-cyan-400" />,
    "QA & UI/UX Testing": <Brain className="w-4 h-4 text-cyan-400" />,
  };
  return map[name] || <Code2 className="w-4 h-4 text-gray-400" />;
};

const Skills = () => {
  const { lang } = useLang();
  const tx = t.skills[lang];

  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-4 gradient-text">
          {tx.pageTitle}
        </h2>
      </ScrollAnimation>

      <ScrollAnimation>
        <p className="text-gray-400 mb-12 max-w-2xl">
          {tx.description}
        </p>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tx.categories.map((skillGroup, idx) => (
          <ScrollAnimation key={skillGroup.category}>
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5 h-full flex flex-col">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-white/10 rounded-lg text-purple-400">
                  {getIconForCategory(idx)}
                </div>
                <h3 className="text-lg font-semibold text-white">{skillGroup.category}</h3>
              </div>
              <div className={`grid gap-3 mt-auto ${skillGroup.items.length <= 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-2"}`}>
                {skillGroup.items.map((skill) => (
                  <div
                    key={skill}
                    className="bg-gray-700/50 px-3 py-2.5 rounded-lg flex items-center gap-2 hover:bg-white/10 transition-all group border border-white/5"
                  >
                    <div className="text-gray-400 group-hover:text-white transition-colors flex-shrink-0">
                      {getItemIcon(skill)}
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors text-xs font-medium">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Skills;
