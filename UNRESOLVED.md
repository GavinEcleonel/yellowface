# Unresolved items for the team

These are separate from the website on purpose. The site is built and working. These are the academic questions that still need a decision from the group or the teacher. Nothing below is presented on the site as finished when it is not.

## 0. After the October 4 text changes

The team's change document ("project text change.pdf") was applied on October 4, 2026. It shortened the scene text and cut the final reflection down to "Mirror to society" with one historical and one current connection. That changes what is still open:

- **Framework coverage now lives in the scenes.** The reflection no longer has the sections for The System Exposed, the 4 I's, Breaking Point, or Resistance. Ideological, institutional, and interpersonal oppression and the breaking point are still named in the scene analyses and tags. **Internalized oppression is no longer mentioned anywhere on the site.** The rubric's Literary Analysis row asks for all five framework elements and all four I's, so check this with the teacher.
- **Research is now 1 historical + 1 current connection.** The rubric's Research row asks for 2 or more of each for Proficient and Exemplary. The removed connections (the 1937 *Good Earth* casting, the Chinese Labour Corps, publishing workforce data, authorship data, *American Dirt*) are in git history and can be restored.
- **Which two were kept was my choice**, since the document did not say: the Chinese Exclusion Act and Stop AAPI Hate, because those are the two topics in the team's own planner. Swapping in a different one is a small edit in `reflectionHTML` in `script.js`.
- "Our hope" was deleted as asked, so the site now gives a warning but no hope for the future. The framework asks for "warning or hope", so this still fits.
- The "Your answers and June's" table was removed with the rest of the reflection. Sources and credits were kept because the project needs them.
- The per-scene line "Your answer differs from June's. Both answers lead to this same event..." was removed from every scene, not only scene 1, so the scenes stay consistent. The introduction still says that answers do not change the story.
- One sentence in the change document was cut off ("her edits will give her."). It was finished as "her edits will give her ownership of it." Change it if that is not what was meant.
- Items 1 and parts of 3 to 6 below describe the earlier, longer version and are kept for reference.

## 1. Internalized oppression: needs a decision

**Status: partly supported, not confirmed.**

June's belief that she is the victim does not count. She is white, so it is self-justification, and the site says so.

Three candidate passages were found in the novel PDF and checked word for word. All three are secondhand (June's narration or Candice speaking in anger), which is why the site labels the card "Evidence still to be confirmed".

| Candidate | Exact words | PDF page | Weakness |
|---|---|---|---|
| Athena gave up her family's language to assimilate | "spoke only English at home in an attempt to better assimilate" | 85 | June is quoting Athena's interviews while attacking her |
| Athena performed the role the industry gave her | "She leaned into it, too. She knew the rules." | 222 | Candice's opinion of Athena, not Athena's own words |
| Asian American writers turned on each other under scarcity | Candice says the others hated Athena (p. 223); an anonymous thread calls her a "race traitor" (p. 128) | 223, 128 | Shows conflict inside the group more than belief in a stereotype |

**What to do:** ask the teacher whether assimilation (p. 85) or performing the token role (p. 222) satisfies "internalized" for the rubric. If yes, remove the "Evidence still to be confirmed" flag in `script.js` (search for `icard--open`). If no, the project covers three of the four I's with evidence and the fourth openly as a gap.

## 2. Adult interview: not included

The rubric's Research row scores an adult interview. Gavin said it is not required for this group, so the site has none. If the teacher grades the rubric as written, this will cost points. Confirm with the teacher, or do a short interview and add it to the reflection.

## 3. Corrections made to the planner

| Planner said | What was found | What the site does |
|---|---|---|
| "Asian faced 39% of the discrimination" (Pew, May 2025) | The 39% on that page is the share of Asian adults who say Black people face a lot of discrimination. It is not a share of discrimination faced by Asian people. | Uses the correct figure from the same page: 82% of Asian Americans say Asian people face a lot of or some discrimination. |
| Chinese Exclusion Act "led to Japanese laborers being mass hired" and the history "pit Japanese and Chinese people against each other by ..." (unfinished) | The claim about Japanese laborers could not be verified from the sources checked, so it is not on the site. | Uses what the National Archives and NPR Code Switch support: exclusion in 1882, repeal in 1943 when China was an ally, and the "model minority" image later used as a wedge between minority groups. |
| The publisher suggested "an author photo that doesn't make your race obvious" | In the novel the publisher suggests the name and a "worldly" image (p. 50). June hires the photographer herself and likes that she looks "sort of racially ambiguous" (p. 56). | Scene 2 states this accurately. The audience question is unchanged from the planner. |
| Institutional real-world connection: Amy Tan's "Mother Tongue" scene | Not verified and not about publishing. | Left out. Replaced with publishing workforce and authorship data. |
| Breaking point "emotional impact" was blank | | Filled in on the reflection page from p. 223 and p. 224. |
| "Community responses" was blank | | Filled in from p. 102, p. 109, p. 128, p. 155. |

## 4. Quotations

All 30 quotations and short quoted phrases on the site were checked against the novel PDF text and match the stated page. The checking script is `reference/verify_quotes.py` (the `reference/` folder is kept off GitHub because it holds the novel).

Two things to know:

- Page numbers are pages of the group's PDF, not of a printed edition. If the teacher wants print page numbers, someone has to look each one up in a physical copy.
- One quotation shown on the site contains profanity: the threat on p. 104, in scene 4. It is there because the planner uses it as the evidence for online abuse, and the introduction warns readers. If the class has a language rule, replace it with a paraphrase in `script.js` (search for `beat the living`).

## 5. Research sources

Nine sources are linked and each was opened and read on October 2, 2026.

- The 95% and 89% authorship figures come from a *New York Times* analysis by Richard Jean So and Gus Wezerek. The Times page blocks automated checking, so the site links McGill University's report of the same figures instead. If the teacher wants the original, search the title "Just How White Is the Book Industry?" and confirm the link by hand.
- The Museum of Chinese in America page supports the casting facts about *The Good Earth*. It does not give a year for the film; 1937 is the release year and is common knowledge, but it was not on that page.
- The rubric asks for "current news articles". The NPR *American Dirt* article (2020) and the NPR Code Switch article (2017) are news. The Lee & Low, Stop AAPI Hate, and Pew items are survey reports. If the teacher wants only recent news articles, add one from the past year.

## 6. Smaller judgment calls to review

- Scenes 5 and 7 are questions the group added. Each one carries a line on the page saying it is our framing and not a quoted exchange.
- The four planner analyses that were written as notes to ourselves ("Avoid claiming...", "Analyze this as...") were reworded so they address the reader. The claims and cautions are unchanged. Compare scenes 3B and 6B with the planner if you want to check.
- Illustration credit reads "supplied by the project team". Change it if they should be credited to a person or a tool.
- The reference fonts (Nimbus Sans) were not used because a web license for the extended display cut could not be confirmed. Archivo is the substitute.
