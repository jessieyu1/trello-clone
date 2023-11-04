const supertest = require('supertest')
const mongoose = require('mongoose')
const List = require('../../models/list.model')
const app = require('../../../app')

const request = supertest(app)

beforeAll(async () => {
  await List.deleteMany({})
  const list = new List({
    _id: new mongoose.Types.ObjectId('5c793331bc99fc1510b847b9'),
    title: 'Test List',
    position: 1,
    board: new mongoose.Types.ObjectId('5c793331bc99fc1510b846c8'),
  })
  await list.save()
})

afterAll(async () => {
  await List.deleteMany({})
  await mongoose.disconnect()
})

it('should return 201 if post is valid', async () => {
  const res = await request.post('/api/v1/lists').send({
    title: 'New List',
    position: 2,
    board: new mongoose.Types.ObjectId('5c793331bc99fc1510b846c9'),
  })
  expect(res.statusCode).toBe(201)
  expect(res.body.title).toBe('New List')
})

it('should return 200 if get all is valid', async () => {
  const res = await request.get('/api/v1/lists')
  expect(res.statusCode).toBe(200)
})

it('should return 200 if get by id is valid', async () => {
  const res = await request.get('/api/v1/lists/5c793331bc99fc1510b847b9')
  expect(res.statusCode).toBe(200)
  expect(res.body.title).toBe('Test List')
})

it('should return 200 if put is valid', async () => {
  const res = await request.put('/api/v1/lists/5c793331bc99fc1510b847b9').send({
    title: 'Updated List',
  })
  expect(res.body.title).toBe('Updated List')
  expect(res.statusCode).toBe(200)
})

it('should return 204 if delete is valid', async () => {
  const res = await request.delete('/api/v1/lists/5c793331bc99fc1510b847b9')
  expect(res.statusCode).toBe(200)
})
