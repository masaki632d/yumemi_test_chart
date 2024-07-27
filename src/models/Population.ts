export type Population = {
  year: number
  value: number
}

export type PopulationCategory = {
  label: string
  data: Population[]
}

export type PopulationCategories = {
  message: string | null
  result: {
    boundaryYear: number
    data: PopulationCategory[]
  }
}

export const isPopulation = (arg: unknown): arg is Population => {
  const p = arg as Population

  return typeof p.year === 'number' && typeof p.value === 'number'
}

export const isPopulationCategory = (
  arg: unknown
): arg is PopulationCategory => {
  const pc = arg as PopulationCategory

  return typeof pc.label === 'string' && pc.data.every((p) => isPopulation(p))
}

export const isPopulationCategories = (
  args: unknown
): args is PopulationCategories => {
  const pcs = args as PopulationCategories

  return (
    (typeof pcs.message === 'string' || pcs.message === null) &&
    typeof pcs.result.boundaryYear === 'number' &&
    pcs.result.data.every((pc) => isPopulationCategory(pc))
  )
}
