const supertest = require('supertest')
const mongoose = require('mongoose')
const Card = require('../../models/card.model')
const app = require('../../../app')

const request = supertest(app)

beforeAll(async () => {
  await Card.deleteMany({})
  const card = new Card({
    _id: new mongoose.Types.ObjectId('5c793331bc99fc1510b848c9'),
    title: 'Test Card',
    description: 'This is a test card',
    list: new mongoose.Types.ObjectId('5c793331bc99fc1510b848c8'),
  })
  await card.save()
})

afterAll(async () => {
  await Card.deleteMany({})
  await mongoose.disconnect()
})

it('should return 201 if post is valid', async () => {
  const res = await request.post('/api/v1/cards').send({
    title: 'New Card',
    description: 'This is a new card',
    list: new mongoose.Types.ObjectId('5c793331bc99fc1510b848c8'),
  })
  expect(res.body.title).toBe('New Card')
  expect(res.statusCode).toBe(201)
})

it('should return 200 if get all is valid', async () => {
  const res = await request.get('/api/v1/cards')
  expect(res.statusCode).toBe(200)
})

it('should return 200 if get by id is valid', async () => {
  const res = await request.get('/api/v1/cards/5c793331bc99fc1510b848c9')
  expect(res.statusCode).toBe(200)
  expect(res.body.title).toBe('Test Card')
})

it('should return 200 if patch is valid', async () => {
  const res = await request.put('/api/v1/cards/5c793331bc99fc1510b848c9').send({
    title: 'Updated Card',
  })
  expect(res.body.title).toBe('Updated Card')
  expect(res.statusCode).toBe(200)
})

it('should return 204 if delete is valid', async () => {
  const res = await request.delete('/api/v1/cards/5c793331bc99fc1510b848c9')
  expect(res.statusCode).toBe(200)
})
