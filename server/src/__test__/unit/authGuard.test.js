const authGuard = require('../../middleware/authGuard')//测哪个把哪个导入
const { validateToken } = require('../../utils/jwt')//validateToken是一个导入进来的package属于依赖项，需要做一个mock
jest.mock('../../utils/jwt') //如果涉及这个路径的导入，请做一个模拟
//const validateToken=jest.fn()

// CONST 如果把req，res，next放在一个单独声明的文件中，那么每次测试之前导入都要跑一遍


describe('authentication guard middleware', () => {
  //lifehook function 
  beforeEach(() => {
    jest.resetAllMocks()
  })
  //顺着代码逻辑走
  it('should return 401 if authorization header is not define', () => {
    //set up
    const req = {header: jest.fn()}
    const res = {
      status: jest.fn(),
      json: jest.fn(),
    }
    res.status.mockReturnValue(res)

    const next = jest.fn() //创建mock的函数
    //execute
    authGuard(req, res, next)
    //compare
    expect(res.status).toHaveBeenCalledWith(401)
    expect(res.json).toHaveBeenCalledWith({
      error: 'missing authorization header',
    })
  })

  it('should return 401 if token type is not Bearer', () => {
    //setup
    const token = 'not_Bearer_token'
    const req = {
      header:jest.fn()
    }
    req.header.mockReturnValue(`${token}`)
    const res = {
      status: jest.fn(),
      json:jest.fn()
    }
    res.status.mockReturnValue(res)
    const next = jest.fn()
    authGuard(req, res, next)
    //compare
    expect(req.header).toHaveBeenCalledWith('Authorization')
    expect(res.status).toHaveBeenCalledWith(401)
    expect(res.json).toHaveBeenCalledWith({
      error: 'invalid token',
    })
  })
  
  it('should return 401 if token is null', () => {
    //setup
    const token = ''
    const req = {
      header:jest.fn()
    }
    req.header.mockReturnValue(`Bearer ${token}`)
    const res = {
      status: jest.fn(),
      json:jest.fn()
    }
    res.status.mockReturnValue(res)
    const next = jest.fn()
    authGuard(req, res, next)
    //compare
    expect(req.header).toHaveBeenCalledWith('Authorization')
    expect(res.status).toHaveBeenCalledWith(401)
    expect(res.json).toHaveBeenCalledWith({
      error: 'invalid token',
    })
  })

  it('should be return 401 if token is invalid', () => {
    const token = 'invalid_token'
    const req = {
      header:jest.fn()
    }
    req.header.mockReturnValue(`Bearer ${token}`)
    const res = {
      status: jest.fn(),
      json: jest.fn()
    }
    res.status.mockReturnValue(res)
    const next = jest.fn()
    validateToken.mockImplementation((token) => null)

    authGuard(req, res, next)

    expect(req.header).toHaveBeenCalledWith('Authorization')
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.json).toHaveBeenCalledWith({
      error: 'it is invalid token',
    });
    expect(next).not.toHaveBeenCalled();
  })

  //测试成功的👇
  it('should call next function when token is valid', () => {
    const token = 'any_token'
    const req = {
      header: jest.fn(),
    }
    req.header.mockReturnValue(`Bearer ${token}`)
    const res = {
      status: jest.fn(),
      json: jest.fn(),
    }
    res.status.mockReturnValue(res)

    const next = jest.fn()

    validateToken.mockImplementation((token) => {
      //if (token xxxx)
      return {
        id: 'fake_id',
      }
    })
    authGuard(req, res, next)

    expect(next).toHaveBeenCalled()
    expect(validateToken).toHaveBeenCalledWith(token)
  })
})
