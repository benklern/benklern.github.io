# benklern.github.io

Personal site of Noam Benkler. It's a single-page Jekyll site served by GitHub Pages, with a light and dark theme that follow the visitor's system setting.

## Editing content

| What | Where |
| --- | --- |
| Name, role, research statement, links, photo | `_config.yml` → `author:` |
| Publications | one markdown file per paper in `_publications/` |
| Selected work (home page) | set `featured: true`, `summary:` and optionally `image:` in a publication |
| Open-source projects | `_data/projects.yml` (section is hidden while the list is empty) |
| Education | `_data/education.yml` |
| CV | `_pages/cv.md` |
| Styles / mobile menu | `assets/css/site.css`, `assets/js/menu.js` |

Publication front matter:

```yaml
title: "Paper title"
date: 2024-05-20
venue: "Full venue name"
venue_short: "LREC-COLING 2024"   # shown in lists
authors: "Benkler, N. et al."     # "Benkler, N." is bolded automatically
paperurl: "https://…"
featured: true                    # optional
summary: "One sentence on why it matters."  # used when featured
image: "/images/pubs/figure.png"  # optional figure for the featured card
published: false                  # keep a draft off the site
```

## Running locally

```bash
bundle install
bundle exec jekyll serve
```
