# ZENVANA Wellness Spa (สาขาราชพฤกษ์) — Redesign Demo Subproject

This subproject is a concept redesign demo prepared for discussion and sales proposal purposes.

## Business

- Name: ZENVANA Wellness Spa
- Category: สปา & เวลเนส — Office Syndrome Therapy, นวดไทย/สวีดิช/อโรมา/เท้า, Wellness (singing bowl, หินภูเขาไฟ), Body & Facial Treatment, Signature Retreat
- Area: สาขาราชพฤกษ์ จ.นนทบุรี
- Public phone: 090-654-4269 (ราชพฤกษ์)
- Line: @zenvanaspa
- Hours: จ.–ศ. 11:00–21:00 · ส.–อา. 10:00–21:00 (รับคิวสุดท้าย 19:45)
- Official source: https://zenvanawellness.com/

## Files

```text
lead-profile.md
redesign-brief.md
outreach-message.md
site/index.html   ← หน้าเปรียบเทียบเว็บเดิม↔เว็บใหม่ (หน้าหลัก)
site/new.html     ← เว็บใหม่เต็มรูปแบบ (Organic Wellness Sanctuary)
site/old.html     ← หน้าจำลองเว็บเดิม (สร้างขึ้นเพื่อสื่อสภาพ/จุดอ่อน ไม่ใช่ภาพจริง)
assets/           ← รูปจริงของร้าน 7 รูป + โลโก้ (ดาวน์โหลดจากเว็บทางการ)
```

## Assets (รูปจริงของร้าน — อนุมัติใช้ในเดโมแล้ว)

| ไฟล์ | ใช้ที่ | คำอธิบาย |
|---|---|---|
| logo.png | top bar / footer | โลโก้ ZENVANA |
| interior.jpg | Hero | ผนังต้นไม้ธรรมชาติ + โลโก้ + โซฟา (signature shot) |
| land3.jpg | Office Syndrome | นักบำบัดทำทรีตเมนต์ในห้อง |
| treat1.jpg | บริการ — นวดบำบัด | อโรมา/น้ำมันหอมระเหย |
| land1.jpg | บริการ — Wellness | Singing Bowl มุมบน |
| hero.jpg | บริการ — Body & Facial | โถงพักผ่อนพร้อมหมอนลายใบไม้ |
| treat2.jpg | Signature Retreat | ประเมินร่างกาย (therapist + tablet) |
| land2.jpg | Ritual band | เสียงบำบัดขันทิเบต (ภาพแบนเนอร์เต็มกว้าง) |

> รูปทั้งหมดเป็นรูปจริงของร้านจาก `zenvanawellness.com/wp-content/uploads/` ใช้ในเดโมโดยได้รับอนุมัติจากเจ้าของงานแล้ว

## Open Demo

หน้าหลักคือหน้าเปรียบเทียบ (comparison) ที่ฝัง old.html และ new.html ไว้ในกรอบเทียบกัน

แนะนำให้ serve ผ่าน http server (เพราะ index.html ฝัง iframe และ new.html อ้างรูปแบบ relative):

```bash
cd /Users/ckawin/hermes/projects/WebClone
python3 -m http.server 8100
# เปิด http://127.0.0.1:8100/subprojects/zenvana-wellness-spa/site/index.html
```

เปิดไฟล์ตรง ๆ ก็ได้ แต่แนะนำ serve เพื่อให้ iframe/รูปโหลดครบ:

```bash
open /Users/ckawin/hermes/projects/WebClone/subprojects/zenvana-wellness-spa/site/index.html
```

## Tech

- HTML single-file + Tailwind CDN + React 18 UMD + Babel (classic preset, pin `@babel/standalone@7.23.6`)
- ทุกหน้า noindex + disclaimer ไทย
- ฟอนต์: Cormorant Garamond (serif) + Jost (sans) + IBM Plex Sans Thai

## Disclaimer

This is not the official website. It is a concept redesign demo prepared for discussion unless approved by the business owner. Real shop photos are used with the owner's permission for this demo only. No fabricated reviews, awards, or prices.

ตัวอย่างคอนเซ็ปต์เว็บไซต์เพื่อใช้พูดคุย/เสนอแนวทางเท่านั้น ยังไม่ใช่เว็บไซต์ทางการของธุรกิจนี้ เว้นแต่เจ้าของธุรกิจจะอนุมัติ
