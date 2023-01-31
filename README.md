# RESAS Graph App Sample

## 構成

- Next.js
- TypeScript

- API
  - [RESAS API](https://opendata.resas-portal.go.jp/)

## 環境構築

- RESAS API に登録し、API Key の取得が必要
- .env.example をコピーし、.env.local に取得した Key をセットする（初回のみ）

```bash
$ cp .env.example .env.local
```

ライブラリ の インストール

```bash
$ yarn install
```

開発サーバ の 起動

```
$ yarn dev
```

ブラウザ で 表示確認

```
localhost:3000
```
