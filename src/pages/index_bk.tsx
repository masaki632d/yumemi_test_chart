import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { useState, useEffect } from 'react'

import { Main } from '@components/HighCharts/Main'
import { Sample } from '@components/Sample'
import { Simulation } from '@components/Simulation'
import styles from '@styles/Home.module.scss'

// API取得のサンプル
export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://picsum.photos/v2/list?page=1&limit=5')
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}

// interface IndexPageProps {
//   data: {
//     id: string
//     author: string
//     download_url: string
//   }[]
// }

// interface Props {
//   data: {
//     users: string
//   }[]
// }

// export const getServerSideProps: GetServerSideProps = async () => {
//   const res = await fetch('http://localhost:3000/api/users')
//   const data = await res.json()
//   return { props: { data } }
// }

// export type DataProps = {
//   data: {
//     weather: string
//   }[]
// }

const Home = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('/api/users')
      const data = await res.json()
      setUsers(data.users)
    }
    fetchUsers()
  }, [])

  // 天気
  const [weather, setWeather] = useState('')
  useEffect(() => {
    const fetchWeather = async () => {
      const res = await fetch('/api/weather')
      const data = await res.json()
      setWeather(data)
    }
    fetchWeather()
  }, [])

  return (
    <>
      <Head>
        <title>RESAS Graph App</title>
        <meta
          name="description"
          content="都道府県ごとの人口遷移グラフ表示アプリ"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Rechartsコンポーネント */}
        <header style={{ textAlign: 'center' }}>
          <h1>都道府県別人口推移</h1>
        </header>
        <Simulation />

        {/* 正解 */}
        <Main />

        {/* 天気 */}
        {/* <div>
          <h1>天気</h1>
          {weather.weather && <p>東京の天気：{weather.weather[0].main}</p>}
        </div> */}

        {/* 実装中 */}
        <div>
          <ul>
            {users.map((user: any) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>

        {/* API取得のサンプル */}
        <>
          <h1>Fetching Data From API using NextJS.</h1>
          <p>
            API:<a href="https://picsum.photos/">https://picsum.photos/</a>
          </p>
          {/* <ul>
            {data.map(({ id, author, download_url }) => (
              <li key={id}>
                <p>{author}</p>
                <p>
                  <img src={download_url} alt={id} width={100} height={100} />
                </p>
              </li>
            ))}
          </ul> */}
        </>

        {/* ここからサンプル */}
        <Sample />
      </main>
    </>
  )
}

export default Home
