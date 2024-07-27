// 使ってないが、apiの例

import type { NextApiRequest, NextApiResponse } from 'next'

export type DataProps = {
  users: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataProps>
) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/')
  const users = await response.json()
  res.status(200).json({ users })
}
