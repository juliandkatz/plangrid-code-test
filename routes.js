const url = require('url')

function basicGet (req, res) {
  logRequest(req)

  if (req.header('Accept') === 'application/json') {
    res.json({ message: 'Good morning' })
  } else {
    res.send('<p>Hello, World</p>')
  }
}

function basicPost (req, res) {
  logRequest(req)
  res.sendStatus(200)
}

function logRequest (req) {
  if (process.env.DEBUG !== 'true') { return }

  const origUrl = url.format({
    protocol: req.protocol,
    host: req.get('host'),
    pathname: req.originalUrl
  })

  const d = new Date()
  console.log(`${d.toUTCString()} - DEBUG - ${origUrl}`)
}

module.exports = {
  basicGet,
  basicPost
}
