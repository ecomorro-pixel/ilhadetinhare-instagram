// Portadas de los reels de mergulho y trilha (misma plantilla que generar.mjs).
import fs from 'node:fs';
let s = fs.readFileSync(new URL('./generar.mjs', import.meta.url), 'utf8');
const nuevas = `const portadas = [
  { id: 'mergulho-1', foto: 'fuentes/m1.jpg', foco: '50% 50%', label: 'What to do', title: 'A morning *on the water*', sub: 'Snorkel at low tide, in small groups.' },
  { id: 'mergulho-2', foto: 'fuentes/m2.jpg', foco: '50% 45%', label: 'What to do', title: 'Before the *first breath*', sub: 'Water days made to measure.' },
  { id: 'mergulho-3', foto: 'fuentes/m3.jpg', foco: '50% 50%', label: 'What to do', title: 'A quieter *world below*', sub: 'Calm green water and coral.' },
  { id: 'trilha-1', foto: 'fuentes/t1.jpg', foco: '50% 50%', label: 'What to do', title: 'The walk to the *Mirante das Cores*', sub: 'Clay canyons and island light.' },
  { id: 'trilha-2', foto: 'fuentes/t2.jpg', foco: '50% 40%', label: 'Local mood', title: 'Walking to *island time*', sub: 'Nature immersions made to measure.' },
  { id: 'trilha-3', foto: 'fuentes/t3.jpg', foco: '50% 50%', label: 'Local mood', title: 'Where the *trail* ends', sub: 'A night in nature, made to measure.' },
];`;
s = s.replace(/const portadas = \[[\s\S]*?\n\];/, nuevas).replace("import.meta.url", "import.meta.url");
fs.writeFileSync(new URL('./.tmp-gen.mjs', import.meta.url), s);
