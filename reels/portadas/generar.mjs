// Portadas de reels de @ilhadetinhare (1080x1920). Misma línea que la portada de los carruseles:
// foto a sangre, degradado oscuro, etiqueta, titular en Bagel Fat One con palabra de acento, subtítulo.
// El texto queda dentro del recorte central 3:4 que Instagram muestra en la grilla del perfil.
import { chromium } from '/Users/mariomellado/Documents/tinhare-kit/node_modules/playwright/index.mjs';
import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath, pathToFileURL } from 'node:url';
const dir = path.dirname(fileURLToPath(import.meta.url));
const f = (n) => pathToFileURL(path.join(dir, n)).href;
const portadas = [
  { id: 'sustentable', foto: 'fuentes/sustentable_coast.png', foco: '50% 50%', label: 'Local mood', title: 'A quieter side of *Ilha de Tinharé*', sub: 'Sustainability at its heart.' },
  { id: 'fonte-do-ceu', foto: 'fuentes/fdc.png', foco: '50% 40%', label: 'What to do', title: 'Fonte do Céu *Experience*', sub: 'A guided walk for small groups.' },
  { id: 'transfer', foto: 'fuentes/transfer.png', foco: '50% 50%', label: 'How to arrive', title: 'From Salvador to *Morro de São Paulo*', sub: 'The semi-terrestrial transfer.' },
  { id: 'llegada', foto: 'fuentes/llegada.png', foco: '50% 50%', label: 'Local mood', title: 'Arriving *by boat*', sub: 'No rush. Just island time.' },
  { id: 'start', foto: 'fuentes/start.png', foco: '50% 50%', label: 'Island guide', title: 'First time on *Ilha de Tinharé?*', sub: 'Start here.' },
];
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');
const acento = (s) => esc(s).replace(/\*([^*]+)\*/g, '<span style="color:#DF8447">$1</span>');
const html = (p) => `<!doctype html><meta charset="utf-8"><style>
@font-face{font-family:Bagel;src:url(${f('bagel.woff2')})}
@font-face{font-family:PS;src:url(${f('public-sans.woff2')});font-weight:100 900}
*{margin:0;padding:0;box-sizing:border-box}html,body{width:1080px;height:1920px;overflow:hidden;font-family:PS,sans-serif}
</style><body style="position:relative">
<img src="${f(p.foto)}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:${p.foco}">
<div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(30,20,14,.18) 0%,rgba(30,20,14,.10) 30%,rgba(30,20,14,.55) 62%,rgba(30,20,14,.92) 90%)"></div>
<div style="position:absolute;left:90px;right:90px;bottom:300px">
<div style="font-size:22px;font-weight:700;letter-spacing:4px;text-transform:uppercase;color:rgba(238,231,196,.9);margin-bottom:34px">${esc(p.label)} · Ilha de Tinharé</div>
<h1 style="font-family:Bagel;font-weight:400;font-size:92px;line-height:1.13;color:#F8F7F0;letter-spacing:-.5px">${acento(p.title)}</h1>
<p style="margin-top:30px;font-size:34px;line-height:1.45;color:rgba(248,247,240,.88)">${esc(p.sub)}</p>
<div style="margin-top:44px;display:flex;align-items:center;gap:16px;font-size:24px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#EEE7C4">Watch
<svg width="30" height="30" viewBox="0 0 24 24" fill="#EEE7C4" aria-hidden="true"><path d="M7 4.5v15l13-7.5z"/></svg></div>
</div></body>`;
const b = await chromium.launch(); const pg = await b.newPage({ viewport: { width: 1080, height: 1920 } });
for (const p of portadas) {
  const tmp = path.join(dir, '.tmp-' + p.id + '.html'); fs.writeFileSync(tmp, html(p)); await pg.goto(pathToFileURL(tmp).href, { waitUntil: 'networkidle' }); await pg.evaluate(() => document.fonts.ready); await pg.waitForTimeout(400);
  await pg.screenshot({ path: path.join(dir, p.id + '.jpg'), type: 'jpeg', quality: 92 }); fs.unlinkSync(tmp);
}
await b.close();
