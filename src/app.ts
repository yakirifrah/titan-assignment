import 'reflect-metadata'
import express, { Express } from 'express'
import cors from 'cors'
import { getCorsConfig } from './config/Cors'
import imageRoutes from './routes/image.routes'
import orderRoutes from './routes/order.routes'

const app: Express = express()

//------------------------------------//
//  Middleware                        //
//------------------------------------//
app.use(cors(getCorsConfig('localdev')))
app.use(express.json())

//------------------------------------//
//  Routes                            //
//------------------------------------//
app.use('/api', imageRoutes)
app.use('/api', orderRoutes)

export default app
