const chai = require('chai')
const sinonChai = require('sinon-chai')
const sinon = require('sinon')

chai.use(sinonChai)
const expect = chai.expect

const { basicGet, basicPost } = require('./routes')

describe('basicGet', () => {
  describe('Accept header', () => {
    describe('is anything but application/json', () => {
      it('returns the correct html response', () => {
        const req = { header: (val) => 'foo' }

        const fakeSend = sinon.fake()
        const res = { send: fakeSend }

        const htmlResponse = '<p>Hello, World</p>'

        basicGet(req, res)
        expect(fakeSend).to.have.been.calledWith(htmlResponse)
      })
    })

    describe('is application/json', () => {
      it('returns the correct json response', () => {
        const req = { header: (val) => 'application/json' }

        const fakeJsonSend = sinon.fake()
        const res = { json: fakeJsonSend }

        const expected = sinon.match({ message: 'Good morning' })

        basicGet(req, res)
        expect(fakeJsonSend).to.have.been.calledWith(expected)
      })
    })
  })
})

describe('basicPost', () => {
  it('returns a 200', () => {
    const fakeSendStatus = sinon.fake()
    const res = { sendStatus: fakeSendStatus }

    basicPost(null, res)
    expect(fakeSendStatus).to.have.been.calledWith(200)
  })
})
