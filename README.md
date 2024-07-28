# RESAS Graph App - 都道府県ごとの人口遷移グラフ表示アプリ

## 作成したアプリケーション

- https://yumemi-test-chart.vercel.app/

## 開発

### 構成

| カテゴリ                  | 名前                                  |
| ------------------------- | ------------------------------------- |
| Web Application Framework | Next.js                               |
| UI Library                | React                                 |
| Programming Language      | TypeScript                            |
| Chart Library             | Highcharts                            |
| Styling                   | Emotion                               |
| CSS Reset                 | ress                                  |
| HTTP Client               | ky (軽量)                             |
| Format                    | ESLint, Prettier, lint-staged(+husky) |
| Package Manager           | Yarn                                  |
| Deploy                    | Vercel                                |

### 環境構築

#### RESAS API から API Key を取得

- RESAS API に登録し、API Key の取得が必要
- .env.example をコピー

```bash
$ cp .env.example .env.local
```

- .env.local に、取得した API Key をセットする

```bash
NEXT_PUBLIC_RESAS_API_KEY=(取得した API Key)
```

#### ライブラリ の インストール

```bash
$ yarn install
```

#### 開発サーバ の 起動

```bash
$ yarn dev
```

#### ブラウザ で 表示確認

- localhost:3000

#### フォーマット

```bash
$ yarn formt
```

## 本番環境

### Vercel でデプロイする場合

- デプロイ時の画面で、環境変数 として API Key を登録する手順 がスムーズ。
- デプロイ後に設定する場合は、Settings > Environment Variables から、
- env.local で設定していた Key / Value を追加
- この設定だけでは反映されないので、再デプロイ（commit/push でも可）する必要あり

```bash
Key：NEXT_PUBLIC_RESAS_API_KEY
Value：(取得した API Key)
```
