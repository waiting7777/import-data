require('dotenv').config()
const client = require('scp2')

client.scp('dist/', {
  host: process.env.HOST,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  path: process.env.DIST
}, function(err) {
  console.log(err)
})