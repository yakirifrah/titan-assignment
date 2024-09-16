import path from 'path'
import * as dotenv from 'dotenv'
dotenv.config({ path: path.join(__dirname, `./env/${process.env.NODE_ENV}.env`) })

import app from './app'
import { mongooseConnection } from './services/db'
;(async () => {
  const port = (process.env.PORT as string) || 5000
  try {
    mongooseConnection()
    app.listen(port, () => console.log(`Listening on port ${port}`))
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
})()
