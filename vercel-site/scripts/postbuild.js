import fs from 'node:fs';
import path from 'node:path';

const dist = path.resolve('dist');
const target = path.join(dist, 'subproject', 'shakariki432-ekkamai');
fs.mkdirSync(target, { recursive: true });
fs.copyFileSync(path.join(dist, 'index.html'), path.join(target, 'index.html'));
console.log('postbuild: copied SPA entry to /subproject/shakariki432-ekkamai/index.html');
