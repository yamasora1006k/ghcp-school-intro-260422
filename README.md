
# 神山まるごと高専 90年代風紹介ページ

素の HTML / CSS / JavaScript で作成した、インターネット初期風のシングルページです。
「うるさい・使いにくい」90年代UIを再現しつつ、神山まるごと高専の概要を暫定情報として掲載しています。

## プロジェクト概要

- 構成: `index.html` 1枚 + `assets/css/style.css` + `assets/js/script.js`
- 配信方式: GitHub Pages（`main` ブランチの `/ (root)`）
- 画像方針: 外部画像なし（絵文字・インラインSVG・CSSのみ）
- Jekyll: 不使用（`.nojekyll` で無効化）

## 公開URL

- https://yamasora1006k.github.io/ghcp-school-intro-260422/

## ローカルでの確認方法

1. リポジトリを開く
2. `index.html` をブラウザで直接開く

ビルドや依存関係インストールは不要です。

## 掲載情報について

このページの学校情報は、一般公知の情報をベースにした暫定テキストです。
校長名・定員・学費など誤情報リスクの高い詳細は掲載していません。
正式情報は公式サイトをご確認ください。

## GitHub Pages 公開手順

1. `main` ブランチへ push
2. GitHub の `Settings` → `Pages` を開く
3. `Source` を `Deploy from a branch` に設定
4. `Branch` を `main`、フォルダを `/ (root)` に設定
5. 数分後に公開URLへアクセスして表示を確認

## 目視確認チェック

- ページロード時に alert が表示される
- ヘッダーの歓迎テキストが流れる（`<marquee>`）
- 点滅テキストが点滅する
- 星背景・毒々しい色のセクションが表示される
- カーソル追従キラキラが出る
- アクセスカウンターが 7 桁で表示され、再読込で増える
- ナビリンクで `#top` / `#about` / `#curriculum` / `#campus` に移動できる


