---
layout: default
title: Post
permalink: /posts/
---

<header>
    <h1 class="page-title">Project Post</h1>
</header>

<ul class="post-list">
{% for post in site.posts %}
<li class="post-item">
    <div class="post-meta">{{ post.date | date: "%Y-%m-%d" }}</div>
    <h3 class="post-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
    <div class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 40 }}</div>
</li>
{% endfor %}
</ul>
