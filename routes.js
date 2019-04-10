function basicGet (req, res) {
  if (req.header('Accept') === 'application/json') {
    res.json({ message: 'Good morning' })
  } else {
    res.send('<p>Hello, World</p>')
  }
}

function basicPost (req, res) {
  res.sendStatus(200)
}

module.exports = {
  basicGet,
  basicPost
}
