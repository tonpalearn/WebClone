# CERA Dental Clinic (คลินิกทันตกรรมราชพฤกษ์) — Redesign Demo Subproject

This subproject is a concept redesign demo prepared for discussion and sales proposal purposes. The homepage is a **before/after comparison page** (เว็บเดิม↔เว็บใหม่) for the sales team to use when pitching a website redesign.

## Business

- Name: CERA Dental Clinic (คลินิกทันตกรรมราชพฤกษ์)
- Category: คลินิกทันตกรรมเฉพาะทาง (specialty dental clinic)
- Area: ราชพฤกษ์ / บางกร่าง / เมืองนนทบุรี
- Address: 85/11-12 ถนนราชพฤกษ์ ต.บางกร่าง อ.เมืองนนทบุรี
- Public phone: 091-737-5477
- Line: @ceradental
- Existing site: https://cera-dental.com/

## Files

```text
lead-profile.md
redesign-brief.md
outreach-message.md
site/index.html   ← หน้าเปรียบเทียบ (COMPARISON) — หน้าหลัก
site/new.html     ← เว็บใหม่เต็มรูปแบบ (full redesign)
site/old.html     ← หน้าจำลองเว็บเดิม (simulated, ไม่ใช่ภาพจริง)
```

## Open Demo

Open the comparison page locally:

```bash
open /Users/ckawin/hermes/projects/WebClone/subprojects/cera-dental-ratchaphruek/site/index.html
```

Or serve the folder (recommended — iframes load reliably over HTTP):

```bash
cd /Users/ckawin/hermes/projects/WebClone/subprojects/cera-dental-ratchaphruek/site
python3 -m http.server 8100
```

Then open `http://127.0.0.1:8100` (index.html = comparison page).

## Notes

- ทุกหน้าใส่ `<meta name="robots" content="noindex,nofollow">`
- ไม่ใช้โลโก้/รูปจริงของคลินิก — placeholder ทั้งหมด
- เวลาทำการในเว็บใหม่เป็นค่า placeholder กำกับว่า "โปรดยืนยันเวลาจริงกับคลินิก"
- ไม่เคลมผลการรักษา/รับประกันผล ไม่มีรีวิว/รางวัล/ราคา

## Disclaimer

This is not the official website. It is a concept redesign demo prepared for discussion unless approved by the business owner.

ตัวอย่างคอนเซ็ปต์เว็บไซต์เพื่อใช้พูดคุย/เสนอแนวทางเท่านั้น ยังไม่ใช่เว็บไซต์ทางการของธุรกิจนี้ เว้นแต่เจ้าของธุรกิจจะอนุมัติ
