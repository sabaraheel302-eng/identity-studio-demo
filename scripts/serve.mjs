import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
const port = Number(process.env.PORT || 4175);
const types = { '/index.html': 'text/html; charset=utf-8', '/styles.css': 'text/css', '/app.js': 'text/javascript', '/mark.svg': 'image/svg+xml' };
createServer(async (req, res) => {
  const path = new URL(req.url, 'http://localhost').pathname;
  const file = path === '/' ? '/index.html' : path;
  if (!Object.hasOwn(types, file)) { res.writeHead(404); return res.end('Not found'); }
  try {
    const body = await readFile(new URL(`..${file}`, import.meta.url));
    res.writeHead(200, { 'Content-Type': types[file], 'X-Content-Type-Options': 'nosniff', 'Permissions-Policy': 'camera=(), microphone=(), geolocation=()', 'Referrer-Policy': 'no-referrer' });
    res.end(body);
  } catch { res.writeHead(500); res.end('Unable to load demo'); }
}).listen(port, '127.0.0.1', () => console.log(`Local: http://127.0.0.1:${port}`));
