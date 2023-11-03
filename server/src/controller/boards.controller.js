const axios = require('axios');

//TODO: Create a new board
async function createNewBoard() {
    try {
      const newBoard = {
        title: 'My New Board',
        description: 'Description of the new board',
      };
      const response=await axios.post('/api/boards',newBoard)
      return response.data
    } catch (error) {
    console.log("an error when creating a board",error);
  }}
//TODO: Get a list of all boards
async function getAllBoards(){
    try {
        const response=await axios.get('/api/boards')
        return response.data
    } catch (error) {
        console.log("Error",error);
        throw error
    }
}

//TODO: Other controller functions for getBoardById, updateBoard, and deleteBoard
//getBoardById
async function getBoardById(boardId) {
    try {
      const response = await axios.get(`/api/boards/${boardId}`);
      console.log("get all boards");
      return response.data;
    } catch (error) {
      console.error('Error getting board by ID:', error);
      throw error;
    }
  }
//updateBoard
async function updateBoard(boardId, updatedData) {
    try {
      const response = await axios.put(`/api/boards/${boardId}`, updatedData);
      return response.data;
    } catch (error) {
      console.error('Error updating board:', error);
      throw error;
    }
  }

//deleteBoard
async function deleteBoard(boardId){
    try {
        await axios.delete(`/api/boards/${boardId}`)
        console.log("board delete success");
    } catch (error) {
        console.error('Error deleting board:', error);
        throw error;
    }
}

module.exports={deleteBoard,updateBoard,getBoardById,getAllBoards,createNewBoard}
