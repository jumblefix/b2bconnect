import { createServer } from 'http';
import * as next from 'next';
import { parse } from 'url';
const { join } = require('path');

const port = parseInt(process.env.PORT as string, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const url: any = req.url;
    const parsedUrl = parse(url, true);
    const { pathname, query } = parsedUrl;

    const rootStaticFiles = ['/robots.txt', '/sitemap.xml', '/favicon.ico'];

    if (rootStaticFiles.indexOf(pathname || '') > -1) {
      const path = join(__dirname, 'static', pathname);
      app.serveStatic(req, res, path);
    } else if (pathname === '/a') {
      app.render(req, res, '/a', query);
    } else if (pathname === '/b') {
      app.render(req, res, '/b', query);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(port, (err: any) => {
    if (err) {
      throw err;
    }
    console.log(`> Ready on http://localhost:${port}`);
  });
});
