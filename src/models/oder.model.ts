import mongoose, { Document, Schema } from 'mongoose'

export interface Order {
  email: string
  fullName: string
  fullAddress: string
  imageUrls: string[]
  frameColor: string
  user: string // Assuming User is userId
}

export interface OrderDocument extends Order, Document {}

const orderSchema = new Schema(
  {
    email: { type: String, required: true },
    fullName: { type: String, required: true },
    fullAddress: { type: String, required: true },
    imageUrls: { type: [String], required: true },
    frameColor: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
)

const Order = mongoose.model<OrderDocument>('Order', orderSchema)

export default Order
