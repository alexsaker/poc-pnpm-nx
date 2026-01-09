import { greet } from '@your-scope/ui';
import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Hello from API! ${greet('Nx + pnpm')}\n`);
});

server.listen(9100, () => {
  console.log('API running on http://localhost:9100');
});
