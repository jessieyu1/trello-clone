//TODO:  add test cases for board controller using jest
//create a new board test
const { createNewBoard } = require('../controller/boards.controller')
const axios = require('axios')
jest.mock('axios');
const mockAxios = axios;
const mockResponse = { data: {
    title: 'My New Board',
    description: 'Description of the new board',
} };

describe('createNewBoard', () => {
    it('creates a new board successfully', async () => {
        mockAxios.post.mockResolvedValue(mockResponse);
        const newBoard = await createNewBoard();
        expect(mockAxios.post).toHaveBeenCalledWith('/api/boards', {
            title: 'My New Board',
            description: 'Description of the new board',
        });
    });
});