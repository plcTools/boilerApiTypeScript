import express from 'express'
import morgan from 'morgan'
require('dotenv').config()

const app:express.Application = express()
const port:any = process.env.PORT

app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('Welcome to plcTools')
})

app.listen(port || 3001, function () {
  console.log(`server is listening on ${port}`)
})
