import Highcharts, { SeriesOptionsType } from 'highcharts'
import HighchartsMore from 'highcharts/highcharts-more'
import HighchartsExporting from 'highcharts/modules/exporting'
import NoDataToDisplay from 'highcharts/modules/no-data-to-display'
import HighchartsReact from 'highcharts-react-official'
import { FC } from 'react'

type Props = {
  data: SeriesOptionsType[]
}

export const PopulationGraph: FC<Props> = ({ data }) => {
  if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts)
    NoDataToDisplay(Highcharts)
    HighchartsMore(Highcharts)
  }

  const options: Highcharts.Options = {
    title: {
      text: '人口遷移グラフ',
    },
    yAxis: {
      title: {
        align: 'high',
        offset: 0,
        text: '人口数',
        rotation: 0,
        y: -20,
      },
    },
    xAxis: {
      title: {
        align: 'high',
        text: '年度',
        x: 30,
        y: -20,
      },
      accessibility: {
        rangeDescription: 'Range: 1960 to 2045',
      },
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
    },
    series: data,
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 600,
          },
          chartOptions: {
            legend: {
              layout: 'horizontal',
              align: 'center',
              verticalAlign: 'bottom',
            },
          },
        },
      ],
    },
    lang: {
      noData: '表示するデータがありません',
      viewFullscreen: '全画面表示',
      printChart: 'グラフを印刷する',
      downloadPNG: 'PNGとしてダウンロード',
      downloadJPEG: 'JPRGとしてダウンロード',
      downloadPDF: 'PDFとしてダウンロード',
      downloadSVG: 'SVGとしてダウンロード',
    },
    noData: {
      style: {
        fontWeight: 'bold',
        fontSize: '16px',
      },
    },
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}
