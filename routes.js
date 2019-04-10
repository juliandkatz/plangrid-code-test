function basicGet (req, res) {
  logRequest('/')

  if (req.header('Accept') === 'application/json') {
    res.json({ message: 'Good morning' })
  } else {
    res.send('<p>Hello, World</p>')
  }
}

function basicPost (req, res) {
  logRequest('/')
  res.sendStatus(200)
}

function logRequest (path) {
  if (process.env.DEBUG !== 'true') { return }

  const d = new Date()
  console.log(`${d.toUTCString()} - DEBUG - path: ${path}`)
}

module.exports = {
  basicGet,
  basicPost
}
