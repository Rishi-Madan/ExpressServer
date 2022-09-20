const express = require('express')
const index = express()
const port = 8080

index.get('/', (req, res) => {
  res.send('Hello World!')
})

index.listen(port, () => {
  console.log(`Example index listening on port ${port}`)
})