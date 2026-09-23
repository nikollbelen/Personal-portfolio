<div align="center">

# 🚀 Nikoll Bonilla Hancco — Portafolio Personal

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

Un portafolio personal **100% estático** construido con **React + Vite**. Sin backend, sin bases de datos, no requiere servidor.

</div>

---

## ✨ Características

- 🌐 &nbsp;**Soporte Multilingüe (i18n)** — Cambio de idioma instantáneo entre Español e Inglés mediante un contexto global.
- 🎨 &nbsp;**Interfaz Oscura (Dark UI)** con fondo 3D WebGL inmersivo (OGL).
- 🔍 &nbsp;**Búsqueda Inteligente `Ctrl+K`** — Búsqueda en todo el sitio con atajo de teclado, adaptada al idioma activo.
- 📄 &nbsp;**Descarga de CV Dinámica** — Descarga la versión en Español o Inglés del CV dependiendo del idioma seleccionado.
- 🤖 &nbsp;**Optimizado para SEO** — Sitemap, etiquetas OG, JSON-LD, PWA manifest.
- ⚡ &nbsp;**Alto Rendimiento** — Páginas cargadas de forma perezosa (lazy-loading) para una carga ultrarrápida.
- 📱 &nbsp;**Diseño Responsivo** — Experiencia UI/UX fluida en dispositivos móviles, tablets y escritorio.

---

## 🗂️ Estructura del Proyecto

```
Personal-portfolio/
└── client/          # Frontend React + Vite (todo ocurre aquí)
    ├── src/
    │   ├── assets/       # Imágenes, PDFs de CV, etc.
    │   ├── components/   # Navbar, Footer, Background3D...
    │   ├── config/       # Traducciones (i18n), datos de búsqueda, info de contacto
    │   ├── context/      # LanguageContext (Manejo del estado de idioma)
    │   ├── hooks/        # Hooks personalizados como useSEO
    │   ├── pages/        # Home, About, Education, Experience, Skills, Certificates (Projects oculto)
    │   └── utils/        # Funciones helper
    └── public/
```

---

## 📄 Páginas Disponibles

| Ruta | Página |
|---|---|
| `/` | Inicio (Home) |
| `/about` | Sobre Mí (About) |
| `/education` | Educación (Education) |
| `/experience` | Experiencia (Experience) |
| `/skills` | Habilidades (Skills) |
| `/certificates` | Certificados (Certificates) |
| `/projects` | Proyectos (Projects) *(Oculto en navegación, pero funcional)* |

---

## ⚙️ Configuración y Ejecución Local

### Prerrequisitos
- Node.js 18+

### Pasos a seguir

```bash
cd client
npm install
npm run dev
```

La aplicación se ejecutará en **http://localhost:5173**. ¡Eso es todo! No se requiere backend, base de datos, ni configurar un `.env`.

---

## 🚀 Despliegue

Puedes desplegar la carpeta `client/` como un sitio estático en cualquier plataforma como Vercel, Netlify o GitHub Pages:

**Recomendación para Vercel:**

| Configuración | Valor |
|---|---|
| Root Directory | `client` |
| Framework | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |

*No se requieren variables de entorno para el despliegue.*

---

## 📞 Contacto

[![Email](https://img.shields.io/badge/Email-nikoll.bonilla.hancco%40gmail.com-red?style=flat-square&logo=gmail)](mailto:nikoll.bonilla.hancco@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-nikoll--bonilla-blue?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/nikoll-bonilla/)
[![GitHub](https://img.shields.io/badge/GitHub-nikollbelen-black?style=flat-square&logo=github)](https://github.com/nikollbelen)

---

<div align="center">
  <sub>Desarrollado para Nikoll Bonilla Hancco</sub>
</div>