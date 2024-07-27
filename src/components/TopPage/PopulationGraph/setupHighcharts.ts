import Highcharts from 'highcharts'
import HighchartsMore from 'highcharts/highcharts-more'
import HighchartsExporting from 'highcharts/modules/exporting'
import NoDataToDisplay from 'highcharts/modules/no-data-to-display'

/**
 * Highchartsの拡張モジュールとプラグインを設定する関数
 */
export const setupHighcharts = () => {
  if (typeof Highcharts === 'object') {
    // チャートタイプを使用するためのモジュールを読み込む
    HighchartsMore(Highcharts)

    // チャートのエクスポート機能を有効にするモジュールを読み込む
    HighchartsExporting(Highcharts)

    // データがない場合 の メッセージ表示機能を有効にするモジュールを読み込む
    NoDataToDisplay(Highcharts)
  }
}
