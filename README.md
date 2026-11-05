<div id='top' align="center">

An Portfolio site template, implemented with [Next.js](https://nextjs.org/) and [Framer Motion](https://www.framer.com/motion/). Styled with [Tailwind CSS](https://tailwindcss.com/). This is one of my portfolios, but I would be pleased if these codes helped others, so I published it as an open-source project. feel free to explore it, and if you need help, ask me. I would respond as soon as possible.

<p>
  To support me, please create
  <strong>Pull request</strong>
  and give <strong>star⭐</strong>
  to this repository.
  <br/>
  I appreciate your support in advance. ❤
</p>

<p>

![GitHub top language](https://img.shields.io/github/languages/top/AliBagheri2079/dennis-snellenberg-portfolio)&nbsp;
![GitHub last commit](https://img.shields.io/github/last-commit/AliBagheri2079/dennis-snellenberg-portfolio)&nbsp;
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/AliBagheri2079/dennis-snellenberg-portfolio)&nbsp;
![GitHub release (latest by date)](https://img.shields.io/github/v/release/AliBagheri2079/dennis-snellenberg-portfolio?display_name=tag)&nbsp;
![GitHub Repo stars](https://img.shields.io/github/stars/AliBagheri2079/dennis-snellenberg-portfolio?color=yellow)&nbsp;
![GitHub forks](https://img.shields.io/github/forks/AliBagheri2079/dennis-snellenberg-portfolio)

</p>

<p>

[Technologies](#-technologies) •
[Demo](#-demo) •
[Features](#-features) •
[Pages](#-pages) •
[Contributing](#-contributing) •
[Links](#-links)

</p>

<img
  src="./public/screen-record.gif"
  loading="lazy"
  alt="home page screenshot"
/>

</div>

## 🔧 Technologies

## 📝 Adding a blog post (the easy way)

Drop a Markdown file into `content/blog/` and push. That is the whole workflow: the filename becomes the URL, and it appears on /blog automatically.

`content/blog/my-new-post.md`

```
---
title: My New Post
date: 2026-11-05
tag: Writeup
excerpt: One line that shows in the blog list.
---

Regular markdown from here. Code blocks, lists, tables and images all work.
```

- `title`, `date`, `tag`, `excerpt` are optional. Missing title falls back to the filename.
- Images: put them in `public/images/` and reference them like `![alt](/images/my-image.png)`.
- URL: `/blog/my-new-post` (filename minus `.md`).

## 🛠️ Development

```bash
pnpm install
pnpm dev      # local dev at localhost:3000
pnpm build    # production build
pnpm start    # serve the production build
```

## 🗺️ Routes

| Route | What lives there |
| ----- | ---------------- |
| `/` | Home: hero, about, highlights reel, what I make, education, projects, honors |
| `/works/film` | Film gallery: Change (stills lightbox) + SFH Access (TikTok cuts) |
| `/works/cybersecurity` | Security work, preset style |
| `/works/devops` | Engineering work, preset style |
| `/blog` | Posts from `content/blog/*.md` |
| `/contact` | Dark page: ob3d.exe game + form |

Fonts (Departure Mono, Atkinson Hyperlegible) are SIL OFL licensed and self-hosted in `app/_fonts/files/`.
