//TODO:  add test cases for board controller using jest
const supertest = require('supertest')
const app = require('../../../app')
const  mongoose  = require('mongoose')
const { Board } = require('../../models/board.model')

const request = supertest(app)

//fetch,axios.get('/'),request.get('/')
//可以安装package jest-mongodb
//测试运行前开启虚拟数据库 lifecycle hook
beforeAll(async () => {
  console.log(global.__MONGO_URI__);
  await mongoose.connect(global.__MONGO_URI__, { useNewUrlParser: true, useUnifiedTopology: true })
})
//测试后关闭虚拟数据库 lifecycle hook
afterAll(async () => {
  await mongoose.connection.close()
})

describe('/v1/boards', () => {
  // describe('GET /', () => {})
  describe('POST /', () => {
    it('should save the board to DB if request is valid', async() => {
      //POST/v1/boards+boards payload +(token)
      //setup
      const payload= {
        title: 'have done',
        description: 'to do lists have done',
        lists: [ '6541ae6465869f2576537aa5'],
        members:  ['6541ae6465869f2576537aa5']
      }
      //execute
      const res= await request.post('/v1/boards').send(payload)
      //compare
      expect(res.statusCode).toBe(201)
      //确保存在了数据库中
      const board = await Board.findOne(payload).exec()
      //board will be "null" if not found
      expect(board).not.toBeNull()
    })

    it.each`
        property  | value
        ${'title'} | ${undefined}
        ${'description'} | ${undefined}
        ${'lists'} | ${mongoose.Types.ObjectId.createFromHexString('000000000000000000000001')}
        ${'members'} |${mongoose.Types.ObjectId.createFromHexString('000000000000000000000002')}
      `('should return 401 if $property is $value',async ({ property, value })=> {
      const invalidBoard = {
        title: 'have done',
        description: 'to do lists have done',
        lists:['6541ae6465869f2576537aa5'],
        members:['6541ae6465869f2576537aa5'],
        [property]: value
        //[property]: value 是 JavaScript 中的计算属性名。这种语法允许在对象字面量中使用变量作为属性名。通过传递不同的 property 和 value 的组合，可以测试对于不同的属性缺失或具有无效值时，函数的行为是否符合预期。
      }

      const res = await request.post('/v1/boards').send(invalidBoard)
    
      expect(res.statusCode).toBe(401)

      const board = await Board.findOne(invalidBoard).exec()
        
      expect(board).toBeNull()
    })
  })
})