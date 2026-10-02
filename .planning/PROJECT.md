# Yellowface: Compare Your Choices With June's

## What This Is

An interactive static website for a Unit 2 Lit Circle project (English / Ethnic Studies) on *Yellowface* by R. F. Kuang. Readers move through seven scenes from the novel, answer a two-option question at each one, read an analysis specific to their answer, and then see what June Hayward actually does, with the supporting quotation. It ends in a final reflection that ties the scenes to the assignment's five-part analysis framework, followed by sources and credits. It is built by Audrina Badillo, Jeremy Lu, Aishwarya Srivastava, and Gavin Ecleonel for an audience of teens and adults who read online, and it will be embedded in the group's Google Site.

## Core Value

A reader can go through all seven scenes, and whichever answer they pick, they get an accurate, evidence-backed analysis of how the novel exposes racial bias in publishing, without the site inventing quotations or claiming academic coverage the team does not have.

## Requirements

### Validated

(None yet — ship to validate)

### Active

**Experience**

- [ ] Introduction explains that readers compare their decisions with June's and that their choices do not change the novel's events
- [ ] Seven scenes shown one at a time, in order: The manuscript, Becoming Juniper Song, Silencing Candice, The accusation, Protected by profit, The recording, The comeback
- [ ] Each scene shows its illustration, a concise setup, the audience question, and two answer buttons
- [ ] After answering: the selected response is displayed, its own analysis is revealed (14 analyses total, from the planner appendix), a separate "What June actually does" panel shows the canonical continuation, the supporting quotation appears with attribution and source-PDF page reference, the analytical concepts are named, and a Continue button appears
- [ ] Both answers converge on the same canonical continuation; no reader is forced to pick the unethical answer
- [ ] Scene progress indicator ("Scene 3 of 7"), back/review control, restart control
- [ ] Visible distinction between original project narration, the group's interpretation, and direct quotations; any invented June-style reaction is labeled as imagined narration

**Academic content**

- [ ] The system of racial bias/oppression the novel exposes
- [ ] All four I's (ideological, institutional, interpersonal, internalized), with internalized either supported by a verified passage from the supplied novel or explicitly flagged as an evidence gap
- [ ] The protagonist's breaking point (the confrontation with Candice over the recording)
- [ ] Resistance, community responses, and healing or its absence
- [ ] Systemic change or its absence
- [ ] A researched historical connection with verified, working source links
- [ ] A researched current connection with verified, working source links
- [ ] Human nature and a warning or hope for the future
- [ ] Substantial final reflection connecting the concepts woven through the scenes
- [ ] Sources section with working research links
- [ ] Credits section naming Audrina Badillo, Jeremy Lu, Aishwarya Srivastava, and Gavin Ecleonel

**Design**

- [ ] Acid yellow, charcoal black, and cream palette with subtle paper texture, bold editorial headings, readable body type, strong contrast
- [ ] Nimbus Sans-style grotesque for body (400/700) and an extended bold grotesque for display, tightly tracked, fluid sizes, bold uppercase CTAs, `font-display: swap`
- [ ] Restrained GSAP motion subset: masked line-by-line text reveal, image scale-in settle on entering view, light pointer parallax, CTA pulse on the Continue button; all gated on `prefers-reduced-motion`

**Technical**

- [ ] Static site: `index.html`, `styles.css`, `script.js`, `assets/` (seven optimized scene illustrations), `README.md`
- [ ] No backend, login, or build process; relative asset paths that work under a GitHub Pages repository subpath
- [ ] Responsive phone and desktop layouts; works inside a Google Sites embed frame
- [ ] Accessible buttons, full keyboard navigation, visible focus, readable analysis panels with normal page scrolling
- [ ] README with setup and publishing instructions (upload to GitHub, enable Pages, choose publishing source, find the URL, embed in Google Sites), checked against current GitHub Pages settings
- [ ] Validation of all 14 answer paths, canonical continuations, navigation, restart, image loading, mobile layout, and subpath serving
- [ ] A separate list of unresolved quotation, internalized-oppression, and research-source items delivered alongside the site

### Out of Scope

- Branching storylines where the reader's choice changes the plot — the brief requires convergence on canon, and the original "lead them to choose yes" hook is dropped
- The original five-question outline — superseded by the seven-scene appendix
- Adult interview section — the team confirmed it is not required for them (note: the rubric's Research row mentions one; see Context)
- Hold-to-progress interaction, idle word float, proximity parallax, and the manuscript-bag chapter exit — rejected in favor of the restrained subset; hold-to-progress also hurts keyboard access
- Backend, analytics, accounts, saved progress across devices — static school project
- Framework or build tooling (React, bundlers) — deliverable must be plain files anyone on the team can upload
- Reproducing long passages of the novel — short attributed quotations only

## Context

**Assignment.** Unit 2 Lit Circle Project, format chosen: Interactive Digital Story. Rubric (100 pts): Content: Literary Analysis 40, Content: Research 25, Organization 20, Creativity 15. Exemplary literary analysis requires nuanced treatment of all five framework elements (The System Exposed, The 4 I's in Action, Breaking Point, Resistance & Revolution, Mirror to Society) with specific textual examples and root-cause thinking beyond plot summary. Exemplary research requires 2+ relevant current news articles, 2+ well-researched historical examples, credible sources woven into the project rather than tacked on. Exemplary creativity requires 2+ creative elements (visual identity and interactive component cover this). Organization rewards a strong hook, well-sequenced framework elements, a conclusion that synthesizes, and polished technical execution including navigation. The class also uses the Ethnic Studies Praxis Story Plot (Expose the Problem → Oppressive Action → Tension & Trauma → Taking Action, Resistance & Healing → Resistance & Revolution; Curammeng, Lopez, Tintiangco-Cubales, 2016), which the seven scenes should map onto.

**Rubric vs. brief on the interview.** The rubric's Research row also scores an adult interview. Gavin confirmed on 2026-10-02 that the interview is not required for this group, so it is out of scope. If the teacher grades against the rubric as written, this is a known risk for the team to confirm.

**Source materials** (in `reference/`, git-ignored, never published):

- `planner.pdf` / `planner.txt` — Unit 2 Project Planning Organizer with quote evidence pages and the seven-scene appendix. The appendix is the authority for audience questions, the fourteen response analyses, canonical continuations, quotations, page references, and analysis connections.
- `novel.pdf` / `novel.txt` — the supplied *Yellowface* PDF (235 pages). All page references mean pages of this PDF, not a print edition. Copyrighted; used only to verify quotations.
- `illustrations/scene-1-manuscript.webp` … `scene-7-comeback.webp` — the seven supplied scene illustrations, 1672×941, black/yellow/cream. Mapping confirmed by Gavin: 1 taking the pages into the tote by the typewriter; 2 author photos on the table; 3 Candice and June with the tabbed manuscript; 4 June at the laptop with post bubbles; 5 boardroom with stacked yellow books; 6 chase with the phone; 7 typing at the laptop under the lamp.
- `assignment/` — screenshots of the Core Analysis Framework, the Praxis Story Plot, and the rubric.

**Quotations supplied by the planner (page = supplied PDF):** "And so what if it was stolen? So what if I lifted it wholesale?" (June, p. 32); "And they suggest I publish under the name Juniper Song instead of June Hayward" (June, p. 50); "June is not Chinese diaspora, and we run the risk of doing real harm" (Candice, p. 52); "Candice has been taken off the project." (June, p. 53); "She stole my book, stole my voice, and stole my words." (anonymous account, p. 102); "I'm going to come to DC and beat the living shit out of you." (message to June, p. 104); "I am not the bad guy. I am the victim here." (June, p. 110); "Eden's going to stand with you. You're pulling in too much money for them to back out now." (Brett, p. 159); "She's been recording this whole thing." (June, p. 221); "They marked her as their token, exotic Asian girl." and "Do you know what it's like to pitch a book and be told they already have an Asian writer?" (Candice, p. 222); "I throw myself at Candice's waist." (June, p. 224); "let's frame it as a hoax, not a theft" (June, p. 230). The planner says these were checked against the PDF; they must be re-verified against `novel.txt`/`novel.pdf` before publishing.

**Known gaps and corrections to carry into the build:**

- Internalized oppression is an evidence gap. June's self-victimization is self-justification by a white narrator, not internalized oppression. Search the supplied novel for a passage where an Asian American character (most plausibly Athena or Candice) has absorbed the industry's limiting messages; verify it; otherwise flag the gap openly on the site and in the unresolved list.
- The planner's "Asians faced 39% of the discrimination" claim (cited to a Pew Research page dated 2025-05-20) is unsupported as written. Read the source, state what the figure actually measures, or drop it.
- The planner's historical paragraph (Chinese Exclusion Act 1882 → Japanese labor → WWII incarceration → 1943 repeal → "pitting" groups against each other) is unfinished and must be verified with credible sources before any of it is used.
- The current connection (Stop AAPI Hate; anti-Asian hate) needs credible, working links. Publishing-industry diversity data is a likely stronger fit to the novel's theme and should be considered.
- Scene 2: the planner establishes the pen name by quotation but says the author-photo/publicity details must be checked in the novel before publication.
- Scene 6: "leads into the injury and aftermath" must be checked against the novel.
- Scenes 5 and 7 pose audience decisions the team added; they are interpretive framing, not quoted exchanges, and must be labeled that way.
- The planner's "reverse racism" bullet and "community responses" blank need accurate treatment: June's claims of racial victimization are her perspective, not the project's conclusion.
- Publishing scarcity and tokenism are patterns supported by specific passages, not a universal rule about every publisher.
- Legitimate criticism of June and online abuse of June are different things and must be kept apart.

**Skills to use.** Gavin asked that every installed front-end design and writing skill be applied. Inventory from `~/.claude/skills` and plugins:

- Design: `frontend-design` (pick one aesthetic anchor and hold its tokens), `frontend-design-pro`, `ui-ux-pro-max` (UI/UX rules and patterns), `design-md` (keep a `DESIGN.md` as the source of truth for palette, type, spacing, components), `ClaudeDesignSkills`, `/gsd:ui-phase` for the UI contract, `/gsd:ui-review` for the audit
- Motion: `gsap-skills` (`gsap-core`, `gsap-timeline`, `gsap-plugins` for SplitText, `gsap-performance`, `gsap-utils`). `Motion-Dev-Animations` targets React/Svelte/Astro and does not apply to a no-build static site.
- Writing: `content-skills` / `writing-skills-pull` (`anti-ai-writing` as the final filter on all site copy, `storytelling` for the intro and scene setups, `dumbify` for readability of the analysis for a teen audience, `viral-hooks` for the opening hook), `humanizer` for a last pass. `voice-dna` needs ~20 writing samples from the team and is skipped unless they provide them.
- The fourteen analyses come from the planner and are the group's own writing; writing skills may tighten wording but must not change their claims or cut the accuracy caveats.

**Hosting.** GitHub account `GavinEcleonel` (gh CLI signed in). Public repository, GitHub Pages serves the site, Google Sites embeds the Pages URL. Google Sites embeds have a fixed frame height, so the page scrolls inside the frame; layout must stay usable at typical embed sizes and offer an "open full page" link.

## Constraints

- **Timeline**: Due within 2 days of 2026-10-02 — build straight through, coarse phases, no optional ceremony
- **Tech stack**: Plain HTML/CSS/JS, no build step, no backend — teammates must be able to upload files by hand
- **Dependencies**: GSAP (3.13+, SplitText is free) from a CDN is the only external script; the site must still work if it fails to load
- **Paths**: Relative URLs only, no leading slashes — GitHub Pages serves under `/<repo>/`
- **Fonts**: Nimbus Sans L and an extended bold display face must have a license that permits web embedding before any font file ships; otherwise use a licensed equivalent or a system grotesque stack
- **Accuracy**: No invented quotations, page numbers, or plot details; every quotation verified against the supplied PDF; research claims verified against credible sources
- **Honesty**: The site and deliverables must not present missing academic evidence as complete
- **Copyright**: The novel PDF and its text extract stay out of the repository; the site uses short attributed quotations only
- **Accessibility**: Keyboard operable, visible focus, strong contrast, reduced-motion support
- **Privacy**: The repository is public; nothing personal beyond the four credited names

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Seven-scene appendix supersedes the five-question outline | Updated planner says so; adds Protected by profit and The comeback | — Pending |
| Both answers converge on June's canonical action | Readers compare themselves with June; nobody is pushed to the unethical choice | — Pending |
| Restrained GSAP subset, not the full pasted animation spec | Brief asks for restrained transitions; hold-to-progress hurts accessibility | — Pending |
| GitHub Pages hosting, embedded in Google Sites | Google Sites cannot host custom HTML/JS files directly at this fidelity | — Pending |
| Public GitHub repo created at project start | Gavin's choice; Pages on a free account needs a public repo | — Pending |
| Interview section left out | Gavin: not required for this group | ⚠️ Revisit if the teacher grades the rubric's interview line |
| Source PDFs and raw illustrations live in git-ignored `reference/` | Novel is copyrighted; repo is public | — Pending |
| Skip 4-agent domain research; research sources inside the content phase | Static site with a fixed spec and a 2-day deadline | — Pending |
| Internalized oppression: verify from the novel or flag the gap | June's self-victimization does not satisfy the category | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd:complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-10-02 after initialization*
