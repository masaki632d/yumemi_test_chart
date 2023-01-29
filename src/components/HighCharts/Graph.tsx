import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { FC } from 'react'

type Props = {
  populationdata: {
    prefName: string
    data: { year: number; value: number }[]
  }[]
}

// 選んだ都道府県の人口推移グラフを表示するコンポーネント
export const Graph: FC<Props> = ({ populationdata }) => {
  const series: Highcharts.SeriesOptionsType[] = []
  const categories = []

  for (const population of populationdata) {
    const data = []

    for (const populationData of population.data) {
      data.push(populationData.value)
      categories.push(String(populationData.year))
    }

    series.push({
      type: 'line',
      name: population.prefName,
      data: data,
    })
  }

  const options: Highcharts.Options = {
    title: {
      text: '総人口推移',
    },
    xAxis: {
      title: {
        text: '年度',
      },
      categories: categories,
    },
    yAxis: {
      title: {
        text: '人口数',
      },
    },

    // 都道府県を一つも選んでいない場合 との分岐条件
    series:
      series.length === 0
        ? [{ type: 'line', name: '都道府県名', data: [] }]
        : series,
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}
