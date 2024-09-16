import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  userId: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
})

export const User = mongoose.model('User', userSchema)
