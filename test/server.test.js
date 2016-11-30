import expect from 'expect'
import request from 'supertest'

import app from '../src/server'

describe('GET /', () => {
  it('should return html file', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect(res => {
        expect(/JSX event examples/.test(res.text))
          .toEqual(true)
      })
      .end(done)
  })
})
