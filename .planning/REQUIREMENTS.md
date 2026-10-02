# Requirements: Yellowface: Compare Your Choices With June's

**Defined:** 2026-10-02
**Core Value:** A reader can go through all seven scenes, and whichever answer they pick, they get an accurate, evidence-backed analysis of how the novel exposes racial bias in publishing, without the site inventing quotations or claiming academic coverage the team does not have.

## v1 Requirements

### Story Flow

- [x] **FLOW-01**: Reader sees an introduction with a hook that explains they will compare their decisions with June's and that their choices do not change the novel's events
- [x] **FLOW-02**: Reader sees one scene at a time, in order: The manuscript, Becoming Juniper Song, Silencing Candice, The accusation, Protected by profit, The recording, The comeback
- [x] **FLOW-03**: Each scene shows its illustration, a concise setup, the audience question, and two answer buttons
- [x] **FLOW-04**: After answering, reader sees their selected response clearly displayed
- [x] **FLOW-05**: After answering, reader sees the analysis written for that specific answer (14 distinct analyses, taken from the planner appendix)
- [x] **FLOW-06**: After answering, reader sees a separate panel labeled "What June actually does" with the canonical continuation, identical for both answers
- [x] **FLOW-07**: After answering, reader sees the supporting quotation with speaker attribution and source-PDF page reference
- [x] **FLOW-08**: After answering, reader sees the analytical concepts the scene connects to
- [x] **FLOW-09**: Reader can press Continue to move to the next scene, and after scene 7 to the final reflection
- [x] **FLOW-10**: Reader sees scene progress such as "Scene 3 of 7"
- [x] **FLOW-11**: Reader can go back to review earlier scenes and their earlier answers
- [x] **FLOW-12**: Reader can restart the experience from any point
- [x] **FLOW-13**: Reader can tell apart project narration, the group's interpretation, and direct quotations by consistent visual and textual labeling; any imagined June-style narration is labeled as imagined
- [x] **FLOW-14**: Scenes 5 and 7 state that their audience decision is the team's interpretive framing, not a quoted exchange or alternate event

### Academic Content

- [x] **ACAD-01**: Site names the system of racial bias the novel exposes, with textual evidence and root-cause analysis rather than plot summary
- [x] **ACAD-02**: Site explains ideological oppression (tokenism, marketable authenticity) with a verified passage
- [x] **ACAD-03**: Site explains institutional oppression (scarcity, Candice removed, profit protecting June) with verified passages
- [x] **ACAD-04**: Site explains interpersonal oppression and harm, keeping legitimate criticism of June distinct from online abuse
- [x] **ACAD-05**: Site either supports internalized oppression with a passage located and verified in the supplied novel, or states plainly that the evidence is missing; June's self-victimization is never used for this category
- [x] **ACAD-06**: Site identifies the protagonist's breaking point and explains why it is the peak of tension
- [x] **ACAD-07**: Site addresses resistance, community responses, and healing or its absence, distinguishing Candice's challenge from June's reputation management
- [x] **ACAD-08**: Site addresses systemic change or its absence
- [x] **ACAD-09**: Site presents at least two researched historical examples connected to the novel's themes, each verified against a credible source
- [x] **ACAD-10**: Site presents at least two current news or data connections, each verified against a credible source; the planner's "39%" claim appears only if its meaning is checked and stated correctly
- [x] **ACAD-11**: Site addresses what the story shows about human nature and gives a warning or hope for the future
- [x] **ACAD-12**: Reader reaches a substantial final reflection that connects all five framework elements and the research
- [x] **ACAD-13**: June's claims of racial victimization are presented as her perspective, and scarcity/tokenism as patterns supported by passages, not universal rules
- [x] **ACAD-14**: Every quotation and page reference on the site matches the supplied novel PDF; plot details in setups and continuations (author photo, injury and aftermath) are checked against the novel
- [x] **ACAD-15**: Reader can open a sources section where every research link works
- [x] **ACAD-16**: Reader sees a credits section naming Audrina Badillo, Jeremy Lu, Aishwarya Srivastava, and Gavin Ecleonel

### Design

- [x] **DSGN-01**: Site uses an acid yellow, charcoal black, and cream palette with subtle paper texture and contrast that meets WCAG AA for text
- [x] **DSGN-02**: Headings use a bold extended grotesque with tight tracking and fluid sizing; body uses a readable Helvetica-style grotesque; CTAs are bold uppercase; fonts load with `font-display: swap` and are licensed for web use
- [x] **DSGN-03**: Text reveals line by line from a mask, and illustrations settle from a slight scale-in when they enter view
- [x] **DSGN-04**: Pointer parallax on the illustration and a gentle pulse on the Continue button, both subtle
- [x] **DSGN-05**: All motion is disabled or reduced when the reader prefers reduced motion, and the site remains fully usable if the animation library fails to load
- [x] **DSGN-06**: Layout works on phones and desktops, and inside a Google Sites embed frame
- [x] **DSGN-07**: A `DESIGN.md` records palette, type, spacing, and component conventions used by the build
- [x] **DSGN-08**: Site copy passes the writing skills (storytelling for intro and setups, readability for analysis, anti-AI-writing and humanizer as final filters) without altering the planner analyses' claims or caveats

### Technical

- [x] **TECH-01**: Site is delivered as `index.html`, `styles.css`, `script.js`, `assets/`, and `README.md`, with no backend, login, or build process
- [x] **TECH-02**: All asset and script paths are relative and load correctly under a GitHub Pages repository subpath
- [x] **TECH-03**: The seven illustrations ship in `assets/` optimized for size with no visible quality loss; any missing illustration uses a labeled placeholder documented in the README
- [x] **TECH-04**: Every control is a real button or link, reachable and operable by keyboard, with visible focus and screen-reader labels; revealed panels are announced and focus moves sensibly
- [x] **TECH-05**: Analysis panels are readable with normal page scrolling, no trapped scroll regions

### Publishing & Validation

- [x] **PUB-01**: README gives setup and publishing steps (upload to GitHub, enable Pages, pick the publishing source, find the URL, embed in Google Sites), checked against current GitHub Pages documentation
- [x] **PUB-02**: Site is live on GitHub Pages from the `GavinEcleonel/yellowface` repository
- [x] **PUB-03**: All fourteen answer paths, the seven canonical continuations, back/review, restart, image loading, mobile layout, and subpath serving are tested and the results recorded
- [x] **PUB-04**: A separate unresolved-items list covers quotation, internalized-oppression, and research-source gaps for the team

## v2 Requirements

### Enhancements

- **ENH-01**: Adult interview section woven into the final reflection (rubric mentions one; team says not required)
- **ENH-02**: Summary screen comparing the reader's seven answers with June's
- **ENH-03**: Soundtrack or ambient audio as a third creative element
- **ENH-04**: Team voice profile via `voice-dna` from the group's own writing samples

## Out of Scope

| Feature | Reason |
|---------|--------|
| Branching plot where choices change events | Brief requires both answers to converge on canon |
| Original five-question outline and "lead them to yes" hook | Superseded by the seven-scene appendix; forcing the unethical answer is prohibited |
| Hold-to-progress, idle word float, proximity parallax, bag-exit animation | Restrained motion chosen; hold-to-progress blocks keyboard users |
| Backend, accounts, analytics, cross-device progress | Static school project |
| Framework or build tooling | Teammates must be able to upload plain files |
| Long excerpts of the novel | Copyright; short attributed quotations only |
| Novel PDF or planner PDF in the repository | Copyright and privacy; repo is public |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| FLOW-01 | Phase 1 | Complete |
| FLOW-02 | Phase 1 | Complete |
| FLOW-03 | Phase 1 | Complete |
| FLOW-04 | Phase 1 | Complete |
| FLOW-05 | Phase 1 | Complete |
| FLOW-06 | Phase 1 | Complete |
| FLOW-07 | Phase 1 | Complete |
| FLOW-08 | Phase 1 | Complete |
| FLOW-09 | Phase 1 | Complete |
| FLOW-10 | Phase 1 | Complete |
| FLOW-11 | Phase 1 | Complete |
| FLOW-12 | Phase 1 | Complete |
| FLOW-13 | Phase 1 | Complete |
| FLOW-14 | Phase 1 | Complete |
| TECH-01 | Phase 1 | Complete |
| TECH-02 | Phase 1 | Complete |
| TECH-03 | Phase 1 | Complete |
| TECH-04 | Phase 1 | Complete (screen reader not run) |
| TECH-05 | Phase 1 | Complete |
| ACAD-01 | Phase 2 | Complete |
| ACAD-02 | Phase 2 | Complete |
| ACAD-03 | Phase 2 | Complete |
| ACAD-04 | Phase 2 | Complete |
| ACAD-05 | Phase 2 | Complete (gap stated openly; candidates need team confirmation) |
| ACAD-06 | Phase 2 | Complete |
| ACAD-07 | Phase 2 | Complete |
| ACAD-08 | Phase 2 | Complete |
| ACAD-09 | Phase 2 | Complete |
| ACAD-10 | Phase 2 | Complete |
| ACAD-11 | Phase 2 | Complete |
| ACAD-12 | Phase 2 | Complete |
| ACAD-13 | Phase 2 | Complete |
| ACAD-14 | Phase 2 | Complete |
| ACAD-15 | Phase 2 | Complete |
| ACAD-16 | Phase 2 | Complete |
| DSGN-01 | Phase 3 | Complete |
| DSGN-02 | Phase 3 | Complete (Archivo substitutes for Nimbus; license confirmed) |
| DSGN-03 | Phase 3 | Complete |
| DSGN-04 | Phase 3 | Complete |
| DSGN-05 | Phase 3 | Complete |
| DSGN-06 | Phase 3 | Complete (generic frame tested; real Google Sites embed is a team step) |
| DSGN-07 | Phase 3 | Complete |
| DSGN-08 | Phase 3 | Complete |
| PUB-01 | Phase 4 | Complete |
| PUB-02 | Phase 4 | Complete |
| PUB-03 | Phase 4 | Complete |
| PUB-04 | Phase 4 | Complete |

**Coverage:**
- v1 requirements: 47 total
- Mapped to phases: 47
- Unmapped: 0

---
*Requirements defined: 2026-10-02*
*Last updated: 2026-10-02 after build, publish, and validation*
