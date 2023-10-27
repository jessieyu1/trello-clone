const listController = require('../../controllers/api/v1/listController')

const express = require('express')
const router = express.Router()

router.get('', listController.getAllLists)
router.get('/:id', listController.getList)
router.post('', listController.createList)
router.put('/:id', listController.updateList)
router.delete('/:id', listController.deleteList)

module.exports = router
