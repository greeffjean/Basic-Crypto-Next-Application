// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({ entries: [
    {
      API: 'www.google.com',
      Description: 'This is cool stuff!',
      Auth: 'NA',
      HTTPS: 'true',
      Cors: 'cors',
      Link: 'www.test.com',
      Category: 'Animal',
    }
  ] })
}
