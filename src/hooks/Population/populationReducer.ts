import { SeriesOptionsType } from 'highcharts'

import { PopulationCategory } from '@models/Population'

export const ADD_POPULATION = 'ADD_POPULATION'
export const REMOVE_POPULATION = 'REMOVE_POPULATION'

type Action = {
  type: string
  prefName: string
  payload?: PopulationCategory
}

export const populationReducer = (
  state: SeriesOptionsType[],
  action: Action
) => {
  switch (action.type) {
    case ADD_POPULATION: {
      const population: SeriesOptionsType = {
        type: 'line',
        name: action.prefName,
        data: action.payload?.data.map((d) => [d.year, d.value]),
      }
      return [...state, population]
    }
    case REMOVE_POPULATION:
      return state.filter((s) => s.name !== action.prefName)
    default:
      return state
  }
}
