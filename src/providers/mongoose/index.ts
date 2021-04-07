import { ConnectionFactory } from './connection.factory'
import env from '../../shared/helpers/env'

const connectionFactory = ConnectionFactory.getInstance(env.mongoDBHost)

export { connectionFactory }
