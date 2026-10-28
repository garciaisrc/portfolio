# Portafolio — Israel Garcia Cruz

Sitio personal de **Israel Garcia Cruz**, Ingeniero de Software / Full Stack Developer. Construido como una single-page app en React, sin router (navegación por anclas) y sin framework de CSS: todo el estilo vive en `src/App.css` e `src/index.css` usando tokens CSS para los temas claro/oscuro.

## Stack

- [React 19](https://react.dev/) + TypeScript (`strict` mode)
- [Vite 8](https://vite.dev/) como bundler/dev server
- CSS plano (sin Tailwind/CSS-in-JS), con tokens de tema (`:root` / `data-theme="dark"`)
- [oxlint](https://oxc.rs/) como linter
- Sin router ni CMS: el contenido vive en `src/data/profile.ts`

### Funcionalidades

- Toggle de tema claro/oscuro real, persistido en `localStorage` y con fallback a `prefers-color-scheme`.
- Filtro cruzado por tecnología: al hacer click en un tag (Skills, Experiencia o Proyectos) se resalta y atenúa el resto del contenido relacionado.
- Animaciones de aparición al hacer scroll (`IntersectionObserver`, respeta `prefers-reduced-motion`).
- Línea de tiempo de experiencia expandible/colapsable.
- Carrusel de hero accesible (pausa con teclado/foco, `aria-live`, botón de pausa).

## Scripts

```bash
npm run dev       # servidor de desarrollo con HMR
npm run build     # tsc -b && vite build -> genera dist/
npm run preview   # sirve dist/ localmente
npm run lint      # oxlint
```

## Cómo verlo en local

El sitio está configurado con `base: '/portafolio/'` en `vite.config.ts`, así que siempre se sirve bajo ese subpath.

**Opción A — sin Docker:**

```bash
npm run build
npm run preview
```

Esto sirve el sitio en `http://localhost:4173/portafolio/` (puerto por defecto de `vite preview`).

**Opción B — con Docker (como en producción):**

```bash
docker compose up --build
```

Construye una imagen `nginx` que copia `dist/` a `/usr/share/nginx/html/portafolio` y expone el puerto `4173` (mapeado a `80` dentro del contenedor), sirviendo la misma URL: `http://localhost:4173/portafolio/`.

## Estructura

```
src/
├── components/   # un componente por sección (Navbar, Hero, About, Skills, Experience, Projects, Contact, Footer)
├── context/       # ThemeContext (tema) y FilterContext (filtro por stack)
├── hooks/         # useInView (scroll-reveal)
├── data/profile.ts  # fuente única de contenido (perfil, experiencia, proyectos, skills...)
├── App.css / index.css  # estilos globales y tokens de tema
└── main.tsx
```
