import 'dotenv/config'
import env from './config/env'
import app from './http/app'

app.listen(env.port, () => console.log(`Server running on port ${env.port}`))
