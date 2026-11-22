// Portadas de los reels de mergulho y trilha (misma plantilla que generar.mjs).
import fs from 'node:fs';
let s = fs.readFileSync(new URL('./generar.mjs', import.meta.url), 'utf8');
const nuevas = `const portadas = [
  { id: 'kayak-1', foto: 'fuentes/k1.jpg', foco: '50% 50%', label: 'What to do', title: 'Walk the village, *see the reef*', sub: 'Morro Walk & Clear Kayak.' },
  { id: 'kayak-2', foto: 'fuentes/k2.jpg', foco: '50% 50%', label: 'What to do', title: 'Some views are better *from the water*', sub: 'A slow paddle over the reef.' },
  { id: 'kayak-3', foto: 'fuentes/k3.jpg', foco: '50% 50%', label: 'Local mood', title: 'Use the *engine of your body*', sub: 'A guided walk and a clear kayak.' },
];`;
s = s.replace(/const portadas = \[[\s\S]*?\n\];/, nuevas).replace("import.meta.url", "import.meta.url");
fs.writeFileSync(new URL('./.tmp-gen-k.mjs', import.meta.url), s);
