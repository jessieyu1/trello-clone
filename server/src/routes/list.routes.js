const { Router } = require('express')

const { addList, getAllLists,getListById,updateListById,deleteListById } = require("../controller/lists.controller")


const listRouter = Router()

listRouter.get('/', getAllLists)
listRouter.post('/', addList)
listRouter.get('/:listId', getListById)
listRouter.put('/:listId', updateListById)
listRouter.delete('/:listId', deleteListById)


module.exports = listRouter