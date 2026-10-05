/* Yellowface: Compare Your Choices With June's
   Plain JavaScript, no build step. All paths are relative so the site works
   under a GitHub Pages repository subpath. */
(function () {
  'use strict';

  /* ------------------------------------------------------------------
     CONTENT
     Questions, the fourteen analyses, canonical continuations and
     quotations come from the group's project planner (seven-scene appendix).
     Every quotation and page number was checked against the group's PDF
     copy of the novel. Page numbers refer to that PDF, not a print edition.
     ------------------------------------------------------------------ */

  var SCENES = [
    {
      slug: 'manuscript',
      title: 'The manuscript',
      alt: 'Illustration: a woman in a dark sweater reaches for a thick stack of typed pages on a lamp-lit desk beside a typewriter, holding an open tote bag in her other hand.',
      setup: 'You are June Hayward. Athena Liu, your Chinese American best friend and rival since college, is extremely successful in the writing industry while you’re not, and you’ve always resented her for it. Athena suddenly dies in her own apartment, and you witness the whole thing. You find an unpublished novel on the desk that she never showed to anyone.',
      question: 'Your rival Athena has just died. Her unfinished manuscript is on the desk. Do you take it?',
      a: {
        label: 'Take the manuscript',
        analysis: 'Choosing to take the novel shows ambition, and no fear of the consequences of plagiarism. June justifies taking the book by saying it is unfinished and her edits will give her ownership of it.'
      },
      b: {
        label: 'Leave the manuscript',
        analysis: 'Not taking the manuscript shows integrity and honesty as an author. However, your choice does not change June’s action in the novel.'
      },
      canon: 'June takes Athena’s manuscript home that night. She rewrites it and presents the finished book as her own work.',
      quote: { text: 'And so what if it was stolen? So what if I lifted it wholesale?', who: 'June', page: 32 },
      support: [],
      concepts: ['Unreliable narration'],
      connection: 'This is where the ethical problem starts. The later scenes show the racism and the company decisions around it.'
    },
    {
      slug: 'juniper-song',
      title: 'Becoming Juniper Song',
      alt: 'Illustration: a woman sits at a glass table looking at a contact sheet of author portraits while a hand slides one portrait toward her.',
      setup: 'June’s publisher wants to publish the story.',
      question: 'Your publisher suggests publishing as Juniper Song and using publicity that leaves your racial identity ambiguous. Do you agree?',
      a: {
        label: 'Accept the branding',
        analysis: 'Accepting the branding lets the publisher make money from readers guessing wrong about June’s race. A pen name on its own is not wrong. The problem is using it on a stolen manuscript, with publicity that leads readers to assume the author is Chinese. June benefits, and Athena’s authorship stays hidden.'
      },
      b: {
        label: 'Insist on transparent publicity',
        analysis: 'Choosing transparency puts an honest account of who wrote the book ahead of a good marketing story. Still, telling readers June is white would not undo the theft. Writers can write about other cultures. They cannot put their name on another writer’s manuscript. In the novel June accepts the Juniper Song identity, so the next scene follows what she does.'
      },
      canon: 'June publishes as Juniper Song. The publisher proposes the name, and the photographs are her own idea. She later pays for new author photos and is pleased that in them she looks, in her words, “sort of racially ambiguous” (novel PDF p. 56).',
      quote: { text: 'And they suggest I publish under the name Juniper Song instead of June Hayward', who: 'June', page: 50 },
      support: [
        { text: 'I never lied. That’s important. I never pretended to be Chinese', who: 'June, defending the rebrand', page: 51 }
      ],
      concepts: ['Ideological', 'Institutional'],
      connection: 'Ideological: ideas about who gets to represent a culture. Institutional: the publisher decides how to brand the author.'
    },
    {
      slug: 'candice',
      title: 'Silencing Candice',
      alt: 'Illustration: two women at a conference table. One, in a blazer, points at a line in a heavily tabbed manuscript. The other sits back with her arms crossed.',
      setup: 'Candice Lee, an editorial assistant, wants to hire a sensitivity reader to catch the mistakes and stereotypes. June rejects the idea.',
      question: 'Candice Lee warns that the book could misrepresent Chinese people and asks for informed review. Do you listen or complain about her?',
      a: {
        label: 'Listen to Candice',
        analysis: 'Listening to Candice shows how you recognize the importance of cultural and historical knowledge. Candice is giving real criticism. She is not persecuting June for being white. The novel proceeds differently: Candice is removed from the project. A company can invite diverse voices in and still fail to protect the people who question its decisions.'
      },
      b: {
        label: 'Complain about Candice',
        analysis: 'June’s defensiveness of her project and her secret becomes more powerful when the publisher removes Candice from the project. The interpersonal dismissal and the institutional consequence for Candice show when someone with less authority loses power while June keeps hers.'
      },
      canon: 'June refuses the sensitivity reader and the publisher defers to her. Candice sends an apology for her tone. Then June’s editor tells her privately that Candice has been taken off the project.',
      quote: { text: 'June is not Chinese diaspora, and we run the risk of doing real harm', who: 'Candice', page: 52 },
      support: [
        { text: 'Candice has been taken off the project.', who: 'June, reporting her editor’s message', page: 53 }
      ],
      concepts: ['Interpersonal', 'Institutional'],
      connection: 'Interpersonal: June dismisses Candice’s concerns. Institutional: the publisher takes Candice off the project.'
    },
    {
      slug: 'accusation',
      title: 'The accusation',
      alt: 'Illustration: a worried woman at a laptop at night, hand to her mouth, as stacked social media posts and jagged reply bubbles pile up beside the screen.',
      setup: 'The Last Front is a hit. Then an anonymous account called @AthenaLiusGhost posts that Juniper Song did not write it. The thread spreads. Some readers are disappointed and want a public apology, while others send threats of violence.',
      question: 'An anonymous account accuses you of stealing Athena’s work. Criticism, hate comments, and threats follow. Do you confess or deny it?',
      a: {
        label: 'Confess to the theft',
        analysis: 'Confessing would mean taking responsibility for the plagiarism, even with your reputation at stake. The threats are still unacceptable, but they do not erase the harm done to Athena. June keeps defending herself instead.'
      },
      b: {
        label: 'Deny the accusation',
        analysis: 'Denying the accusation shows how you prioritize your reputation and status. June uses these hate comments to frame herself as the victim. This scene illustrates interpersonal abuse, but threats against June do not automatically establish racial oppression against white people.'
      },
      canon: 'June keeps resisting exposure and defending her own account of events, and she never admits to the theft.',
      quote: { text: 'She stole my book, stole my voice, and stole my words.', who: 'Anonymous account', page: 102 },
      support: [
        { text: 'I’m going to come to DC and beat the living shit out of you.', who: 'A message sent to June. This is a threat, not criticism', page: 104 },
        { text: 'I am not the bad guy. I am the victim here.', who: 'June', page: 110 }
      ],
      concepts: ['Interpersonal'],
      connection: 'Interpersonal: online threats and abuse.'
    },
    {
      slug: 'profit',
      title: 'Protected by profit',
      alt: 'Illustration: a woman in a dark sweater smiles slightly across a glass table stacked with copies of a yellow-and-black book, as a publisher’s hand gestures toward her.',
      setup: 'The accusation becomes a public scandal. On a video call, June’s editor is cold and tells her to stay off social media. Right afterward her agent, Brett, calls and says that controversy is good for sales.',
      framing: 'This question is our own framing. The novel does not show June being offered this choice in these words.',
      question: 'Your publisher continues backing you because the book makes money. Do you accept that protection or take responsibility?',
      a: {
        label: 'Accept the publisher’s protection',
        analysis: 'Accepting the support lets the book’s success protect you from consequences. Brett ties the publisher’s loyalty to money. He never says June is innocent. This is institutional power: the publisher controls her promotion and whether she keeps getting published.'
      },
      b: {
        label: 'Take responsibility despite the support',
        analysis: 'Taking responsibility means a publisher’s approval does not make an action right. A bestselling book can still be built on stolen work, and a publisher that profits from it is not a fair judge. June does the opposite and keeps the support Brett describes.'
      },
      canon: 'Brett tells June that Eden will stand with her because she brings in too much money. June is relieved and continues defending her position.',
      quote: { text: 'Eden’s going to stand with you. You’re pulling in too much money for them to back out now.', who: 'Brett, June’s agent', page: 159 },
      support: [],
      concepts: ['Institutional'],
      connection: 'Institutional: the publisher protects June because of the money she brings in.'
    },
    {
      slug: 'recording',
      title: 'The recording',
      alt: 'Illustration: a dark-haired woman in a black coat clutches a phone showing a recording waveform and looks back as a second woman in a dark sweater lunges after her.',
      setup: 'June goes to Georgetown at night, believing Athena will be there. But Candice is there instead with a recording device. June says enough to incriminate herself, and Candice gets all of it on the recording.',
      question: 'Candice has recorded your admissions and is leaving with the evidence. Do you let her go or fight to stop her?',
      a: {
        label: 'Let Candice leave',
        analysis: 'Letting her leave means the evidence gets out and June loses control of the story. What Candice says about publishers already having an Asian writer also shows institutional scarcity and ideological tokenism. June does not let her go. She tries to stop Candice physically.'
      },
      b: {
        label: 'Fight for the recording',
        analysis: 'Trying to take the recording turns June’s fear of being exposed into violence. Candice now has proof, so June can no longer argue her way out. That is why this is the breaking point of the novel.'
      },
      canon: 'June realizes Candice has been recording and throws herself at Candice’s waist. They fight at the top of the steps. Candice kicks free and June falls. She wakes in a hospital with a broken collarbone, a broken ankle, and a concussion.',
      quote: { text: 'I throw myself at Candice’s waist.', who: 'June', page: 224 },
      support: [
        { text: 'She’s been recording this whole thing.', who: 'June', page: 221 },
        { text: 'They marked her as their token, exotic Asian girl.', who: 'Candice, about Athena', page: 222 },
        { text: 'Do you know what it’s like to pitch a book and be told they already have an Asian writer?', who: 'Candice', page: 222 }
      ],
      concepts: ['Breaking point', 'Interpersonal', 'Ideological', 'Institutional'],
      connection: 'Breaking point and interpersonal harm. Candice’s two lines are our main evidence for ideological tokenism and institutional scarcity.'
    },
    {
      slug: 'comeback',
      title: 'The comeback',
      alt: 'Illustration: seen from behind, a woman in a dark sweater types at a laptop under a desk lamp, with a tall stack of manuscript pages and an open notebook beside her.',
      setup: 'Candice goes public. June starts planning a book of her own.',
      framing: 'This question is our own framing. It is an interpretation of June’s plan, not a quoted exchange.',
      question: 'After the confrontation, you plan another manuscript about the scandal. Do you admit the theft or recast the situation as a hoax?',
      a: {
        label: 'Write an honest account',
        analysis: 'An honest account would mean June naming what she took and who she hurt, without making her own suffering the whole story. It could be a start at accountability, though a confession alone would not repair anything. June’s actual plan is different. Ask whether her new book gives any credit back to Athena and Candice, or just gives June another way to get attention and money from the scandal.'
      },
      b: {
        label: 'Recast the scandal as a hoax',
        analysis: 'Calling it a hoax is June doing what she always does: swapping responsibility for a story that makes her look better. The ending shows the problem continuing, with no real moral growth. June trying to win back her authority is not resistance to oppression, and it is not healing. Candice exposing the theft is the stronger example of resistance. The warning is that attention, good storytelling, and sales can outlast accountability.'
      },
      canon: 'June plans a new book that retells the scandal in her favor. The theft becomes a “hoax” meant to expose the industry, and she becomes its hero. She does not admit the theft.',
      quote: { text: 'let’s frame it as a hoax, not a theft', who: 'June', page: 230 },
      support: [
        { text: 'And this will become, in time, my story once again.', who: 'June, the novel’s last line', page: 231 }
      ],
      concepts: ['Resistance and healing', 'Systemic change'],
      connection: 'Resistance and healing: Candice exposing the theft is different from June managing her reputation. The ending does not show any systemic change.'
    }
  ];

  var TOTAL = SCENES.length;
  var STORE_KEY = 'yellowface-answers-v1';

  /* ------------------------------------------------------------------
     STATE
     ------------------------------------------------------------------ */

  var state = { view: 'intro', index: 0, answers: {} };
  var app = document.getElementById('app');
  var announceEl = document.getElementById('announce');
  var progressText = document.getElementById('progress-text');
  var progressBar = document.getElementById('progress-bar');
  var firstRender = true;
  var motionCtx = null;

  function loadAnswers() {
    try {
      var raw = window.sessionStorage.getItem(STORE_KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') state.answers = parsed;
      }
    } catch (e) { /* storage unavailable: answers live in memory only */ }
  }
  function saveAnswers() {
    try { window.sessionStorage.setItem(STORE_KEY, JSON.stringify(state.answers)); } catch (e) { /* ignore */ }
  }

  /* ------------------------------------------------------------------
     HELPERS
     ------------------------------------------------------------------ */

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function reducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
  function canAnimate() {
    return !!window.gsap && !reducedMotion();
  }
  function announce(msg) {
    announceEl.textContent = '';
    window.setTimeout(function () { announceEl.textContent = msg; }, 60);
  }
  function quoteHTML(q, extraClass) {
    return '' +
      '<figure class="quote ' + (extraClass || '') + '">' +
        '<blockquote><p><mark>“' + esc(q.text) + '”</mark></p></blockquote>' +
        '<figcaption>' + esc(q.who) + '<span class="sr-only">, </span> <span class="quote__src">Yellowface, novel PDF p. ' + q.page + '</span></figcaption>' +
      '</figure>';
  }
  function q(text, who, page) { return quoteHTML({ text: text, who: who, page: page }, 'quote--inline'); }

  /* ------------------------------------------------------------------
     ROUTING (hash based, so Back and Forward work, also inside an iframe)
     ------------------------------------------------------------------ */

  function parseHash() {
    var h = (window.location.hash || '').replace('#', '');
    var m = /^scene-([1-7])$/.exec(h);
    if (m) return { view: 'scene', index: parseInt(m[1], 10) - 1 };
    if (h === 'reflection') return { view: 'reflection', index: TOTAL };
    return { view: 'intro', index: 0 };
  }
  function go(hash) {
    if (window.location.hash === '#' + hash) { render(); return; }
    window.location.hash = hash;
  }

  /* ------------------------------------------------------------------
     VIEWS
     ------------------------------------------------------------------ */

  function introHTML() {
    var answered = Object.keys(state.answers).length;
    var resume = '';
    if (answered > 0) {
      var next = 0;
      while (next < TOTAL && state.answers[SCENES[next].slug]) next++;
      var target = next >= TOTAL ? 'reflection' : 'scene-' + (next + 1);
      var label = next >= TOTAL ? 'Go to the final reflection' : 'Pick up at scene ' + (next + 1);
      resume = '<button type="button" class="btn btn--ghost btn--on-dark" data-go="' + target + '">' + label + '</button>';
    }
    return '' +
      '<section class="intro" aria-labelledby="view-title">' +
        '<div class="intro__inner">' +
          '<div class="intro__text">' +
            '<p class="kicker kicker--on-dark">An interactive reading of <cite>Yellowface</cite> by R. F. Kuang</p>' +
            '<h1 id="view-title" class="display" tabindex="-1" data-reveal>Would you have taken it?</h1>' +
            '<p class="intro__hook">Your rival just died. Her unfinished manuscript is on the desk. Nobody else knows it exists.</p>' +
            '<p>In the novel, June Hayward takes it. Over seven scenes you face the same decisions she does. Pick the answer you would really give. After each one you get our analysis of your choice, then what June does in the book, with the line from the novel that shows it.</p>' +
            '<p><strong>Your answers do not change the story.</strong> June’s choices are already written. The point is to see where yours split from hers, and what her choices reveal about racism in publishing.</p>' +
            '<div class="intro__actions">' +
              '<button type="button" class="btn btn--primary" data-go="scene-1" data-pulse>Begin scene 1</button>' +
              resume +
            '</div>' +
          '</div>' +
          '<div class="intro__media">' +
            '<figure class="frame frame--on-dark" data-frame>' +
              '<span class="frame__block" aria-hidden="true"></span><div class="frame__clip"><img src="assets/scene-1-manuscript-1440.webp" srcset="assets/scene-1-manuscript-800.webp 800w, assets/scene-1-manuscript-1440.webp 1440w" sizes="(min-width: 900px) 46vw, 92vw" width="1440" height="810" alt="' + esc(SCENES[0].alt) + '"></div>' +
            '</figure>' +
          '</div>' +
        '</div>' +
      '</section>' +
      '<section class="legend" aria-labelledby="legend-title">' +
        '<div class="wrap">' +
          '<h2 id="legend-title">How to read each scene</h2>' +
          '<p class="legend__lead">Three kinds of writing appear on this site. Each one is labeled so you always know who is speaking.</p>' +
          '<ul class="legend__list">' +
            '<li><p class="label">Project narration</p><p>Our summary of what happens in the novel, in our own words.</p></li>' +
            '<li class="legend__interp"><p class="label">Our interpretation</p><p>What our group thinks a choice means. This is our argument, and you can disagree with it.</p></li>' +
            '<li><p class="label">Direct quotation</p><p><mark>“Highlighted like this.”</mark> Exact words from the novel, with the speaker and the page in our PDF copy.</p></li>' +
          '</ul>' +
          '<p class="note"><strong>Before you start:</strong> this project discusses the whole plot, including the ending. The novel deals with racism, online harassment, and violence. Quotations are reproduced exactly, so a few contain strong language. June narrates the book and defends herself constantly. Her statements show what she believes or wants readers to believe. They are not the novel’s verdict, and they are not ours.</p>' +
        '</div>' +
      '</section>';
  }

  function sceneHTML(i) {
    var s = SCENES[i];
    var n = i + 1;
    var chosen = state.answers[s.slug] || null;
    var base = 'assets/scene-' + n + '-' + s.slug;
    return '' +
      '<section class="scene" aria-labelledby="view-title">' +
        '<div class="scene__media">' +
          '<figure class="frame" data-frame>' +
            '<span class="frame__block" aria-hidden="true"></span><div class="frame__clip"><img src="' + base + '-1440.webp" srcset="' + base + '-800.webp 800w, ' + base + '-1440.webp 1440w" sizes="(min-width: 900px) 48vw, 92vw" width="1440" height="810" alt="' + esc(s.alt) + '"></div>' +
          '</figure>' +
        '</div>' +
        '<div class="scene__body">' +
          '<p class="kicker">Scene ' + n + ' of ' + TOTAL + '</p>' +
          '<h1 id="view-title" class="display display--scene" tabindex="-1" data-reveal>' + esc(s.title) + '</h1>' +
          '<div class="narration">' +
            '<p class="label">Project narration</p>' +
            '<p>' + esc(s.setup) + '</p>' +
          '</div>' +
          '<div class="decision" role="group" aria-labelledby="question-' + n + '">' +
            '<p class="label">Your decision</p>' +
            '<p class="question" id="question-' + n + '">' + esc(s.question) + '</p>' +
            (s.framing ? '<p class="framing">' + esc(s.framing) + '</p>' : '') +
            '<div class="choices">' +
              choiceHTML(s, 'a', chosen) +
              choiceHTML(s, 'b', chosen) +
            '</div>' +
          '</div>' +
        '</div>' +
      '</section>' +
      '<div id="result" class="result-host">' + (chosen ? resultHTML(i, chosen) : '') + '</div>' +
      '<nav class="scene-nav" aria-label="Scene navigation">' +
        '<div class="wrap scene-nav__inner">' +
          '<button type="button" class="btn btn--ghost" data-go="' + (i === 0 ? 'intro' : 'scene-' + i) + '">' +
            (i === 0 ? 'Back to the introduction' : 'Back to scene ' + i) +
          '</button>' +
          '<span id="continue-slot">' + (chosen ? continueHTML(i) : '<span class="scene-nav__hint">Choose an answer to continue.</span>') + '</span>' +
        '</div>' +
      '</nav>';
  }

  function choiceHTML(s, key, chosen) {
    var on = chosen === key;
    return '' +
      '<button type="button" class="choice' + (on ? ' is-selected' : '') + '" data-choice="' + key + '" aria-pressed="' + (on ? 'true' : 'false') + '">' +
        '<span class="choice__key" aria-hidden="true">' + key.toUpperCase() + '</span>' +
        '<span class="choice__text">' + esc(s[key].label) + '</span>' +
        '<span class="choice__state">' + (on ? 'Your answer' : '') + '</span>' +
      '</button>';
  }

  function continueHTML(i) {
    var last = i === TOTAL - 1;
    return '<button type="button" class="btn btn--primary" data-go="' + (last ? 'reflection' : 'scene-' + (i + 2)) + '" data-pulse>' +
      (last ? 'Continue to the final reflection' : 'Continue to scene ' + (i + 2)) + '</button>';
  }

  function resultHTML(i, key) {
    var s = SCENES[i];
    var other = key === 'a' ? 'b' : 'a';
    var support = '';
    for (var k = 0; k < s.support.length; k++) support += quoteHTML(s.support[k], 'quote--support');
    var tags = '';
    for (var c = 0; c < s.concepts.length; c++) tags += '<li>' + esc(s.concepts[c]) + '</li>';
    return '' +
      '<section class="result" aria-labelledby="result-title">' +
        '<div class="wrap">' +
          '<header class="result__head">' +
            '<p class="label">You chose</p>' +
            '<h2 id="result-title" tabindex="-1">' + esc(s[key].label) + '</h2>' +
          '</header>' +
          '<div class="result__grid">' +
            '<article class="card card--interp" data-rise>' +
              '<p class="label">Our interpretation of your answer</p>' +
              '<p>' + esc(s[key].analysis) + '</p>' +
              '<details class="other">' +
                '<summary>Read our interpretation of the other answer: “' + esc(s[other].label) + '”</summary>' +
                '<p>' + esc(s[other].analysis) + '</p>' +
              '</details>' +
            '</article>' +
            '<article class="card card--canon" data-rise>' +
              '<p class="label">What June actually does</p>' +
              '<p class="canon__text">' + esc(s.canon) + '</p>' +
            '</article>' +
            '<div class="evidence" data-rise>' +
              '<p class="label">Direct quotation</p>' +
              quoteHTML(s.quote, 'quote--main') +
              (support ? '<p class="label label--sub">Supporting quotations</p>' + support : '') +
            '</div>' +
            '<div class="concepts" data-rise>' +
              '<p class="label">Analysis connections</p>' +
              '<ul class="tags">' + tags + '</ul>' +
              '<p>' + esc(s.connection) + '</p>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</section>';
  }

  function reflectionHTML() {
    return '' +
      '<article class="reflection" aria-labelledby="view-title">' +
        '<header class="reflection__head">' +
          '<div class="wrap">' +
            '<p class="kicker kicker--on-dark">Final reflection</p>' +
            '<h1 id="view-title" class="display" tabindex="-1" data-reveal>Mirror to society</h1>' +
            '<p class="reflection__lead"><cite>Yellowface</cite> is fiction, but the patterns in it are older than the novel, and you can still measure them today. Both connections below link to their sources at the bottom of the page.</p>' +
          '</div>' +
        '</header>' +

        '<section class="rsec" id="r-mirror" aria-labelledby="h-mirror"><div class="wrap">' +
          '<div class="rsec__body rsec__body--wide">' +
            '<h2 id="h-mirror" tabindex="-1">What this story shows about our world</h2>' +
            '<p class="label">Our research</p>' +
            '<div class="research">' +
              '<section class="rcard" aria-labelledby="hc-1">' +
                '<p class="label">Historical connection</p>' +
                '<p class="rcard__date">1882 to 1943</p>' +
                '<h3 id="hc-1">Exclusion, then praise when it was useful</h3>' +
                '<p>The Chinese Exclusion Act of 1882 banned Chinese laborers from immigrating for ten years. Congress extended it in 1892 and made it permanent in 1902. It was only repealed in 1943, when China was a wartime ally, and even then just 105 Chinese immigrants were allowed in each year. NPR’s Code Switch reports that the repeal campaign recast Chinese people as “law-abiding, peace-loving” neighbors, and that since World War II the image of successful Asian Americans has been used as a wedge against other minority groups, especially Black Americans.</p>' +
                '<p class="rcard__link"><strong>Link to the novel:</strong> acceptance showed up only when it was convenient, and one “success story” got held up against everyone else. Candice describes the publishing version of this. Athena exists, so other Asian writers are told they are redundant.</p>' +
                '<p class="rcard__src">Sources: U.S. National Archives [1]; NPR Code Switch [2]</p>' +
              '</section>' +
              '<section class="rcard" aria-labelledby="cc-1">' +
                '<p class="label">Current connection</p>' +
                '<p class="rcard__date">2025 and 2026 surveys</p>' +
                '<h3 id="cc-1">Anti-Asian hate has not gone away</h3>' +
                '<p>Stop AAPI Hate’s national survey found that about half (49 percent) of Asian American and Pacific Islander adults experienced a hate act in 2025 because of their race, ethnicity, or nationality. The most common place for it was online (43 percent). In a Pew Research Center report from May 2025, 82 percent of Asian Americans said Asian people face a lot of or some discrimination.</p>' +
                '<p class="rcard__link"><strong>Link to the novel:</strong> Athena gets racist harassment and death threats online years before June is criticized for a theft (p. 114). June admits she thought Athena was exaggerating, until it happened to her.</p>' +
                '<p class="rcard__src">Sources: Stop AAPI Hate [3]; Pew Research Center [4]</p>' +
              '</section>' +
            '</div>' +

            '<h3>What it shows about human nature</h3>' +
            '<p>June never thinks of herself as the villain. Every choice comes with an excuse: Athena was already dead, the book needed her edits, she never technically lied, the internet is cruel, the industry is rigged. People protect how they see themselves with stories like these, and they split the world into “us” and “them” so the stories hold up. Companies do the same thing, with money involved.</p>' +
            q('I am not the bad guy. I am the victim here.', 'June', 110) +

            '<h3>Our warning</h3>' +
            '<p>The last pages are the warning. A good storyteller with an audience can outlast accountability. June loses the argument and starts drafting a new one right away, sure that someone will pay for it.</p>' +
            q('The truth is fluid.', 'June', 229) +
          '</div>' +
        '</div></section>' +

        '<section class="rsec rsec--alt" id="r-sources" aria-labelledby="h-sources"><div class="wrap">' +
          '<div class="rsec__body rsec__body--wide">' +
            '<h2 id="h-sources" tabindex="-1">Sources</h2>' +
            '<h3>The novel</h3>' +
            '<p>Kuang, R. F. <cite>Yellowface</cite>. William Morrow, 2023. Page numbers on this site are the pages of our group’s PDF copy, so they will not match a print edition.</p>' +
            '<h3>Research</h3>' +
            '<ol class="sources">' +
              '<li>U.S. National Archives. “Chinese Exclusion Act (1882).” Milestone Documents. <a href="https://www.archives.gov/milestone-documents/chinese-exclusion-act" target="_blank" rel="noopener">archives.gov/milestone-documents/chinese-exclusion-act</a></li>' +
              '<li>NPR Code Switch. “‘Model Minority’ Myth Again Used As A Racial Wedge Between Asians And Blacks.” April 19, 2017. <a href="https://www.npr.org/sections/codeswitch/2017/04/19/524571669/model-minority-myth-again-used-as-a-racial-wedge-between-asians-and-blacks" target="_blank" rel="noopener">npr.org/sections/codeswitch</a></li>' +
              '<li>Stop AAPI Hate. “The State of Anti-AA/PI Hate in 2025: Closing Doors, Widening Harm.” Executive summary, May 2026 (PDF). <a href="https://stopaapihate.org/wp-content/uploads/2026/04/26-StopAAPIHate-StateofHate2025-ClosingDoorsWideningHarm-ExecutiveSummary.pdf" target="_blank" rel="noopener">stopaapihate.org</a></li>' +
              '<li>Pew Research Center. “Views of how much discrimination racial and ethnic groups face in the U.S.” May 20, 2025. <a href="https://www.pewresearch.org/politics/2025/05/20/views-of-how-much-discrimination-racial-and-ethnic-groups-in-the-u-s-face/" target="_blank" rel="noopener">pewresearch.org</a></li>' +
            '</ol>' +
            '<p class="muted">We opened and checked every link on October 2, 2026.</p>' +
          '</div>' +
        '</div></section>' +

        '<section class="rsec rsec--dark" id="r-credits" aria-labelledby="h-credits"><div class="wrap">' +
          '<div class="rsec__body rsec__body--wide">' +
            '<h2 id="h-credits" tabindex="-1">Credits</h2>' +
            '<ul class="credits">' +
              '<li>Audrina Badillo</li>' +
              '<li>Jeremy Lu</li>' +
              '<li>Aishwarya Srivastava</li>' +
              '<li>Gavin Ecleonel</li>' +
            '</ul>' +
            '<p>Unit 2 Lit Circle Project. Format: interactive digital story. We wrote the scene questions, the analyses, and this reflection. Scene illustrations were supplied by the project team. Typeface: Archivo, used under the SIL Open Font License.</p>' +
            '<div class="reflection__end">' +
              '<button type="button" class="btn btn--primary" data-restart>Start again from the beginning</button>' +
              '<button type="button" class="btn btn--ghost btn--on-dark" data-go="scene-7">Back to scene 7</button>' +
            '</div>' +
          '</div>' +
        '</div></section>' +
      '</article>';
  }

  /* ------------------------------------------------------------------
     RENDER
     ------------------------------------------------------------------ */

  function updateProgress() {
    var items = progressBar.children;
    var text;
    if (state.view === 'intro') text = 'Introduction';
    else if (state.view === 'reflection') text = 'Final reflection';
    else text = 'Scene ' + (state.index + 1) + ' of ' + TOTAL;
    progressText.textContent = text;
    for (var i = 0; i < items.length; i++) {
      var cls = '';
      if (state.answers[SCENES[i].slug]) cls = 'is-done';
      if (state.view === 'scene' && i === state.index) cls += ' is-current';
      items[i].className = cls;
    }
    document.title = (state.view === 'scene'
      ? 'Scene ' + (state.index + 1) + ': ' + SCENES[state.index].title + ' | '
      : state.view === 'reflection' ? 'Final reflection | ' : '') + 'Yellowface: Compare Your Choices With June’s';
  }

  function render() {
    var route = parseHash();
    state.view = route.view;
    state.index = route.index;
    if (motionCtx) { motionCtx.revert(); motionCtx = null; }

    document.body.setAttribute('data-view', state.view);
    if (state.view === 'intro') app.innerHTML = introHTML();
    else if (state.view === 'scene') app.innerHTML = sceneHTML(state.index);
    else app.innerHTML = reflectionHTML();

    updateProgress();
    window.scrollTo(0, 0);

    var title = document.getElementById('view-title');
    if (!firstRender && title) {
      try { title.focus({ preventScroll: true }); } catch (e) { title.focus(); }
      announce(progressText.textContent + (state.view === 'scene' ? ': ' + SCENES[state.index].title : ''));
    }
    firstRender = false;
    animateView();
  }

  function choose(key) {
    var s = SCENES[state.index];
    state.answers[s.slug] = key;
    saveAnswers();

    var buttons = app.querySelectorAll('.choice');
    for (var i = 0; i < buttons.length; i++) {
      var on = buttons[i].getAttribute('data-choice') === key;
      buttons[i].classList.toggle('is-selected', on);
      buttons[i].setAttribute('aria-pressed', on ? 'true' : 'false');
      buttons[i].querySelector('.choice__state').textContent = on ? 'Your answer' : '';
    }

    var host = document.getElementById('result');
    host.innerHTML = resultHTML(state.index, key);
    document.getElementById('continue-slot').innerHTML = continueHTML(state.index);
    updateProgress();

    var heading = document.getElementById('result-title');
    try { heading.focus({ preventScroll: true }); } catch (e) { heading.focus(); }
    host.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', block: 'start' });
    announce('You chose: ' + s[key].label + '. Our interpretation and what June actually does are shown below.');
    animateResult(host);
    startPulse();
  }

  function restart() {
    state.answers = {};
    saveAnswers();
    announce('Restarted. All answers cleared.');
    go('intro');
  }

  /* ------------------------------------------------------------------
     MOTION (restrained GSAP subset; skipped for reduced motion or if
     the library did not load; nothing is hidden by CSS)
     ------------------------------------------------------------------ */

  function animateView() {
    if (!canAnimate()) return;
    var gsap = window.gsap;
    if (window.SplitText) gsap.registerPlugin(window.SplitText);

    motionCtx = gsap.context(function () {
      // Heading: lines rise out of a mask once fonts are ready.
      var heading = app.querySelector('[data-reveal]');
      if (heading && window.SplitText) {
        gsap.set(heading, { autoAlpha: 0 });
        var started = false;
        var start = function () {
          if (started || !heading.isConnected) return;
          started = true;
          gsap.set(heading, { autoAlpha: 1 });
          window.SplitText.create(heading, {
            type: 'lines',
            mask: 'lines',
            linesClass: 'reveal-line',
            autoSplit: true,
            onSplit: function (self) {
              return gsap.from(self.lines, { yPercent: 110, duration: 0.9, ease: 'power3.out', stagger: 0.06 });
            }
          });
        };
        if (document.fonts && document.fonts.ready) document.fonts.ready.then(start);
        window.setTimeout(start, 700);
      }

      // Illustration: settles from a slight zoom and counter-rotation when 35% visible.
      var frame = app.querySelector('[data-frame]');
      if (frame) {
        var img = frame.querySelector('img');
        var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
        var rest = finePointer ? 1.04 : 1;
        gsap.set(img, { scale: 1.2, rotation: 1.2 });
        var reveal = function () {
          gsap.to(img, { scale: rest, rotation: 0, duration: 1.1, ease: 'power3.out' });
        };
        if ('IntersectionObserver' in window) {
          var io = new IntersectionObserver(function (entries) {
            for (var i = 0; i < entries.length; i++) {
              if (entries[i].isIntersecting) { reveal(); io.disconnect(); break; }
            }
          }, { threshold: 0.35 });
          io.observe(frame);
        } else reveal();

        // Pointer parallax: image follows the cursor a little, the yellow block moves the other way.
        if (finePointer) {
          var xTo = gsap.quickTo(img, 'x', { duration: 0.6, ease: 'power3.out' });
          var yTo = gsap.quickTo(img, 'y', { duration: 0.6, ease: 'power3.out' });
          var block = frame.querySelector('.frame__block');
          var bx = gsap.quickTo(block, 'x', { duration: 0.8, ease: 'power3.out' });
          var by = gsap.quickTo(block, 'y', { duration: 0.8, ease: 'power3.out' });
          var area = frame.parentElement;
          var move = function (e) {
            var r = area.getBoundingClientRect();
            var px = ((e.clientX - r.left) / r.width - 0.5) * 2;
            var py = ((e.clientY - r.top) / r.height - 0.5) * 2;
            px = Math.max(-1, Math.min(1, px)); py = Math.max(-1, Math.min(1, py));
            xTo(px * 10); yTo(py * 10); bx(14 + px * -6); by(14 + py * -6);
          };
          var leave = function () { xTo(0); yTo(0); bx(14); by(14); };
          area.addEventListener('pointermove', move);
          area.addEventListener('pointerleave', leave);
        }
      }
    }, app);

    var existing = document.getElementById('result');
    if (existing && existing.firstChild) animateResult(existing, true);
    startPulse();
  }

  function animateResult(host, quiet) {
    if (!canAnimate() || quiet) return;
    var items = host.querySelectorAll('[data-rise]');
    window.gsap.from(items, { autoAlpha: 0, y: 16, duration: 0.5, ease: 'power2.out', stagger: 0.08, clearProps: 'all' });
  }

  var pulseTween = null;
  function startPulse() {
    if (pulseTween) { pulseTween.kill(); pulseTween = null; }
    if (!canAnimate()) return;
    var btn = app.querySelector('[data-pulse]');
    if (!btn) return;
    pulseTween = window.gsap.to(btn, { scale: 1.045, duration: 0.9, ease: 'sine.inOut', yoyo: true, repeat: -1 });
    var pause = function () { if (pulseTween) { pulseTween.pause(); window.gsap.to(btn, { scale: 1, duration: 0.2 }); } };
    var resume = function () { if (pulseTween && document.activeElement !== btn) pulseTween.restart(); };
    btn.addEventListener('mouseenter', pause);
    btn.addEventListener('focus', pause);
    btn.addEventListener('mouseleave', resume);
    btn.addEventListener('blur', resume);
  }

  /* ------------------------------------------------------------------
     EVENTS
     ------------------------------------------------------------------ */

  document.addEventListener('click', function (e) {
    var t = e.target.closest ? e.target.closest('[data-go], [data-choice], [data-jump], [data-restart]') : null;
    if (!t) return;
    if (t.hasAttribute('data-choice')) { choose(t.getAttribute('data-choice')); return; }
    if (t.hasAttribute('data-go')) { go(t.getAttribute('data-go')); return; }
    if (t.hasAttribute('data-restart')) { restart(); return; }
    if (t.hasAttribute('data-jump')) {
      var sec = document.getElementById(t.getAttribute('data-jump'));
      if (!sec) return;
      sec.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', block: 'start' });
      var h = sec.querySelector('h2');
      if (h) { try { h.focus({ preventScroll: true }); } catch (err) { h.focus(); } }
    }
  });

  document.getElementById('brand').addEventListener('click', function () { go('intro'); });
  document.getElementById('restart').addEventListener('click', restart);
  window.addEventListener('hashchange', render);

  // Inside an embed (for example Google Sites), offer a way out to the full page.
  var embedded = false;
  try { embedded = window.self !== window.top; } catch (e) { embedded = true; }
  if (embedded) {
    var link = document.getElementById('fullpage');
    link.href = window.location.href.split('#')[0];
    link.hidden = false;
    document.documentElement.classList.add('is-embedded');
  }

  loadAnswers();
  render();
})();
