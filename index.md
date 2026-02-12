---
layout: default
title: vimOS
---

<header>
    <h1 class="page-title">vimOS</h1>
</header>

<section class="about-section">
    <p>
        vimOS is an experimental operating system built around modal interaction. It is not a GUI-first system,
        and it is not designed around mouse events or window choreography. It is designed for intentional,
        keyboard-only control.
    </p>
</section>

<section class="philosophy">
    <h2>Theory</h2>
    <p><strong>Modal interaction:</strong> every action is explicit and state-aware, reducing ambiguity in system control.</p>
    <p><strong>Objects instead of pointers:</strong> commands target named semantic objects, not hidden mutable handles.</p>
    <p><strong>Composable operations:</strong> small commands combine predictably into larger workflows.</p>
    <p><strong>Deterministic control:</strong> command sequences produce stable, inspectable outcomes.</p>
</section>

<section>
    <h2>Architecture Direction</h2>
    <p>
        The core interface is a semantic command engine. Input is interpreted as intention, then mapped into
        structured operations over system objects. The current implementation target is RISC-V, with a short-term
        focus on minimal theoretical execution and model validation.
    </p>
</section>

<section class="manifesto">
    <p><strong>The system is not event-driven.<br>It is intention-driven.</strong></p>
</section>

<section>
    <h2>Current Post</h2>
    <ul class="post-list">
        {% for post in site.posts limit:1 %}
        <li class="post-item">
            <h3 class="post-title"><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
            <div class="post-meta">{{ post.date | date: "%Y-%m-%d" }}</div>
            <div class="post-excerpt">{{ post.excerpt | strip_html | truncatewords: 28 }}</div>
        </li>
        {% endfor %}
    </ul>
</section>
