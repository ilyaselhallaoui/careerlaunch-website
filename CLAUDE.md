# CLAUDE.md — careerlaunch.dev

Single source of truth for this site. If anything conflicts with this file, this file wins.

---

## 1. What this site is

CareerLaunch is a standalone SEO blog and product platform for CS students who want to get hired in DevOps, cloud, and AI roles. It is not officially branded as Ilyas Elhallaoui's personal site. The legal connection is in the Impressum only.

The site does three things:
1. Rank on Google for CS career queries and bring in organic traffic
2. Convert readers to the free CareerLaunch Skool challenge (coming soon, 6-month challenge)
3. Sell products (eBooks, career tools) when they launch

The site is built and deployed independently from ilyaselhallaoui.com. No shared infrastructure, shared CTA, or shared branding.

---

## 2. Target reader

CS student, 19-24, Business Informatics or Computer Science, Germany/Europe. Has a degree but feels unqualified. Wants DevOps, cloud, or AI. Applies for jobs and hears nothing. Doesn't have a portfolio. Doesn't know where to start.

---

## 3. Site structure

Active routes:

| Path | Purpose |
|---|---|
| `/` | Home: hero + recent posts + Skool CTA |
| `/blog` | Blog listing |
| `/blog/[slug]` | Individual blog post |
| `/products` | Products: coming soon |
| `/impressum` | Legal (German, legally binding) |
| `/robots.txt` | Robots |
| `/sitemap.xml` | Sitemap |

Nav: `Blog | Products`
Footer: Site links + Skool challenge link

---

## 4. Voice

See `AGENTS.md` for full voice rules. Summary:
- Write like a smart 20-year-old who actually did this
- Contractions always
- No em-dashes, no emojis, no buzzwords
- Opinions stated, not hedged
- Concrete examples over abstractions
- Headers sound like sentences said out loud

---

## 5. Design tokens

Same as ilyaselhallaoui.com. CSS lives at `public/styles/main.css`.

| Token | Value |
|---|---|
| `--bg` | `#0a0a0a` |
| `--ink` | `#f5f5f0` |
| `--muted` | `#9a958c` |
| `--amber` | `#d4a574` |
| `--max-prose` | `44rem` |
| `--max-layout` | `72rem` |

Typography: Inter (body), JetBrains Mono (headings, nav, eyebrows).

---

## 6. Blog content

Blog posts are markdown files in `src/content/blog/`. Each post has frontmatter: `title`, `description`, `pubDate`, `tags`.

For generating new posts, read `AGENTS.md` for the full instructions.

Source material for posts: video transcripts and eBooks in `../Marketing/_resources/transcribts/` and `../Marketing/ebooks/`.

---

## 7. Build and deploy

```bash
npm run build   # Astro writes to /site
```

Cloudflare Pages deploys from `/site` on push to main.

Pre-push checklist:
1. `npm run build` runs cleanly
2. `site/index.html` exists and has correct content
3. `site/sitemap.xml` includes blog posts
4. Every internal link resolves
5. No em-dashes, no emojis, no buzzwords
6. No incomplete sections

---

## 8. Products (coming soon)

Three eBooks are in production:
- Homelab to Hired (free lead magnet / Kubernetes homelab guide)
- CS Career Playbook
- AI-Augmented Engineer

Career analyzer tool (name TBD) is planned as a paid product integrated into the site.

When products launch, update `/products` to show real product cards with Stripe/Gumroad links.

---

## 9. What this site does NOT do

- No personal blog posts about Ilyas's life
- No YouTube embed hub (that's ilyaselhallaoui.com)
- No newsletter (Skool community is the list)
- No content in German (blog is English-only for SEO reach)
- No named author on blog posts
