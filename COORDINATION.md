# COORDINATION — Multi-Agent Rules & Handoff Log

Two (or more) agentic tools work in **this same repo/folder**:

- **Claude Code** — Anthropic, model Opus 4.8
- **Hermes** — model GPT-5.5

They may edit **any file, any subproject** — work is **mixed, not split into zones**.
Safety does **not** come from file locks (there are none). It comes from **Git discipline**:
pull before you touch anything, push the moment you finish, and only **one tool pushes at a time**.

---

## Protocol (follow exactly)

### A. Before you START working — every time, especially right after switching tools
```bash
git fetch origin
git status -sb                 # check if you are behind origin/main
git pull --rebase origin main  # get the latest BEFORE editing anything
```
> Do **not** edit any file before pulling. The other tool may have changed it.

### B. When you FINISH a unit of work — before stepping away / handing off
```bash
git add -A
git commit -m "[<tool>] <what changed>"   # tag who you are (see below)
git pull --rebase origin main             # fold in anything that arrived meanwhile
git push origin main                       # ONE tool pushes at a time
```
Then append a row to the **handoff log** at the bottom and push that too.

### C. Commit tagging — so we always know who did what
- Claude Code → prefix the commit subject with `[claude]`
- Hermes → prefix the commit subject with `[hermes]`

### D. If `pull --rebase` reports a CONFLICT
Stop and resolve it:
```bash
# edit the conflicted files, then:
git add <files>
git rebase --continue
```
Verify the result, then push. **Never** `git push --force` to `main`.

---

## Rules in one line
One pusher at a time · **pull-before, push-after** · never force-push `main` · keep commits small so handoffs stay clean · if unsure whether you are current, run step A again.

---

## Handoff log (append newest at the top)

| When (BKK) | Tool | What changed | Status |
|---|---|---|---|
| 2026-06-23 | claude | Added multi-agent coordination protocol + this log | done |

---
*This file is shared too — follow Protocol A/B above whenever you edit it.*
