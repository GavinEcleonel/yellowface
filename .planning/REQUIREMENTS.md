# Requirements: Yellowface: Compare Your Choices With June's

**Defined:** 2026-10-02
**Core Value:** A reader can go through all seven scenes, and whichever answer they pick, they get an accurate, evidence-backed analysis of how the novel exposes racial bias in publishing, without the site inventing quotations or claiming academic coverage the team does not have.

## v1 Requirements

### Story Flow

- [ ] **FLOW-01**: Reader sees an introduction with a hook that explains they will compare their decisions with June's and that their choices do not change the novel's events
- [ ] **FLOW-02**: Reader sees one scene at a time, in order: The manuscript, Becoming Juniper Song, Silencing Candice, The accusation, Protected by profit, The recording, The comeback
- [ ] **FLOW-03**: Each scene shows its illustration, a concise setup, the audience question, and two answer buttons
- [ ] **FLOW-04**: After answering, reader sees their selected response clearly displayed
- [ ] **FLOW-05**: After answering, reader sees the analysis written for that specific answer (14 distinct analyses, taken from the planner appendix)
- [ ] **FLOW-06**: After answering, reader sees a separate panel labeled "What June actually does" with the canonical continuation, identical for both answers
- [ ] **FLOW-07**: After answering, reader sees the supporting quotation with speaker attribution and source-PDF page reference
- [ ] **FLOW-08**: After answering, reader sees the analytical concepts the scene connects to
- [ ] **FLOW-09**: Reader can press Continue to move to the next scene, and after scene 7 to the final reflection
- [ ] **FLOW-10**: Reader sees scene progress such as "Scene 3 of 7"
- [ ] **FLOW-11**: Reader can go back to review earlier scenes and their earlier answers
- [ ] **FLOW-12**: Reader can restart the experience from any point
- [ ] **FLOW-13**: Reader can tell apart project narration, the group's interpretation, and direct quotations by consistent visual and textual labeling; any imagined June-style narration is labeled as imagined
- [ ] **FLOW-14**: Scenes 5 and 7 state that their audience decision is the team's interpretive framing, not a quoted exchange or alternate event

### Academic Content

- [ ] **ACAD-01**: Site names the system of racial bias the novel exposes, with textual evidence and root-cause analysis rather than plot summary
- [ ] **ACAD-02**: Site explains ideological oppression (tokenism, marketable authenticity) with a verified passage
- [ ] **ACAD-03**: Site explains institutional oppression (scarcity, Candice removed, profit protecting June) with verified passages
- [ ] **ACAD-04**: Site explains interpersonal oppression and harm, keeping legitimate criticism of June distinct from online abuse
- [ ] **ACAD-05**: Site either supports internalized oppression with a passage located and verified in the supplied novel, or states plainly that the evidence is missing; June's self-victimization is never used for this category
- [ ] **ACAD-06**: Site identifies the protagonist's breaking point and explains why it is the peak of tension
- [ ] **ACAD-07**: Site addresses resistance, community responses, and healing or its absence, distinguishing Candice's challenge from June's reputation management
- [ ] **ACAD-08**: Site addresses systemic change or its absence
- [ ] **ACAD-09**: Site presents at least two researched historical examples connected to the novel's themes, each verified against a credible source
- [ ] **ACAD-10**: Site presents at least two current news or data connections, each verified against a credible source; the planner's "39%" claim appears only if its meaning is checked and stated correctly
- [ ] **ACAD-11**: Site addresses what the story shows about human nature and gives a warning or hope for the future
- [ ] **ACAD-12**: Reader reaches a substantial final reflection that connects all five framework elements and the research
- [ ] **ACAD-13**: June's claims of racial victimization are presented as her perspective, and scarcity/tokenism as patterns supported by passages, not universal rules
- [ ] **ACAD-14**: Every quotation and page reference on the site matches the supplied novel PDF; plot details in setups and continuations (author photo, injury and aftermath) are checked against the novel
- [ ] **ACAD-15**: Reader can open a sources section where every research link works
- [ ] **ACAD-16**: Reader sees a credits section naming Audrina Badillo, Jeremy Lu, Aishwarya Srivastava, and Gavin Ecleonel

### Design

- [ ] **DSGN-01**: Site uses an acid yellow, charcoal black, and cream palette with subtle paper texture and contrast that meets WCAG AA for text
- [ ] **DSGN-02**: Headings use a bold extended grotesque with tight tracking and fluid sizing; body uses a readable Helvetica-style grotesque; CTAs are bold uppercase; fonts load with `font-display: swap` and are licensed for web use
- [ ] **DSGN-03**: Text reveals line by line from a mask, and illustrations settle from a slight scale-in when they enter view
- [ ] **DSGN-04**: Pointer parallax on the illustration and a gentle pulse on the Continue button, both subtle
- [ ] **DSGN-05**: All motion is disabled or reduced when the reader prefers reduced motion, and the site remains fully usable if the animation library fails to load
- [ ] **DSGN-06**: Layout works on phones and desktops, and inside a Google Sites embed frame
- [ ] **DSGN-07**: A `DESIGN.md` records palette, type, spacing, and component conventions used by the build
- [ ] **DSGN-08**: Site copy passes the writing skills (storytelling for intro and setups, readability for analysis, anti-AI-writing and humanizer as final filters) without altering the planner analyses' claims or caveats

### Technical

- [ ] **TECH-01**: Site is delivered as `index.html`, `styles.css`, `script.js`, `assets/`, and `README.md`, with no backend, login, or build process
- [ ] **TECH-02**: All asset and script paths are relative and load correctly under a GitHub Pages repository subpath
- [ ] **TECH-03**: The seven illustrations ship in `assets/` optimized for size with no visible quality loss; any missing illustration uses a labeled placeholder documented in the README
- [ ] **TECH-04**: Every control is a real button or link, reachable and operable by keyboard, with visible focus and screen-reader labels; revealed panels are announced and focus moves sensibly
- [ ] **TECH-05**: Analysis panels are readable with normal page scrolling, no trapped scroll regions

### Publishing & Validation

- [ ] **PUB-01**: README gives setup and publishing steps (upload to GitHub, enable Pages, pick the publishing source, find the URL, embed in Google Sites), checked against current GitHub Pages documentation
- [ ] **PUB-02**: Site is live on GitHub Pages from the `GavinEcleonel/yellowface` repository
- [ ] **PUB-03**: All fourteen answer paths, the seven canonical continuations, back/review, restart, image loading, mobile layout, and subpath serving are tested and the results recorded
- [ ] **PUB-04**: A separate unresolved-items list covers quotation, internalized-oppression, and research-source gaps for the team

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

**Coverage:**
- v1 requirements: 47 total
- Mapped to phases: 0
- Unmapped: 47 ⚠️

---
*Requirements defined: 2026-10-02*
*Last updated: 2026-10-02 after initial definition*
