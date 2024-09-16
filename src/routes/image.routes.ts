import { Router } from 'express'
import { getRandomImages } from '../controllers/image.controllers'
const router = Router()

router.get('/image-list/:count', getRandomImages)

export default router
