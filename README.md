# 宮城大学卒業研究・制作展2023

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
