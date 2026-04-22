# Requirements: 神山まるごと高専 90年代風紹介ページ

## 概要

素の HTML/CSS/JS で構築するシングルページ（`index.html`）を GitHub Pages（`main` ブランチのルート）から公開する。デザインはインターネット初期（1990 年代後半）の「うるさい・使いにくい」UI を徹底再現する。外部画像は使わず、絵文字・インライン SVG・CSS のみで視覚表現を行う。掲載内容は一般公知情報のみをプレースホルダー的に記載し、後から差し替え可能な構造にする。

## User Stories

### US-1: 訪問者として 90 年代風のトップページを体験したい

インターネット初期の雰囲気を体感できる紹介ページを閲覧し、神山まるごと高専の概要を把握したい。

### US-2: 訪問者として同一ページ内で主要情報にアクセスしたい

学校紹介／カリキュラム／キャンパス・アクセスの各情報に、ナビゲーションから素早く到達したい。

### US-3: 閲覧者としてどのブラウザ／端末でも表示崩れなく読みたい

モダンブラウザ（デスクトップ・モバイル）で開いたとき、演出は維持されつつも文字が読める状態で提供されたい。

### US-4: サイト運営者として GitHub Pages から静的公開したい

ビルド手順なしで、`main` ブランチ直下に置いたファイルがそのまま公開される状態にしたい。

### US-5: サイト運営者として掲載内容を後から差し替えたい

学校情報の正式な原稿を受領次第、HTML 本文のみを編集すれば反映できる構造にしたい。

## Requirements (EARS Notation)

### R-1 公開配信

- **R-1.1** THE SYSTEM SHALL GitHub Pages の `main` ブランチ `/`（ルート）から `index.html` を静的配信できる構成で提供する。
- **R-1.2** THE SYSTEM SHALL ルートに空ファイル `.nojekyll` を含め、Jekyll 処理を無効化する。
- **R-1.3** WHEN ユーザーが公開 URL（`https://yamasora1006k.github.io/ghcp-school-intro-260422/`）にアクセスした時、THE SYSTEM SHALL `index.html` を応答として返す。

### R-2 ページ構造

- **R-2.1** THE SYSTEM SHALL `index.html` を `<html lang="ja">` で宣言する。
- **R-2.2** THE SYSTEM SHALL 同一ページ内に `#top` / `#about` / `#curriculum` / `#campus` の 4 セクションをアンカー付きで配置する。
- **R-2.3** THE SYSTEM SHALL 左側固定のナビゲーションと、右側のメインコンテンツ領域の 2 カラム構成で描画する。
- **R-2.4** THE SYSTEM SHALL ヘッダーに虹色 WordArt 風ロゴと `<marquee>` の歓迎メッセージを含める。
- **R-2.5** THE SYSTEM SHALL フッターに「工事中」三角コーン風アイコン、`Last updated` 表示、および「Best viewed with Netscape Navigator 4.0」メッセージを含める。
- **R-2.6** WHEN ユーザーがナビゲーションリンクをクリックした時、THE SYSTEM SHALL 対応セクションへスムーズまたは即時にアンカー遷移する。

### R-3 コンテンツ（暫定情報）

- **R-3.1** THE SYSTEM SHALL `#about` セクションに理念（テクノロジー×デザイン×起業家精神）、開校年（2023 年 4 月）、私立・5 年制である旨を記載する。
- **R-3.2** THE SYSTEM SHALL `#curriculum` セクションにデザイン・エンジニアリング学科、全寮制、プロジェクトベース学習である旨を記載する。
- **R-3.3** THE SYSTEM SHALL `#campus` セクションに所在地（徳島県名西郡神山町）、旧校舎再生、自然環境、徳島空港からのアクセステキストを記載する。
- **R-3.4** THE SYSTEM SHALL 校長名・具体的な定員・学費などの誤情報リスクが高い項目を掲載せず、「詳細は公式サイトをご確認ください」と明示する。
- **R-3.5** THE SYSTEM SHALL 外部画像ファイルを参照せず、絵文字・インライン SVG・CSS のみで装飾する。

### R-4 90 年代風ビジュアル

- **R-4.1** THE SYSTEM SHALL 背景を黒または深紫に、星空柄の SVG タイルを敷く。
- **R-4.2** THE SYSTEM SHALL フォントスタックに Comic Sans MS / MS P ゴシック等の 90 年代風書体を指定する。
- **R-4.3** THE SYSTEM SHALL 見出しに虹色グラデーション、縁取り、ドロップシャドウを適用した WordArt 風スタイルを適用する。
- **R-4.4** THE SYSTEM SHALL `.blink` クラスを CSS `@keyframes` で点滅させ、`<blink>` 相当の挙動を再現する。
- **R-4.5** THE SYSTEM SHALL 各セクション枠に `border-style: outset` / `inset` を用いたビベル 3D ボーダーを適用する。
- **R-4.6** THE SYSTEM SHALL セクションごとに異なる毒々しい背景色（マゼンタ／ライム／シアン／イエロー系）を適用する。
- **R-4.7** THE SYSTEM SHALL 工事中アイコンを CSS のみで描画した黄黒縞ストライプ三角形として実装し、アニメーションさせる。
- **R-4.8** THE SYSTEM SHALL アクセスカウンターを黒背景＋赤デジタル数字風（monospace + text-shadow）で表示する。
- **R-4.9** THE SYSTEM SHALL リンクのデフォルト色を青下線、訪問済みを紫とし、ホバー時に点滅させる。

### R-5 うるさい挙動（JavaScript）

- **R-5.1** WHEN ページが初回ロードされた時、THE SYSTEM SHALL `alert('ようこそ神山まるごと高専のホームページへ！！')` を表示する。
- **R-5.2** WHEN ユーザーがマウスを動かした時、THE SYSTEM SHALL カーソル追従で ✨ 要素を生成し、短時間でフェードアウトさせる。
- **R-5.3** THE SYSTEM SHALL `localStorage` を用いて訪問回数をインクリメントし、7 桁ゼロパディングでアクセスカウンターに表示する。
- **R-5.4** IF ブラウザが `<marquee>` を未対応である場合、THEN THE SYSTEM SHALL JS による代替水平スクロールを実行する。
- **R-5.5** THE SYSTEM SHALL `document.title` を一定間隔（例: 1 秒）で切り替え、タイトルバー点滅を再現する。
- **R-5.6** IF `localStorage` が利用不可である場合、THEN THE SYSTEM SHALL カウンターを `0000001` 固定で表示し、JS エラーを投げない。

### R-6 非機能要件

- **R-6.1** THE SYSTEM SHALL 外部 CDN・外部フォント・外部画像への依存を持たない（すべて同一リポジトリ内の静的ファイルで完結）。
- **R-6.2** THE SYSTEM SHALL DevTools Console に JavaScript エラーを出力しない。
- **R-6.3** WHERE 画面幅が 375px 以上の環境において、THE SYSTEM SHALL レイアウトが破綻しても本文テキストが読める状態を維持する。
- **R-6.4** THE SYSTEM SHALL `README.md` に概要・公開 URL・ローカルでの開き方・情報出典が暫定である旨・GitHub Pages 設定手順を記載する。

## Out of Scope

- 多ページ化、ルーティング、SPA フレームワーク（React/Vue 等）の利用
- ビルドツール（Webpack/Vite 等）、Jekyll、GitHub Actions によるデプロイ
- 正式な学校情報（校長名、定員、学費等）の掲載
- 外部 API 連携・フォーム送信・問い合わせ機能
- アクセシビリティ最適化（90 年代 UI 再現を優先、最小限の可読性のみ確保）

## Confidence Score

**90%** — 要件は既存プロンプトで明確に定義済み。未確定要素は暫定原稿の文言選択のみで、実装上の不明点は少ない。
