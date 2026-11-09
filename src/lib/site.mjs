// Prefixes internal paths with the base path (/repositorio on GitHub Pages, empty on the final domain)
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (path) => (/^(https?:|mailto:|tel:|#)/.test(path) ? path : BASE + path);

// The GitHub Pages copy is only a preview: search engines must not index it alongside the real site.
// It stops applying on its own once the site is built for its final domain.
export const previa = new URL(import.meta.env.SITE).hostname.endsWith('.github.io');
