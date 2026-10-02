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
      setup: 'June Hayward is a white novelist whose first book went nowhere. Athena Liu, her Chinese American friend and rival since college, is a literary star. One night Athena dies suddenly in her own apartment while June is there. On the desk is the first draft of Athena’s new novel, The Last Front, about the Chinese Labour Corps in World War I. Nobody else knows it exists.',
      question: 'Your rival Athena has just died. Her unfinished manuscript is on the desk. Do you take it?',
      a: {
        label: 'Take the manuscript',
        analysis: 'Choosing to take it puts ambition ahead of consent and authorship. June can tell herself that editing or finishing the manuscript earns her ownership, but that argument begins after she has already taken someone else’s work. Her admission of theft undercuts her attempt to make the act sound harmless. The scene introduces appropriation as a question of who receives credit, authority, and profit from another person’s labor.'
      },
      b: {
        label: 'Leave the manuscript',
        analysis: 'Refusing establishes a boundary between wanting success and claiming another writer’s work. Your choice does not change June’s action in the novel: she takes the manuscript anyway. That difference exposes her narration as a defense of a decision, rather than proof that the decision was unavoidable. Ask how the disappearance of Athena’s ability to object makes June’s rationalization easier, and whose voice is lost when June becomes the credited author.'
      },
      june: 'a',
      juneShort: 'Takes the manuscript',
      canon: 'June takes Athena’s manuscript home that night. She rewrites it and presents the finished book as her own work.',
      quote: { text: 'And so what if it was stolen? So what if I lifted it wholesale?', who: 'June', page: 32 },
      support: [],
      concepts: ['Appropriation', 'Authorship', 'Unreliable narration'],
      connection: 'This opening establishes the ethical problem. The later scenes show the racial and institutional structures around it.'
    },
    {
      slug: 'juniper-song',
      title: 'Becoming Juniper Song',
      alt: 'Illustration: a woman sits at a glass table looking at a contact sheet of author portraits while a hand slides one portrait toward her.',
      setup: 'The publisher, Eden Press, loves the book. Then the marketing team brings up “positioning”: a white author has written a novel set largely in China. They propose presenting June as “worldly” and publishing her under a new name, Juniper Song. Song is her real middle name. Nobody says out loud that readers might take it for a Chinese surname.',
      question: 'Your publisher suggests publishing as Juniper Song and using publicity that leaves your racial identity ambiguous. Do you agree?',
      a: {
        label: 'Accept the branding',
        analysis: 'Accepting the package lets the publisher turn racial ambiguity into a commercial advantage. A pen name alone does not establish wrongdoing; the important issue is its use alongside a stolen manuscript and publicity that may encourage readers to make misleading assumptions. The scene links ideological expectations about who represents a culture with institutional decisions about how to sell that culture. June benefits while Athena’s authorship is concealed.'
      },
      b: {
        label: 'Insist on transparent publicity',
        analysis: 'Choosing transparency challenges the idea that an attractive marketing story matters more than an honest account of authorship. However, openly identifying June as white would not repair the theft. This response separates two issues that June’s defenses can blur: writers may write across cultural boundaries, but they cannot claim another writer’s manuscript as their own. In the novel, June accepts the Juniper Song identity, so the next scene follows that actual outcome.'
      },
      june: 'a',
      juneShort: 'Becomes Juniper Song',
      canon: 'June publishes as Juniper Song. The publisher proposes the name; the photographs are her own idea. She later pays for new author photos and is pleased that in them she looks, in her words, “sort of racially ambiguous” (novel PDF p. 56).',
      quote: { text: 'And they suggest I publish under the name Juniper Song instead of June Hayward', who: 'June', page: 50 },
      support: [
        { text: 'I never lied. That’s important. I never pretended to be Chinese', who: 'June, defending the rebrand', page: 51 }
      ],
      concepts: ['Ideological', 'Institutional', 'Unreliable narration'],
      connection: 'Ideological: racial expectations and marketable authenticity. Institutional: publisher-directed branding.'
    },
    {
      slug: 'candice',
      title: 'Silencing Candice',
      alt: 'Illustration: two women at a conference table. One, in a blazer, points at a line in a heavily tabbed manuscript. The other sits back with her arms crossed.',
      setup: 'Six months before publication, Candice Lee, an editorial assistant at Eden, asks the team to hire a sensitivity reader: someone who knows the history and the language and can catch mistakes and stereotypes. June says no. Candice asks again, this time copying the whole team.',
      question: 'Candice Lee warns that the book could misrepresent Chinese people and asks for informed review. Do you listen or complain about her?',
      a: {
        label: 'Listen to Candice',
        analysis: 'Listening recognizes that relevant cultural and historical knowledge can improve a book and prevent harm. Candice’s intervention is professional criticism, not proof that June is being persecuted because she is white. Your response gives an Asian American staff member’s expertise weight. The novel proceeds differently: Candice is removed from the project. That contrast shows how an institution can invite diverse participation while failing to protect the people who question its decisions.'
      },
      b: {
        label: 'Complain about Candice',
        analysis: 'Complaining reframes a substantive concern as a problem with the person who raises it. June’s defensiveness becomes more powerful when the publisher removes Candice from the project. The interpersonal dismissal and institutional consequence reinforce each other: someone with less authority loses influence, while the commercially favored author keeps hers. This passage does not prove that every publisher behaves identically. It shows one specific decision and the pattern that decision illustrates.'
      },
      june: 'b',
      juneShort: 'Refuses the review; Candice is removed',
      canon: 'June refuses the sensitivity reader and the publisher defers to her. Candice sends an apology for her tone. Then June’s editor tells her privately that Candice has been taken off the project.',
      quote: { text: 'June is not Chinese diaspora, and we run the risk of doing real harm', who: 'Candice', page: 52 },
      support: [
        { text: 'Candice has been taken off the project.', who: 'June, reporting her editor’s message', page: 53 }
      ],
      concepts: ['Interpersonal', 'Institutional'],
      connection: 'Interpersonal: dismissal of Candice’s concerns. Institutional: removal from the project.'
    },
    {
      slug: 'accusation',
      title: 'The accusation',
      alt: 'Illustration: a worried woman at a laptop at night, hand to her mouth, as stacked social media posts and jagged reply bubbles pile up beside the screen.',
      setup: 'The Last Front is a hit. Then an anonymous account called @AthenaLiusGhost posts that Juniper Song did not write it. The thread spreads. Some replies are criticism: readers who are disappointed and want a public apology. Others are abuse, including threats of violence.',
      question: 'An anonymous account accuses you of stealing Athena’s work. Criticism, hate comments, and threats follow. Do you confess or deny it?',
      a: {
        label: 'Confess to the theft',
        analysis: 'Confessing would acknowledge the difference between being attacked online and being accountable for plagiarism. Threats remain unacceptable, but they do not erase the original harm to Athena. Your choice asks what responsibility would look like when reputation is at stake. June instead continues defending herself. Compare the evidence for her wrongdoing with her insistence that she is the victim, and consider how she uses real distress to redirect attention away from authorship.'
      },
      b: {
        label: 'Deny the accusation',
        analysis: 'Denying prioritizes reputation and extends the concealment. June can focus on the cruelty of some messages to portray the entire backlash as persecution, even when the underlying accusation concerns a genuine theft. Keep criticism and threats distinct: accountability is not the same as harassment. This scene illustrates interpersonal abuse and June’s self-justification, but threats against June do not automatically establish racial oppression against white people.'
      },
      june: 'b',
      juneShort: 'Denies it and defends herself',
      canon: 'June keeps resisting exposure and defending her own account of events. She never makes a straightforward admission of theft.',
      quote: { text: 'She stole my book, stole my voice, and stole my words.', who: 'Anonymous account', page: 102 },
      support: [
        { text: 'I’m going to come to DC and beat the living shit out of you.', who: 'A message sent to June. This is a threat, not criticism', page: 104 },
        { text: 'I am not the bad guy. I am the victim here.', who: 'June', page: 110 }
      ],
      concepts: ['Interpersonal', 'Unreliable narration'],
      connection: 'Interpersonal: online threats and abuse. Unreliable narration: June’s victim framing is her perspective, not this project’s conclusion.'
    },
    {
      slug: 'profit',
      title: 'Protected by profit',
      alt: 'Illustration: a woman in a dark sweater smiles slightly across a glass table stacked with copies of a yellow-and-black book, as a publisher’s hand gestures toward her.',
      setup: 'The accusation becomes a public scandal. On a video call, June’s editor is cold and tells her to stay off social media. Right afterward her agent, Brett, phones with different news: the controversy is free marketing, and sales are up.',
      framing: 'This question is our own framing. The novel does not show June being offered this choice in these words.',
      question: 'Your publisher continues backing you because the book makes money. Do you accept that protection or take responsibility?',
      a: {
        label: 'Accept the publisher’s protection',
        analysis: 'Accepting support allows commercial success to function as a shield from consequences. Brett’s explanation connects the publisher’s loyalty to revenue rather than establishing June’s innocence. This is institutional power: the organization controls promotion, credibility, and the author’s continued access to the market. The scene shows how a system can preserve a profitable arrangement despite ethical concerns, and how June benefits from that arrangement.'
      },
      b: {
        label: 'Take responsibility despite the support',
        analysis: 'Choosing responsibility rejects the idea that an organization’s approval proves an action was right. A successful book can still rest on stolen labor, and a publisher’s financial interest may make its judgment less trustworthy. Your response highlights an alternative June resists: naming the harm even when powerful people offer reassurance. The story still follows her continued defense and the support described by Brett, exposing the gap between institutional protection and accountability.'
      },
      june: 'a',
      juneShort: 'Accepts the protection',
      canon: 'Brett tells June that Eden will stand with her because she brings in too much money. June is relieved and continues defending her position.',
      quote: { text: 'Eden’s going to stand with you. You’re pulling in too much money for them to back out now.', who: 'Brett, June’s agent', page: 159 },
      support: [],
      concepts: ['Institutional'],
      connection: 'Institutional: financial incentives and organizational protection.'
    },
    {
      slug: 'recording',
      title: 'The recording',
      alt: 'Illustration: a dark-haired woman in a black coat clutches a phone showing a recording waveform and looks back as a second woman in a dark sweater lunges after her.',
      setup: 'June goes to a long outdoor staircase in Georgetown at night, half believing Athena herself will be waiting. Candice is there instead, with hidden cameras. June says enough to incriminate herself. Candice plays the recording back, packs up, and turns to leave.',
      question: 'Candice has recorded your admissions and is leaving with the evidence. Do you let her go or fight to stop her?',
      a: {
        label: 'Let Candice leave',
        analysis: 'Letting her leave would allow evidence to challenge June’s control over the story. Candice’s recording can be analyzed as individual resistance: someone pushed aside by the publishing process seeks another route to expose wrongdoing. Her testimony about publishers already having an Asian writer also reveals institutional scarcity and ideological tokenism. Your response accepts the possibility of accountability; June instead tries to stop Candice physically, driving the tension toward its breaking point.'
      },
      b: {
        label: 'Fight for the recording',
        analysis: 'Trying to seize the recording turns June’s fear of exposure into physical action. The conflict peaks because the issue is no longer only whose account people believe: Candice possesses recorded evidence, and June tries to prevent it from leaving her control. Her attack shows the intensity of her commitment to protecting her career. This is escalating interpersonal harm and a crisis of accountability, which is what makes it the breaking point. It is more than the most exciting scene.'
      },
      june: 'b',
      juneShort: 'Attacks Candice',
      canon: 'June realizes Candice has been recording and throws herself at Candice’s waist. They fight at the top of the steps. Candice kicks free and June falls. She wakes in a hospital with a broken collarbone, a broken ankle, and a concussion.',
      quote: { text: 'I throw myself at Candice’s waist.', who: 'June', page: 224 },
      support: [
        { text: 'She’s been recording this whole thing.', who: 'June', page: 221 },
        { text: 'They marked her as their token, exotic Asian girl.', who: 'Candice, about Athena', page: 222 },
        { text: 'Do you know what it’s like to pitch a book and be told they already have an Asian writer?', who: 'Candice', page: 222 }
      ],
      concepts: ['Breaking point', 'Interpersonal', 'Resistance', 'Ideological', 'Institutional'],
      connection: 'Breaking point, interpersonal harm, and Candice’s resistance. Candice’s two lines are our main evidence for ideological tokenism and institutional scarcity.'
    },
    {
      slug: 'comeback',
      title: 'The comeback',
      alt: 'Illustration: seen from behind, a woman in a dark sweater types at a laptop under a desk lamp, with a tall stack of manuscript pages and an open notebook beside her.',
      setup: 'Candice goes public. The New York Times runs her interview, and a month later she sells a memoir about the scandal for seven figures. Eden, the publisher that took her off June’s book, says it would love to work with her. June, recovering alone, starts planning a book of her own.',
      framing: 'This question is our own framing. It is an interpretation of June’s plan, not a quoted exchange.',
      question: 'After the confrontation, you plan another manuscript about the scandal. Do you admit the theft or recast the situation as a hoax?',
      a: {
        label: 'Write an honest account',
        analysis: 'An honest account would require June to name what she took and whom she harmed, rather than treating her own suffering as the whole story. It could begin accountability, but writing a confession alone would not guarantee repair or healing. Your choice offers a contrast with June’s actual plan. Ask whether her new manuscript returns recognition to Athena and Candice or simply gives June another opportunity to control attention and profit from the controversy.'
      },
      b: {
        label: 'Recast the scandal as a hoax',
        analysis: 'Recasting the situation as a hoax continues June’s pattern of replacing responsibility with a more favorable narrative. The ending therefore suggests persistence of the problem rather than clear moral growth. June’s effort to regain authority is not automatically resistance to oppression or evidence of healing. Candice’s attempt to expose the theft is a stronger resistance example. The warning is that visibility, persuasive storytelling, and commercial value can outlast meaningful accountability.'
      },
      june: 'b',
      juneShort: 'Plans to call it a hoax',
      canon: 'June plans a new book that reframes the scandal in her favor: the theft becomes a “hoax” meant to expose the industry, and she becomes its hero. She does not admit the theft.',
      quote: { text: 'let’s frame it as a hoax, not a theft', who: 'June', page: 230 },
      support: [
        { text: 'And this will become, in time, my story once again.', who: 'June, the novel’s last line', page: 231 }
      ],
      concepts: ['Resistance and healing', 'Systemic change'],
      connection: 'Resistance and healing: Candice’s challenge is different from June’s reputation management. Systemic change is not established by this ending.'
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
    var same = s.june === key;
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
              '<p class="canon__note">' +
                (same ? 'This time your answer matches June’s. ' : 'Your answer differs from June’s. ') +
                'Both answers lead to this same event. Nothing you pick changes the novel.' +
              '</p>' +
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

  function summaryRowsHTML() {
    var rows = '';
    var answered = 0, matched = 0;
    for (var i = 0; i < TOTAL; i++) {
      var s = SCENES[i];
      var key = state.answers[s.slug];
      var yours = key ? esc(s[key].label) : '<span class="muted">Not answered</span>';
      var cmp = '';
      if (key) {
        answered++;
        if (key === s.june) { matched++; cmp = '<span class="pill pill--same">Same as June</span>'; }
        else cmp = '<span class="pill pill--diff">Different from June</span>';
      }
      rows += '<tr>' +
        '<th scope="row"><button type="button" class="linklike" data-go="scene-' + (i + 1) + '">' + (i + 1) + '. ' + esc(s.title) + '</button></th>' +
        '<td>' + yours + '</td>' +
        '<td>' + esc(s.juneShort) + '</td>' +
        '<td>' + cmp + '</td>' +
      '</tr>';
    }
    var line;
    if (answered === 0) line = 'You have not answered any scenes yet. Go back and try them, then return here.';
    else line = 'You answered ' + answered + ' of ' + TOTAL + ' scenes and made the same choice as June in ' + matched + '.';
    return { rows: rows, line: line };
  }

  function reflectionHTML() {
    var sum = summaryRowsHTML();
    return '' +
      '<article class="reflection" aria-labelledby="view-title">' +
        '<header class="reflection__head">' +
          '<div class="wrap">' +
            '<p class="kicker kicker--on-dark">Final reflection</p>' +
            '<h1 id="view-title" class="display" tabindex="-1" data-reveal>What seven choices add up to</h1>' +
            '<p class="reflection__lead">June makes a choice in every scene. Each time, the people and the company around her make the wrong choice easier than the right one. This page puts the scenes together using our class framework.</p>' +
            '<nav class="jump" aria-label="Sections of the reflection">' +
              '<button type="button" data-jump="r-system">1. The system exposed</button>' +
              '<button type="button" data-jump="r-four">2. The 4 I’s</button>' +
              '<button type="button" data-jump="r-break">3. Breaking point</button>' +
              '<button type="button" data-jump="r-resist">4. Resistance</button>' +
              '<button type="button" data-jump="r-mirror">5. Mirror to society</button>' +
              '<button type="button" data-jump="r-yours">Your answers</button>' +
              '<button type="button" data-jump="r-sources">Sources</button>' +
              '<button type="button" data-jump="r-credits">Credits</button>' +
            '</nav>' +
          '</div>' +
        '</header>' +

        '<section class="rsec" id="r-system" aria-labelledby="h-system"><div class="wrap rsec__inner">' +
          '<div class="rsec__num" aria-hidden="true">1</div>' +
          '<div class="rsec__body">' +
            '<h2 id="h-system" tabindex="-1">The system exposed</h2>' +
            '<p class="label">Our interpretation</p>' +
            '<p>The root problem in <cite>Yellowface</cite> is racism in publishing: who gets to tell a story, who gets paid for it, and who gets pushed out of the room. The novel shows a business that sells Asian American identity as a product while keeping Asian American people away from the decisions.</p>' +
            '<p>Follow one manuscript through the seven scenes. A Chinese American writer drafts it. A white writer takes it (scene 1). The publisher gives her a name that sounds Chinese (scene 2). The one Asian American staff member who objects is removed (scene 3). When the theft is exposed, the publisher stays loyal because the book is selling (scene 5). June’s theft is one person’s decision. It becomes a system because so many other people have a reason to go along with it.</p>' +
            q('This industry is built on silencing us', 'Candice', 222) +
            '<p>That line is Candice’s claim, made in anger. We treat it as testimony the rest of the novel supports with specific events at one fictional publisher. We are not claiming that every real publisher acts this way.</p>' +
            '<p>June tells a different story about race. She says she is the one being discriminated against, and calls the criticism of her <mark>“reverse racism”</mark> <span class="src">(p. 223)</span>. That is her perspective. The events of the novel do not support it: she keeps her book deal, her sales, and her publisher’s backing for most of the story.</p>' +
          '</div>' +
        '</div></section>' +

        '<section class="rsec rsec--alt" id="r-four" aria-labelledby="h-four"><div class="wrap rsec__inner">' +
          '<div class="rsec__num" aria-hidden="true">2</div>' +
          '<div class="rsec__body rsec__body--wide">' +
            '<h2 id="h-four" tabindex="-1">The 4 I’s in action</h2>' +
            '<p class="label">Our interpretation</p>' +
            '<p>The four I’s are four levels where oppression operates. In this novel they feed each other: a belief becomes a company decision, the decision gives one person power over another, and the people on the losing side start to act on the belief themselves.</p>' +
            '<div class="four">' +

              '<section class="icard" aria-labelledby="i-ideo">' +
                '<h3 id="i-ideo">Ideological</h3>' +
                '<p class="icard__def">Beliefs and stereotypes that make unequal treatment seem normal.</p>' +
                '<p>The belief here is that an Asian American writer has one job: to be “the Asian writer” and sell racial trauma. A second belief treats Asian people as interchangeable. When Candice asks for a Chinese sensitivity reader, June’s agent suggests Candice do it herself, and Candice has to point out that she is Korean American (p. 53). The stereotype also lives in June. In the middle of attacking Candice, she thinks of Candice and Athena as dolls.</p>' +
                q('They marked her as their token, exotic Asian girl.', 'Candice, about Athena', 222) +
                q('like little porcelain dolls', 'June', 224) +
                '<p class="icard__scenes">Seen in scenes 2 and 6.</p>' +
              '</section>' +

              '<section class="icard" aria-labelledby="i-inst">' +
                '<h3 id="i-inst">Institutional</h3>' +
                '<p class="icard__def">Policies and decisions made by organizations.</p>' +
                '<p>Eden Press proposes the name Juniper Song. It removes Candice from the project after she raises concerns. It keeps backing June because of money. And Candice describes pitching a book and hearing that there is no room, because one Asian writer is already on the list. The novel supports this scarcity as a pattern through her account. It is not a literal rule that only one Asian author can ever succeed.</p>' +
                q('Do you know what it’s like to pitch a book and be told they already have an Asian writer?', 'Candice', 222) +
                q('You’re pulling in too much money for them to back out now.', 'Brett', 159) +
                '<p class="icard__scenes">Seen in scenes 2, 3, 5, and 6.</p>' +
              '</section>' +

              '<section class="icard" aria-labelledby="i-inter">' +
                '<h3 id="i-inter">Interpersonal</h3>' +
                '<p class="icard__def">What individual people do to each other.</p>' +
                '<p>June takes her friend’s work, dismisses Candice’s warning as complaining, and in the end attacks her physically. The online response to June has two parts that should not be mixed up. Readers who say she owes an apology for a real theft are holding her accountable. People who send threats are abusing her. The threats are wrong. They do not make the accusation false, and they are not evidence that June is oppressed for being white.</p>' +
                q('I determine Candice exists entirely to complain about microaggressions', 'June', 53) +
                '<p class="icard__scenes">Seen in scenes 1, 3, 4, and 6.</p>' +
              '</section>' +

              '<section class="icard icard--open" aria-labelledby="i-intern">' +
                '<p class="flag">Evidence still to be confirmed</p>' +
                '<h3 id="i-intern">Internalized</h3>' +
                '<p class="icard__def">When people in a targeted group come to believe or act on the negative messages about their own group.</p>' +
                '<p>June cannot be the example. She is white, and her belief that she is the real victim is self-justification. An early draft of our planner listed it here, and we have corrected that.</p>' +
                '<p>We searched the novel for a better example and found three passages that may fit. All three reach us secondhand, through June’s hostile narration or Candice’s anger, so we present them as candidates and not as proof.</p>' +
                '<ul class="cands">' +
                  '<li>Athena gave up her family’s language to fit in. June reports that Athena said in interviews she ' + '<mark>“spoke only English at home in an attempt to better assimilate”</mark> <span class="src">(p. 85)</span>.</li>' +
                  '<li>Athena played the part the industry wrote for her. Candice says: <mark>“She leaned into it, too. She knew the rules.”</mark> <span class="src">(p. 222)</span></li>' +
                  '<li>Scarcity turned Asian American writers against each other. Candice says the others hated Athena (p. 223), and an anonymous thread from within the Chinese American community brands her a <mark>“race traitor”</mark> <span class="src">(p. 128, as June summarizes it)</span>.</li>' +
                '</ul>' +
                '<p><strong>Status:</strong> our group and our teacher still need to decide whether these passages satisfy this category. Until then we count internalized oppression as only partly supported.</p>' +
              '</section>' +

            '</div>' +
          '</div>' +
        '</div></section>' +

        '<section class="rsec" id="r-break" aria-labelledby="h-break"><div class="wrap rsec__inner">' +
          '<div class="rsec__num" aria-hidden="true">3</div>' +
          '<div class="rsec__body">' +
            '<h2 id="h-break" tabindex="-1">Breaking point</h2>' +
            '<p class="label">Our interpretation</p>' +
            '<p>Tension peaks on the steps in scene 6. For more than two hundred pages the question has been whose version people will believe, and June has been able to keep hers alive. Candice ends that by recording June’s own voice. June can no longer argue her way out, so she uses her body.</p>' +
            q('I will not let Candice walk away with my fate in her hands.', 'June', 223) +
            '<p>What happens to June emotionally is the most revealing part. In the seconds before she attacks, she describes her feelings as <mark>“Years of suppressed rage”</mark> at being <mark>“treated like a stereotype”</mark> <span class="src">(p. 223)</span>. She is about to tackle an Asian American woman to protect a stolen book, and in that same moment she casts herself as the person being stereotyped. During the fight she even thinks through how Candice’s death could be explained as an accident (p. 224). This is the furthest her self-deception goes, and it is why we call it the breaking point.</p>' +
          '</div>' +
        '</div></section>' +

        '<section class="rsec rsec--alt" id="r-resist" aria-labelledby="h-resist"><div class="wrap rsec__inner">' +
          '<div class="rsec__num" aria-hidden="true">4</div>' +
          '<div class="rsec__body">' +
            '<h2 id="h-resist" tabindex="-1">Resistance and revolution</h2>' +
            '<p class="label">Our interpretation</p>' +
            '<h3>Individual resistance</h3>' +
            '<p>Candice resists twice. First she uses the proper channel and asks for a sensitivity reader, and she is removed for it. Later, shut out of the company, she gets the truth on record herself. The novel does not turn her into a simple hero. She tells June plainly whose interest she is serving, and she sells the story for seven figures (p. 229).</p>' +
            q('This is for me.', 'Candice', 223) +
            '<h3>Community responses</h3>' +
            '<p>Readers organize online around the hashtag #SaveAthena (p. 102). Asian American critics publish detailed critiques of how June’s version handles the laborers’ history (p. 109). Emmy Cho, the young writer June mentors, ends the mentorship (p. 155). These responses are how the community holds June accountable when her publisher will not. The novel also shows the same crowd turning on Athena after her death (p. 128), which is a reminder that an online pile-on and a community seeking justice are not always the same thing.</p>' +
            '<h3>Healing</h3>' +
            '<p>Nobody heals. June’s bones are set and her thinking has not moved. Athena cannot get her book or her name back. Candice gains money and attention, which is a win for her and still not repair.</p>' +
            '<h3>Systemic change</h3>' +
            '<p>We found none. The publisher’s only visible change is which story it wants to buy next. Eden removed Candice when she objected. Once her story is valuable, Eden says publishing her would be <mark>“the ideal way to make amends”</mark> <span class="src">(p. 227)</span>. The profit motive that protected June now chases Candice’s memoir, and June expects publishers to bid on her counter-story too (p. 230). The rules of the business are the same at the end as at the start.</p>' +
          '</div>' +
        '</div></section>' +

        '<section class="rsec" id="r-mirror" aria-labelledby="h-mirror"><div class="wrap rsec__inner">' +
          '<div class="rsec__num" aria-hidden="true">5</div>' +
          '<div class="rsec__body rsec__body--wide">' +
            '<h2 id="h-mirror" tabindex="-1">Mirror to society</h2>' +
            '<p class="label">Our research</p>' +
            '<p class="rsec__intro">The novel is fiction. The patterns in it are older than the novel and are still measurable today. Each connection below names its source, and every source is linked at the bottom of the page.</p>' +

            '<h3>Historical connections</h3>' +
            '<div class="research">' +
              '<section class="rcard" aria-labelledby="hc-1">' +
                '<p class="rcard__date">1937</p>' +
                '<h4 id="hc-1">The original yellowface</h4>' +
                '<p>When MGM filmed <cite>The Good Earth</cite>, a novel about a Chinese farming family, author Pearl S. Buck hoped for a Chinese cast. According to the Museum of Chinese in America, the producers did not think that would appeal to American audiences. Chinese American star Anna May Wong was replaced in the lead by Luise Rainer, the major roles went to white actors in yellowface, and Rainer won the Academy Award for Best Actress.</p>' +
                '<p class="rcard__link"><strong>Link to the novel:</strong> a studio decided a Chinese story would sell better with a white face on it. Eden Press makes the same calculation in scene 2, with a name instead of makeup.</p>' +
                '<p class="rcard__src">Source: Museum of Chinese in America [1]</p>' +
              '</section>' +
              '<section class="rcard" aria-labelledby="hc-2">' +
                '<p class="rcard__date">1882 to 1943</p>' +
                '<h4 id="hc-2">Exclusion, then praise when it was useful</h4>' +
                '<p>The Chinese Exclusion Act of 1882 banned Chinese laborers from immigrating for ten years. Congress extended it in 1892 and made it permanent in 1902. It was repealed in 1943, when China was a wartime ally, and even then only 105 Chinese immigrants were allowed in each year. NPR’s Code Switch reports that the repeal campaign recast Chinese people as “law-abiding, peace-loving” neighbors, and that since World War II the image of successful Asian Americans has been used as a wedge against other minority groups, especially Black Americans.</p>' +
                '<p class="rcard__link"><strong>Link to the novel:</strong> acceptance that arrives only when it is convenient, and one “success story” held up against everyone else. Candice describes the publishing version: Athena exists, so other Asian writers are told they are redundant.</p>' +
                '<p class="rcard__src">Sources: U.S. National Archives [2]; NPR Code Switch [3]</p>' +
              '</section>' +
              '<section class="rcard" aria-labelledby="hc-3">' +
                '<p class="rcard__date">World War I</p>' +
                '<h4 id="hc-3">The Chinese Labour Corps</h4>' +
                '<p>The manuscript June steals is about real people. In the novel, <cite>The Last Front</cite> tells the story of the <mark>“140,000 Chinese workers”</mark> <span class="src">(p. 25)</span> recruited to support the Allied armies in World War I. The Imperial War Museums describe the Chinese Labour Corps as a force of workers recruited by the British government for support work and manual labour, and call it a “hidden history.”</p>' +
                '<p class="rcard__link"><strong>Link to the novel:</strong> a history that was left out for a century is recovered by a Chinese American writer and then taken from her. In her edits, June softens it, swapping a white bully for a Chinese character (p. 37).</p>' +
                '<p class="rcard__src">Source: Imperial War Museums [4]</p>' +
              '</section>' +
            '</div>' +

            '<h3>Current connections</h3>' +
            '<div class="research">' +
              '<section class="rcard" aria-labelledby="cc-1">' +
                '<p class="rcard__date">2023 survey</p>' +
                '<h4 id="cc-1">Who works in publishing</h4>' +
                '<p>Lee &amp; Low Books surveyed the publishing workforce for the third time in 2023 and got 8,644 responses. 72.5 percent of staff at publishers, review journals, and literary agencies identified as White, down from 79 percent in 2015 and 76 percent in 2019. 7.8 percent identified as Asian, Native Hawaiian, Pacific Islander, South Asian, or Southeast Indian.</p>' +
                '<p class="rcard__link"><strong>Link to the novel:</strong> Candice is one of very few Asian American people in the room at Eden, which is why removing her removes the objection.</p>' +
                '<p class="rcard__src">Source: Lee &amp; Low Diversity Baseline Survey 3.0 [5]</p>' +
              '</section>' +
              '<section class="rcard" aria-labelledby="cc-2">' +
                '<p class="rcard__date">2020 analysis</p>' +
                '<h4 id="cc-2">Who gets published</h4>' +
                '<p>McGill professor Richard Jean So analyzed data from major publishing houses for a <cite>New York Times</cite> piece. Between 1950 and 2018, 95 percent of the books in his data were written by white authors. For 2018 alone the figure was 89 percent.</p>' +
                '<p class="rcard__link"><strong>Link to the novel:</strong> June believes publishing now favors writers of color over people like her. The numbers say the opposite.</p>' +
                '<p class="rcard__src">Source: McGill News on Richard Jean So’s research [6]</p>' +
              '</section>' +
              '<section class="rcard" aria-labelledby="cc-3">' +
                '<p class="rcard__date">January 2020</p>' +
                '<h4 id="cc-3">The <cite>American Dirt</cite> controversy</h4>' +
                '<p>NPR reported that Jeanine Cummins received a hefty advance and a big promotional push for <cite>American Dirt</cite>, a novel about a Mexican mother and son fleeing a cartel. Critics called the book inaccurate and full of harmful stereotypes and questioned whether she was the right person to tell that story. Her publisher’s president admitted “deep inadequacies” in how the company handles representation. The publisher also cancelled her tour, citing threats, and condemned those threats.</p>' +
                '<p class="rcard__link"><strong>Link to the novel:</strong> a real case with the same three pieces as scene 4: a publisher’s marketing choices, legitimate criticism from the community being written about, and threats that are a separate wrong.</p>' +
                '<p class="rcard__src">Source: NPR [7]</p>' +
              '</section>' +
              '<section class="rcard" aria-labelledby="cc-4">' +
                '<p class="rcard__date">2025 and 2026 surveys</p>' +
                '<h4 id="cc-4">Anti-Asian hate has not gone away</h4>' +
                '<p>Stop AAPI Hate’s national survey found that about half (49 percent) of Asian American and Pacific Islander adults experienced a hate act in 2025 because of their race, ethnicity, or nationality, and that online was the most common place for it (43 percent). In a Pew Research Center report from May 2025, 82 percent of Asian Americans said Asian people face a lot of or some discrimination.</p>' +
                '<p class="rcard__link"><strong>Link to the novel:</strong> Athena gets racist harassment and death threats online years before June is criticized for a theft (p. 114). June admits she thought Athena was exaggerating, until it happened to her.</p>' +
                '<p class="rcard__src">Sources: Stop AAPI Hate [8]; Pew Research Center [9]</p>' +
              '</section>' +
            '</div>' +

            '<h3>What it shows about human nature</h3>' +
            '<p>June never once thinks of herself as the villain. Every choice comes with a reason attached: Athena was already dead, the book needed her edits, she never technically lied, the internet is cruel, the industry is rigged. People protect their picture of themselves with stories, and they sort the world into “us” and “them” to make those stories work. Institutions do the same thing with money attached.</p>' +
            q('I am not the bad guy. I am the victim here.', 'June', 110) +

            '<h3>Our warning</h3>' +
            '<p>The last pages are the warning. A skilled storyteller with a market can outlast accountability. June loses the argument and immediately starts drafting a new one, confident someone will pay for it.</p>' +
            q('The truth is fluid.', 'June', 229) +

            '<h3>Our hope</h3>' +
            '<p>We hope to see racial bias removed from our society, and less conflict between people based only on race. In this story, the changes that would have mattered are small and specific. Hire the reader Candice asked for. Keep the person who objects in the room. Make space for more than one Asian American writer at a time. Readers have a part too: notice whose name is on the cover and whose is missing, and criticize without threatening.</p>' +
          '</div>' +
        '</div></section>' +

        '<section class="rsec rsec--alt" id="r-yours" aria-labelledby="h-yours"><div class="wrap rsec__inner">' +
          '<div class="rsec__num" aria-hidden="true">✓</div>' +
          '<div class="rsec__body rsec__body--wide">' +
            '<h2 id="h-yours" tabindex="-1">Your answers and June’s</h2>' +
            '<p>' + sum.line + '</p>' +
            '<div class="tablewrap"><table class="summary">' +
              '<thead><tr><th scope="col">Scene</th><th scope="col">Your answer</th><th scope="col">What June does</th><th scope="col">Compared</th></tr></thead>' +
              '<tbody>' + sum.rows + '</tbody>' +
            '</table></div>' +
            '<p class="muted">Select a scene name to review it. Your answers stay saved until you restart or close this tab.</p>' +
          '</div>' +
        '</div></section>' +

        '<section class="rsec" id="r-sources" aria-labelledby="h-sources"><div class="wrap rsec__inner">' +
          '<div class="rsec__num" aria-hidden="true">§</div>' +
          '<div class="rsec__body rsec__body--wide">' +
            '<h2 id="h-sources" tabindex="-1">Sources</h2>' +
            '<h3>The novel</h3>' +
            '<p>Kuang, R. F. <cite>Yellowface</cite>. William Morrow, 2023. Page numbers on this site refer to the pages of our group’s PDF copy and will not match a print edition.</p>' +
            '<h3>Framework</h3>' +
            '<p>The five analysis questions and the four I’s of oppression come from our class materials. The Ethnic Studies Praxis Story Plot is credited there to Curammeng, Lopez, and Tintiangco-Cubales (2016).</p>' +
            '<h3>Research</h3>' +
            '<ol class="sources">' +
              '<li>Museum of Chinese in America. “The Good Earth.” <a href="https://www.mocanyc.org/collections/stories/the-good-earth/" target="_blank" rel="noopener">mocanyc.org/collections/stories/the-good-earth</a></li>' +
              '<li>U.S. National Archives. “Chinese Exclusion Act (1882).” Milestone Documents. <a href="https://www.archives.gov/milestone-documents/chinese-exclusion-act" target="_blank" rel="noopener">archives.gov/milestone-documents/chinese-exclusion-act</a></li>' +
              '<li>NPR Code Switch. “‘Model Minority’ Myth Again Used As A Racial Wedge Between Asians And Blacks.” April 19, 2017. <a href="https://www.npr.org/sections/codeswitch/2017/04/19/524571669/model-minority-myth-again-used-as-a-racial-wedge-between-asians-and-blacks" target="_blank" rel="noopener">npr.org/sections/codeswitch</a></li>' +
              '<li>Imperial War Museums. “Chinese Labour Corps.” Mapping the Centenary project. <a href="https://www.iwm.org.uk/partnerships/mapping-the-centenary/projects/chinese-labour-corps" target="_blank" rel="noopener">iwm.org.uk/partnerships/mapping-the-centenary/projects/chinese-labour-corps</a></li>' +
              '<li>Lee &amp; Low Books. “The Lee &amp; Low Diversity Baseline Survey 3.0.” 2023 results. <a href="https://www.leeandlow.com/about/diversity-baseline-survey/dbs3/" target="_blank" rel="noopener">leeandlow.com/about/diversity-baseline-survey/dbs3</a></li>' +
              '<li>McGill News. “A deep dive into racial inequality in the literary world.” <a href="https://mcgillnews.mcgill.ca/a-deep-dive-into-racial-inequality-in-the-literary-world/" target="_blank" rel="noopener">mcgillnews.mcgill.ca</a>. Reports the figures from Richard Jean So and Gus Wezerek, “Just How White Is the Book Industry?” <cite>The New York Times</cite>, December 11, 2020.</li>' +
              '<li>Mayer, Petra. “‘American Dirt’ Publisher Cancels Author Tour After Threats.” NPR, January 29, 2020. <a href="https://www.npr.org/2020/01/29/801021867/american-dirt-publisher-cancels-author-tour-after-threats" target="_blank" rel="noopener">npr.org/2020/01/29/801021867</a></li>' +
              '<li>Stop AAPI Hate. “The State of Anti-AA/PI Hate in 2025: Closing Doors, Widening Harm.” Executive summary, May 2026 (PDF). <a href="https://stopaapihate.org/wp-content/uploads/2026/04/26-StopAAPIHate-StateofHate2025-ClosingDoorsWideningHarm-ExecutiveSummary.pdf" target="_blank" rel="noopener">stopaapihate.org</a></li>' +
              '<li>Pew Research Center. “Views of how much discrimination racial and ethnic groups face in the U.S.” May 20, 2025. <a href="https://www.pewresearch.org/politics/2025/05/20/views-of-how-much-discrimination-racial-and-ethnic-groups-in-the-u-s-face/" target="_blank" rel="noopener">pewresearch.org</a></li>' +
            '</ol>' +
            '<p class="muted">All links were opened and checked on October 2, 2026.</p>' +
          '</div>' +
        '</div></section>' +

        '<section class="rsec rsec--dark" id="r-credits" aria-labelledby="h-credits"><div class="wrap rsec__inner">' +
          '<div class="rsec__num" aria-hidden="true">©</div>' +
          '<div class="rsec__body rsec__body--wide">' +
            '<h2 id="h-credits" tabindex="-1">Credits</h2>' +
            '<ul class="credits">' +
              '<li>Audrina Badillo</li>' +
              '<li>Jeremy Lu</li>' +
              '<li>Aishwarya Srivastava</li>' +
              '<li>Gavin Ecleonel</li>' +
            '</ul>' +
            '<p>Unit 2 Lit Circle Project. Format: interactive digital story. Scene questions, analyses, and this reflection are our own writing. Scene illustrations were supplied by the project team. Typeface: Archivo, used under the SIL Open Font License.</p>' +
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
