import express from 'express'
import morgan from 'morgan'

const app:express.Application = express()
const port:number = 3000

app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('The sedulous hyena ate the antelope!')
})

app.listen(port || 3001, function () {
  console.log(`server is listening on ${port}`)
})
