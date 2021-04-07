import 'dotenv/config'
import env from './config/env'
import { connectionFactory } from './providers/mongoose'

connectionFactory.connect()
  .then(async () => {
    const app = (await import('./http/app')).default
    app.listen(env.port, () => console.log(`Server running on port ${env.port}`))
  })
  .catch(console.error)
