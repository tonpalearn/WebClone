# Classy Clinic (ราชพฤกษ์) — Redesign Demo

คอนเซ็ปต์ redesign เว็บไซต์ **Classy Clinic สาขาราชพฤกษ์** (คลินิกความงาม) เพื่อใช้เสนอขายงานออกแบบเว็บ
ทิศทาง: **Clinical Luxe / Premium Gold** — ขาว/ครีม + ดำ/charcoal + ทอง

> ⚠️ ตัวอย่างคอนเซ็ปต์เพื่อพูดคุย/เสนอแนวทางเท่านั้น ยังไม่ใช่เว็บไซต์ทางการของธุรกิจ เว้นแต่เจ้าของจะอนุมัติ
> ห้ามแต่งราคา/รีวิว/เคลมผลการรักษา · ทุกหน้า `noindex,nofollow`

## ไฟล์ในโฟลเดอร์
```
classy-clinic-ratchaphruek/
├─ README.md            ← ไฟล์นี้
├─ lead-profile.md      ← โปรไฟล์ลีด + คะแนน 25/25
├─ redesign-brief.md    ← ทิศทาง/โครงสร้าง/รูปที่ใช้
├─ outreach-message.md  ← ข้อความทัก + สคริปต์โทร + before/after
├─ assets/              ← รูปจริงจากเว็บสาธารณะ
│  ├─ logo.png
│  ├─ doctor-team.webp   (Hero/Trust)
│  ├─ facility-05.webp   (Tech — interior)
│  └─ aesthetic-img.webp (Trust — beauty)
└─ site/
   ├─ index.html  ← หน้าเทียบ (COMPARISON) = เปิดอันนี้ก่อน
   ├─ new.html    ← เว็บใหม่ (Clinical Luxe + รูปจริง)
   └─ old.html    ← เว็บเดิมจำลอง (สื่อจุดอ่อน)
```

## วิธีเปิด / preview
- **เร็วสุด:** ดับเบิลคลิก `site/index.html` (iframe ใช้ path relative จึงเปิดจากไฟล์ได้)
- **แนะนำ (กัน CORS บางเบราว์เซอร์):** เสิร์ฟเป็น static server
  ```bash
  cd subprojects/classy-clinic-ratchaphruek/site
  python3 -m http.server 8080
  # เปิด http://localhost:8080/index.html
  ```
- เปิดเว็บใหม่เดี่ยว: `site/new.html` · เว็บเดิมจำลอง: `site/old.html`

## หน้า comparison (index.html) มีอะไรบ้าง
- Hero "เว็บเดิม vs เว็บใหม่"
- **Drag slider** ลากเทียบ old↔new ในเฟรมเดียว (knob ทอง)
- **Side-by-side** iframe คู่ + ปุ่มเปิดเต็มจอ
- **ตารางเทียบ 5 จุด:** รูปภาพ / เมนู / มือถือ / ปุ่มติดต่อ-Line / ภาพลักษณ์แบรนด์
- กล่องข้อเสนอ + ตัวเลขแนวทาง

## Tech stack
- HTML single-file + Tailwind (CDN) + React 18 (UMD) + Babel standalone
- **สำคัญ (กันจอดำ):** new.html pin `@babel/standalone@7.23.6` และ register preset `react-classic` (runtime classic = React.createElement) ก่อน `<script type="text/babel" data-presets="react-classic">`
- ฟอนต์: Cormorant Garamond + Jost + IBM Plex Sans Thai (Google Fonts)

## ข้อมูลธุรกิจ (จากเว็บสาธารณะ)
- โทร 062-829-3563, 091-152-4266
- 96/9 ม.1 ต.อ้อมเกร็ด อ.ปากเกร็ด นนทบุรี 11120
- อังคาร–อาทิตย์ 10:00–20:00 (ปิดจันทร์)
- บริการ: ฟิลเลอร์/ออกแบบรูปหน้า · โบทอกซ์ · ร้อยไหม · Ultherapy/Thermage/HIFU · Profhilo/Sculptra/Radiesse · ศัลยกรรมจมูก

## สถานะ verify (ทดสอบด้วย headless Chromium)
- new.html: React mount จริง (#root ~15k chars) · service cards 6 · tel: links 7 · รูปจริงโหลดครบ 4 · console errors = none
- index.html: iframe new/old โหลดได้ · drag slider ทำงาน · ตารางเทียบ 5 แถว · errors = none

## หมายเหตุรูป
ดูดรูปจากเว็บสาธารณะได้ทั้งหมดที่ลอง แต่คัดใช้ 4 รูปที่เข้าธีมความงาม — ชุด `img-home-facility-01..04` เป็นภาพคาเฟ่/อาหาร (คลินิกมีโซนคาเฟ่ BABOON) จึงไม่นำมาใช้
