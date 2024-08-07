import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { options } from './highchartsOptions'
import { setupHighcharts } from './setupHighcharts'

type Props = {
  data: Highcharts.SeriesOptionsType[]
}

const PopulationGraph = ({ data }: Props) => {
  setupHighcharts()

  // グラフオプション に データをセット
  const graphOptions = {
    ...options,
    series: data,
  }

  return (
    <div data-layout="PopulationGraph">
      <HighchartsReact highcharts={Highcharts} options={graphOptions} />
    </div>
  )
}

export { PopulationGraph }
