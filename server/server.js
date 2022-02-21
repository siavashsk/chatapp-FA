const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
var answers = require('./constants')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.get('/message/:msg', (req, res) => {
  let msg = req.params.msg
  switch (msg) {
    case answers.HI[0]:
      setTimeout(() => {
        res.send({ message: answers.HI[1] })
      }, 500)
      break
    case answers.I_M_OK[0]:
      setTimeout(() => {
        res.send({ message: answers.I_M_OK[1] })
      }, 500)
      break
    case answers.I_M_NOT_OK[0]:
      setTimeout(() => {
        res.send({ message: answers.I_M_NOT_OK[1] })
      }, 500)
      break
    case answers.BYE[0]:
      setTimeout(() => {
        res.send({ message: answers.BYE[1] })
      }, 500)
      break
    default:
      setTimeout(() => {
        res.send({ message: answers.OTHER })
      }, 500)
  }
})

app.listen(3001)
