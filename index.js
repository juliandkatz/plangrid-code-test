const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  if (req.accepts('application/json')) {
    res.json({ message: 'Good morning' })
  } else {
    res.send('<p>Hello, World</p>')
  }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))