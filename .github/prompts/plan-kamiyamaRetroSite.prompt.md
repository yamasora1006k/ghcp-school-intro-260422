# Plan: 神山まるごと高専 90年代風紹介ページ

素のHTML/CSS/JSで構成するシングルページ（`index.html`）を作り、GitHub Pages（`main` ブランチの `/`）から公開する。デザインはインターネット初期の「うるさい・使いにくい」UIを徹底再現。外部画像は使わず、絵文字・SVG・CSSで擬似再現する。掲載情報は一旦プレースホルダー的に一般情報を記載し、後から差し替え前提。

## Steps

### Phase 1: 土台
1. `.nojekyll` を作成（Jekyll処理を無効化し、素のHTMLとして配信）
2. `index.html` を新規作成。`<html lang="ja">`、MS Pゴシック/Comic Sans系フォント指定、タイトルバー用 `<title>` に ✨ など絵文字、`<meta>` は最低限

### Phase 2: ページ構造（index.html 内のセクション）
3. ヘッダー：虹色グラデーションWordArt風ロゴ（SVG+CSS）、`<marquee>` で「祝！神山まるごと高専へようこそ！！」など流す
4. ナビゲーション：左サイドに「フレーム風」ナビバー（`position: fixed` で左、右にコンテンツ）。ボタンはビベル枠の3Dボーダー。アイテム：トップ／学校紹介／カリキュラム／キャンパス・アクセス
5. メインコンテンツ（同一ページ内アンカーで遷移）
   - `#top`: ヒーロー。巨大点滅「神山まるごと高専」、下にアクセスカウンター風ウィジェット（7桁デジタル数字風）
   - `#about`: 学校紹介（理念：テクノロジー×デザイン×起業家精神、沿革：2023年4月開校、私立、5年制）
   - `#curriculum`: カリキュラム／学科（デザイン・エンジニアリング学科、全寮制、プロジェクトベース学習）
   - `#campus`: キャンパス／アクセス（徳島県名西郡神山町、旧校舎再生、自然環境）。アクセスは「徳島空港から…」のテキスト案内
6. フッター：「工事中」GIF風アイコン（CSS animationで黄黒縞の三角コーン）、Last updated、`<blink>`風「Best viewed with Netscape Navigator 4.0」

### Phase 3: 90年代UIスタイル（assets/css/style.css）
7. `body`: 黒 or 深紫背景＋星空SVGタイル、Comic Sans/MS Pゴシックフォントスタック
8. 見出し：虹色グラデ＋縁取り＋ドロップシャドウのWordArt風
9. `.blink` クラス：CSS `@keyframes` で点滅再現（`<blink>`相当）
10. セクション枠：ビベル3Dボーダー（`border-style: outset/inset`）、背景色を毎セクション違う毒々しい色（マゼンタ・ライム・シアン・イエロー）
11. 工事中アイコン：CSS only の黄黒縞ストライプ三角形アニメ
12. アクセスカウンター：黒背景＋赤デジタル数字風（monospace＋text-shadow）
13. リンクは青下線＋訪問済み紫（デフォルト強調）、ホバーで点滅

### Phase 4: うるさい挙動（assets/js/script.js）
14. ページロード時に `alert('ようこそ神山まるごと高専のホームページへ！！')` を表示
15. カーソル追従キラキラ：`mousemove` で ✨ 要素を生成し fade out
16. アクセスカウンター：`localStorage` で訪問回数をインクリメントし、7桁ゼロパディングで表示
17. `<marquee>` フォールバック：ブラウザ非対応時にJSで代替スクロール
18. タイトルバー点滅：`document.title` を一定間隔で切り替え

### Phase 5: 仕上げ
19. `README.md` を更新：プロジェクト説明、公開URL、ローカルでの開き方（ブラウザで `index.html` を開くだけ）、情報の出典が暫定である注意書き
20. GitHub Pages 公開手順を案内（Settings → Pages → Source: Deploy from a branch → `main` / `(root)`）

## Relevant files

- `index.html`（新規）— シングルページ本体。全セクションをアンカーリンクで繋ぐ
- `assets/css/style.css`（新規）— 90年代風スタイル。`@keyframes blink`、`outset`ボーダー、タイル背景
- `assets/js/script.js`（新規）— alert、カウンター（localStorage）、カーソルキラキラ、タイトル点滅
- `.nojekyll`（新規）— Jekyll処理無効化の空ファイル
- `README.md`（既存を更新）— 概要・URL・注意書き

## Verification

1. `index.html` をローカルブラウザで直接開き、以下を目視確認：
   - ロード時に alert ポップアップが出る
   - `<marquee>` テキストが流れる
   - 点滅テキストが点滅している
   - 背景がタイル/星空柄
   - カーソル追従キラキラが動く
   - アクセスカウンター数字が表示され、リロードで増える
   - ナビから各セクションへアンカー遷移できる
2. DevTools Console でJSエラーがないことを確認
3. `git push` 後、Settings → Pages で Source を `main` / `(root)` に設定し、数分後 `https://yamasora1006k.github.io/ghcp-school-intro-260422/` が表示されることを確認
4. スマホ幅（375px）で開き、破綻はあっても読めるレベルか確認（90年代UIなので最適化は最小限）

## Decisions

- **情報ソース**: 一般公知の情報（開校年・所在地・学科名・理念キーワード）のみ記載。校長名や具体的な人物名、細かい定員・学費額は誤情報リスクがあるため避け、「詳細は公式サイトをご確認ください」と案内。後で原稿差し替え可能な構造にする。
- **画像なし**: CSS・絵文字・インラインSVGのみで視覚表現。外部画像依存なしで動作保証。
- **シングルHTML**: マルチページ化せず `index.html` 1枚＋アンカー。90年代風の「長〜い1ページ」を演出。
- **デプロイ**: `.nojekyll` 付きで `main` ブランチ `/` から公開。GitHub Actionsは使わない。
- **Jekyll不使用**: repo memory の `jekyll-site-notes.md` は過去プロジェクトの残骸。今回は適用しない（後で削除を検討）。

## Post-execution

実装完了後、最終ヒアリング（追加要望・修正点）を再度実施する。
