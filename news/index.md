---
layout: page
lang: ja
title: ニュース
lead: 学内イベントやプロジェクト、募集関連の最新情報を掲載しています。
description: 神山まるごと高専のニュース一覧ページです。
alt_url: /en/news/
---
{% assign posts = site.news | where: "lang", page.lang | sort: "date" | reverse %}

<section>
  <div class="news-list">
    {% for post in posts %}
      {% include news_card.html post=post lang=page.lang %}
    {% endfor %}
  </div>
</section>
