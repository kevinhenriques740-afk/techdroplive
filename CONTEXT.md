# AIToolsDaily — Project Context

## RESPONSE FORMAT
- No explanations, no step narration
- Only show: file changed, lines added/removed, commit hash
- If something fails, one line saying what failed
- Nothing else

## Project Brief
- **Name:** AIToolsDaily
- **Niche:** AI Tools & Productivity news, reviews, and guides
- **Goal:** AdSense-monetized content website
- **Hosting:** Netlify (drag-and-drop deploy from the `aitoolsdaily/` folder)

## Folder Structure
```
aitoolsdaily/
  index.html                    ← Homepage (hero, reviews, tools table, guides, news)
  about.html                    ← About page (static)
  privacy.html                  ← Privacy policy (static)
  contact.html                  ← Contact page with form (static)
  css/
    style.css                   ← All site CSS (extracted from original single-file HTML)
  js/
    main.js                     ← All JS: article content library + showPage/showArticle nav
  articles/
    article-template.html       ← Blank reusable shell for new articles
  CONTEXT.md                    ← This file
  SESSION.md                    ← Session log
```

## Design Tokens (LOCKED — do not change without explicit instruction)
These are the tokens currently in the CSS. Note: the brief specifies future target tokens
(chartreuse accent, DM Serif/Sans fonts) — those will be applied in a future design pass.

| Token          | Current value     | Target value (future) |
|----------------|-------------------|-----------------------|
| Background     | `#f8f7f4`         | `#F2F0EB`             |
| Cards          | `#ffffff`          | `#FFFFFF`             |
| Primary text   | `#0f1117`         | `#0C0C0F`             |
| Accent         | `#0057ff`         | `#E8FF47` (chartreuse)|
| Secondary text | `#3d4049`         | `#5C5C6E`             |
| Font: headlines| Georgia/serif     | DM Serif Display      |
| Font: body     | system-ui/sans    | DM Sans               |
| Font: mono     | Courier New       | JetBrains Mono        |

## AdSense Slots (NEVER DELETE OR MOVE)
Each slot has a comment identifying its size and placement:
- **Leaderboard 728×90** — top of homepage, top of article pages
- **Rectangle 300×250** — sidebar (×2), in-content (×2)
- **Rectangle 300×600** — second sidebar slot (half-page)
- **In-article fluid** — mid-content on homepage feed

All slots use placeholder text until a Publisher ID (`ca-pub-XXXXXXXXXXXXXXXX`) is added.

## Navigation Architecture
- **Homepage (`index.html`):** Single-page app pattern — hero, reviews grid, tools table,
  guides list, news grid. Article content loads inline via `showArticle()` JS function.
- **Static pages:** `about.html`, `privacy.html`, `contact.html` are real separate pages
  (not JS-rendered). Links in topbar/footer point directly to these files.
- **Articles:** Future articles live in `articles/` as standalone HTML files using
  `article-template.html` as the starting point.

## Article Content Library (in js/main.js)
Three articles are currently embedded in the JS `articles` object:
1. `main` — Claude 4 Opus vs GPT-5 benchmark review
2. `cursor` — Cursor vs GitHub Copilot coding AI comparison
3. `prompt` — 2026 Prompt Engineering Handbook (guide)

## Key Rules for Future Sessions
1. Never rewrite a whole file — surgical edits only
2. Never delete anything unless explicitly told to
3. Announce new files before creating them and wait for approval
4. Commit after every task
5. If unsure, ask — never guess
6. Never touch `index.html` unless specifically instructed
7. Read CONTEXT.md and SESSION.md at the start of every session
8. At session end, update SESSION.md and commit everything

## Monetization Notes
- Primary: Google AdSense display ads (slots already in place)
- Secondary: Affiliate links (marked with disclosure when added)
- No sponsored scores or paid placements in rankings — editorial independence is the brand
