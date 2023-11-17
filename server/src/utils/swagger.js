const swaggerJsDoc = require('swagger-jsdoc')

const options = {
  definition: {
    openapi:'3.0.3',
    info: {
      title: 'Trello-Clone API',
      version: '0.0.1',
      description: 'A SIMPLE DESCRIPTION',
      contact: {
        name: 'Kathy',
        email:'clmkathy@gmail.com',
      },
      servers: [
        {
          url: 'http://localhost:3001',
        },
      ],
    }
  },
  apis:['src/controller/*.js']//controller文件夹下面所有的js文件，直接放在controller里面，通过写注释的方法写swagger，代码太长 或者 单独建立一个文件
}

const specs = swaggerJsDoc(options)

module.exports = specs