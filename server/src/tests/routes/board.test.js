const supertest = require('supertest')
const mongoose = require('mongoose')
const Board = require('../../models/board.model')
const app = require('../../../app')

const request = supertest(app)

beforeAll(async () => {
  await Board.deleteMany({})
  const board = new Board({
    _id: new mongoose.Types.ObjectId('5c793331bc99fc1510b847c9'),
    title: 'Test Board',
    description: 'This is a test board',
    owner: new mongoose.Types.ObjectId('5c793331bc99fc1510b846c9'),
    lists: [],
  })
  await board.save()
})

afterAll(async () => {
  await Board.deleteMany({})
  await mongoose.disconnect()
})

it('should return 201 if post is valid', async () => {
  const res = await request.post('/api/v1/boards').send({
    title: 'New Board',
    description: 'This is a new board',
    owner: '5c793331bc99fc1510b846c9',
  })
  expect(res.body.title).toBe('New Board')
  expect(res.statusCode).toBe(201)
})

it('should return 200 if get all is valid', async () => {
  const res = await request.get('/api/v1/boards')
  expect(res.statusCode).toBe(200)
})

it('should return 200 if get by id is valid', async () => {
  const res = await request.get('/api/v1/boards/5c793331bc99fc1510b847c9')
  expect(res.statusCode).toBe(200)
  expect(res.body.title).toBe('Test Board')
})

it('should return 200 if patch is valid', async () => {
  const res = await request
    .put('/api/v1/boards/5c793331bc99fc1510b847c9')
    .send({
      title: 'Updated Board',
    })
  expect(res.body.title).toBe('Updated Board')
  expect(res.statusCode).toBe(200)
})

it('should return 204 if delete is valid', async () => {
  const res = await request.delete('/api/v1/boards/5c793331bc99fc1510b847c9')
  expect(res.statusCode).toBe(200)
})
