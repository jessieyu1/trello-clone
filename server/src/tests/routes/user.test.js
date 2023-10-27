const supertest = require('supertest')
const mongoose = require('mongoose')
const User = require('../../models/user.model')
const app = require('../../../app')

const request = supertest(app)

beforeAll(async () => {
  await User.deleteMany({})
  const user = new User({
    _id: new mongoose.Types.ObjectId('5c793331bc99fc1510b846c9'),
    email: 'test@example.com',
    password: 'password123',
    name: 'Test User',
  })
  await user.save()
})

afterAll(async () => {
  await User.deleteMany({})
  await mongoose.disconnect()
})

it('should return 201 if post is valid', async () => {
  const res = await request.post('/api/v1/users').send({
    email: 'newuser@example.com',
    password: 'password123',
    name: 'New User',
  })
  expect(res.body.email).toBe('newuser@example.com')
  expect(res.statusCode).toBe(201)
})

it('should return 200 if get all is valid', async () => {
  const res = await request.get('/api/v1/users')
  expect(res.statusCode).toBe(200)
})

it('should return 200 if get by id is valid', async () => {
  const res = await request.get('/api/v1/users/5c793331bc99fc1510b846c9')
  expect(res.statusCode).toBe(200)
  expect(res.body.email).toBe('test@example.com')
})
it('should return 200 if patch is valid', async () => {
  const res = await request.put('/api/v1/users/5c793331bc99fc1510b846c9').send({
    name: 'Updated User',
  })
  expect(res.body.name).toBe('Updated User')
  expect(res.statusCode).toBe(200)
})

it('should return 204 if delete is valid', async () => {
  const res = await request.delete('/api/v1/users/5c793331bc99fc1510b846c9')
  expect(res.statusCode).toBe(200)
})
