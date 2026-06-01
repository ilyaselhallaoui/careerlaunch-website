# AGENTS.md — CareerLaunch Blog Agent

This file is read by AI agents (Claude Code) that generate new blog posts for careerlaunch.dev. Read this completely before generating any content.

---

## What this site is

CareerLaunch is a standalone SEO blog for CS students who want to get hired in DevOps, cloud, and AI roles. It is not officially affiliated with any personal brand, but the content is based on real experience from a junior DevOps engineer.

Target reader: CS student, 19-24, studying Business Informatics or Computer Science, probably in Germany or Europe. Has a degree but feels behind. Wants to get into DevOps, cloud, or AI. Watches YouTube tech content. Doesn't know exactly where to start.

Goal of each post: rank on Google for specific CS career queries, give concrete actionable advice, drive readers to the free CareerLaunch Skool challenge.

---

## Where source material lives

Primary sources (read these to generate posts):

- `/mnt/c/Users/ilyas/Documents/Ilyas's Vault/Output/Marketing/_resources/transcribts/` — Video transcripts (video1.md, video2.md, etc.)
- `/mnt/c/Users/ilyas/Documents/Ilyas's Vault/Output/Marketing/ebooks/` — Three eBooks in progress:
  - `1-ai-augmented-engineer/` — Being an AI-augmented engineer
  - `2-career-playbook/` — CS career playbook
  - `3-homelab-to-hired/` — Homelab to hired (Kubernetes homelab guide)
- `/mnt/c/Users/ilyas/Documents/Ilyas's Vault/Output/Marketing/_resources/voice-and-frameworks.md` — Voice and argument frameworks
- `/mnt/c/Users/ilyas/Documents/Ilyas's Vault/Output/Marketing/_resources/avatar-archetype-niche.md` — Reader avatar details
- `/mnt/c/Users/ilyas/Documents/Ilyas's Vault/Output/Marketing/_resources/ilyas-learnings.md` — Personal learnings and stories

Secondary sources (reference if relevant):
- `/mnt/c/Users/ilyas/Documents/Ilyas's Vault/Knowledge/` — Vault notes on DevOps topics (Docker, Kubernetes, Ansible, Terraform, etc.)

---

## How to generate a new blog post

### Step 1: Pick a topic

Good topics come from:
- Video transcripts (each video is usually one strong post)
- eBook chapters (each chapter can become a standalone post)
- Questions CS students ask repeatedly (from `_resources/ama/questions.md` if it exists)

Target a specific search query. Before writing, identify:
- Primary keyword (e.g., "how to get a devops job as a cs student")
- Secondary keywords (2-3 related terms)
- Search intent (informational, most posts here are informational)

Good topic clusters:
- CS degree + job market (already covered: see `your-cs-degree-wont-get-you-hired.md`)
- Obsession / mindset for CS careers (covered: see `obsession-is-the-missing-skill.md`)
- Homelab guide for beginners
- Kubernetes explained for CS students
- How to use AI to learn DevOps faster
- What is Infrastructure as Code (Terraform, Ansible)
- DevOps roadmap 2026
- How to get a job without a finished degree

### Step 2: Write the post

**File location:** `src/content/blog/[slug].md`

**Filename:** kebab-case, descriptive, matches the primary keyword. Max 6 words.

**Frontmatter format:**
```yaml
---
title: "lowercase, conversational title. max 12 words."
description: "One concrete sentence describing what the reader learns. 150-160 chars for SEO."
pubDate: "YYYY-MM-DD"
tags: ["tag1", "tag2", "tag3"]
---
```

**Post structure:**
1. Open with 1-3 short paragraphs that frame the problem. No fluff. State the tension immediately.
2. Body: 3-6 H2 sections. Each section makes one concrete point. No padding.
3. Close with a single CTA line pointing to the Skool challenge.

**Target length:** 800-1400 words. Never pad to hit a word count.

---

## Voice rules (non-negotiable)

- Write like a smart 20-year-old who has actually done this, not like a content marketer
- Contractions always: I'm, won't, you'll, didn't, can't
- No em-dashes. Use commas, periods, or rewrite
- No emojis
- No buzzwords: synergy, leverage (as verb), ecosystem, world-class, cutting-edge, revolutionary, game-changing, robust, holistic
- No filler phrases: "let's dive in", "in this article we will", "the good news is", "at the end of the day", "in today's fast-paced world", "in conclusion"
- No rhetorical questions as transitions
- No perfect AI paragraph structures ("First... Second... Third...")
- No paragraph that opens with a definition of the topic
- Opinions stated, not hedged. Not "you might consider" but "do this"
- Concrete examples over abstractions. Real tools, real numbers, real outcomes
- Short sentences for impact. Vary length deliberately
- Headers sound like something said out loud. Not "Understanding Kubernetes Architecture" but "what kubernetes actually is"
- One idea per paragraph
- Never start an article with "I" as the first word

### Good header examples
- "the three skills that actually matter"
- "how obsession actually develops"  
- "what you're probably doing wrong"
- "the roadmap nobody gives you"
- "why courses don't work alone"

### Bad header examples
- "Understanding DevOps Career Pathways"
- "Key Strategies for Technical Skill Development"
- "Introduction to Kubernetes for Beginners"
- "Conclusion"

### CTA style (end of article only)
One line. Casual. No pressure.

Good: "If this was useful, the free CareerLaunch challenge is on Skool. Apply here."
Bad: "SUBSCRIBE NOW to transform your career!"

---

## What NOT to do

- Don't name or directly reference the author. The site has no named author.
- Don't write from "we" if it sounds corporate. Write from a clear perspective without attaching a name.
- Don't mention careerlaunch.dev as "this website" in a self-promotional way
- Don't create posts that duplicate existing content (check existing slugs first)
- Don't publish incomplete posts. Every section should be finished.
- Don't write generic content that could be about any tech career. Be specific to DevOps / cloud / AI.
- Don't write for advanced practitioners. The reader is a CS student, not a senior SRE.

---

## After writing the post

1. Check: does the frontmatter have all required fields?
2. Check: does the post open without the word "I"?
3. Check: are there any em-dashes or emojis?
4. Check: does the slug already exist in `src/content/blog/`?
5. Build the site: `npm run build` from `careerlaunch-website/`
6. Verify `site/` was updated cleanly

---

## Deploying

The `site/` directory deploys automatically via Cloudflare Pages on push to main. Do not manually edit `site/` — it's a build artifact.

Push workflow:
```bash
npm run build
git add src/content/blog/your-new-post.md site/
git commit -m "add post: [title]"
git push
```
