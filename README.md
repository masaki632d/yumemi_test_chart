# RESAS Graph App Sample

## 構成

- Web Application Framework
  - Next.js
- UI Library
  - React
- Language
  - TypeScript
- API
  - [RESAS API](https://opendata.resas-portal.go.jp/)
- HTTP Client (Lightweight)
  - ky
- Chart Library
  - Highcharts
- Styling
  - Emotion
- CSS Reset
  - ress

### Other Settings

- Code Formatter
  - prettier
- Static Code Analysis
  - ESLint
- Git Hooks
  - husky

## 環境構築

- RESAS API に登録し、API Key の取得が必要
- .env.example をコピーし、.env.local に取得した Key をセットする（初回のみ）

```bash
$ cp .env.example .env.local

NEXT_PUBLIC_RESAS_API_KEY=(取得した Key)
```

ライブラリ の インストール

```bash
$ yarn install
```

開発サーバ の 起動

```bash
$ yarn dev
```

ブラウザ で 表示確認

```
localhost:3000
```
