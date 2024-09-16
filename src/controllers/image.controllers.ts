import type { Request, Response } from 'express'
import { methodRequestType } from '../types/enums'
import { apiConnectProxy } from '../services/HttpClient.service'

const getRandomImages = async (req: Request, res: Response) => {
  const count = req.params.count as string
  if (!parseInt(count)) return res.status(204).send([])
  const pixKey = process.env.API_PIXEL_KEY
  const pixURL = 'https://pixabay.com/api/?image_type=photo&key=' + pixKey + '&per_page=' + count
  try {
    const response = await apiConnectProxy(pixURL, methodRequestType.GET, null, null)
    const pixList = response.hits.map((p: { pageURL: string }) => ({ pageUrl: p.pageURL }))
    res.send(pixList)
  } catch (error) {
    console.error('Error fetching images from: ' + pixURL, error)
    res.status(500).json({ error: 'Failed to fetch images' })
  }
}

export { getRandomImages }
