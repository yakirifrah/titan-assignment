import { Router } from 'express'
import { createOrder, getAllOrders, getOrdersByUseId } from '../controllers/order.controllers'
const router = Router()

router.post('/order', createOrder)
router.get('/order', getAllOrders)
router.get('/orders/:userId', getOrdersByUseId)
export default router
