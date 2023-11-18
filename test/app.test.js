const request = require('supertest')
const {assert} = require('chai')
// ================================
const app = require('..')

const user = { name: 'Bill', age: 30 };

describe('Getting Tests', () => {
  it('should return Hi everyone', (done) => {
    request(app)
    .get('/')
    .expect(200)
    .expect('Hi everyone from server')
    .end(done)
  })
  it('should return Not found with 404 status', (done) => {
    request(app)
      .get('/error')
      .expect(404)
      .expect('Not found')
      .end(done)
  })
  it('should return Bill', (done) => {
    request(app)
      .get('/user')
      .expect((res) => {
        assert.deepEqual(res.body, user, 'Not equal')
      })
      .end(done)
  })
})
