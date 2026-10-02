# Roadmap: Yellowface: Compare Your Choices With June's

## Overview

Due within 2 days, plain static files, no build step. Phase 1 ships a working, clickable seven-scene experience with the real planner content and illustrations. Phase 2 makes the content academically accurate and complete (verified quotations, internalized-oppression gap, researched sources, final reflection, credits). Phase 3 applies the visual identity, restrained motion, and the writing pass. Phase 4 publishes to GitHub Pages and validates everything.

## Phases

- [ ] **Phase 1: Working Seven-Scene Experience** - Clickable intro-to-reflection flow with planner content, illustrations, accessible static skeleton
- [ ] **Phase 2: Verified Academic Depth** - Quotations checked against the novel, evidence gaps handled honestly, research sources, final reflection, credits
- [ ] **Phase 3: Visual Design, Motion, and Copy Polish** - Palette, licensed type, restrained GSAP, responsive and embed layout, writing-skill pass
- [ ] **Phase 4: Publish and Validate** - GitHub Pages live, README, all 14 paths tested, unresolved-items list

## Phase Details

### Phase 1: Working Seven-Scene Experience
**Goal**: A reader can open the site and click through the introduction and all seven scenes, answer each question, and see the analysis, canonical continuation, quotation, and concepts, using the real planner content and illustrations.
**Mode:** mvp
**Depends on**: Nothing (first phase)
**Requirements**: FLOW-01, FLOW-02, FLOW-03, FLOW-04, FLOW-05, FLOW-06, FLOW-07, FLOW-08, FLOW-09, FLOW-10, FLOW-11, FLOW-12, FLOW-13, FLOW-14, TECH-01, TECH-02, TECH-03, TECH-04, TECH-05
**Success Criteria** (what must be TRUE):
  1. Reader sees an introduction explaining they compare their decisions with June's and that their choices do not change the novel's events, then enters scene 1 and moves through scenes in the required order.
  2. Each scene shows its illustration, setup, question, and two answer buttons; picking either answer reveals that answer's own analysis, a separate "What June actually does" panel identical for both answers, the quotation with speaker and PDF page, and the named concepts.
  3. Reader sees "Scene N of 7", can go back to review earlier scenes and answers, and can restart at any point; Continue after scene 7 reaches a final-reflection placeholder.
  4. Narration, group interpretation, and direct quotations are visibly labeled differently; scenes 5 and 7 state their decision is the team's framing; imagined narration is labeled.
  5. Using only the keyboard, a reader can complete every scene with visible focus and announced panels; the page scrolls normally; every asset path is relative and the seven optimized illustrations load.
**Plans**: TBD
**UI hint**: yes

### Phase 2: Verified Academic Depth
**Goal**: Every claim and quotation on the site is verified, the five framework elements are covered with evidence, and missing evidence is stated openly rather than hidden.
**Mode:** mvp
**Depends on**: Phase 1
**Requirements**: ACAD-01, ACAD-02, ACAD-03, ACAD-04, ACAD-05, ACAD-06, ACAD-07, ACAD-08, ACAD-09, ACAD-10, ACAD-11, ACAD-12, ACAD-13, ACAD-14, ACAD-15, ACAD-16
**Success Criteria** (what must be TRUE):
  1. Every quotation and page reference shown matches the supplied novel text, and setup and continuation details (author photo, injury and aftermath) are confirmed against the novel or corrected; no invented quotations remain.
  2. The site covers the system, ideological, institutional, and interpersonal oppression with verified passages, and for internalized oppression either shows a verified passage from an Asian American character or states plainly that the evidence is missing; June's self-victimization is never used for it.
  3. Reader finds breaking point, resistance and healing (or its absence), systemic change (or its absence), and human nature with a warning or hope, with June's victimization claims framed as her perspective and legitimate criticism kept separate from online abuse.
  4. Reader sees at least two historical and two current connections, each checked against a credible source, with the "39%" claim used only if its meaning is stated correctly; every link in the sources section works.
  5. Reader reaches a substantial final reflection tying all five framework elements and research together, followed by sources and credits naming Audrina Badillo, Jeremy Lu, Aishwarya Srivastava, and Gavin Ecleonel.
**Plans**: TBD

### Phase 3: Visual Design, Motion, and Copy Polish
**Goal**: The site looks and reads like a finished editorial piece, works on phones, desktops, and in a Google Sites frame, and stays usable with motion off or GSAP unavailable.
**Mode:** mvp
**Depends on**: Phase 2
**Requirements**: DSGN-01, DSGN-02, DSGN-03, DSGN-04, DSGN-05, DSGN-06, DSGN-07, DSGN-08
**Success Criteria** (what must be TRUE):
  1. Reader sees an acid yellow, charcoal, and cream design with paper texture, bold extended headings, readable body type, bold uppercase CTAs, and WCAG AA text contrast; fonts ship only with a confirmed web-embedding license, otherwise a system grotesque stack is used; `DESIGN.md` documents these tokens.
  2. Text reveals line by line, illustrations settle in on entering view, the illustration has light pointer parallax, and Continue pulses gently.
  3. With reduced motion on, or with the GSAP CDN blocked, all content is visible and the whole flow still works.
  4. Layout is usable on a phone and at typical Google Sites embed sizes, including an "open full page" link.
  5. Site copy has been through the writing skills without changing the planner analyses' claims or accuracy caveats.
**Plans**: TBD
**UI hint**: yes

### Phase 4: Publish and Validate
**Goal**: The site is live on GitHub Pages, the team can republish and embed it from the README, and the results of testing and remaining gaps are recorded.
**Mode:** mvp
**Depends on**: Phase 3
**Requirements**: PUB-01, PUB-02, PUB-03, PUB-04
**Success Criteria** (what must be TRUE):
  1. The site loads from the GavinEcleonel/yellowface GitHub Pages URL with all images, styles, and scripts working under the repository subpath.
  2. README steps for uploading, enabling Pages, choosing the source, finding the URL, and embedding in Google Sites match current GitHub Pages documentation.
  3. A recorded test log shows all 14 answer paths, 7 canonical continuations, back/review, restart, image loading, and mobile layout pass.
  4. A separate unresolved-items list names remaining quotation, internalized-oppression, and research-source gaps for the team.
**Plans**: TBD

## Progress

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Working Seven-Scene Experience | 0/TBD | Not started | - |
| 2. Verified Academic Depth | 0/TBD | Not started | - |
| 3. Visual Design, Motion, and Copy Polish | 0/TBD | Not started | - |
| 4. Publish and Validate | 0/TBD | Not started | - |
