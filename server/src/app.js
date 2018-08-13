const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

let PORT = process.env.PORT || 8081

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: 'Hello world'
  })
})

app.listen(PORT, () => {
  console.log(`listen port http://localhost:${PORT}`)
})
