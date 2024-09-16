import type { Request, Response } from 'express'
import Order, { OrderDocument } from '../models/oder.model'
import { User } from '../models/user.model'

const createOrder = async (req: Request, res: Response) => {
  const { email, fullName, fullAddress, imageUrls, frameColor, user: userId } = req.body
  try {
    // Find the user by userId
    const user = await User.findById(userId)
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    const newOrder: OrderDocument = new Order({
      email,
      fullName,
      fullAddress,
      imageUrls,
      frameColor,
      user: user._id,
    })
    const savedOrder = await newOrder.save()
    res.status(201).json(savedOrder)
  } catch (error) {
    console.error('Failed to create order:', error)
    res.status(400).json({ error: 'Failed to create order' })
  }
}

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find()
    res.json(orders)
  } catch (error) {
    console.error('Error fetching orders:', error)
    res.status(400).json({ error: 'Failed to fetch orders' })
  }
}

const getOrdersByUseId = async (req: Request, res: Response) => {
  const userId = req.params.userId
  try {
    // Check if the user exists
    const user = await User.findById(userId)
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    const orders = await Order.find({ user: userId })
    res.json(orders)
  } catch (error) {
    console.error('Error fetching orders:', error)
    res.status(400).json({ error: 'Failed to fetch orders' })
  }
}

export { createOrder, getAllOrders, getOrdersByUseId }
