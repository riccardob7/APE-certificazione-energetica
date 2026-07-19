import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { staticRoutes } from './src/siteData';

const siteUrl = 'https://apecertificazioni.com';

function escapeAttribute(value: string) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
}

function replaceMetadata(html: string, title: string, description: string, url: string) {
  const safeTitle = escapeAttribute(title);
  const safeDescription = escapeAttribute(description);
  const safeUrl = escapeAttribute(url);

  return html
    .replace(/<title>.*?<\/title>/, `<title>${safeTitle}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${safeDescription}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/?>(?![\s\S]*<link rel="canonical")/, `<link rel="canonical" href="${safeUrl}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${safeTitle}" />`)
    .replace(/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${safeDescription}" />`)
    .replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${safeUrl}" />`);
}

function createStaticRoutePages(): Plugin {
  return {
    name: 'create-static-route-pages',
    apply: 'build',
    closeBundle() {
      const outputDirectory = resolve('dist');
      const baseHtml = readFileSync(resolve(outputDirectory, 'index.html'), 'utf8');

      for (const route of staticRoutes) {
        const routeDirectory = resolve(outputDirectory, route.path.replace(/^\/+|\/+$/g, ''));
        mkdirSync(routeDirectory, { recursive: true });
        writeFileSync(
          resolve(routeDirectory, 'index.html'),
          replaceMetadata(baseHtml, route.title, route.description, `${siteUrl}${route.path}`),
        );
      }

      const notFoundHtml = replaceMetadata(
        baseHtml,
        'Pagina non trovata | APE Certificazioni',
        'La pagina richiesta non è disponibile.',
        siteUrl,
      ).replace('<meta name="robots" content="index, follow" />', '<meta name="robots" content="noindex, follow" />');
      writeFileSync(resolve(outputDirectory, '404.html'), notFoundHtml);
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), createStaticRoutePages()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
