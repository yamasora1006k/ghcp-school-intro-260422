---
layout: page
lang: en
title: News
lead: Latest updates on campus events, projects, and admissions.
description: News list page for Kamiyama College introduction site.
alt_url: /news/
---
{% assign posts = site.news | where: "lang", page.lang | sort: "date" | reverse %}

<section>
  <div class="news-list">
    {% for post in posts %}
      {% include news_card.html post=post lang=page.lang %}
    {% endfor %}
  </div>
</section>
