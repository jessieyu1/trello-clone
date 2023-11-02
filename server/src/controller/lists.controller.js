const listService = require('../service/list.service');
const {listValidationSchema}= require('../models/list.model')

const addList = async (req, res) => {
  try { 
    const { title, cards, board } = req.body;
    const { error } = listValidationSchema.validate({ title, cards,board })
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    const list = await listService.createList(title, cards, board);
    res.status(201).json(list);
  } catch (error) {
    res.status(400).json({ error: error.details[0].message });
  }
}

const getAllLists = async (req, res) => {
  try { 
    const lists = await listService.getAllLists();
    res.json(lists);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: 'Internal Server Error' });
  }
}

const getListById = async (req, res) => {
  try {
    const { listId } = req.params;
    const list = await listService.getListById(listId);
    if (!list) {
      res.status(404).json({ error: 'List not found' });
      return;
    }
    res.json(list);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const updateListById = async (req, res) => { 
  try{
    const { listId } = req.params;
    const { title, cards, board } = req.body;
    const { error } = listValidationSchema.validate({ title, cards,board })
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    const list = await listService.updateListById(listId, title, cards, board);
    if (!list) {
      res.status(404).json({ error: 'List not found' });
      return;
    }
    res.json(list);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

const deleteListById = async (req, res) => {
  try{
    const { listId } = req.params;
    const list = await listService.deleteListById(listId);
    if (!list) {
      res.status(404).json({ error: 'List not found' });
      return;
    }
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  addList,
  getAllLists,
  getListById,
  updateListById,
  deleteListById,
};
