# plan-kamiyamaCollegeIntroSite.prompt.md

## Plan: 神山まるごと高専 紹介サイト（GitHub Pages / Jekyll）

kamiyama.ac.jp を参考に、自然モチーフで余白たっぷりのミニマルデザイン、スクロール連動アニメーション付きの多言語（日本語 + 英語）紹介サイトを、Jekyll で構築し main ブランチのルートから GitHub Pages 公開する。

### フェーズ A: 基盤構築

1. Jekyll プロジェクト初期化: `Gemfile`（`github-pages` gem）、`_config.yml`（title、description、baseurl、url、lang、collections）、`.gitignore`（`_site/`、`.jekyll-cache/`、`vendor/`）。
2. サイト全体のレイアウトを作成: `_layouts/default.html`（共通 head / header / footer / 言語切替リンク）、`_layouts/page.html`（下層ページ共通）、`_layouts/post.html`（ニュース記事用）。
3. 共通パーシャル作成: `_includes/head.html`、`_includes/header.html`（ロゴ + ナビ + 言語スイッチ）、`_includes/footer.html`、`_includes/news_card.html`、`_includes/section_hero.html`。
4. デザイントークンを CSS カスタムプロパティで定義 (`assets/css/main.scss`): アースカラー（森の緑 `#3a5a40` / 若葉 `#a3b18a` / ベージュ `#f5f1e8` / 墨 `#22241f`）、セリフ系見出し + サンセリフ本文、寛容な余白スケール、和紙風微テクスチャ。
5. スクロール連動アニメーション実装 (`assets/js/reveal.js`): `IntersectionObserver` で `.reveal` 要素にフェードイン＋スライドアップを付与、`prefers-reduced-motion` を尊重。

### フェーズ B: コンテンツ作成（ja を主、en をミラー）

ページ構成（いずれも `index.md` 形式、日本語は `/`、英語は `/en/`）。本文は公開情報を参考に**私が要約・再構成**したオリジナル文章案として執筆。

1. トップ (`index.md` / `en/index.md`): ヒーロー（キャッチコピー「テクノロジー×デザインで、人間の未来を変える」調のオリジナル文言）→ 学校の存在意義 → 各ページへの誘導カード → 最新ニュース 3 件。
2. 学校概要 (`about/index.md`): ミッション、5 年一貫制高専、起業家精神、4 つの特徴セクション。
3. カリキュラム (`curriculum/index.md`): テクノロジー / デザイン / 起業家精神の 3 本柱 + 学年別学び。
4. キャンパスライフ (`campus-life/index.md`): 全寮制、神山町との関わり、食、コミュニティ。
5. 入学案内 (`admissions/index.md`): 募集要項概要、選考ステップ、スケジュール表、奨学金。
6. ニュース (`news/index.md` + `_news/` コレクション): 一覧ページ + 記事テンプレ（ダミー 3 件）。
7. アクセス・お問い合わせ (`access/index.md`): 神山町の地図埋め込み（OpenStreetMap iframe）、所在地、問い合わせフォーム（Formspree などの外部連携 or mailto のみ）。
8. ギャラリー (`gallery/index.md`): グリッド表示、Lightbox なしのシンプル版。

### フェーズ C: 画像素材の取り扱い

1. 今回は**外部公開を前提としない内部確認用の試作**として進める。また、依頼者が**神山まるごと高専の関係者**であることを踏まえ、kamiyama.ac.jp の掲載画像を参考素材として扱う。
2. 画像素材は、**デザイン確認・構成確認のための仮実装用素材**として、公式サイト上の画像をスクレイピングで取得して `assets/images/` に配置する方針とする。
3. ただし、この運用は**非公開・内部利用に限定**し、外部公開版を作成する場合は、必要に応じて正式な許諾確認済み素材や別素材へ差し替える前提とする。
4. 命名は `hero-forest.jpg` 等のように整理し、ページごとに再利用しやすい形で管理する。

### フェーズ D: i18n 実装

1. `_data/i18n/ja.yml` と `_data/i18n/en.yml` にナビラベル等の文言を外出し。
2. ヘッダーに言語スイッチ（日本語 ⇄ English）を設置、対応ページ間で相互リンク。
3. 英語ページは同じレイアウト / スタイルを共有し、`lang: en` を front matter に指定。

### フェーズ E: デプロイ・検証

1. リポジトリルートに Jekyll ファイルを配置、`main` ブランチで Push。
2. GitHub リポジトリ Settings → Pages で Source = `main` / `/ (root)` に設定。
3. ローカルで `bundle exec jekyll serve` による動作確認手順を README に追記。
4. Lighthouse / 手動確認（レスポンシブ、キーボード操作、`prefers-reduced-motion`、リンク切れ、OGP 表示）。

---

## Relevant files（新規作成）

- `Gemfile` / `Gemfile.lock` — `github-pages` gem
- `_config.yml` — サイト設定、collections(news)、defaults
- `_layouts/default.html`, `_layouts/page.html`, `_layouts/post.html`
- `_includes/head.html`, `header.html`, `footer.html`, `news_card.html`
- `assets/css/main.scss` — デザイントークン + レイアウト
- `assets/js/reveal.js` — IntersectionObserver によるスクロールアニメ
- `assets/images/` — 画像素材（**内部確認用として公式サイトから取得した画像を仮配置**）
- `index.md`, `about/index.md`, `curriculum/index.md`, `campus-life/index.md`, `admissions/index.md`, `news/index.md`, `access/index.md`, `gallery/index.md`
- `en/` 配下に上記と同構成
- `_news/2026-xx-xx-*.md` — ダミーニュース 3 件
- `_data/i18n/ja.yml`, `_data/i18n/en.yml`
- `README.md` — 既存に開発 / デプロイ手順を追記

## Verification

1. `bundle exec jekyll serve` で `http://127.0.0.1:4000/` と `/en/` の両方が表示されること。
2. ヘッダーの言語切替で ja ⇄ en の対応ページへ遷移できること。
3. ブラウザのウィンドウ幅 320 / 768 / 1280px でレイアウト崩れがないこと。
4. スクロール時にセクションがフェードインし、OS の「視差効果を減らす」設定時はアニメが抑制されること。
5. `main` push 後、GitHub Pages の公開 URL（`https://yamasora1006k.github.io/ghcp-school-intro-260422/`）で全ページが表示されること。
6. Lighthouse（アクセシビリティ・SEO）90 以上を目標に確認。

## Decisions

- 技術: Jekyll（GitHub Pages 標準ビルド）。
- 構成: マルチページ。
- 配色: 森の緑 + 若葉 + ベージュのアースカラー。
- 言語: `/` 日本語、`/en/` 英語のディレクトリ分離方式。
- デプロイ: main ブランチのルート。
- ニュースは Jekyll collection `_news` で実装。

## 含めない範囲

- CMS 連携、バックエンド、検索機能、コメント欄。
- **外部公開を前提とした状態での、権利確認未了の公式画像の継続利用。**

## Further Considerations（要確認）

1. 画像素材の扱い
   - A) **内部確認用として公式サイトからスクレイピングし仮配置する（今回の方針）**
   - B) 外部公開時に、許諾確認済み素材または別素材へ差し替える
2. 問い合わせフォーム方式
   - A) `mailto:` リンクのみ（最小構成、推奨）
   - B) Formspree など外部サービス連携（要アカウント）
3. カスタムドメイン
   - A) 使わない（`github.io` サブドメイン、推奨）
   - B) 使う（`CNAME` ファイル + DNS 設定、ドメイン名要指定）