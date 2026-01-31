---
layout: default
title: Posts
---

<header>
    <h1 class="page-title">All Posts</h1>
</header>

<ul class="post-list">
    {% for post in site.posts %}
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
