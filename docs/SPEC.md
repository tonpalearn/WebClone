# WebClone Product Spec

## Summary

WebClone is an agent-assisted lead discovery and website redesign workspace. It finds local businesses in a target area, records public contact information, analyzes their current web presence, and generates a polished redesign demo as a sales proposal.

## Users

- Primary user: service provider selling website redesign/marketing services to local businesses
- Target recipients: business owners/managers with public business contact channels

## Core Use Cases

### Use Case 1: Find local leads

Input: `หาร้านทำฟันแถวทองหล่อ 10 ร้านที่มีเว็บเก่าและเบอร์ติดต่อ`

Output:

- ranked lead list
- public phone/contact source
- website URL
- improvement notes

### Use Case 2: Generate redesign demo

Input: selected lead

Output:

- subproject folder
- single-page responsive demo website
- redesign brief
- outreach message

### Use Case 3: Prepare sales package

Output:

- demo link/path
- short message
- call script
- before/after points
- compliance notes

## Functional Requirements

### Lead Discovery

- Search by area + business category
- Collect name, website, phone, address, source URLs
- Deduplicate leads
- Score leads by opportunity
- Preserve citations/source URLs for every factual field

### Website Analysis

Analyze:

- mobile usability
- visual quality
- CTA clarity
- navigation
- content completeness
- loading/performance signals when measurable
- trust signals

### Demo Generation

- Create one subproject per business
- Generate mobile-responsive site
- Use Thai copy by default
- Include hero, services, trust section, contact CTA, map/contact block, footer disclaimer
- Use placeholder/royalty-free assets unless rights are confirmed

### Outreach

- Generate first-contact message
- Generate call script
- Generate value proposition bullets
- Include demo path/link

## Non-Functional Requirements

- Clear audit trail: source URLs and notes
- No private personal data collection
- No platform abuse or bypassing technical controls
- Reproducible file structure
- Easy local preview
- Demo sites must be visually polished enough for sales use

## Compliance Requirements

See `docs/ETHICS_AND_COMPLIANCE.md`.

## Data Model

### Lead

```json
{
  "business_name": "string",
  "slug": "string",
  "category": "string",
  "area": "string",
  "address": "string|null",
  "website_url": "string|null",
  "phone": "string|null",
  "email_or_contact_url": "string|null",
  "source_urls": ["string"],
  "website_issues": ["string"],
  "redesign_opportunities": ["string"],
  "score": 1,
  "confidence": "high|medium|low"
}
```

### Subproject

```json
{
  "lead_slug": "string",
  "created_at": "ISO datetime",
  "paths": {
    "lead_profile": "lead-profile.md",
    "redesign_brief": "redesign-brief.md",
    "outreach": "outreach-message.md",
    "site": "site/index.html"
  },
  "disclaimer_present": true,
  "ready_for_review": true
}
```

## Acceptance Criteria for MVP

- Given an area/category, agent can produce a lead list with source URLs
- Given one selected lead, agent creates a complete subproject folder
- Demo site is responsive static HTML/CSS/JS and opens locally
- Outreach message is generated in Thai
- Compliance disclaimer exists in demo
- Final report lists uncertainties and source URLs

## Future Enhancements

- Automated browser screenshots of existing sites
- Lighthouse scoring
- CSV/CRM export
- Bulk lead pipeline dashboard
- One-click static deployment after user approval
- Template gallery by business type
