# Phed Phed (เผ็ดเผ็ด) ราชพฤกษ์ — Redesign Demo Subproject

This subproject is a concept redesign demo prepared for discussion and sales proposal purposes. The homepage is a **before/after comparison page** (เว็บเดิม ↔ เว็บใหม่) for pitching a website redesign.

## Business

- Name: Phed Phed (เผ็ดเผ็ด) — focus on the Ratchaphruek branch
- Category: Thai bold-flavor restaurant, homemade ingredients · Ratchaphruek branch = Bistro format at The Circle Ratchaphruek
- Area: The Circle ราชพฤกษ์ (confirm exact unit/floor with the shop)
- Public phone (Ratchaphruek): 065-092-9690, 063-516-5574
- Public email: mail@phedphed.com · Line: @phedphed.aw
- Original website: http://www.phedphed.com/

## Files

```text
lead-profile.md
redesign-brief.md
outreach-message.md
site/index.html   ← COMPARISON page (เว็บเดิม↔เว็บใหม่) — main page
site/new.html     ← full redesign landing page (Ratchaphruek branch)
site/old.html     ← simulated old website (labeled "จำลองจากเว็บเดิม • ไม่ใช่ภาพจริง")
```

## Open Demo

Open the comparison page locally (main page):

```bash
open /Users/ckawin/hermes/projects/WebClone/subprojects/phedphed-ratchaphruek/site/index.html
```

> The comparison page embeds `new.html` and `old.html` via iframes, so opening it from the filesystem works directly. If a browser blocks local iframes, serve the folder instead:

```bash
cd /Users/ckawin/hermes/projects/WebClone/subprojects/phedphed-ratchaphruek/site
python3 -m http.server 8100
```

Then open `http://127.0.0.1:8100`.

## Disclaimer

This is not the official website. It is a concept redesign demo prepared for discussion unless approved by the business owner. No real logo, photos, copy, menu, prices, reviews, or awards are used — placeholders only. Every page carries `noindex,nofollow` and a Thai disclaimer. Opening hours shown are approximate; confirm with the shop.
