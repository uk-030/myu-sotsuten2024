# 宮城大学卒業研究・制作展2024

宮城大学価値創造デザイン学類 卒業研究・制作展 2024 webサイト

## 本番デプロイ方法

`pnpm build`コマンドを実行。
buildディレクトリに書き出された本番ソースコードをサーバーにアップ。

## 開発環境構築

### 前提条件

- [node.js](https://nodejs.org/)
- pnpm
- git

### 構築手順

1. リポジトリをクローン
   ```bash
   git clone https://github.com/uk-030/myu-sotsuten2024.git
   ```
2. クローンしたフォルダディレクトリへ移動
   ```bash
   cd myu-sotsuten2024
   ```
3. パッケージインストール
   ```bash
   pnpm install
   ```
4. 開発サーバー起動
   ```bash
   pnpm dev
   ```
5. `http://localhost:5173`にアクセス

## コマンド

```bash
pnpm dev         # 開発サーバー起動
pnpm build       # 本番ソースコード書き出し
pnpm preview     # 本番ソースコード起動
pnpm check       # コートのテスト
pnpm check:watch # コードの監視
pnpm lint        # コードのルールチェック
pnpm format      # コードフォーマット
```

## 使用技術

- [TypeScript](https://www.typescriptlang.org/)
- [Svelte / SvelteKit](https://svelte.dev/)
- [tailwindcss](https://tailwindcss.com/)

## 前任者より

正直Reactとかに直した方がいいと思います。2年前にWeb担当の気が触れてSvelteで開発してあります。ごめんネ。
ローディングアニメーションを独自でつくってたのは前任者のみ（2023・2024担当）で、それ以前は共通のアニメーションの色替えで使いまわしていたものがありました。
データは持ってませんが、サーバーから引いてくれば使いまわせると思うので、それぞれの年の担当者の得意分野のうちで、無理せずよいものを作ってください。
Web関係後輩のヘルプなら対応しますので、困ったらお気兼ねなくご連絡くださいませ。
- アニメーション関係を一切引き継ぎ書に書かなかった者より。
- 2024年度卒業生・トダ（y-toda@auk-lab.design 直連絡くれてOKですし、佐藤先生とかに聞いたら連絡繋いでもらえると思います！）
