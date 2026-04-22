---
name: github-pages
description: "GitHub Pages サイトを構築・設定・デプロイするためのスキル。Use when: GitHub Pages のセットアップ、Jekyll サイトの作成、_config.yml の設定、gh-pages ブランチやドキュメントフォルダーの設定、カスタムドメイン設定、GitHub Actions によるデプロイ自動化 を行うとき。"
argument-hint: "構築したいサイトの種類（Jekyll / 静的HTML / フレームワーク）と公開方法（ブランチ / Actions）を指定"
---

# GitHub Pages 構築スキル

## 概要

このスキルは GitHub Pages を使ってウェブサイトを構築・公開するための手順を提供します。  
Jekyll を使った静的サイト生成から、GitHub Actions による自動デプロイまでをカバーします。

公式ドキュメント: https://docs.github.com/ja/pages

---

## どの方法を選ぶか

| 状況 | 推奨方法 |
|------|---------|
| シンプルな HTML/Markdown | **ブランチから公開**（`main` or `gh-pages`） |
| Jekyll テーマを使いたい | **Jekyll + ブランチ公開** |
| ビルドステップが必要（React, Vue 等） | **GitHub Actions でデプロイ** |
| docs/ フォルダーで管理したい | **ブランチの `/docs` フォルダー** |

---

## 手順

### 1. リポジトリの設定確認

- リポジトリが **Public**（または GitHub Pro/Team 以上でプライベート可）であることを確認
- Settings → Pages → Source を設定

### 2. Jekyll サイトの初期構築

プロジェクトのルート（または `docs/`）に以下の最低限のファイルを作成する：

```
_config.yml        # サイト設定
index.md           # トップページ
Gemfile            # Ruby 依存関係（Jekyll 使用時）
```

**`_config.yml` の基本テンプレート:**

```yaml
title: "サイトタイトル"
description: "サイトの説明"
theme: minima          # GitHub Pages がサポートするテーマを指定
url: "https://<username>.github.io"
baseurl: "/<repository-name>"  # リポジトリサイトの場合
```

> ユーザーサイト（`<username>.github.io`）の場合は `baseurl: ""` のままにする。

**`Gemfile` の基本テンプレート（Jekyll 使用時）:**

```ruby
source "https://rubygems.org"
gem "github-pages", group: :jekyll_plugins
```

### 3. GitHub Pages でサポートされるテーマ

以下のテーマは `_config.yml` の `theme:` に直接指定できる：

- `minima`
- `jekyll-theme-cayman`
- `jekyll-theme-minimal`
- `jekyll-theme-slate`
- 他：https://pages.github.com/themes/

### 4. 公開設定（Settings → Pages）

1. **Source** を選択:
   - `Deploy from a branch` → ブランチ（`main` / `gh-pages`）とフォルダー（`/ (root)` or `/docs`）を選択
   - `GitHub Actions` → カスタム Actions ワークフローを使用

2. 保存後、`https://<username>.github.io/<repository>/` で公開される

### 5. GitHub Actions を使ったデプロイ（推奨：ビルドが必要な場合）

`.github/workflows/deploy.yml` を作成：

```yaml
name: Deploy GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup Pages
        uses: actions/configure-pages@v5
      - name: Build with Jekyll
        uses: actions/jekyll-build-pages@v1
        with:
          source: ./
          destination: ./_site
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

> Settings → Pages の Source を **GitHub Actions** に変更することを忘れずに。

### 6. カスタムドメイン設定（オプション）

1. `CNAME` ファイルをリポジトリルートに作成し、ドメインを記載（例: `www.example.com`）
2. DNS プロバイダーで CNAME レコードを `<username>.github.io` に向ける
3. Settings → Pages → Custom domain で設定し、**Enforce HTTPS** を有効化

---

## トラブルシューティング

| 症状 | 確認項目 |
|------|---------|
| ページが `404` | `baseurl` の設定ミス、または Pages が有効になっていない |
| スタイルが崩れる | `url` / `baseurl` の設定を確認 |
| ビルドエラー | Actions タブでログを確認、Jekyll のバージョン互換性を確認 |
| 変更が反映されない | キャッシュをクリア、デプロイが完了しているか確認 |
| `bundle install` が失敗 | Ruby / Bundler がインストールされているか確認 |

---

## 参考リンク

- [GitHub Pages 公式ドキュメント（日本語）](https://docs.github.com/ja/pages)
- [GitHub Pages サイトの作成](https://docs.github.com/ja/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Jekyll を使った GitHub Pages サイトの設定](https://docs.github.com/ja/pages/setting-up-a-github-pages-site-with-jekyll)
- [サポートされているテーマ一覧](https://pages.github.com/themes/)
- [GitHub Actions による Pages デプロイ](https://docs.github.com/ja/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)


