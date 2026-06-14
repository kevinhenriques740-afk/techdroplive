# Session Log

<!-- Updated at the end of each session. Most recent entry at top. -->

## Session 2 — June 14, 2026

### What we built
- Fixed JS crash on homepage (`showPage` null-ref on missing `#static-page` div)
- Created 4 main nav pages: `reviews.html`, `guides.html`, `news.html`, `compare.html`
- Created 8 category pages in `articles/`: `chatgpt.html`, `claude.html`, `gemini.html`, `image-ai.html`, `coding-ai.html`, `video-ai.html`, `productivity.html`, `business.html`
- Fixed `index.html` nav: replaced all `onclick="showArticle()"` with real hrefs so active state follows the current page

### Files changed
- `js/main.js` — null guard for static-page element
- `index.html` — nav and cat-nav links converted to real hrefs
- `reviews.html` ← new
- `guides.html` ← new
- `news.html` ← new
- `compare.html` ← new
- `articles/chatgpt.html` ← new
- `articles/claude.html` ← new
- `articles/gemini.html` ← new
- `articles/image-ai.html` ← new
- `articles/coding-ai.html` ← new
- `articles/video-ai.html` ← new
- `articles/productivity.html` ← new
- `articles/business.html` ← new

### What's left to do
- Wire up article card links on homepage to real article files in `/articles/`
- Add real article content to the JS content library (or convert to standalone HTML files)
- Apply locked design tokens (DM Serif, DM Sans, chartreuse accent `#E8FF47`)
- Set up newsletter (Mailchimp or similar)
- Add Google AdSense Publisher ID when approved
- Deploy to Netlify
