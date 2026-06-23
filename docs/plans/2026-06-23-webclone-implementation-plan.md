# WebClone Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Build a local agent workspace that discovers public local-business leads, records source-backed contact details, and generates compliant redesign demo subprojects for sales outreach.

**Architecture:** Start file-based for speed: Markdown/JSON lead records, static demo sites, and template-driven outreach. Later add a dashboard and automation pipeline after manual workflow proves useful.

**Tech Stack:** Markdown workspace, static HTML/CSS/JS demo generator, optional Python scripts for lead normalization, optional Vite/React dashboard in a later phase.

---

## Phase 1 — Workspace Foundation

### Task 1: Confirm file structure

**Objective:** Ensure the WebClone project has the required directories and docs.

**Files:**
- Verify: `AGENTS.md`
- Verify: `README.md`
- Verify: `docs/SPEC.md`
- Verify: `docs/ETHICS_AND_COMPLIANCE.md`
- Verify: `templates/lead-profile.md`
- Verify: `templates/redesign-brief.md`
- Verify: `templates/outreach-message.md`

**Verification:**

Run:

```bash
find /Users/ckawin/hermes/projects/WebClone -maxdepth 3 -type f | sort
```

Expected: all required files are present.

### Task 2: Create first input brief template

**Objective:** Add a reusable input format for area/category searches.

**Files:**
- Create: `input/example-local-search-brief.md`

**Content:**

```markdown
# Local Search Brief

พื้นที่: ทองหล่อ กรุงเทพ
ประเภทธุรกิจ: คลินิกทันตกรรม
จำนวน lead: 10
ภาษา demo/outreach: ไทย
สไตล์เว็บที่อยากได้: modern premium, mobile-first
ข้อจำกัด: ใช้เฉพาะข้อมูลสาธารณะและต้องมี source URL
```

**Verification:** Read the file and confirm all required fields exist.

## Phase 2 — Manual Lead Discovery Workflow

### Task 3: Run one lead discovery pass

**Objective:** Given an input brief, collect 3–5 sample leads manually through public web search.

**Files:**
- Create: `output/<area>-<category>-leads.md`

**Required fields per lead:**
- Business name
- Website URL
- Phone/contact
- Address/area
- Source URLs
- Website issues
- Score
- Confidence

**Verification:** Every phone/contact field must have a source URL.

### Task 4: Select one lead for demo

**Objective:** Pick the highest-opportunity lead and create its lead profile.

**Files:**
- Create: `subprojects/<business-slug>/lead-profile.md`

**Verification:** Lead profile contains sources and compliance notes.

## Phase 3 — Static Demo Generator by Hand

### Task 5: Create subproject structure

**Objective:** Create per-business demo folder.

**Files:**
- Create: `subprojects/<business-slug>/README.md`
- Create: `subprojects/<business-slug>/redesign-brief.md`
- Create: `subprojects/<business-slug>/outreach-message.md`
- Create: `subprojects/<business-slug>/site/index.html`
- Create: `subprojects/<business-slug>/site/styles.css`
- Create: `subprojects/<business-slug>/site/script.js`

**Verification:** All files exist.

### Task 6: Build polished responsive HTML demo

**Objective:** Implement a single-page redesign demo with original copy and placeholder/permitted assets.

**Sections:**
- Hero
- Services
- Trust/value section
- CTA
- Location/contact
- Footer disclaimer

**Verification:**

- Open `site/index.html` locally
- Check mobile viewport manually or with browser devtools
- Confirm disclaimer visible

### Task 7: Generate outreach package

**Objective:** Generate Thai sales message and call script for the selected business.

**Files:**
- Update: `subprojects/<business-slug>/outreach-message.md`

**Verification:** Message is truthful, non-deceptive, and does not claim official affiliation.

## Phase 4 — Automation Scripts

### Task 8: Add lead schema

**Objective:** Define JSON schema for leads.

**Files:**
- Create: `schemas/lead.schema.json`

**Verification:** Validate sample lead JSON against schema using Python jsonschema or a small script.

### Task 9: Add subproject scaffolder

**Objective:** Create a script that takes a lead JSON and generates subproject files from templates.

**Files:**
- Create: `scripts/scaffold_subproject.py`
- Create: `tests/test_scaffold_subproject.py`

**Verification:**

```bash
python -m pytest tests/test_scaffold_subproject.py
```

Expected: scaffold files created in a temp directory.

### Task 10: Add demo site lint/check script

**Objective:** Ensure every demo includes disclaimer and contact-source notes.

**Files:**
- Create: `scripts/check_demo.py`
- Create: `tests/test_check_demo.py`

**Verification:**

```bash
python -m pytest tests/test_check_demo.py
```

Expected: missing disclaimer fails, valid demo passes.

## Phase 5 — Dashboard Later

### Task 11: Build local dashboard

**Objective:** Add a UI to manage briefs, leads, scores, and subprojects.

**Files:**
- Create later: `app/` or `frontend/` + `backend/`

**Acceptance Criteria:**
- Create/search brief
- Review lead list
- Approve selected lead
- Generate demo
- Preview outreach

## Done Definition

- A real sample lead search has been completed
- At least one subproject demo exists
- Contact details are source-backed
- Demo has visible disclaimer
- No private data or copied protected assets included
- User can open the generated demo locally
