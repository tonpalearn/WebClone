const fs = require('fs');
const path = require('path');

const deployRoot = path.resolve(__dirname, '..');
const publicDir = path.join(deployRoot, 'public');
const sourceSite = path.join(deployRoot, 'demo-source', 'subproject', 'shakariki432-ekkamai');
const targetSite = path.join(publicDir, 'subproject', 'shakariki432-ekkamai');

function rmrf(p) {
  fs.rmSync(p, { recursive: true, force: true });
}
function copyDir(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, entry.name);
    const d = path.join(dst, entry.name);
    if (entry.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

rmrf(publicDir);
fs.mkdirSync(publicDir, { recursive: true });
copyDir(sourceSite, targetSite);

const index = `<!doctype html>
<html lang="th">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>TPL Design — WebClone Demos</title>
  <style>
    :root{color-scheme:dark;--bg:#080604;--card:#17100c;--gold:#f6b950;--red:#c51f17;--cream:#fff4dc;--muted:#cdbfa4}
    *{box-sizing:border-box} body{margin:0;min-height:100vh;font-family:'Avenir Next','Helvetica Neue',sans-serif;background:radial-gradient(circle at 15% 15%,rgba(197,31,23,.38),transparent 30rem),linear-gradient(135deg,#080604,#1a0f0b);color:var(--cream);display:grid;place-items:center;padding:28px}
    main{width:min(980px,100%)} .eyebrow{color:var(--gold);font-weight:900;letter-spacing:.18em;text-transform:uppercase} h1{font-family:Georgia,serif;font-size:clamp(3rem,9vw,7rem);line-height:.92;margin:0 0 1rem;letter-spacing:-.06em} p{color:var(--muted);font-size:1.15rem;line-height:1.75}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem;margin-top:2rem}.card{border:1px solid rgba(255,244,220,.18);background:rgba(255,244,220,.07);border-radius:28px;padding:1.2rem;box-shadow:0 30px 90px rgba(0,0,0,.35)}.card h2{margin:.2rem 0 .8rem;font-size:1.6rem}.btn{display:inline-flex;margin-top:1rem;padding:.9rem 1.1rem;border-radius:999px;background:linear-gradient(135deg,var(--gold),#fff0b6);color:#130b08;font-weight:900;text-decoration:none}.note{margin-top:2rem;font-size:.95rem;color:#a99980}
  </style>
</head>
<body>
<main>
  <p class="eyebrow">TPL Design · WebClone proposals</p>
  <h1>One domain. Many redesign demos.</h1>
  <p>ศูนย์รวม proposal/demo สำหรับเว็บ redesign ธุรกิจท้องถิ่น แต่ละงานอยู่ใต้ path <strong>/subproject/&lt;slug&gt;</strong> เพื่อส่งลิงก์ให้ลูกค้าดูง่ายโดยไม่ต้อง deploy แยกหลายโดเมน</p>
  <section class="grid" aria-label="Available demo projects">
    <article class="card">
      <p class="eyebrow">Japanese restaurant · Ekkamai</p>
      <h2>SHAKARIKI432 Ekkamai</h2>
      <p>Concept landing page แบบ premium Osaka night izakaya พร้อม CTA โทรและแผนที่</p>
      <a class="btn" href="/subproject/shakariki432-ekkamai">เปิด demo</a>
    </article>
  </section>
  <p class="note">All pages are concept redesign demos prepared for discussion. They are not official websites unless approved by each business owner.</p>
</main>
</body>
</html>`;
fs.writeFileSync(path.join(publicDir, 'index.html'), index);
console.log(`Built ${targetSite}`);
