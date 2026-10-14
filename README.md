# ilhadetinhare-instagram

Render de las piezas de Instagram de @ilhadetinhare (agente IG-IT de Shankar). Copia del sistema de @navetours con la identidad de Ilha de Tinharé (tinhare-kit).

- `plantillas/` — HTML 1080×1350: portada, contenido, contenido-foto, cierre (carrusel); unico-oscuro, unico-claro (post único). `*palabra*` = palabra clave en color de acento. La barra de avance se calcula sola.
- `fotos/` — fotos permitidas de Tinharé; el nombre del archivo nombra el lugar.
- `lotes/<id>.json` — lo sube n8n. La Action `Render lotes` genera `img/<id>/*.jpg` y `manifest.json`.
- Imágenes servidas por `https://raw.githubusercontent.com/ecomorro-pixel/ilhadetinhare-instagram/main/img/<id>/<archivo>` para la API de Instagram.

Nada se publica desde aquí: la publicación la hace n8n solo con aprobación de Rama por Telegram.
