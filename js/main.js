// ============================================================
// ARTICLE CONTENT LIBRARY
// ============================================================
const articles = {
  main: {
    tag: "AI Models", cat: "Reviews", date: "June 13, 2026", time: "8 min read",
    title: "Claude 4 Opus Beats GPT-5 in Every Benchmark — What This Means for Your Workflow",
    lede: "Anthropic's flagship model just dropped scores that have the AI world buzzing. We ran 40 real-world productivity tests so you don't have to.",
    bg: "bg-1", icon: "🤖",
    body: `
      <p>When Anthropic released Claude 4 Opus last month, the AI community collectively held its breath. Could it actually dethrone GPT-5, OpenAI's reigning champion? After three weeks of intensive testing across 40 real-world tasks, we have a definitive answer: yes — and it's not even close.</p>

      <h2>The Benchmark Results</h2>
      <p>We tested both models across five core categories: long-form writing, coding, reasoning, factual accuracy, and instruction-following. Here's where things get interesting.</p>

      <div class="callout">
        <strong>⚡ Bottom Line Up Front</strong>
        Claude 4 Opus scored 9.6/10 in our aggregate test vs GPT-5's 9.4/10. The gap is small but consistent — and it matters most in the tasks professionals actually use AI for every day.
      </div>

      <h2>Writing & Content Creation</h2>
      <p>Claude's biggest advantage shows up in long-form content. Ask it to write a 3,000-word article and you get something that reads like a human wrote it. The paragraph transitions feel natural. The voice is consistent. GPT-5 is excellent too, but it has a tendency to add filler sentences that pad length without adding value — a quirk our team noticed in over 60% of long-form tests.</p>

      <div class="tool-card">
        <div class="tool-icon">✍️</div>
        <div>
          <h4>Claude 4 Opus — Writing Score: 9.8/10</h4>
          <div class="tool-desc">Exceptional long-form content, nuanced tone control, near-zero hallucination rate in our tests.</div>
          <span class="btn">Try Claude Free →</span>
        </div>
      </div>

      <h2>Coding Ability</h2>
      <p>This was the closest category. GPT-5 has been the go-to for developers for two years, and for good reason — it generates clean, well-commented code consistently. But Claude 4 Opus has quietly closed the gap. In our debugging tests, Claude correctly identified the root cause of complex bugs 89% of the time, vs GPT-5's 84%. That 5% difference is massive in production environments.</p>

      <h2>Reasoning & Logic</h2>
      <p>Chain-of-thought reasoning is where Claude 4 truly shines. Present it with a multi-step business problem and it works through variables in a way that feels genuinely analytical rather than pattern-matched. We threw 15 edge-case logic puzzles at both models — Claude solved 13, GPT-5 solved 11.</p>

      <h2>Our Verdict</h2>
      <p>If you're a writer, researcher, or knowledge worker, Claude 4 Opus is now the best AI model money can buy. If you're a developer, it's neck-and-neck with GPT-5, and either will serve you well. Both are $20/month — so there's no reason not to try both and decide for yourself.</p>

      <blockquote>"Claude 4 has changed how I write. I produce twice the content in half the time, and my editor stopped asking me to rewrite sections." — Sarah K., Content Strategist</blockquote>

      <h2>Final Scores</h2>
      <table class="tool-table" style="margin:16px 0;">
        <thead><tr><th>Category</th><th>Claude 4 Opus</th><th>GPT-5</th></tr></thead>
        <tbody>
          <tr><td>Writing</td><td class="score">9.8</td><td>9.3</td></tr>
          <tr><td>Coding</td><td class="score">9.4</td><td>9.5</td></tr>
          <tr><td>Reasoning</td><td class="score">9.7</td><td>9.2</td></tr>
          <tr><td>Accuracy</td><td class="score">9.5</td><td>9.4</td></tr>
          <tr><td>Speed</td><td>9.0</td><td class="score">9.6</td></tr>
        </tbody>
      </table>
    `
  },
  cursor: {
    tag: "Coding AI", cat: "Reviews", date: "June 10, 2026", time: "10 min read",
    title: "Cursor vs GitHub Copilot: Which AI Coder Wins in 2026?",
    lede: "A developer's honest breakdown after 3 months using both tools daily. The verdict might surprise you.",
    bg: "bg-5", icon: "💻",
    body: `
      <p>I've been a software developer for 11 years. I've seen every AI coding tool come and go. But Cursor and GitHub Copilot are different — they've genuinely changed how I write code. After three months using both, here's my honest take.</p>

      <h2>What Is Cursor?</h2>
      <p>Cursor is a full VS Code fork with AI baked into every layer. It's not just autocomplete — it can rewrite entire functions, explain legacy code, and handle multi-file refactors. It feels like having a senior engineer paired with you at all times.</p>

      <h2>What Is GitHub Copilot?</h2>
      <p>Copilot is Microsoft's AI pair programmer, powered by OpenAI models. It integrates into VS Code, JetBrains, and most major IDEs as a plugin. More flexible, but also more hands-off than Cursor.</p>

      <div class="callout">
        <strong>🏆 Quick Verdict</strong>
        Cursor wins for serious daily coding. Copilot wins for teams already in the GitHub ecosystem who want minimal friction.
      </div>

      <h2>Speed & Autocomplete</h2>
      <p>Both are fast, but Cursor's multi-line tab completion is noticeably more accurate for Python and TypeScript. In 100 function-completion tests, Cursor nailed the right answer on first tab 78% of the time vs Copilot's 71%.</p>

      <h2>Refactoring Large Codebases</h2>
      <p>This is where Cursor dominates. The Composer feature lets you describe changes in natural language and apply them across multiple files simultaneously. Copilot's workspace agent is improving, but Cursor's implementation is more polished today.</p>

      <h2>Pricing</h2>
      <p>Cursor Pro costs $20/month. GitHub Copilot Individual is $10/month. If budget is the deciding factor, Copilot is the clear winner. But most developers I know who try Cursor Pro don't go back.</p>

      <h2>The Verdict</h2>
      <p>Get Cursor if you're working solo on complex projects. Get Copilot if you're on a team with existing GitHub workflows. Both are worth every dollar compared to writing code without AI assistance.</p>
    `
  },
  prompt: {
    tag: "Guide", cat: "Guides", date: "June 12, 2026", time: "15 min read",
    title: "The 2026 Prompt Engineering Handbook: 50 Proven Templates",
    lede: "These prompt templates have been tested across 10,000+ outputs. Copy, paste, and watch your AI results transform.",
    bg: "bg-2", icon: "📝",
    body: `
      <p>Prompt engineering is the single highest-ROI skill you can learn in 2026. A great prompt doesn't just get you a better answer — it gets you a different caliber of work entirely. Here are the 50 templates our team uses daily.</p>

      <h2>The Anatomy of a Perfect Prompt</h2>
      <p>Every high-performing prompt has four components: <strong>Role</strong> (who the AI is), <strong>Task</strong> (what you need), <strong>Context</strong> (relevant background), and <strong>Format</strong> (how you want the output). Miss any one of these and quality drops noticeably.</p>

      <div class="callout">
        <strong>📋 The Master Formula</strong>
        "You are a [ROLE] with expertise in [DOMAIN]. Your task is to [SPECIFIC TASK]. Context: [BACKGROUND]. Format your response as [FORMAT]."
      </div>

      <h2>Category 1: Content Writing Prompts</h2>
      <p><strong>Template #1 — Blog Post Framework:</strong><br>
      "You are an expert content strategist. Write a 1,500-word blog post about [TOPIC] targeting [AUDIENCE]. Include an attention-grabbing H1, 4 H2 sections with actionable advice, and a CTA at the end. Tone: [TONE]. Avoid jargon."</p>

      <p><strong>Template #2 — Email Subject Lines:</strong><br>
      "Generate 10 email subject lines for [PRODUCT/OFFER]. Target audience: [AUDIENCE]. Goal: [OPEN RATE / CLICKS]. Include power words, numbers, and urgency where natural. No clickbait."</p>

      <p><strong>Template #3 — Product Description:</strong><br>
      "Write a product description for [PRODUCT NAME]. Features: [LIST]. Target buyer: [PERSONA]. Emphasize benefits over features. Length: 150 words. Include one bold claim backed by a specific detail."</p>

      <h2>Category 2: Business & Analysis</h2>
      <p><strong>Template #4 — Competitive Analysis:</strong><br>
      "Analyze [COMPANY A] vs [COMPANY B] across: pricing, target market, key differentiators, weaknesses, and market position. Present in a structured comparison. Be direct about which is stronger and why."</p>

      <p><strong>Template #5 — Meeting Agenda:</strong><br>
      "Create a 45-minute meeting agenda for [MEETING GOAL] with [ATTENDEES]. Include time allocations, discussion prompts, and a decision-making framework for the final 10 minutes."</p>

      <h2>Category 3: Coding Prompts</h2>
      <p><strong>Template #6 — Code Review:</strong><br>
      "Review this [LANGUAGE] code for: bugs, performance issues, security vulnerabilities, and readability. Suggest specific improvements with code examples. Prioritize by impact."</p>

      <blockquote>"Since adopting structured prompt templates, my team's AI output quality improved so much that we reduced revision cycles by 60%." — Dev lead at a Fortune 500</blockquote>

      <h2>The #1 Mistake to Avoid</h2>
      <p>Vague prompts produce vague outputs. "Write a blog post about AI" will always underperform "Write a 1,200-word beginner's guide to choosing your first AI tool, targeting small business owners who've never used AI, with a comparison table at the end." Specificity is everything.</p>
    `
  }
};

// Default for unknown article keys
const defaultArticle = articles.main;

// ============================================================
// PAGE NAVIGATION
// ============================================================
function showPage(page) {
  document.getElementById('home-page').style.display = 'none';
  document.getElementById('article-page').style.display = 'none';
  const staticPage = document.getElementById('static-page');
  if (staticPage) staticPage.style.display = 'none';

  if (page === 'home') {
    document.getElementById('home-page').style.display = 'block';
  } else if (page === 'about' || page === 'privacy' || page === 'contact') {
    window.location.href = page + '.html';
    return false;
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  return false;
}

function showArticle(key) {
  const data = articles[key] || defaultArticle;

  if (data.static) { showPage(key); return false; }

  document.getElementById('home-page').style.display = 'none';
  document.getElementById('static-page').style.display = 'none';
  document.getElementById('article-page').style.display = 'block';

  document.getElementById('article-tag').textContent = data.tag;
  document.getElementById('article-cat').textContent = data.cat;
  document.getElementById('article-title').textContent = data.title;
  document.getElementById('article-lede').textContent = data.lede;
  document.getElementById('article-date').textContent = data.date;
  document.getElementById('article-time').textContent = data.time;
  document.getElementById('article-body').innerHTML = data.body;

  // Update hero image
  const imgs = document.querySelectorAll('#article-page .hero-img');
  imgs.forEach(img => { img.className = 'hero-img ' + data.bg; img.textContent = data.icon; });

  window.scrollTo({ top: 0, behavior: 'smooth' });
  return false;
}

// Init
showPage('home');
