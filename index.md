---
layout: default
lang: ja
title: 神山まるごと高専 紹介サイト
description: 神山まるごと高専の学び、暮らし、入学情報をまとめた日本語トップページです。
alt_url: /en/
---
{% assign t = site.data.i18n[page.lang] %}
{% include section_hero.html
  kicker="Kamiyama College"
  title="テクノロジーとデザインで、地域と世界の未来を編みなおす"
  lead="神山町の自然と人の営みの中で、実装力と構想力を育てる5年間。課題に向き合い、つくり、試し、社会に届ける学びを実践します。"
  cta_url="/about/"
  cta_label="学校概要を見る"
  image="/assets/images/hero-forest.svg"
  image_alt="山あいの朝霧をモチーフにした抽象ビジュアル"
%}

<section class="section reveal">
  <div class="container">
    <header class="section-header">
      <p class="eyebrow">Why This School</p>
      <h2>学校の存在意義</h2>
    </header>
    <p class="lead">
      神山まるごと高専は、専門知識を学ぶだけの場所ではなく、地域社会のリアルな課題に向き合いながら、
      未来の当たり前を設計するための実践の場です。テクノロジー、デザイン、起業家精神を往復し、
      「問いを立てる力」と「形にする力」を同時に育てます。
    </p>
    <ul class="stats reveal">
      <li><strong>5年一貫</strong>で、基礎から実装、社会実装までを段階的に深める。</li>
      <li><strong>全寮制</strong>により、学内外での共同生活と共創を日常化する。</li>
      <li><strong>地域接続</strong>を軸に、神山町との継続的なプロジェクトを展開する。</li>
    </ul>
  </div>
</section>

<section class="section">
  <div class="container">
    <header class="section-header reveal">
      <p class="eyebrow">Explore</p>
      <h2>各ページを見る</h2>
    </header>
    <div class="grid-cards">
      <a class="card-link reveal" href="{{ '/about/' | relative_url }}">
        <h3>学校概要</h3>
        <p>ミッションと4つの特徴、学びの骨格を紹介。</p>
      </a>
      <a class="card-link reveal" href="{{ '/curriculum/' | relative_url }}">
        <h3>カリキュラム</h3>
        <p>テクノロジー・デザイン・起業家精神の3本柱。</p>
      </a>
      <a class="card-link reveal" href="{{ '/campus-life/' | relative_url }}">
        <h3>キャンパスライフ</h3>
        <p>寮生活、神山町との関わり、日々のコミュニティ。</p>
      </a>
      <a class="card-link reveal" href="{{ '/admissions/' | relative_url }}">
        <h3>入学案内</h3>
        <p>募集概要、選考フロー、スケジュールを確認。</p>
      </a>
      <a class="card-link reveal" href="{{ '/news/' | relative_url }}">
        <h3>ニュース</h3>
        <p>最新のお知らせとイベント情報を掲載。</p>
      </a>
      <a class="card-link reveal" href="{{ '/access/' | relative_url }}">
        <h3>アクセス</h3>
        <p>神山町までの地図と問い合わせ窓口。</p>
      </a>
      <a class="card-link reveal" href="{{ '/gallery/' | relative_url }}">
        <h3>ギャラリー</h3>
        <p>学びと暮らしの雰囲気を写真グリッドで紹介。</p>
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
      <a class="button" href="{{ '/news/' | relative_url }}">{{ t.home.view_all_news }}</a>
    </p>
  </div>
</section>
