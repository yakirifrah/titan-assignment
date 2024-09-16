import mongoose, { Document, Schema } from 'mongoose'
export interface User {
  email: string
  fullName: string
  userId: string 
  createdAt: Date,
}
export interface UserDocument extends User, Document {}

const userSchema = new Schema({
  _id:{type:mongoose.Types.ObjectId},
  email: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  userId: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
})

export const User = mongoose.model<UserDocument>('User', userSchema)
