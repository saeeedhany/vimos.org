---
layout: default
---

<header>
    <h1 class="page-title">About This Project</h1>
</header>

<div class="about-section">
    <p>
        This is a documentation site for an operating system being built from scratch.
        The goal is to understand computing at the lowest level by implementing core OS primitives.
    </p>
</div>

<div class="philosophy">
    <h2>Philosophy</h2>
    <p>
        Building an operating system requires understanding every layer of abstraction,
        from bootloaders to process schedulers. This blog documents that journey.
    </p>
    
    <h3>Principles</h3>
    <p>
        Simplicity, minimalism, and learning through implementation.
        Every component is built to understand how it works, not just to make it work.
    </p>
</div>

<h2>Recent Updates</h2>
<ul class="post-list">
    {% for post in site.posts limit:5 %}
    <li class="post-item">
        <h3 class="post-title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h3>
        <div class="post-meta">{{ post.date | date: "%Y-%m-%d" }}</div>
        {% if post.excerpt %}
        <div class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</div>
        {% endif %}
    </li>
    {% endfor %}
</ul>
