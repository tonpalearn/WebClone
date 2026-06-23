# WebClone

WebClone คือ workspace สำหรับ agent ที่หา lead ธุรกิจในพื้นที่ที่กำหนด ตรวจเว็บ/ข้อมูลติดต่อสาธารณะ แล้วสร้าง subproject เป็นเว็บ redesign demo เพื่อใช้เสนอขายลูกค้าอย่างถูกต้องและโปร่งใส

## เป้าหมาย

1. รับโจทย์พื้นที่ + ประเภทธุรกิจ เช่น `คลินิกทันตกรรม แถวทองหล่อ`
2. ค้นหาธุรกิจจากข้อมูลสาธารณะ
3. เก็บ lead profile: ชื่อธุรกิจ เว็บไซต์เดิม เบอร์ติดต่อ ที่อยู่ source URL และ pain points
4. สร้าง subproject ต่อหนึ่งธุรกิจ
5. ทำเว็บ redesign demo ที่สวยกว่าเดิม พร้อมข้อความเสนอขาย
6. Export demo เพื่อเปิดดู/ส่งให้ลูกค้าพิจารณา

## โครงสร้าง

```text
WebClone/
├─ AGENTS.md
├─ README.md
├─ docs/
│  ├─ SPEC.md
│  ├─ ETHICS_AND_COMPLIANCE.md
│  └─ plans/
│     └─ 2026-06-23-webclone-implementation-plan.md
├─ input/              # ไฟล์โจทย์พื้นที่/ประเภทธุรกิจ
├─ output/             # รายงาน lead, CSV, generated outreach
├─ subprojects/        # เว็บ demo รายธุรกิจ
└─ templates/          # template lead/redesign/outreach
```

## วิธีใช้งานแบบ manual ตอนนี้

1. สร้างโจทย์ใน `input/` เช่น `input/thonglor-dentists.md`
2. ให้ agent อ่าน `AGENTS.md`
3. สั่งให้ค้นหา lead ตามโจทย์
4. ให้สร้าง subproject ใน `subprojects/<business-slug>/`
5. ตรวจ compliance ก่อนส่ง demo ให้ลูกค้า

## หลักสำคัญ

- ใช้เฉพาะข้อมูลสาธารณะและอ้างอิง source URL เสมอ
- ห้ามเก็บข้อมูลส่วนตัวที่ไม่จำเป็น
- ห้าม scrape แบบละเมิด robots/ToS หรือ bypass protection
- ห้ามแอบอ้างว่าเว็บ demo เป็นเว็บจริงของธุรกิจนั้น
- ห้าม copy รูป/โลโก้/brand asset ที่ไม่มีสิทธิ์โดยตรง ให้ใช้ placeholder หรือ asset ที่อนุญาต
- ต้องทำเป็น redesign demo/proposal เพื่อเสนอขายเท่านั้น
