# Test log

> October 4, 2026: scene text was revised and the reflection shortened from the team's change document. The results for that version are at the end of this file. The reflection rows in the tables below (8 sections, 4 I's cards, 9 links, answers table, jump buttons) describe the earlier version.

Tested October 2, 2026, in a Chromium browser. Local tests ran against a server that put the site under `/yellowface/`, the same subpath GitHub Pages uses. Live checks ran against https://gavinecleonel.github.io/yellowface/.

## Answer paths (14 of 14 pass)

For each scene, answer A was chosen, then answer B. Each time the test read back the "You chose" heading, the interpretation, the "What June actually does" panel, the quotation, and the Continue button.

| Scene | A shows its own analysis | B shows its own analysis | Same canon panel for A and B | Quotation and page | Illustration loads | Continue goes to |
|---|---|---|---|---|---|---|
| 1 The manuscript | Pass | Pass | Pass | June, p. 32 | Pass | Scene 2 |
| 2 Becoming Juniper Song | Pass | Pass | Pass | June, p. 50 | Pass | Scene 3 |
| 3 Silencing Candice | Pass | Pass | Pass | Candice, p. 52 | Pass | Scene 4 |
| 4 The accusation | Pass | Pass | Pass | Anonymous account, p. 102 | Pass | Scene 5 |
| 5 Protected by profit | Pass | Pass | Pass | Brett, p. 159 | Pass | Scene 6 |
| 6 The recording | Pass | Pass | Pass | June, p. 224 | Pass | Scene 7 |
| 7 The comeback | Pass | Pass | Pass | June, p. 230 | Pass | Final reflection |

Also confirmed for every scene: no result is shown and no Continue button exists before an answer is chosen, the chosen button reports `aria-pressed="true"`, and the other answer's analysis is available under "Read our interpretation of the other answer".

## Navigation

| Check | Result |
|---|---|
| Continue from scene 3 opens scene 4 and the top bar reads "Scene 4 of 7" | Pass |
| Back to scene 3 shows the earlier answer still selected with its result | Pass |
| Browser Back and Forward buttons move between scenes | Pass |
| Answers survive a page reload in the same tab | Pass |
| Restart clears all answers and returns to the introduction | Pass |
| Final reflection lists all 8 sections, 4 I's cards, 9 source links, 4 credited names | Pass |
| "Your answers and June's" table reflects the stored answers | Pass |
| Jump buttons on the reflection move focus to the section heading | Pass |

## Layout

| Check | Result |
|---|---|
| Desktop width: two-column scene, no horizontal scrolling | Pass |
| Phone width (375 px): single column, no horizontal scrolling on intro, scene, result, reflection | Pass |
| Phone width: every button and summary is at least 44 px tall | Pass |
| Phone width: top bar fits (project name collapses to the yellow mark below 420 px) | Pass after fix |
| Phone width: answers table scrolls sideways inside its own box only | Pass after fix |
| Embedded in a frame: "Full page" button appears | Pass |
| Not embedded: "Full page" button stays hidden | Pass after fix |

## Accessibility and motion

| Check | Result |
|---|---|
| Tab reaches the answer buttons; Enter selects one | Pass |
| After answering, focus moves to the "You chose" heading | Pass |
| After changing scene, focus moves to the scene heading | Pass |
| With the animation library removed, headings, images, and result panels are fully visible and the flow works | Pass |
| Reduced-motion setting uses the same no-animation path in the code | Verified by reading the code, not by toggling the OS setting |
| No console errors, no failed requests | Pass |

## Subpath and live site

| Check | Result |
|---|---|
| All requests resolve under `/yellowface/` locally (HTML, CSS, JS, font, images) | Pass |
| No asset URL starts with a slash | Pass |
| Live site returns 200 for the page, CSS, JS, font, animation library, and illustrations | Pass |
| Live site: all 14 answer paths, 7 canon panels, reflection, and restart re-run at https://gavinecleonel.github.io/yellowface/ | Pass |
| Live site: project notes (`README.md`, `UNRESOLVED.md`, `CLAUDE.md`, `.planning/`) are not published as pages | Pass |

## Content checks

| Check | Result |
|---|---|
| Every quotation with a page number in `script.js` matches the novel PDF text on that page | 25 of 25 pass |
| Every research link returns a page | 9 of 9 pass |
| Research figures match the linked sources | Checked by reading each source |

## Not tested

- Screen readers (NVDA, VoiceOver). The structure and announcements were built for them but not run through one.
- Safari and Firefox.
- An actual Google Sites embed. The site was tested inside a generic frame. Embedding in Google Sites needs the team's Google account.
- The operating system's reduced-motion switch.

## October 4, 2026 revision

Scene narration and analyses were rewritten from the team's change document, the reflection was cut to "Mirror to society" with one historical and one current connection, and the copy was given a plain-language pass.

| Check | Result |
|---|---|
| All 14 answer paths: heading matches the chosen answer, A and B show different analyses, canon panel identical for A and B, illustration loads | Pass (local, under `/yellowface/`) |
| Per-scene "Your answer differs/matches" line no longer appears | Pass |
| Reflection shows 1 historical card, 1 current card, human nature, warning, 4 source links, 4 credited names | Pass |
| No horizontal scrolling on the reflection | Pass |
| Restart clears answers | Pass |
| Every quotation with a page number in `script.js` matches the novel PDF text | 17 of 17 pass |
| No console errors | Pass |

Phone layout and keyboard checks were not repeated for this revision; the layout code did not change.
