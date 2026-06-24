# Redesign Brief: ZENVANA Wellness Spa (สาขาราชพฤกษ์)

## Objective

ทำคอนเซ็ปต์ redesign แบบ mobile-first สาย **"Organic Wellness Sanctuary"** ให้ ZENVANA Wellness Spa มีหน้าเว็บที่สงบ หายใจได้ เป็นธรรมชาติ พรีเมียมแบบรีทรีต — ใช้รูปจริงของร้านเป็นพระเอก ให้ลูกค้าที่เปิดจากมือถือรู้สึกผ่อนคลายอยากจอง เข้าใจบริการเป็น journey และ **จองคิว/โทร/ทักไลน์ได้ทันที** พร้อมเห็นเวลาเปิด+ที่อยู่ชัดเจน

## Target Audience

- คนทำงานออฟฟิศที่ปวดคอ-บ่า-ไหล่ (Office Syndrome) — กลุ่มหลัก
- คนที่มองหาการพักผ่อนเชิงเวลเนส (singing bowl, หินภูเขาไฟ, อโรมา, Signature Retreat)
- ลูกค้าย่านราชพฤกษ์/นนทบุรี/กรุงเทพฝั่งตะวันตก ที่ค้นหาบนมือถือ
- คนที่มองหาของขวัญ/ทรีตเมนต์ให้คนสำคัญ

## Current Problems Observed

1. **ปุ่มจองไม่เด่น + CTA อ่อน** — ลูกค้าต้องมองหาว่าจะจองคิว/ติดต่ออย่างไร (จุดอ่อนหลักที่เจ้าของงานระบุ)
2. **ที่อยู่/เวลาเปิดฝังลึก** — หาไม่เจอจากหน้าแรก ลดโอกาสเดินทางมา/โทรจอง
3. **ไม่ได้ใช้รูปจริงสวย ๆ เป็นพระเอก** — มีรูป interior/treatment คุณภาพดี แต่ดีไซน์ไม่สื่ออารมณ์รีทรีตสงบสมกับสเปซจริง
4. บริการหลายหมวด (Office Syndrome, นวดหลายแบบ, Wellness, Body/Facial, Signature Retreat) ไม่ถูกจัดเป็น journey ให้เลือกง่าย
5. หน้าแรก WordPress มีองค์ประกอบเยอะ (โปรโมชัน/บทความ) ลำดับความสำคัญไม่ชัด บนมือถือเลื่อนยาว

## Proposed Improvements

1. **Hero รูปจริงเต็มตา** (ผนังต้นไม้ + โลโก้ ZENVANA) โทนเขียวเซจ/ครีม/ไม้ พร้อมพาดหัวจุดยืน "พื้นที่หายใจของกายและใจ" และปุ่มจอง/โทรเด่น
2. **ปุ่ม CTA เด่นทุกจุด**: จองคิว / โทร 090-654-4269 / ทักไลน์ @zenvanaspa — ทั้งบนหัวเว็บ, ในแต่ละ section, และแถบลอยล่างจอบนมือถือ (1 แตะ)
3. **จัดบริการเป็น journey/ritual**: Office Syndrome Therapy, นวดบำบัด (ไทย/สวีดิช/อโรมา/เท้า), Wellness Ritual (singing bowl/หินภูเขาไฟ), Body & Facial, **Signature Retreat (เด่นสุด)**
4. บล็อก **Office Syndrome** เด่นแยก (เจาะกลุ่มคนทำงาน) — ใช้รูปทรีตเมนต์จริง
5. บล็อกจุดเด่น/ความน่าเชื่อถือเฉพาะที่มีหลักฐาน: นักบำบัดดูแลใกล้ชิด, สเปซธรรมชาติสงบ, สาขาราชพฤกษ์
6. **บล็อกเวลาเปิด + ที่อยู่ + ติดต่อ ชัดเจน** (จ.–ศ. 11–21, ส.–อา. 10–21, คิวสุดท้าย 19:45) + แผนที่ + disclaimer

## Page Sections (new.html)

- Top bar (โลโก้ + nav + ปุ่มจอง)
- Hero รูปจริงเต็มตา + ปุ่มจอง/โทร
- จุดยืนเวลเนส (intro/philosophy)
- Office Syndrome Therapy (เด่น เจาะกลุ่มออฟฟิศ)
- บริการเป็น journey (กลุ่มบริการ)
- Signature Retreat (เด่นสุด)
- Wellness Ritual (singing bowl/หินภูเขาไฟ/อโรมา)
- จุดเด่น/ทำไม ZENVANA
- เวลาเปิด + ที่อยู่ + ติดต่อ (ราชพฤกษ์)
- Footer disclaimer
- Mobile sticky bar (จอง/โทร/ไลน์)

## Style Direction — "Organic Wellness Sanctuary"

- Mood: สงบ หายใจได้ ธรรมชาติ พรีเมียมแบบรีทรีต — เลิกสูตร hero gradient + glass + emoji
- Colors: เขียวเซจ/เขียวป่า (#3f5b4c, #6f8a74), ขาว/ครีมนวล (#f6f3ec, #faf8f3), โทนไม้/ดินอ่อน (#a99577), ทองอ่อน accent (#b89968)
- Typography: serif อ่อนโยน (Cormorant Garamond) + sans สะอาด (Jost) + ไทย IBM Plex Sans Thai น้ำหนักเบา — Google Fonts
- Layout: พื้นที่ว่างเยอะเป็นจังหวะหายใจ, รูปจริงใหญ่เต็มตา, บริการเป็น ritual/journey, Signature Retreat เด่น
- Imagery: **รูปถ่ายจริงของร้าน** (interior ผนังต้นไม้, corridor, singing bowl, office syndrome therapy, อโรมา, assessment) — อนุมัติใช้แล้ว
- CTA tone: สุภาพ อบอุ่น ตรงประเด็น ใช้ง่ายบนมือถือ

## Required Disclaimer

> Concept redesign demo prepared for discussion. This is not the official website unless approved by the business owner.

Thai:

> ตัวอย่างคอนเซ็ปต์เว็บไซต์เพื่อใช้พูดคุย/เสนอแนวทางเท่านั้น ยังไม่ใช่เว็บไซต์ทางการของธุรกิจนี้ เว้นแต่เจ้าของธุรกิจจะอนุมัติ
