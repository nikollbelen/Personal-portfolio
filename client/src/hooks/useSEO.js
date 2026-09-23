import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://nikoll-bonilla.vercel.app";

const PAGE_META = {
  "/": {
    title: "Nikoll Bonilla Hancco - Desarrolladora Fullstack & Frontend Specialist",
    description:
      "Nikoll Bonilla Hancco — Desarrolladora Fullstack & Frontend Specialist con 3+ años de experiencia construyendo aplicaciones web, móviles y simuladores 3D con React, Next.js, Three.js y Python (FastAPI).",
  },
  "/about": {
    title: "Sobre Mí - Nikoll Bonilla Hancco | Full Stack & Frontend Specialist",
    description:
      "Conoce a Nikoll Bonilla Hancco — Profesional Técnico en Diseño y Desarrollo de Software por TECSUP, especialista en React, Three.js, FastAPI y Flutter.",
  },
  "/projects": {
    title: "Proyectos - Nikoll Bonilla Hancco | Simuladores 3D & Web Applications",
    description:
      "Explora simuladores 3D, laboratorios virtuales, módulos e-learning y aplicaciones web desarrolladas por Nikoll Bonilla Hancco.",
  },
  "/skills": {
    title: "Habilidades - Nikoll Bonilla Hancco | React, Three.js, Python, Flutter",
    description:
      "Habilidades técnicas de Nikoll Bonilla Hancco — React.js, Next.js, Three.js, WebGL, Python, FastAPI, Flutter, Docker y SCORM.",
  },
  "/experience": {
    title: "Experiencia - Nikoll Bonilla Hancco | Fullstack & Frontend Specialist",
    description:
      "Trayectoria profesional de Nikoll Bonilla Hancco en Navia y TECSUP liderando proyectos web y simulaciones 3D.",
  },
  "/education": {
    title: "Educación - Nikoll Bonilla Hancco | TECSUP & Certificaciones",
    description:
      "Formación académica de Nikoll Bonilla Hancco en TECSUP e historia de certificaciones profesionales.",
  },
  "/certificates": {
    title: "Certificados - Nikoll Bonilla Hancco | Reconocimientos & Logros",
    description:
      "Reconocimientos, premios y certificados de Nikoll Bonilla Hancco, incluyendo 1er Lugar en JINIS 2017.",
  },
};

const FALLBACK_META = {
  title: "Nikoll Bonilla Hancco - Desarrolladora Fullstack",
  description:
    "Portafolio profesional de Nikoll Bonilla Hancco — Desarrolladora Fullstack & Frontend Specialist.",
};

export const useSEO = () => {
  const location = useLocation();

  useEffect(() => {
    const meta = PAGE_META[location.pathname] ?? FALLBACK_META;
    const url = `${BASE_URL}${location.pathname}`;

    document.title = meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta.description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", meta.title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", meta.description);
    document
      .querySelector('meta[property="og:url"]')
      ?.setAttribute("content", url);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
  }, [location.pathname]);
};
