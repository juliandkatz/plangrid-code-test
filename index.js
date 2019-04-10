const express = require('express')
const app = express()
const PORT = 3000
const { basicGet, basicPost } = require('./routes')

app.get('/', basicGet)
app.post('/', basicPost)

app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`))
