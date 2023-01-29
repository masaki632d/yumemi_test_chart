import Head from 'next/head'

import { HomePage } from '@components/page/HomePage'

const Home = () => (
  <div>
    <Head>
      <title>RESAS Graph App</title>
      <meta
        name="description"
        content="都道府県ごとの人口遷移グラフ表示アプリ"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <HomePage />
  </div>
)

export default Home
