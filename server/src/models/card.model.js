//TODO: create a card model
const { Schema, model } = require('mongoose')

const cardSchema = new Schema({
  title: {
    type: String
  },
  description: String,
  list: {
    type: Schema.Types.ObjectId,
    ref: 'List',
  },
  comments: [{
    text: String,
    // 其他字段（例如作者、时间戳等）可以根据需要添加
  }],
  attachments: [{
    url: String,
    // 其他字段（例如名称、类型等）可以根据需要添加
  }],
});

const Card = model('Card', cardSchema)

module.exports = Card