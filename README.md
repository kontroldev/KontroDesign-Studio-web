# KontroDesign Studio

Sitio web corporativo y portfolio de **Kontrol Design Studios**, un estudio independiente especializado en estrategia de producto, diseño de interfaz y desarrollo nativo para el ecosistema Apple.

La web presenta los servicios del estudio, una selección de proyectos, el proceso de trabajo y las tecnologías utilizadas. Incluye diseño responsive, navegación por secciones y tema claro u oscuro con persistencia en el navegador.

## Características

- Página corporativa de una sola vista con navegación interna.
- Presentación de servicios, proyectos, proceso y tecnologías.
- Diseño adaptable para escritorio, tablet y móvil.
- Tema claro y oscuro según la preferencia del sistema.
- Selección manual de tema guardada en `localStorage`.
- Metadatos SEO y Open Graph para compartir el sitio.
- Componentes reutilizables y estilos basados en variables CSS.
- Preparación para despliegue mediante Vercel o Cloudflare Workers.

## Tecnologías principales

- [Next.js](https://nextjs.org/) 16
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/) 5
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Vite](https://vite.dev/) 8
- [vinext](https://github.com/cloudflare/vinext)
- [Base UI](https://base-ui.com/)
- [shadcn](https://ui.shadcn.com/)
- [Lucide React](https://lucide.dev/)
- [pnpm](https://pnpm.io/)

## Requisitos

Antes de comenzar, instala:

- [Node.js](https://nodejs.org/) **22.13.0 o posterior**.
- [pnpm](https://pnpm.io/) **10 o posterior**.
- [Visual Studio Code](https://code.visualstudio.com/) o cualquier editor compatible con TypeScript.
- Git para clonar el repositorio.

Este es un repositorio privado. La cuenta utilizada para clonarlo debe disponer de acceso autorizado.

## Instalación

Clona el repositorio y accede a su carpeta:

```bash
git clone https://github.com/kontroldev/KontroDesign-Studio-web.git
cd KontroDesign-Studio-web
```

Instala las dependencias respetando las versiones del archivo de bloqueo:

```bash
pnpm install --frozen-lockfile
```

El entorno basado en Vite necesita una configuración local de hosting que no forma parte del repositorio. Solicítala al responsable del proyecto antes de ejecutar los comandos `dev`, `build` o `start` en una instalación nueva.

## Ejecución en Visual Studio Code

Abre la carpeta del proyecto:

```bash
code .
```

En Visual Studio Code:

1. Abre **Terminal > New Terminal**.
2. Ejecuta `pnpm install --frozen-lockfile` si todavía no has instalado las dependencias.
3. Asegúrate de disponer de la configuración local de hosting requerida.
4. Inicia el servidor de desarrollo:

```bash
pnpm dev
```

5. Abre en el navegador la dirección local mostrada en la terminal.

Los cambios realizados en los archivos de la aplicación se reflejan durante el desarrollo mediante recarga en caliente.

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `pnpm dev` | Inicia el entorno local de desarrollo con vinext. |
| `pnpm build` | Genera la versión de producción mediante vinext y Vite. |
| `pnpm build:vercel` | Genera la versión de producción de Next.js para Vercel. |
| `pnpm start` | Ejecuta localmente la build generada mediante Wrangler. |
| `pnpm lint` | Analiza el código con Oxlint. |
| `pnpm format` | Aplica el formato configurado con Oxfmt. |

## Build y producción

### Build principal

Genera los archivos de producción:

```bash
pnpm build
```

Una vez completada la build, inicia el resultado localmente:

```bash
pnpm start
```

### Vercel

El archivo `vercel.json` configura el proyecto como una aplicación Next.js y utiliza este comando de compilación:

```bash
pnpm build:vercel
```

Antes de desplegar, comprueba que la configuración local requerida esté disponible en el entorno de compilación.

## Estructura principal

```text
KontroDesign-Studio-web/
├── app/
│   ├── globals.css       # Estilos globales, temas y diseño responsive
│   ├── layout.tsx        # Layout raíz y metadatos del sitio
│   └── page.tsx          # Página principal y contenido del portfolio
├── components/
│   └── ui/               # Biblioteca de componentes reutilizables
├── hooks/
│   └── use-mobile.ts     # Detección de viewport móvil
├── lib/
│   └── utils.ts          # Utilidades compartidas para clases CSS
├── public/
│   ├── projects/         # Imágenes de los proyectos destacados
│   ├── kontrol-logo.png  # Logotipo principal
│   ├── kontrol-isotipo.png
│   └── og.png            # Imagen para redes sociales
├── components.json       # Configuración de componentes y alias
├── next.config.ts        # Configuración de Next.js
├── postcss.config.mjs    # Configuración de PostCSS
├── tsconfig.json         # Configuración de TypeScript
├── vercel.json           # Configuración de despliegue en Vercel
├── vite.config.ts        # Configuración de Vite y del entorno de ejecución
├── package.json          # Scripts y dependencias
└── pnpm-lock.yaml        # Versiones exactas de las dependencias
```

## Personalización

- El contenido principal, los servicios y los proyectos se encuentran en `app/page.tsx`.
- La identidad visual, los temas y los puntos de ruptura responsive se definen en `app/globals.css`.
- Los logotipos, iconos e imágenes se almacenan en `public/`.
- El título, la descripción y los metadatos sociales se configuran en `app/layout.tsx`.

## Calidad del código

Antes de preparar una entrega, ejecuta:

```bash
pnpm lint
pnpm build
```

Corrige cualquier incidencia detectada antes de publicar una nueva versión.

## Licencia y uso

Copyright © Kontrol Design Studios. Todos los derechos reservados.

Este proyecto es software propietario. Su código fuente, diseño, identidad visual, recursos gráficos y contenido no pueden copiarse, modificarse, distribuirse, sublicenciarse ni utilizarse con fines comerciales sin autorización previa y por escrito del titular.

El acceso al repositorio no concede ninguna licencia de uso ni permiso de redistribución.
