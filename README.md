# Abhi Jain — React + Tailwind Portfolio

A polished, JSON-driven personal website suitable for GitHub Pages. It uses React, Vite, Tailwind CSS, Framer Motion and Lucide icons.

## Highlights

- React + Vite source project, not a one-off static HTML dump.
- Tailwind-based responsive UI with dark/light theme toggle.
- Animated hero, glassmorphism cards, spotlight background, and motion-based section reveals.
- Project cards with search, domain filter, tag filter, featured toggle, and sorting by relevance/newest/oldest/title.
- Modal project details generated from `src/data/projects.json`.
- Blog cards generated from `src/data/blogs.json`.
- Experience, achievements, skills and contact sections generated from JSON.
- Command palette: press `Cmd/Ctrl + K` to search sections, projects and blogs.
- GitHub Actions workflow included for GitHub Pages deployment.

## Local setup

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite.

## Build

```bash
npm run build
npm run preview
```

## Deploy on GitHub Pages

1. Create a new GitHub repository, for example `abhijain565aj.github.io` or `portfolio`.
2. Copy all files from this folder into that repo.
3. Commit and push to `main`.
4. In GitHub, go to **Settings → Pages**.
5. Set **Source** to **GitHub Actions**.
6. The included `.github/workflows/deploy.yml` will build and deploy the website.

The Vite config uses `base: './'`, so assets work for both user pages and project pages.

## Editing content

Most visible content is in JSON files:

- `src/data/profile.json` — hero, education, links, stats
- `src/data/projects.json` — all project cards and filters
- `src/data/blogs.json` — blog cards
- `src/data/experience.json` — work, teaching, leadership
- `src/data/achievements.json` — achievement wall
- `src/data/skills.json` — skill groups

### Project schema

```json
{
  "id": "unique-id",
  "title": "Project title",
  "type": "Course Project / Self Project / Research / Internship",
  "domain": "AI/ML",
  "under": "Guide / Club / Organization",
  "time": "Spring 2025",
  "sortDate": "2025-04-01",
  "relevance": 95,
  "featured": true,
  "summary": "One-line project summary",
  "points": ["Bullet 1", "Bullet 2"],
  "tags": ["React", "C++", "Systems"],
  "links": {
    "github": "https://github.com/..."
  }
}
```

## Customization ideas

- Add a real `resume.pdf` in `public/` and change the hero resume button to `/resume.pdf`.
- Convert blog JSON entries to real Markdown pages using MDX or a simple markdown renderer.
- Add screenshots per project by adding an `image` field and rendering it inside `ProjectCard`.
- Add analytics only if you are comfortable with privacy implications.
