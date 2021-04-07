import { ConnectionFactory } from './connection.factory'
import env from '../../config/env'

const connectionFactory = ConnectionFactory.getInstance(env.mongoDBHost)

export { connectionFactory }
