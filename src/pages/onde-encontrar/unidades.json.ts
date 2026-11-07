// Partner units for the "Onde encontrar" search, served as a static JSON file the page loads on demand.
// Source: src/data/unidades.json, refreshed by `npm run unidades`.
import unidades from '../../data/unidades.json';

export const GET = () => new Response(JSON.stringify(unidades), { headers: { 'Content-Type': 'application/json' } });
