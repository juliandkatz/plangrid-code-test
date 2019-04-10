const express = require('express')
const app = express()
const PORT = 3000
const { basicGet, basicPost } = require('./routes')

app.get('/', basicGet)
app.post('/', basicPost)

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => console.log(`App running on port ${PORT}`))
}

module.exports = app
