// robots.txt: blocks everything on the GitHub Pages preview, points to the sitemap on the final domain.
// On a GitHub Pages project site crawlers read the robots.txt at the account root, not this one,
// so the preview also relies on the noindex meta tag in Base.astro.
import { previa } from '../lib/site.mjs';

export const GET = ({ site }) => {
  const regras = previa ? 'Disallow: /' : `Allow: /\n\nSitemap: ${new URL(`${import.meta.env.BASE_URL.replace(/\/$/, '')}/sitemap-index.xml`, site)}`;
  return new Response(`User-agent: *\n${regras}\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
