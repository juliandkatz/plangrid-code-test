const request = require('supertest')

const index = require('./index')

describe('/', () => {
  describe('GET', () => {
    describe('Accept header', () => {
      describe('is anything but application/json', () => {
        it('returns 200 with the correct html response', (done) => {
          request(index)
            .get('/')
            .expect(200, '<p>Hello, World</p>', done)
        })
      })

      describe('is application/json', () => {
        it('returns 200 with the correct json response', (done) => {
          request(index)
            .get('/')
            .set('Accept', 'application/json')
            .expect(200, { message: 'Good morning' }, done)
        })
      })
    })
  })

  describe('POST', () => {
    it('returns a 200', (done) => {
      request(index)
        .post('/')
        .expect(200, done)
    })
  })
})
