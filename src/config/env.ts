
export default {
  port: process.env.PORT || 3000,
  mongoDBHost: process.env.MONGODB_HOST || 'mongodb://localhost:27017/medical_db?maxIdleTimeMS=0'
}
