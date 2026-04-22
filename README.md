
# 神山まるごと高専 紹介サイト（Jekyll / GitHub Pages）

自然モチーフと余白を重視した、日英対応の紹介サイト試作です。

- 日本語: `/`
- 英語: `/en/`
- ニュース: `_news` コレクション
- アニメーション: `IntersectionObserver` による `.reveal` 表示

## 技術スタック

- Jekyll（`github-pages` gem）
- GitHub Pages（`main` ブランチ / ルート公開）

## ローカル開発手順

1. 依存関係をインストール

    ```bash
    bundle install
    ```

2. ローカルサーバー起動

    ```bash
    bundle exec jekyll serve
    ```

3. ブラウザで確認

    - `http://127.0.0.1:4000/ghcp-school-intro-260422/`
    - `http://127.0.0.1:4000/ghcp-school-intro-260422/en/`

## GitHub Pages 公開手順

1. `main` ブランチへ push
2. GitHub リポジトリの Settings > Pages を開く
3. Source を `Deploy from a branch` に設定
4. Branch を `main`、フォルダを `/ (root)` に設定
5. 公開URLを確認

    - `https://yamasora1006k.github.io/ghcp-school-intro-260422/`

## 検証チェックリスト

- 日本語・英語ページが表示できる
- ヘッダー言語切替が対応ページへ遷移する
- 320 / 768 / 1280px でレイアウト崩れがない
- スクロール時の表示アニメーションが動作する
- `prefers-reduced-motion` 有効時にアニメーションが抑制される
- Lighthouse のアクセシビリティ・SEOを確認する

## 画像素材ポリシー

このリポジトリには第三者サイトから取得した画像を含めていません。

- `assets/images/` には内部確認用のプレースホルダー素材を配置
- 外部公開時は、許諾済みまたはライセンス確認済み素材へ差し替え


