const express = require('express')
const app = express()
const port = 1516

app.get('/', (req, res) => {
  res.send({firstname:'henry'})
})

app.listen(port, () => {
  console.log(`Example app listening at http://math.seattleacademy:${port}`)
})