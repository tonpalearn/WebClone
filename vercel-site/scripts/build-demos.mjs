// build-demos.mjs — ประกอบ dist/ สำหรับ tpldesign
// - copy ทุก subproject (comparison index + old + assets)
// - new.html: แปลง JSX→JS, ฝัง anti-copy, แล้ว OBFUSCATE (ก๊อปไปใช้ดื้อ ๆ ยากมาก)
// - สร้าง landing index.html ลิสต์ทุกเดโม
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync, rmSync, cpSync, statSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { transformSync } from '@babel/core';
import JavaScriptObfuscator from 'javascript-obfuscator';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');            // vercel-site
const repoRoot = resolve(root, '..');             // WebClone
const subRoot = join(repoRoot, 'subprojects');
const dist = join(root, 'dist');

// ชื่อ/ประเภทสำหรับ landing (เจ้าที่ไม่อยู่ใน map ใช้ slug)
const META = {
  'shakariki432-ekkamai': ['SHAKARIKI432 เอกมัย', 'ร้านอาหารญี่ปุ่น'],
  'baanpanya-teak-furniture': ['บ้านปัญญา เฟอร์นิเจอร์ไม้สัก', 'งานไม้สัก'],
  'cera-dental-ratchaphruek': ['CERA Dental Clinic', 'ทันตกรรม'],
  'phedphed-ratchaphruek': ['เผ็ดเผ็ด ราชพฤกษ์', 'ร้านอาหารไทย'],
  'zenvana-wellness-spa': ['ZENVANA Wellness Spa', 'สปา & เวลเนส'],
  'classy-clinic-ratchaphruek': ['Classy Clinic', 'คลินิกความงาม'],
  'rachaphruek-massage-spa': ['ราชพฤกษ์ นวดเพื่อสุขภาพ', 'นวดไทย & สปา'],
  'sisb-nonthaburi-campus': ['SISB Nonthaburi Campus', 'โรงเรียนนานาชาติ'],
  'icsn-nonthaburi': ['ICSN Nonthaburi', 'โรงเรียนนานาชาติ'],
  'vlamoon-wellness-spa-nonthaburi': ['VLA MOON Wellness & Spa', 'สปา & เวลเนส'],
  'lelana-wellness-spa-nonthaburi': ['Lelana Wellness & Spa', 'สปา นวด ทำเล็บ'],
  'aplus-nursing-home-pakkret': ['A PLUS Nursing Home', 'ดูแลผู้สูงอายุ'],
};

// snippet กันคลิกขวา / F12 / Ctrl+U,S,I,J / Ctrl+Shift+I,J,C (กันมือใหม่)
const ANTICOPY = `(function(){var b=function(e){e.preventDefault();return false;};
document.addEventListener('contextmenu',b);
document.addEventListener('keydown',function(e){var k=e.keyCode||e.which;
if(k===123)return b(e);
if(e.ctrlKey&&(k===85||k===83||k===73||k===74))return b(e);
if(e.ctrlKey&&e.shiftKey&&(k===73||k===74||k===67))return b(e);});})();`;

// ตั้งให้ "ก๊อปไปใช้ดื้อ ๆ ยากมาก" แต่ต้องไม่ break React runtime
// NOTE: controlFlowFlattening / selfDefending / deadCodeInjection / transformObjectKeys
// ทำให้ React app ไม่ mount (หน้าจอดำ) — ปิดไว้ทั้งหมด
const OBF_OPTS = {
  compact: true,
  simplify: true,
  identifierNamesGenerator: 'hexadecimal',
  renameGlobals: false,
  stringArray: true,
  stringArrayThreshold: 0.75,
  stringArrayEncoding: ['base64'],
  splitStrings: true,
  splitStringsChunkLength: 10,
  numbersToExpressions: true,
  disableConsoleOutput: true,
};

const BANNER = '/*! © TPL Design — Concept redesign demo. Unauthorized copying or reuse is prohibited. Not the official website unless approved by the business owner. */';

function protectNewHtml(html) {
  const m = html.match(/<script\s+type="text\/babel"[^>]*>([\s\S]*?)<\/script>/);
  if (!m) return null;
  const jsx = m[1];
  const { code } = transformSync(jsx, {
    presets: [['@babel/preset-react', { runtime: 'classic', pragma: 'React.createElement', pragmaFrag: 'React.Fragment' }]],
    compact: false, comments: false, babelrc: false, configFile: false,
  });
  const obf = JavaScriptObfuscator.obfuscate(ANTICOPY + '\n' + code, OBF_OPTS).getObfuscatedCode();
  let out = html;
  out = out.replace(/<script[^>]*@babel\/standalone[^>]*><\/script>\s*/i, '');
  out = out.replace(/<script>(?:(?!<\/script>)[\s\S])*?registerPreset(?:(?!<\/script>)[\s\S])*?<\/script>\s*/i, '');
  out = out.replace(/<script\s+type="text\/babel"[^>]*>[\s\S]*?<\/script>/, '<script>' + BANNER + '\n' + obf + '</script>');
  return out;
}

rmSync(dist, { recursive: true, force: true });
mkdirSync(join(dist, 'subproject'), { recursive: true });

const slugs = readdirSync(subRoot).filter(s => {
  try { return statSync(join(subRoot, s, 'site')).isDirectory(); } catch { return false; }
}).sort();

let protectedCount = 0;
const cards = [];
for (const slug of slugs) {
  const outDir = join(dist, 'subproject', slug);
  cpSync(join(subRoot, slug, 'site'), join(outDir, 'site'), { recursive: true });
  const assetsSrc = join(subRoot, slug, 'assets');
  if (existsSync(assetsSrc)) cpSync(assetsSrc, join(outDir, 'assets'), { recursive: true });

  const newPath = join(outDir, 'site', 'new.html');
  if (existsSync(newPath)) {
    const protectedHtml = protectNewHtml(readFileSync(newPath, 'utf8'));
    if (protectedHtml) { writeFileSync(newPath, protectedHtml); protectedCount++; console.log('  protected:', slug + '/new.html'); }
  }

  const hasCompare = existsSync(join(outDir, 'site', 'index.html'));
  const entry = '/subproject/' + slug + '/site/' + (hasCompare ? '' : 'new.html');
  const [name, kind] = META[slug] || [slug, 'redesign demo'];
  cards.push({ slug, name, kind, entry, hasCompare });
}

const cardHtml = cards.map(c => `      <article class="card">
        <p class="kind">${c.kind}</p>
        <h2>${c.name}</h2>
        <a class="btn" href="${c.entry}">${c.hasCompare ? 'เปิดหน้าเทียบเก่า/ใหม่' : 'เปิดเดโม'} →</a>
      </article>`).join('\n');

const landing = `<!doctype html>
<html lang="th">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex,nofollow" />
<title>TPL Design — WebClone Redesign Demos</title>
<style>
:root{--bg:#0e0b08;--card:#191310;--gold:#c8a45a;--cream:#f3ece0;--muted:#a99c87;--line:rgba(243,236,224,.14)}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;font-family:'Jost','Helvetica Neue',system-ui,sans-serif;background:radial-gradient(110% 80% at 15% 0%,rgba(200,164,90,.16),transparent 40rem),var(--bg);color:var(--cream);display:grid;place-items:center;padding:32px}
main{width:min(1040px,100%)}
.eyebrow{color:var(--gold);font-weight:600;letter-spacing:.28em;text-transform:uppercase;font-size:.72rem}
h1{font-family:Georgia,'Cormorant Garamond',serif;font-weight:500;font-size:clamp(2.6rem,7vw,5rem);line-height:1.02;letter-spacing:-.02em;margin:.6rem 0 1rem}
.lead{color:var(--muted);font-size:1.08rem;line-height:1.7;max-width:50ch}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:14px;margin-top:2.4rem}
.card{border:1px solid var(--line);background:var(--card);border-radius:18px;padding:1.3rem 1.3rem 1.5rem;transition:transform .4s cubic-bezier(.16,1,.3,1),border-color .4s}
.card:hover{transform:translateY(-4px);border-color:rgba(200,164,90,.5)}
.kind{color:var(--gold);font-size:.7rem;letter-spacing:.18em;text-transform:uppercase;margin:0 0 .5rem}
.card h2{font-family:Georgia,serif;font-weight:500;font-size:1.5rem;margin:0 0 1.1rem;line-height:1.15}
.btn{color:var(--cream);text-decoration:none;font-size:.82rem;letter-spacing:.04em;border-bottom:1px solid var(--gold);padding-bottom:3px}
.note{margin-top:2.6rem;padding-top:1.4rem;border-top:1px solid var(--line);font-size:.86rem;color:var(--muted);line-height:1.7}
</style>
</head>
<body>
<main>
  <p class="eyebrow">TPL Design · WebClone Proposals</p>
  <h1>หนึ่งโดเมน รวมทุกเดโม redesign</h1>
  <p class="lead">ศูนย์รวมตัวอย่างเว็บไซต์ออกแบบใหม่สำหรับธุรกิจย่านราชพฤกษ์ แต่ละงานมีหน้าเทียบ “เว็บเดิม ↔ เว็บใหม่” ส่งลิงก์ให้ลูกค้าดูได้ทันที โค้ดเว็บใหม่ผ่านการปกป้อง (obfuscate) เพื่อกันการคัดลอกไปใช้</p>
  <section class="grid" aria-label="demos">
${cardHtml}
  </section>
  <p class="note">ทุกหน้าเป็นตัวอย่างคอนเซ็ปต์เพื่อใช้พูดคุย/เสนอแนวทางเท่านั้น ยังไม่ใช่เว็บไซต์ทางการของธุรกิจนั้น เว้นแต่เจ้าของธุรกิจจะอนุมัติ · All pages are concept redesign demos, not official websites unless approved by each business owner.</p>
</main>
</body>
</html>`;
writeFileSync(join(dist, 'index.html'), landing);
console.log(`\nbuilt ${slugs.length} demos · protected ${protectedCount} new.html → dist/`);
