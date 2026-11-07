#!/usr/bin/env node
// Generates the favicons and the social sharing image (public/) from src/assets/img/favicon-src.png
// (the WordPress site icon, 192 × 192) and src/assets/img/logo.svg (white logo).
// Only needed when one of them changes: `npm run icones`.

import sharp from 'sharp';

const ICONE = 'src/assets/img/favicon-src.png';
const LOGO = 'src/assets/img/logo.svg';
const VERMELHO = { r: 205, g: 23, b: 25, alpha: 1 };

await sharp(ICONE).resize(32, 32).png().toFile('public/favicon-32.png');
await sharp(ICONE).resize(192, 192).png().toFile('public/favicon-192.png');
await sharp(ICONE).resize(180, 180).flatten({ background: VERMELHO }).png().toFile('public/apple-touch-icon.png');

const logoGrande = await sharp(LOGO, { density: 400 }).resize({ width: 720 }).png().toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 4, background: VERMELHO } })
  .composite([{ input: logoGrande, gravity: 'center' }])
  .flatten({ background: VERMELHO })
  .jpeg({ quality: 88 })
  .toFile('public/og.jpg');

console.log('Ícones e og.jpg gerados em public/');
