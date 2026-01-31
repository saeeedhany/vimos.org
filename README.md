# OS Journey Blog

A minimal Jekyll blog for documenting an operating system development journey.

## Setup

1. Install Ruby and Bundler
2. Install dependencies:
   ```bash
   bundle install
   ```

3. Run the development server:
   ```bash
   bundle exec jekyll serve
   ```

4. Visit `http://localhost:4000`

## Creating Posts

Create new markdown files in the `_posts` directory with the naming format:
```
YYYY-MM-DD-title.md
```

Example post structure:
```markdown
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD
---

Your content here...
```

## Features

- **Sidebar Navigation** - Easy access to main sections
- **Table of Contents** - Auto-generated for blog posts from h2/h3 headers
- **Dark/Light Theme Toggle** - Persistent theme selection
- **GitHub Links** - Quick access to repositories
- **Minimal Design** - Tech-focused, distraction-free layout
- **Responsive** - Works on mobile and desktop
- **Clean Typography** - Optimized for code and reading

## Customization

### Site Information
Edit `_config.yml` to change site title and description.

### GitHub Links
Update the GitHub links in `_layouts/default.html` (lines with `github.com/yourusername`)

### Styling
Modify `assets/css/main.css` for styling changes.

### Footer
Footer includes copyright to Saeed - edit in `_layouts/default.html` if needed.

## Structure

```
.
├── _config.yml           # Site configuration
├── _layouts/             # Page layouts
│   ├── default.html      # Main layout with sidebar
│   └── post.html         # Blog post layout
├── _posts/               # Blog posts go here
├── assets/
│   ├── css/
│   │   └── main.css      # Main stylesheet
│   └── js/
│       ├── theme.js      # Theme toggle
│       └── toc.js        # Table of contents
├── index.md              # Homepage
└── posts.md              # Posts archive
```
