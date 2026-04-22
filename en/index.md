---
layout: default
lang: en
title: Kamiyama College Introduction
description: English top page introducing Kamiyama College, its curriculum, and admissions.
alt_url: /
---
{% assign t = site.data.i18n[page.lang] %}
{% include section_hero.html
  kicker="Kamiyama College"
  title="Reframing Human Futures Through Technology and Design"
  lead="Five years of immersive learning in Kamiyama, where students prototype ideas, test assumptions, and turn concepts into social impact."
  cta_url="/en/about/"
  cta_label="Learn About the School"
  image="/assets/images/hero-forest.svg"
  image_alt="Abstract illustration inspired by mountain forest and mist"
%}

<section class="section reveal">
  <div class="container">
    <header class="section-header">
      <p class="eyebrow">Why This School</p>
      <h2>Our Purpose</h2>
    </header>
    <p class="lead">
      Kamiyama College is designed as a place where students learn by creating value in real contexts.
      By combining technology, design, and entrepreneurship, learners build both strategic thinking and practical implementation skills.
    </p>
    <ul class="stats reveal">
      <li><strong>Five-year integrated program</strong> from foundations to real-world implementation.</li>
      <li><strong>Residential environment</strong> that makes collaboration part of daily life.</li>
      <li><strong>Local engagement</strong> through projects connected to Kamiyama community needs.</li>
    </ul>
  </div>
</section>

<section class="section">
  <div class="container">
    <header class="section-header reveal">
      <p class="eyebrow">Explore</p>
      <h2>Discover Each Section</h2>
    </header>
    <div class="grid-cards">
      <a class="card-link reveal" href="{{ '/en/about/' | relative_url }}">
        <h3>About</h3>
        <p>Mission, structure, and key characteristics.</p>
      </a>
      <a class="card-link reveal" href="{{ '/en/curriculum/' | relative_url }}">
        <h3>Curriculum</h3>
        <p>Three pillars: technology, design, and entrepreneurship.</p>
      </a>
      <a class="card-link reveal" href="{{ '/en/campus-life/' | relative_url }}">
        <h3>Campus Life</h3>
        <p>Residential learning and connections with town life.</p>
      </a>
      <a class="card-link reveal" href="{{ '/en/admissions/' | relative_url }}">
        <h3>Admissions</h3>
        <p>Application flow, schedule, and financial support.</p>
      </a>
      <a class="card-link reveal" href="{{ '/en/news/' | relative_url }}">
        <h3>News</h3>
        <p>Latest announcements and event updates.</p>
      </a>
      <a class="card-link reveal" href="{{ '/en/access/' | relative_url }}">
        <h3>Access</h3>
        <p>Map, location information, and contact details.</p>
      </a>
      <a class="card-link reveal" href="{{ '/en/gallery/' | relative_url }}">
        <h3>Gallery</h3>
        <p>Simple visual grid of learning and campus life.</p>
      </a>
    </div>
  </div>
</section>

{% assign latest_news = site.news | where: "lang", page.lang | sort: "date" | reverse | slice: 0, 3 %}
<section class="section">
  <div class="container">
    <header class="section-header reveal">
      <p class="eyebrow">{{ t.labels.news }}</p>
      <h2>{{ t.home.latest_news }}</h2>
    </header>
    <div class="news-list">
      {% for post in latest_news %}
        {% include news_card.html post=post lang=page.lang %}
      {% endfor %}
    </div>
    <p class="reveal" style="margin-top: 1.25rem;">
      <a class="button" href="{{ '/en/news/' | relative_url }}">{{ t.home.view_all_news }}</a>
    </p>
  </div>
</section>
