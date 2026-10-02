# Yellowface: Compare Your Choices With June's

An interactive literary analysis of *Yellowface* by R. F. Kuang, made for a Unit 2 Lit Circle project by Audrina Badillo, Jeremy Lu, Aishwarya Srivastava, and Gavin Ecleonel.

Readers go through seven scenes from the novel, answer one question per scene, read our analysis of their answer, and then see what June Hayward actually does, with the quotation that shows it. The last page is a reflection that covers the class framework, our research, sources, and credits.

Live site: https://gavinecleonel.github.io/yellowface/

## What is in this folder

| File | What it is |
|---|---|
| `index.html` | The page shell (top bar, footer, script tags) |
| `styles.css` | All styling |
| `script.js` | All content (scenes, analyses, quotations, reflection) and the interaction code |
| `assets/` | Seven scene illustrations in two sizes each, the Archivo font, and the GSAP animation library |
| `README.md` | This file |
| `DESIGN.md` | Colors, type, spacing, and motion decisions |
| `UNRESOLVED.md` | Open academic items the team still has to settle |
| `TESTING.md` | What was tested and the results |
| `_config.yml` | Tells GitHub Pages which files not to publish |

There is no backend, no login, and no build step. Every path is relative, so the site works from any folder or repository name.

## View it on your own computer

Double-click `index.html`. It opens in your browser and works without a server.

To preview it the way GitHub Pages serves it, run this from the project folder and open http://localhost:8000:

```bash
python -m http.server 8000
```

## Editing the content

All text lives in `script.js`.

- Scene text is in the `SCENES` list near the top. Each scene has `setup`, `question`, the two answers `a` and `b` (each with a `label` and an `analysis`), `canon` (what June actually does), `quote`, `support` (extra quotations), and `concepts`.
- The final reflection is in the `reflectionHTML` function.
- Keep the three kinds of text separate: narration, our interpretation, and direct quotations. A direct quotation must be the exact words from the novel with the speaker and the page of our PDF copy. Do not add a quotation you have not checked.

To replace an illustration, save the new image as WebP in two widths (1440 and 800 pixels) with the same file names, for example `assets/scene-3-candice-1440.webp` and `assets/scene-3-candice-800.webp`. All seven illustrations are present, so there are no placeholders to replace.

## Publish with GitHub Pages

These steps were checked against GitHub's documentation on October 2, 2026.

### 1. Put the files in a repository

1. Sign in at github.com and create a new **public** repository (the **+** menu, then **New repository**).
2. On the repository's main page, open the **Add file** menu and choose **Upload files**.
3. Drag in `index.html`, `styles.css`, `script.js`, `README.md`, `_config.yml`, and the `assets` folder. GitHub accepts up to 100 files at a time and 25 MiB per file. If your browser will not take the folder, use GitHub Desktop or `git push` instead.
4. Type a short commit message and click **Commit changes**.

`index.html` has to be at the top level of the repository, not inside another folder.

### 2. Turn on GitHub Pages

1. In the repository, click the **Settings** tab.
2. In the sidebar, under **Code, planning, and automation**, click **Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. Under **Branch**, choose `main` and the folder `/ (root)`, then click **Save**.

### 3. Find the address

Stay on **Settings > Pages** and refresh after a minute or two. A box at the top says "Your site is live at" followed by the address, with a **Visit site** button. The first publish can take up to ten minutes.

The address has this shape:

```
https://YOUR-USERNAME.github.io/REPOSITORY-NAME/
```

For this repository it is https://gavinecleonel.github.io/yellowface/

After that, every change pushed to `main` republishes the site automatically. Progress shows under the repository's **Actions** tab as "pages build and deployment".

## Embed it in Google Sites

1. Open the Google Site in edit mode and go to the page where the project should appear.
2. In the right-hand panel choose **Insert**, then **Embed**.
3. On the **By URL** tab, paste the GitHub Pages address and choose **Whole page**, then **Insert**. If Google Sites only offers a preview card, use the **Embed code** tab instead and paste:

   ```html
   <iframe src="https://gavinecleonel.github.io/yellowface/" style="width:100%;height:100%;border:0" title="Yellowface interactive project"></iframe>
   ```

4. Drag the corners of the embed so it is as wide as the page and at least 700 pixels tall. The project scrolls inside that box.
5. Click **Publish**.

When the project runs inside an embed, a **Full page** button appears in its top bar so readers can open it in its own tab. On phones that is the more comfortable way to read it.

## Accessibility and motion

- Every control is a real button or link and works with Tab, Enter, and Space. Focus is always visible.
- After an answer is chosen, focus moves to the "You chose" heading and a screen reader announcement is made.
- Animations are turned off for anyone whose device is set to reduce motion, and the site still works if the animation library fails to load.
- Answers are kept only in the browser tab (session storage) and are never sent anywhere.

## Credits and licenses

- Novel: R. F. Kuang, *Yellowface* (William Morrow, 2023). Short quotations are used for analysis. Page numbers refer to the group's PDF copy.
- Typeface: Archivo, SIL Open Font License 1.1 (`assets/fonts/OFL.txt`).
- Animation: GSAP 3.13 and SplitText, GreenSock standard license (https://gsap.com/standard-license).
- Illustrations: supplied by the project team.
